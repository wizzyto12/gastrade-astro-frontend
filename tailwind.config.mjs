/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}"],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter", "sans-serif"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "1rem",
					lg: "2rem",
				},
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				xxl: "1366px",
				xxxl: "1440px",
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						h1: {
							fontSize: theme("fontSize.5xl")[0],
							marginBottom: "1rem",
							"@media screen(lg)": {
								fontSize: theme("fontSize.6xl")[0],
							},
						},
						h2: {
							fontSize: theme("fontSize.4xl")[0],
							marginBottom: "1rem",
							"@media screen(lg)": {
								fontSize: theme("fontSize.5xl")[0],
							},
						},
						h3: {
							fontSize: theme("fontSize.3xl")[0],
							marginBottom: "1rem",
							"@media screen(lg)": {
								fontSize: theme("fontSize.4xl")[0],
							},
						},
						h4: {
							fontSize: theme("fontSize.2xl")[0],
							marginBottom: "1rem",
							"@media screen(lg)": {
								fontSize: theme("fontSize.3xl")[0],
							},
						},
						h5: {
							fontSize: theme("fontSize.xl")[0],
							marginBottom: "1rem",
							"@media screen(lg)": {
								fontSize: theme("fontSize.2xl")[0],
							},
						},
						h6: {
							fontSize: theme("fontSize.lg")[0],
							marginBottom: "1rem",
							"@media screen(lg)": {
								fontSize: theme("fontSize.xl")[0],
							},
						},
						pre: {
							backgroundColor: "transparent",
						},
						p: {
							fontSize: theme("fontSize.lg")[0],
							lineHeight: theme("lineHeight.loose"),
						},
						li: {
							fontSize: theme("fontSize.lg")[0],
							lineHeight: theme("lineHeight.loose"),
						},
						hr: {
							borderColor: theme("colors.gray[800]"),
						},
						a: {
							color: theme("colors.gray[800]"),
							"&:hover": {
								textDecoration: "underline",
							},
						},
						strong: {
							fontWeight: "700",
						},
						img: {
							width: "100%",
						},
						"--tw-prose-body": theme("colors.gray[800]"),
						"--tw-prose-headings": theme("colors.gray[800]"),
						"--tw-prose-lead": theme("colors.gray[800]"),
						"--tw-prose-links": theme("colors.gray[800]"),
						"--tw-prose-bold": theme("colors.gray[800]"),
						"--tw-prose-counters": theme("colors.gray[800]"),
						"--tw-prose-bullets": theme("colors.gray[800]"),
						"--tw-prose-hr": theme("colors.gray[800]"),
						"--tw-prose-quotes": theme("colors.gray[800]"),
						"--tw-prose-quote-borders": theme("colors.gray[800]"),
						"--tw-prose-captions": theme("colors.gray[800]"),
						"--tw-prose-code": theme("colors.gray[800]"),
						"--tw-prose-pre-code": theme("colors.gray[800]"),
						"--tw-prose-pre-bg": theme("colors.gray[800]"),
						"--tw-prose-th-borders": theme("colors.gray[800]"),
						"--tw-prose-td-borders": theme("colors.gray[800]"),
						"--tw-prose-invert-body": theme("colors.white"),
						"--tw-prose-invert-headings": theme("colors.white"),
						"--tw-prose-invert-lead": theme("colors.white"),
						"--tw-prose-invert-links": theme("colors.white"),
						"--tw-prose-invert-bold": theme("colors.white"),
						"--tw-prose-invert-counters": theme("colors.white"),
						"--tw-prose-invert-bullets": theme("colors.white"),
						"--tw-prose-invert-hr": theme("colors.white"),
						"--tw-prose-invert-quotes": theme("colors.white"),
						"--tw-prose-invert-quote-borders": theme("colors.white"),
						"--tw-prose-invert-captions": theme("colors.white"),
						"--tw-prose-invert-code": theme("colors.white"),
						"--tw-prose-invert-pre-code": theme("colors.white"),
						"--tw-prose-invert-pre-bg": theme("colors.white"),
						"--tw-prose-invert-th-borders": theme("colors.white"),
						"--tw-prose-invert-td-borders": theme("colors.white"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
