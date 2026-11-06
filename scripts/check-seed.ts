/**
 * Warn when seed/seed.json.gz is older than production.
 *
 * Runs automatically before `pnpm dev` (package.json `predev`). It compares a
 * cheap fingerprint — entry counts, newest `updated_at`, site title/tagline,
 * menu item count — and never blocks the dev server: any failure (offline,
 * wrangler not logged in, timeout) is silent. Set SKIP_SEED_CHECK=1 to skip.
 *
 *   pnpm check:seed
 */

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SEED_JSON = path.join(ROOT, "seed/seed.json");
const SEED_GZ = path.join(ROOT, "seed/seed.json.gz");
const WRANGLER = path.join(ROOT, "node_modules/wrangler/bin/wrangler.js");
const TIMEOUT_MS = 5000;
const CACHE = path.join(ROOT, ".wrangler/seed-check.json");
const CACHE_TTL_MS = 10 * 60 * 1000;

type Row = Record<string, any>;

const QUERY = `SELECT json_object(
  'posts', (SELECT json_object('n', COUNT(*), 'newest', MAX(updated_at)) FROM ec_posts WHERE deleted_at IS NULL),
  'pages', (SELECT json_object('n', COUNT(*), 'newest', MAX(updated_at)) FROM ec_pages WHERE deleted_at IS NULL),
  'menuItems', (SELECT COUNT(*) FROM _emdash_menu_items),
  'title', (SELECT value FROM options WHERE name = 'site:title'),
  'tagline', (SELECT value FROM options WHERE name = 'site:tagline')
) AS fingerprint;`;

/** Changes whenever the seed file is rewritten, so the cache cannot go stale. */
function seedStamp(): number {
	for (const file of [SEED_JSON, SEED_GZ]) {
		try {
			const stat = fs.statSync(file);
			return stat.mtimeMs + stat.size;
		} catch {
			// Try the gzipped copy next.
		}
	}
	return 0;
}

function readSeed(): Row | null {
	try {
		if (fs.existsSync(SEED_JSON)) return JSON.parse(fs.readFileSync(SEED_JSON, "utf8"));
		if (fs.existsSync(SEED_GZ)) {
			return JSON.parse(zlib.gunzipSync(fs.readFileSync(SEED_GZ)).toString("utf8"));
		}
	} catch {
		// A broken seed is a different problem; stay quiet here.
	}
	return null;
}

function databaseName(): string {
	const config = fs.readFileSync(path.join(ROOT, "wrangler.jsonc"), "utf8");
	return config.match(/"database_name"\s*:\s*"([^"]+)"/)?.[1] ?? "blog";
}

function remoteFingerprint(): Row | null {
	try {
		const out = execFileSync(
			process.execPath,
			[
				WRANGLER,
				"d1",
				"execute",
				databaseName(),
				"--remote",
				"--json",
				"--command",
				QUERY,
			],
			{ cwd: ROOT, encoding: "utf8", timeout: TIMEOUT_MS, stdio: ["ignore", "pipe", "ignore"] },
		);
		const start = out.indexOf("[");
		if (start === -1) return null;
		const parsed = JSON.parse(out.slice(start));
		const result = (Array.isArray(parsed) ? parsed[0] : parsed)?.results?.[0]?.fingerprint;
		return result ? JSON.parse(result) : null;
	} catch {
		return null;
	}
}

function newest(entries: Row[]): number {
	let value = 0;
	for (const entry of entries) {
		const time = Date.parse(String(entry.updatedAt ?? entry.publishedAt ?? ""));
		if (Number.isFinite(time) && time > value) value = time;
	}
	return value;
}

function settingValue(raw: unknown): string {
	if (typeof raw !== "string") return "";
	try {
		return String(JSON.parse(raw));
	} catch {
		return raw;
	}
}

if (process.env.SKIP_SEED_CHECK === "1") process.exit(0);

// A clean result is cached briefly so repeated `pnpm dev` starts stay fast.
// Drift is never cached: it is re-checked on every start until the seed is synced.
const stamp = seedStamp();
try {
	const cached = JSON.parse(fs.readFileSync(CACHE, "utf8"));
	if (cached.drift === false && cached.stamp === stamp && Date.now() - Date.parse(cached.at) < CACHE_TTL_MS) {
		process.exit(0);
	}
} catch {
	// No cache yet.
}

const seed = readSeed();
if (!seed) process.exit(0);

const remote = remoteFingerprint();
if (!remote) process.exit(0);

const localPosts = (seed.content?.posts ?? []) as Row[];
const localPages = (seed.content?.pages ?? []) as Row[];
const localMenuItems = ((seed.menus ?? []) as Row[]).reduce(
	(sum, menu) => sum + (menu.items?.length ?? 0),
	0,
);

const problems: string[] = [];
if (localPosts.length !== remote.posts.n) {
	problems.push(`posts: seed ${localPosts.length}, production ${remote.posts.n}`);
}
if (localPages.length !== remote.pages.n) {
	problems.push(`pages: seed ${localPages.length}, production ${remote.pages.n}`);
}
if (localMenuItems !== remote.menuItems) {
	problems.push(`menu items: seed ${localMenuItems}, production ${remote.menuItems}`);
}
// Seed dates keep second precision, remote ones have milliseconds.
const seconds = (time: number) => Math.floor(time / 1000);
if (seconds(newest(localPosts)) < seconds(Date.parse(remote.posts.newest ?? ""))) {
	problems.push(`a post changed after the last sync (${remote.posts.newest})`);
}
if (seconds(newest(localPages)) < seconds(Date.parse(remote.pages.newest ?? ""))) {
	problems.push(`a page changed after the last sync (${remote.pages.newest})`);
}
const localTitle = String(seed.settings?.title ?? "");
const localTagline = String(seed.settings?.tagline ?? "");
if (localTitle !== settingValue(remote.title) || localTagline !== settingValue(remote.tagline)) {
	problems.push("site title or tagline changed");
}

try {
	fs.mkdirSync(path.dirname(CACHE), { recursive: true });
	fs.writeFileSync(
		CACHE,
		JSON.stringify({ at: new Date().toISOString(), stamp, drift: problems.length > 0 }),
	);
} catch {
	// The cache is an optimization; failing to write it is harmless.
}

if (problems.length > 0) {
	console.warn("\n⚠  seed/seed.json.gz is behind production D1:");
	for (const problem of problems) console.warn(`   - ${problem}`);
	console.warn("   run `pnpm seed:sync` to refresh the seed and the local database\n");
}
