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
}

export function resolveImageUrl(image: unknown): string | undefined {
	if (!image) return undefined;
	if (typeof image === "string") return image || undefined;
	const media = image as MediaObject;
	return media.$media?.url || media.src || media.url || undefined;
}

export function resolveImageAlt(image: unknown): string | undefined {
	if (!image || typeof image === "string") return undefined;
	const media = image as MediaObject;
	return media.$media?.alt || media.alt || undefined;
}
