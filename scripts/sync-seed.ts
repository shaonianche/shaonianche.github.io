/**
 * Sync the repo seed and the local dev database from the production D1.
 *
 * Production is the source of truth for content: edits happen in the admin UI
 * and only ever land in D1. The repo's seed/seed.json.gz is a snapshot used to
 * bootstrap local and orb environments, and .wrangler/state holds the local
 * D1/R2 that `pnpm dev` talks to. Both drift as soon as content changes, so run
 * this before starting work on content-related code:
 *
 *   pnpm seed:sync
 *
 * What it does, all read-only against production:
 *   1. Reads content tables from the remote D1 through wrangler.
 *   2. Rewrites seed/seed.json (and seed.json.gz) in the seed's own format.
 *   3. Replaces the content tables in the local miniflare D1.
 *   4. Downloads media that local R2 does not have yet and imports it.
 *
 * Schema is not written into the seed: collections and fields come from code
 * and migrations. The local D1 still receives production's collections/fields
 * so the copied rows match, and the script warns when production's schema
 * differs from the seed.
 */

import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SEED_JSON = path.join(ROOT, "seed/seed.json");
const SEED_GZ = path.join(ROOT, "seed/seed.json.gz");
const WRANGLER = path.join(ROOT, "node_modules/wrangler/bin/wrangler.js");
const MANIFEST = path.join(ROOT, ".wrangler/seed-sync-media.json");

const CONTENT_TABLES = [
	"ec_posts",
	"ec_pages",
	"taxonomies",
	"content_taxonomies",
	"_emdash_menus",
	"_emdash_menu_items",
	"_emdash_widget_areas",
	"_emdash_widgets",
	"_emdash_bylines",
	"_emdash_collections",
	"_emdash_fields",
	"revisions",
	"media",
];

const SYSTEM_COLUMNS = new Set([
	"id",
	"slug",
	"status",
	"author_id",
	"primary_byline_id",
	"created_at",
	"updated_at",
	"published_at",
	"scheduled_at",
	"deleted_at",
	"version",
	"live_revision_id",
	"draft_revision_id",
	"locale",
	"translation_group",
]);

type Row = Record<string, any>;

function log(message: string) {
	console.log(message);
}

function readDatabaseName(): string {
	const config = fs.readFileSync(path.join(ROOT, "wrangler.jsonc"), "utf8");
	const match = config.match(/"database_name"\s*:\s*"([^"]+)"/);
	if (!match) throw new Error("Cannot find database_name in wrangler.jsonc");
	return match[1];
}

function runWrangler(args: string[], capture = true): string {
	const result = execFileSync(process.execPath, [WRANGLER, ...args], {
		cwd: ROOT,
		encoding: "utf8",
		stdio: capture ? ["ignore", "pipe", "pipe"] : "inherit",
		maxBuffer: 256 * 1024 * 1024,
	});
	return capture ? result : "";
}

function queryRemote(database: string, sql: string): Row[] {
	const out = runWrangler([
		"d1",
		"execute",
		database,
		"--remote",
		"--json",
		"--command",
		sql,
	]);
	const start = out.indexOf("[");
	if (start === -1) throw new Error(`Unexpected wrangler output: ${out.slice(0, 200)}`);
	const parsed = JSON.parse(out.slice(start));
	const first = Array.isArray(parsed) ? parsed[0] : parsed;
	if (!first?.success) throw new Error(`D1 query failed: ${sql.slice(0, 120)}`);
	return first.results ?? [];
}

function table(name: string, orderBy: string): Row[] {
	return queryRemote(database, `SELECT * FROM ${name} ORDER BY ${orderBy};`);
}

function parseJson<T>(value: unknown, fallback: T): T {
	if (value == null || value === "") return fallback;
	if (typeof value !== "string") return value as T;
	try {
		return JSON.parse(value) as T;
	} catch {
		return fallback;
	}
}

/** Production stores UTC ISO strings; the seed has always used +08:00. */
function seedDate(value: unknown): string | null {
	if (!value) return null;
	const text = String(value).replace("Z", "+00:00");
	const date = new Date(text);
	if (Number.isNaN(date.getTime())) return String(value);
	const shanghai = new Date(date.getTime() + 8 * 60 * 60 * 1000);
	return `${shanghai.toISOString().slice(0, 19)}+08:00`;
}

function findLocalDatabase(): string | null {
	const dir = path.join(ROOT, ".wrangler/state/v3/d1/miniflare-D1DatabaseObject");
	if (!fs.existsSync(dir)) return null;
	const files = fs
		.readdirSync(dir)
		.filter((name) => name.endsWith(".sqlite") && !name.startsWith("metadata"))
		.map((name) => path.join(dir, name));
	return files[0] ?? null;
}

function mediaIndex(mediaRows: Row[]) {
	const byKey = new Map<string, Row>();
	const byId = new Map<string, Row>();
	for (const row of mediaRows) {
		byKey.set(String(row.storage_key), row);
		byId.set(String(row.id), row);
	}
	return { byKey, byId };
}

type MediaIndex = ReturnType<typeof mediaIndex>;

function mediaFromUrl(url: string, alt: string, refId: string | undefined, index: MediaIndex, baseUrl: string) {
	if (!url.startsWith("/_emdash/api/media/file/")) {
		return { url };
	}
	const key = decodeURIComponent(url.slice("/_emdash/api/media/file/".length));
	const row = (refId ? index.byId.get(refId) : undefined) ?? index.byKey.get(key);
	const filename = row?.filename ?? key.split("/").pop() ?? key;
	return {
		$media: {
			url: `${baseUrl}${url}`,
			alt,
			filename,
		},
	};
}

function convertValue(value: unknown, index: MediaIndex, baseUrl: string): unknown {
	if (Array.isArray(value)) return value.map((item) => convertValue(item, index, baseUrl));
	if (!value || typeof value !== "object") return value;
	const node = value as Record<string, any>;
	if (node._type === "image" && node.asset && typeof node.asset === "object") {
		const asset = node.asset as Record<string, any>;
		node.asset = mediaFromUrl(
			String(asset.url ?? ""),
			String(node.alt ?? asset.alt ?? ""),
			typeof asset._ref === "string" && asset._ref ? asset._ref : undefined,
			index,
			baseUrl,
		);
	}
	for (const key of Object.keys(node)) {
		if (key === "asset") continue;
		node[key] = convertValue(node[key], index, baseUrl);
	}
	return node;
}

function entryData(row: Row, index: MediaIndex, baseUrl: string): Row {
	const data: Row = {};
	for (const [column, raw] of Object.entries(row)) {
		if (SYSTEM_COLUMNS.has(column)) continue;
		if (column === "featured_image") {
			const image = parseJson<Record<string, any> | null>(raw, null);
			data[column] = image
				? mediaFromUrl(String(image.src ?? image.url ?? ""), String(image.alt ?? ""), undefined, index, baseUrl)
				: null;
		} else if (column === "content") {
			data[column] = convertValue(parseJson<unknown[]>(raw, []), index, baseUrl);
		} else if (column === "excerpt") {
			data[column] = raw ?? "";
		} else {
			data[column] = raw;
		}
	}
	return data;
}

function readSeed(): Row {
	if (fs.existsSync(SEED_JSON)) {
		return JSON.parse(fs.readFileSync(SEED_JSON, "utf8"));
	}
	if (fs.existsSync(SEED_GZ)) {
		return JSON.parse(zlib.gunzipSync(fs.readFileSync(SEED_GZ)).toString("utf8"));
	}
	throw new Error("seed/seed.json(.gz) not found");
}

function writeSeed(seed: Row) {
	const text = `${JSON.stringify(seed, null, 2)}\n`;
	fs.writeFileSync(SEED_JSON, text, "utf8");
	// mtime 0 keeps the gzip byte-identical between runs with the same content.
	const gz = zlib.gzipSync(Buffer.from(text, "utf8"), { level: 9, mtime: 0 });
	fs.writeFileSync(SEED_GZ, gz);
	return { text, gz };
}

function replaceRows(db: DatabaseSync, name: string, rows: Row[]) {
	const columns = db.prepare(`PRAGMA table_info(${name})`).all() as Row[];
	const names = columns.map((column) => String(column.name));
	db.exec(`DELETE FROM ${name}`);
	if (rows.length === 0) return;
	const quoted = names.map((column) => `"${column}"`).join(",");
	const insert = db.prepare(
		`INSERT INTO ${name} (${quoted}) VALUES (${names.map(() => "?").join(",")})`,
	);
	for (const row of rows) {
		insert.run(...names.map((column) => row[column] ?? null));
	}
}

function mimeFor(key: string, row: Row | undefined): string {
	if (row?.mime_type) return String(row.mime_type);
	if (key.endsWith(".png")) return "image/png";
	if (key.endsWith(".webp")) return "image/webp";
	if (key.endsWith(".gif")) return "image/gif";
	return "image/jpeg";
}

function collectMediaKeys(seed: Row): string[] {
	const keys = new Set<string>();
	const visit = (value: unknown) => {
		if (Array.isArray(value)) {
			value.forEach(visit);
			return;
		}
		if (!value || typeof value !== "object") return;
		const node = value as Record<string, any>;
		const url = node.$media?.url;
		if (typeof url === "string" && url.includes("/_emdash/api/media/file/")) {
			keys.add(decodeURIComponent(url.split("/_emdash/api/media/file/")[1]));
		}
		Object.values(node).forEach(visit);
	};
	visit(seed.content);
	return [...keys];
}

async function importMedia(seed: Row, mediaRows: Row[], baseUrl: string) {
	const keys = collectMediaKeys(seed);
	const stored = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};
	// Older manifests were a plain list; treat those keys as unknown size so the
	// first run after this change re-checks them.
	const manifest: Record<string, number> = Array.isArray(stored)
		? Object.fromEntries(stored.map((key: string) => [key, -1]))
		: stored;

	const byKey = new Map(mediaRows.map((row) => [String(row.storage_key), row]));
	const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "seed-sync-"));
	let imported = 0;
	let current = 0;
	for (const key of keys) {
		const url = `${baseUrl}/_emdash/api/media/file/${key}`;
		const head = await fetch(url, { method: "HEAD" });
		if (!head.ok) {
			log(`media: ${head.status} ${key} (skipped)`);
			continue;
		}
		const size = Number(head.headers.get("content-length") ?? 0);
		if (manifest[key] === size) {
			current += 1;
			continue;
		}
		const response = await fetch(url);
		if (!response.ok) {
			log(`media: ${response.status} ${key} (skipped)`);
			continue;
		}
		const file = path.join(tmp, createHash("sha1").update(key).digest("hex"));
		fs.writeFileSync(file, Buffer.from(await response.arrayBuffer()));
		runWrangler(
			[
				"r2",
				"object",
				"put",
				`blog/${key}`,
				"--file",
				file,
				"--local",
				"--content-type",
				mimeFor(key, byKey.get(key)),
			],
		);
		manifest[key] = size;
		imported += 1;
	}
	fs.rmSync(tmp, { recursive: true, force: true });
	fs.mkdirSync(path.dirname(MANIFEST), { recursive: true });
	fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
	log(`media: ${current} unchanged, ${imported} imported`);
}

const database = readDatabaseName();
const localDb = findLocalDatabase();

log(`production D1: ${database}`);
log("reading remote tables…");

const remote = {
	posts: table("ec_posts", "published_at, slug"),
	pages: table("ec_pages", "published_at, slug"),
	taxonomies: table("taxonomies", "name, sort_order, slug"),
	contentTaxonomies: table("content_taxonomies", "created_at"),
	menus: table("_emdash_menus", "name"),
	menuItems: table("_emdash_menu_items", "sort_order"),
	widgetAreas: table("_emdash_widget_areas", "name"),
	widgets: table("_emdash_widgets", "sort_order"),
	bylines: table("_emdash_bylines", "slug"),
	collections: table("_emdash_collections", "slug"),
	fields: table("_emdash_fields", "collection_id, sort_order"),
	revisions: table("revisions", "created_at"),
	media: table("media", "storage_key"),
	options: table("options", "name"),
};

const seed = readSeed();
const options = new Map<string, string>(
	remote.options.map((row) => [String(row.name), parseJson<string>(row.value, String(row.value ?? ""))]),
);
const baseUrl = (options.get("emdash:site_url") ?? "https://blog.duanfei.org").replace(/\/$/, "");
const media = mediaIndex(remote.media);

log("merging into seed…");

seed.settings = {
	...(seed.settings ?? {}),
	title: options.get("site:title") ?? seed.settings?.title ?? "",
	tagline: options.get("site:tagline") ?? seed.settings?.tagline ?? "",
};

const taxonomyById = new Map(remote.taxonomies.map((row) => [String(row.id), row]));
const assignments = new Map<string, Record<string, string[]>>();
for (const link of remote.contentTaxonomies) {
	if (link.deleted_at || link.status === "draft") continue;
	const taxonomy = taxonomyById.get(String(link.taxonomy_id));
	if (!taxonomy) continue;
	const slug = String(link.entry_id);
	const byName = assignments.get(slug) ?? {};
	const name = String(taxonomy.name);
	byName[name] = [...(byName[name] ?? []), String(taxonomy.slug)].sort();
	assignments.set(slug, byName);
}

seed.content.posts = remote.posts
	.filter((row) => !row.deleted_at)
	.map((row) => ({
		id: row.id,
		slug: row.slug,
		status: row.status,
		data: entryData(row, media, baseUrl),
		publishedAt: seedDate(row.published_at),
		createdAt: seedDate(row.created_at),
		updatedAt: seedDate(row.updated_at),
		taxonomies: assignments.get(String(row.id)) ?? {},
	}));

seed.content.pages = remote.pages
	.filter((row) => !row.deleted_at)
	.map((row) => ({
		id: row.id,
		slug: row.slug,
		status: row.status,
		data: entryData(row, media, baseUrl),
		publishedAt: seedDate(row.published_at),
		createdAt: seedDate(row.created_at),
		updatedAt: seedDate(row.updated_at),
	}));

seed.taxonomies = (seed.taxonomies ?? []).map((definition: Row) => ({
	...definition,
	terms: remote.taxonomies
		.filter((row) => row.name === definition.name)
		.map((row) => ({ slug: row.slug, label: row.label })),
}));

const menuItems = remote.menuItems;
seed.menus = remote.menus.map((menu) => ({
	name: menu.name,
	label: menu.label,
	items: menuItems
		.filter((item) => item.menu_id === menu.id)
		.sort((a, b) => Number(a.sort_order) - Number(b.sort_order))
		.map((item) => ({
			type: item.type,
			label: item.label,
			...(item.custom_url ? { url: item.custom_url } : {}),
			...(item.target ? { target: item.target } : {}),
			...(item.title_attr ? { title: item.title_attr } : {}),
		})),
}));

seed.widgetAreas = remote.widgetAreas.map((area) => ({
	name: area.name,
	label: area.label,
	description: area.description ?? "",
	widgets: remote.widgets
		.filter((widget) => widget.area_id === area.id)
		.sort((a, b) => Number(a.sort_order) - Number(b.sort_order))
		.map((widget) => ({
			type: widget.type,
			title: widget.title,
			...(widget.component_id ? { componentId: widget.component_id } : {}),
			...(widget.menu_name ? { menuName: widget.menu_name } : {}),
			...(widget.content ? { content: parseJson(widget.content, []) } : {}),
			...(widget.component_props ? { settings: parseJson(widget.component_props, {}) } : {}),
		})),
}));

seed.bylines = remote.bylines.map((byline) => ({
	id: byline.id,
	slug: byline.slug,
	displayName: byline.display_name,
	...(byline.bio ? { bio: byline.bio } : {}),
	...(byline.website_url ? { websiteUrl: byline.website_url } : {}),
	...(byline.is_guest ? { isGuest: true } : {}),
}));

// Schema comes from code, not content. Flag drift so it can be migrated by hand.
const seedCollections = new Set((seed.collections ?? []).map((collection: Row) => collection.slug));
const remoteCollections = new Set(remote.collections.map((row) => String(row.slug)));
const schemaDiff = [
	...Array.from(seedCollections).filter((slug) => !remoteCollections.has(String(slug))).map((slug) => `only in seed: ${slug}`),
	...Array.from(remoteCollections).filter((slug) => !seedCollections.has(String(slug))).map((slug) => `only in production: ${slug}`),
];
const seedFieldCount = (seed.collections ?? []).reduce((sum: number, collection: Row) => sum + (collection.fields?.length ?? 0), 0);
if (schemaDiff.length > 0 || seedFieldCount !== remote.fields.length) {
	log(
		`warning: schema differs from production (${schemaDiff.join(", ") || `${seedFieldCount} seed fields vs ${remote.fields.length} remote`}); collections/fields are not synced`,
	);
}

const localRows: Record<string, Row[]> = {
	ec_posts: remote.posts,
	ec_pages: remote.pages,
	taxonomies: remote.taxonomies,
	content_taxonomies: remote.contentTaxonomies,
	_emdash_menus: remote.menus,
	_emdash_menu_items: remote.menuItems,
	_emdash_widget_areas: remote.widgetAreas,
	_emdash_widgets: remote.widgets,
	_emdash_bylines: remote.bylines,
	_emdash_collections: remote.collections,
	_emdash_fields: remote.fields,
	revisions: remote.revisions,
	media: remote.media,
};

const { text, gz } = writeSeed(seed);

if (localDb) {
	log(`local D1: ${path.relative(ROOT, localDb)}`);
	const db = new DatabaseSync(localDb);
	db.exec("PRAGMA foreign_keys=OFF");
	// EmDash installs media-usage capture triggers on content tables. They raise
	// "media usage capture inactive" for writes made outside the runtime, so
	// drop them for the swap and recreate them verbatim afterwards.
	const captureTriggers = db
		.prepare("SELECT name, sql FROM sqlite_master WHERE type='trigger' AND name LIKE 'emdash_mu_%'")
		.all() as Row[];
	for (const trigger of captureTriggers) db.exec(`DROP TRIGGER "${trigger.name}"`);
	try {
		db.exec("BEGIN");
		for (const name of CONTENT_TABLES) {
			replaceRows(db, name, localRows[name] ?? []);
		}
		for (const name of ["site:title", "site:tagline"]) {
			if (options.has(name)) {
				db.prepare("UPDATE options SET value = ? WHERE name = ?").run(JSON.stringify(options.get(name)), name);
			}
		}
		db.exec("COMMIT");
	} catch (error) {
		db.exec("ROLLBACK");
		throw error;
	} finally {
		for (const trigger of captureTriggers) {
			if (trigger.sql) db.exec(String(trigger.sql));
		}
		db.close();
	}
	await importMedia(seed, remote.media, baseUrl);
} else {
	log("local D1 not found: run `pnpm dev` once, then re-run this command");
}

log(
	`done: ${seed.content.posts.length} posts, ${seed.content.pages.length} pages, ` +
		`${seed.menus[0]?.items.length ?? 0} menu items, ${seed.widgetAreas.length} widget areas, ` +
		`seed ${(gz.length / 1024).toFixed(0)} KiB (${(text.length / 1024).toFixed(0)} KiB raw)`,
);
log("restart the dev server if it was running, then reload the page");
