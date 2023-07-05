/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				text: "rgba(255,255,255,0.82)",
				background: "#121212",
				primary: "#FF1744",
				secondary: "#212121",
				muted: "#212121",
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
