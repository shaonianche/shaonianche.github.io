/**
 * 自定义 Astro 图片端点（/_image），替代 @emdash-cms/cloudflare/image-endpoint。
 *
 * EmDash 自带的端点出于安全只接受扁平 storage key（正则不含 "/"），
 * 而本站从 Saber 迁移来的媒体是路径式 key（uploads/2022/01/xx.jpg），
 * 会被拒并回退到 Astro 默认端点导致 400/500。这里放宽为允许 "/" 但拒绝
 * ".."，其余逻辑与 EmDash 版本一致：从 R2 读字节，用 IMAGES 绑定变换，
 * 绑定缺失或参数无效时流式返回原图。（曾有的 9432 legacy-billing 回退在
 * 账号切到 Images 新计费后已删除。）
 *
 * 通过 astro.config.mjs 的 image.endpoint 注册；EmDash 只覆盖未自定义的端点，
 * 因此不会被它替换。
 */
import { env } from "cloudflare:workers";
import { GET as stockGET } from "@astrojs/cloudflare/image-transform-endpoint";
import {
	MUTABLE_MEDIA_CACHE_CONTROL,
	originalMediaHeaders,
	parseTransformParams,
	resolveTransformQuality,
} from "emdash/media/image-endpoint";
import type { APIRoute } from "astro";

export const prerender = false;

const MEDIA_PREFIX = "/_emdash/api/media/file/";
/** 允许路径式 key，但仍是白名单字符集，且不允许 ".." 穿越。 */
const SAFE_KEY = /^[A-Za-z0-9._/-]+$/;

const FORMAT_MIME: Record<string, string> = {
	webp: "image/webp",
	avif: "image/avif",
	png: "image/png",
	jpeg: "image/jpeg",
};

interface EmDashStorage {
	download(key: string): Promise<{ body: ReadableStream | null; contentType: string }>;
}

function mediaKey(href: string | null): string | null {
	if (!href) return null;
	let pathname: string;
	try {
		pathname = new URL(href, "http://localhost").pathname;
	} catch {
		return null;
	}
	if (!pathname.startsWith(MEDIA_PREFIX)) return null;
	const key = pathname.slice(MEDIA_PREFIX.length);
	if (!key || !SAFE_KEY.test(key) || key.includes("..")) return null;
	return key;
}

function streamOriginal(body: ReadableStream | null, contentType: string) {
	return new Response(body, {
		status: 200,
		headers: originalMediaHeaders(contentType),
	});
}

export const GET: APIRoute = async (ctx) => {
	const url = new URL(ctx.request.url);
	const key = mediaKey(url.searchParams.get("href"));
	const storage = (ctx.locals as { emdash?: { storage?: EmDashStorage } }).emdash?.storage;
	if (!key || !storage) return stockGET(ctx as never);
	try {
		const source = await storage.download(key);
		if (!source.contentType?.startsWith("image/")) {
			return streamOriginal(source.body, source.contentType);
		}
		const images = (env as Record<string, unknown>).IMAGES as
			| {
					input(body: ReadableStream | null): {
						transform(t: Record<string, number>): {
							output(o: Record<string, unknown>): Promise<{ response(): Response }>;
						};
					};
			  }
			| undefined;
		const parsed = parseTransformParams(url.searchParams);
		if (!images || !parsed.ok) return streamOriginal(source.body, source.contentType);
		const { width, height, format, quality } = parsed.options;
		const transform: Record<string, number> = {};
		if (width) transform.width = width;
		if (height) transform.height = height;
		const output: Record<string, unknown> = {
			format: FORMAT_MIME[format] ?? "image/webp",
		};
		const effectiveQuality = resolveTransformQuality(format, quality);
		if (effectiveQuality !== undefined) output.quality = effectiveQuality;
		const response = (
			await images.input(source.body).transform(transform).output(output)
		).response();
		if (!response.body) return new Response(null, { status: 500 });
		return new Response(response.body, {
			status: 200,
			headers: {
				"Content-Type": response.headers.get("Content-Type") ?? "image/webp",
				"Cache-Control": MUTABLE_MEDIA_CACHE_CONTROL,
				"X-Content-Type-Options": "nosniff",
				"X-Image-Engine": "images-binding",
			},
		});
	} catch (error) {
		if (error instanceof Error && /not found/i.test(error.message)) {
			return new Response("Not Found", { status: 404 });
		}
		console.error("[image] transform failed:", error);
		return new Response("Internal Server Error", { status: 500 });
	}
};
