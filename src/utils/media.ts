/**
 * Media helpers for EmDash image fields.
 *
 * Seeded media fields have the shape `{ $media: { url, alt, filename } }`;
 * resolved media may be `{ src, alt }` or a plain URL string. These helpers
 * accept all three forms.
 */

interface MediaObject {
	$media?: { url?: string; alt?: string; filename?: string };
	src?: string;
	url?: string;
	alt?: string;
	meta?: { storageKey?: string };
}

const MEDIA_FILE_BASE = "/_emdash/api/media/file/";

export function resolveImageUrl(image: unknown): string | undefined {
	if (!image) return undefined;
	if (typeof image === "string") return image || undefined;
	const media = image as MediaObject;
	const direct = media.$media?.url || media.src || media.url;
	if (direct) return direct;
	// 本地 seed 生成的媒体字段只有 provider/id/meta.storageKey，
	// 文件通过 media file 路由按 storageKey 提供。
	const storageKey = media.meta?.storageKey;
	if (storageKey) return MEDIA_FILE_BASE + storageKey;
	return undefined;
}

export function resolveImageAlt(image: unknown): string | undefined {
	if (!image || typeof image === "string") return undefined;
	const media = image as MediaObject;
	return media.$media?.alt || media.alt || undefined;
}
