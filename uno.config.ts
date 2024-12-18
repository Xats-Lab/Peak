import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts } from "unocss"

export default defineConfig({
	presets: [
		presetWebFonts({
			fonts: {
				sans: ["MiSans"],
				serif: ["Source Han Serif SC"],
			},
			provider: "none",
		}),
		presetIcons({
			extraProperties: {
				"display": "inline-block",
				"vertical-align": "text-bottom",
			},
		}),
		presetUno(),
		presetTypography({
			cssExtend: {
				"h1, h2, h3, h4, h5, h6": {
					"margin-top": "0",
					"scroll-margin-top": "3.5rem",
				},
			},
		}),
	],
	theme: {
		breakpoints: {
			oversize: "1440px",
		},
		fontWeight: {
			bold: 700,
			normal: 400,
		},
	},
})
