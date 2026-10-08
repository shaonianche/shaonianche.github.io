import cloudflare from "@astrojs/cloudflare";
import { cacheCloudflare } from "@astrojs/cloudflare/cache";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

/**
 * 自定义图片端点（/_image）：EmDash 默认端点只接受扁平 storage key，
 * 而本站迁移媒体是路径式 key（uploads/2022/01/xx.jpg），src/endpoints/image.ts
 * 放宽该限制，其余行为一致。
 *
 * 必须通过 integration 且在 emdash 之后 updateConfig：@astrojs/cloudflare 适配器
 * 会把 image.endpoint 覆盖为自己的入口，顶层 image.endpoint 配置不会生效；
 * EmDash 又会覆盖适配器默认值，所以我们的 hook 要排在最后。
 */
const imageEndpoint = {
	name: "blog-image-endpoint",
	hooks: {
		"astro:config:setup": ({ updateConfig }) => {
			updateConfig({
				image: {
					endpoint: { route: "/_image", entrypoint: "./src/endpoints/image.ts" },
				},
			});
		},
	},
};

export default defineConfig({
	output: "server",
	// 默认 imageService "cloudflare-binding"：通过 IMAGES 绑定做实时缩放
	// （Images Free 计划每月 5000 次唯一变换免费，本站用量远低于此）。
	adapter: cloudflare(),
	// 官方 blog 模板的图片组件依赖这两个默认值（ constrained 布局 + 响应式样式）
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	// Workers Cache：在 Worker 前面加边缘缓存，命中时完全不消耗 Worker CPU
	// （免费套餐 10ms 上限的主要对策）。EmDash 发布/更新内容时通过
	// cache.purge({ tags }) 精确失效；maxAge 只是兜底。评论等动态内容
	// 最坏 5 分钟内刷新。
	// 注意：/search 与 /_emdash/* 有意不配置缓存规则；EmDash 自带
	// private, no-store，登录编辑者的响应也不会被存储。
	cache: { provider: cacheCloudflare() },
	routeRules: {
		// maxAge 1 小时：内容更新由发布时的标签 purge 保证新鲜，maxAge 只兜底。
		// 拉长它直接减少回源 revalidation 次数（Worker 调用和冷启动的主要来源）。
		// 注意：评论审核通过不触发 purge，新评论最长约 1 小时后才对外可见。
		"/": { maxAge: 3600, swr: 86400 },
		"/posts": { maxAge: 3600, swr: 86400 },
		"/posts/[slug]": { maxAge: 3600, swr: 86400 },
		"/pages/[slug]": { maxAge: 3600, swr: 86400 },
		"/category/[slug]": { maxAge: 3600, swr: 86400 },
		"/tag/[slug]": { maxAge: 3600, swr: 86400 },
		"/rss.xml": { maxAge: 3600, swr: 86400 },
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
		}),
		imageEndpoint,
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-body",
			weights: [400, 500, 600, 700],
			fallbacks: ["sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "JetBrains Mono",
			cssVariable: "--font-mono",
			weights: [400, 500],
			fallbacks: ["monospace"],
		},
	],
	devToolbar: { enabled: false },
});
