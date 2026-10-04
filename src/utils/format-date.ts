/**
 * 日期展示工具。EmDash 中 content entries 携带 ISO 8601 的
 * publishedAt/updatedAt 字段；本站统一按 UTC 展示，
 * 与线上 blog.duanfei.org 的历史行为保持一致。
 */

const TIME_ZONE = "UTC";

function parseDate(input: string | Date | null | undefined): Date | null {
  if (!input) return null;
  const date = input instanceof Date ? input : new Date(input);
  return Number.isNaN(date.getTime()) ? null : date;
}

/** 列表卡片："7 January 2022" */
export function formatCardDate(input: string | Date | null | undefined): string {
  const date = parseDate(input);
  if (!date) return "";
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** 文章页元信息："2016-09-23 12:00:00" */
export function formatPostDate(input: string | Date | null | undefined): string {
  const date = parseDate(input);
  if (!date) return "";
  const parts = new Intl.DateTimeFormat("zh-CN", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";
  return `${get("year")}-${get("month")}-${get("day")} ${get("hour")}:${get("minute")}:${get("second")}`;
}

/** "最后更新于 YYYY-MM-DD" 中的日期部分 */
export function formatDayDate(input: string | Date | null | undefined): string {
  const date = parseDate(input);
  if (!date) return "";
  return formatPostDate(date).slice(0, 10);
}

/** 与今天相差的完整天数（UTC 对齐），用于「最后更新于 N 天前」 */
export function daysAgo(input: string | Date | null | undefined): number {
  const date = parseDate(input);
  if (!date) return 0;
  const start = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const now = new Date();
  const end = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.round((end - start) / 86_400_000);
}
