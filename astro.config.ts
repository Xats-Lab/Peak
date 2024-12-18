import Mdx from "@astrojs/mdx"
import React from "@astrojs/react"
import { defineConfig } from "astro/config"
import UnoCSS from "unocss/astro"
import Font from "vite-plugin-font"

export default defineConfig({
	integrations: [
		React(),
		UnoCSS({
			injectReset: true,
		}),
		Mdx(),
	],
	site: "https://www.xiufengcheng.com",
	trailingSlash: "never",
	vite: {
		plugins: [
			Font.vite(),
		],
	},
})
