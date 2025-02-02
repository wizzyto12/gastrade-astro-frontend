// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import playformInline from "@playform/inline";
import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    site: "https://astro-hyperdrive.netlify.app",
    base: "/",
    integrations: [tailwind(), mdx(), playformInline({ Critters: true })],
    output: "static",
    devToolbar: {
        enabled: false,
    },
    experimental: {
        svg: true,
    },
    adapter: node({
      mode: "standalone",
    }),
});