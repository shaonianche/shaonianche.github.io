import { getI18nConfig } from "emdash";

/**
 * Locale used when the site has no Astro `i18n` config. This site is
 * Chinese-only, so dates and the `<html lang>` attribute follow zh-CN
 * instead of the template's en-US default.
 */
const SITE_LOCALE = "zh-CN";

/**
 * The default locale from the site's Astro `i18n` config, if it names a
 * language this runtime can format. Falls back to the site locale above.
 */
export function getSiteLocale(): string {
	const locale = getI18nConfig()?.defaultLocale;
	if (!locale) return SITE_LOCALE;
	try {
		return Intl.DateTimeFormat.supportedLocalesOf(locale)[0] ?? SITE_LOCALE;
	} catch {
		// Malformed tags such as "pt_BR" throw instead of matching nothing.
		return SITE_LOCALE;
	}
}

/** Formats a date in the site's locale. */
export function formatDate(date: Date, month: "long" | "short"): string {
	return date.toLocaleDateString(getSiteLocale(), {
		year: "numeric",
		month,
		day: "numeric",
	});
}
