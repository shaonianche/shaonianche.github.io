/**
 * Site identity helper.
 *
 * EmDash site settings carry `title` and `tagline`; both may be empty before
 * the admin setup wizard runs. Fall back to the blog's own name so pages
 * still render a sensible <title> and header.
 */

interface SiteSettingsLike {
	title?: string | null;
	tagline?: string | null;
}

export function resolveBlogSiteIdentity(settings: SiteSettingsLike | null | undefined): {
	siteTitle: string;
	siteTagline: string;
} {
	return {
		siteTitle: settings?.title || "段飛",
		siteTagline: settings?.tagline || "This is DuanFei's website.",
	};
}
