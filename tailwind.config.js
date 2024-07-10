/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // Enable dark mode support
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#2ecc71", // Primary color
					dark: "#27ae60", // Primary color for dark mode
				},
				secondary: {
					DEFAULT: "#3498db", // Secondary color
					dark: "#2980b9", // Secondary color for dark mode
				},
				background: {
					DEFAULT: "#f2f5fa", // Background color
					dark: "#1a1a1a", // Background color for dark mode
				},
				contrast: {
					DEFAULT: "#000000", // Text contrast color
					dark: "#ffffff", // Text contrast color for dark mode
				},
				accent: {
					DEFAULT: "#6dd5ed", // Accent color
					dark: "#3a8cb7", // Accent color for dark mode
				},
			},
		},
	},
	plugins: [],
};
