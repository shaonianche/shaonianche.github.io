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

/**
 * 经 Astro 图片端点（/_image）的变换 URL。EmDash 在 Cloudflare 上接管该端点：
 * 内部媒体键直接从 R2 读字节并用 IMAGES 绑定缩放（默认输出 webp，q85）。
 * 非本站的图片 URL 不做变换，原样返回。
 */
export function transformImageUrl(image: unknown, width: number): string | undefined {
	const url = resolveImageUrl(image);
	if (!url) return undefined;
	if (!url.startsWith(MEDIA_FILE_BASE)) return url;
	return `/_image?href=${encodeURIComponent(url)}&w=${width}`;
}

/** 与 transformImageUrl 配套的 srcset；非站内媒体返回 undefined（模板应省略该属性）。 */
export function transformSrcset(image: unknown, widths: number[]): string | undefined {
	const url = resolveImageUrl(image);
	if (!url || !url.startsWith(MEDIA_FILE_BASE)) return undefined;
	return widths.map((w) => `${transformImageUrl(image, w)} ${w}w`).join(", ");
}
