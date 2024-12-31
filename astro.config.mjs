// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind(),
		mdx(),
		(await import("@playform/inline")).default({
			Critters: true,
		}),
	],
	output: "static",
	devToolbar: {
		enabled: false,
	},
	experimental: {
		svg: true,
	},
});
