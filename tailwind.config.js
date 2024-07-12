/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class", // Enable dark mode support
	theme: {
		extend: {
			backgroundImage: {
                'hero-pattern': "url('/hero/hero.jpg')",
				'gradient-primary-secondary': 'linear-gradient(to top right, #8a2be2, #0000ff)',
				'gradient-primary-secondary-dark': 'linear-gradient(to top right, #6a1b9a, #001a66)'
			}
,			colors: {
				primary: {
					DEFAULT: "#8a2be2", // Purple color
					dark: "#6a1b9a", // Purple color for dark mode
				},
				secondary: {
					DEFAULT: "#0000ff", // Secondary color
					dark: "#001a66", // Secondary color for dark mode
				},
				background: {
					DEFAULT: "#f2f5fa", // Background color
					dark: "#0d0d20", // Background color for dark mode
				},
				contrast: {
					DEFAULT: "#0d0d20", // Text contrast color
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
