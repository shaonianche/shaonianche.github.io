/// <reference types="@cloudflare/workers-types" />

import handler, {
	createScheduledHandler,
	PluginBridge,
} from "@emdash-cms/cloudflare/worker";

export { PluginBridge };

export default {
	...handler,
	// 与 wrangler.jsonc 的 triggers.crons 保持一致；不一致的触发会被记录并忽略
	scheduled: createScheduledHandler({ generalCron: "0 * * * *" }),
} satisfies ExportedHandler;
