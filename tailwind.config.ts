/** @type {import("tailwindcss").Config} */

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./commons/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["PPMori-Regular"],
			ppMori: ["PPMori-Regular"],
			["ppMori-regular"]: ["PPMori-Regular"],
			["ppMori-semibold"]: ["PPMori-SemiBold"],
			["heading"]: ["BasisGrotesqueArabicPro-Medium"],
			["heading-bold"]: ["BasisGrotesqueArabicPro-Regular"],
		},
		extend: {
			colors: {
				primary: "#44a359",
				["primary-alt"]: "#308c50",
				secondary: "#d84318", //"#b05107",
				["primary-dark"]: "#065024",
				["primary-light"]: "#a5eaa9",
				["primary-50"]: "#ddf1e2",

				accent: {
					primary: "rgba(0,119,182,0.15)",
					light: "#ffffff1f"
				},


				// => status colors
				status: {
					success: "#05942f",
					error: "#ea2e2e",
					warning: "#f59e0b",
					info: "#3b82f6",
				},

				// => background colors

				bg: {
					light: "#FFF",
					50: "#f3f4f6",
					dark: "#151515",
					"dark-50": "#1a1919",
					bottom_sheet: {
						light: "#fff",
						dark: "#333232",
					},
				},

				text: {
					light: "#000",
					dark: "#fff",
				},

				["skeleton"]: "#33323257",
				["skeleton-dark"]: "#6d6d6d14",

				// => border
				outline: "rgba(0,0,0,0.1)",
				["outline-dark"]: "rgba(255,255,255,0.08)",
				["outline-light"]: "rgba(0,0,0,0.1)",

				//=>icons
				icon: {
					dark: "#53545C",
				},

				input: {
					light: "#EEF1F3",
					dark: "#ffffff22",
				},
			},
		},
		plugins: [],
	},
}
