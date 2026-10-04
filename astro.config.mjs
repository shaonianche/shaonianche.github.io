import cloudflare from "@astrojs/cloudflare";
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
