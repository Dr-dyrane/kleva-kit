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
					DEFAULT: "#0000ff", // Secondary color
					dark: "#001a66", // Secondary color for dark mode
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
					DEFAULT: "#ff9900", // Accent color
					dark: "#e68300", // Accent color for dark mode
				},
			},
		},
	},
	plugins: [],
};
