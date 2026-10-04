/**
 * Date formatting -- port of theme/utils/index.js (tinytime-based).
 *
 * The old Saber site rendered dates at build time on a CI machine pinned to
 * Asia/Shanghai. The site is now server-rendered on Cloudflare Workers (UTC),
 * so format explicitly in Asia/Shanghai to keep the same displayed times.
 */

const TIME_ZONE = "Asia/Shanghai";

const dateTimeParts = new Intl.DateTimeFormat("en-US", {
	timeZone: TIME_ZONE,
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "numeric",
	minute: "2-digit",
	second: "2-digit",
	hour12: false,
});

function partsOf(date: Date) {
	const parts: Record<string, string> = {};
	for (const part of dateTimeParts.formatToParts(date)) {
		parts[part.type] = part.value;
	}
	return parts;
}

const cardDate = new Intl.DateTimeFormat("en-GB", {
	timeZone: TIME_ZONE,
	day: "2-digit",
	month: "long",
	year: "numeric",
});

/** `{YYYY}-{Mo}-{DD} {H}:{mm}:{ss}` -- post page meta, e.g. "2020-09-06 8:05:03". */
export function formatPostDate(date: Date): string {
	const p = partsOf(date);
	return `${p.year}-${p.month}-${p.day} ${Number(p.hour)}:${p.minute}:${p.second}`;
}

/** `{YYYY}-{MM}-{DD}` -- outdated-warning human date, e.g. "2020-09-06". */
export function formatDayDate(date: Date): string {
	const p = partsOf(date);
	return `${p.year}-${p.month}-${p.day}`;
}

/** `{DD} {MMMM} {YYYY}` -- post card date, e.g. "06 September 2020". */
export function formatCardDate(date: Date): string {
	return cardDate.format(date);
}

/** Whole days elapsed since `date` (theme/layouts/default.vue `days`). */
export function daysAgo(date: Date): number {
	return Math.floor((Date.now() - date.getTime()) / 86400000);
}
