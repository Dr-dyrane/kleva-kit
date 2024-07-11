import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context with a default value of false for light mode
const ThemeContext = createContext({
	isDarkMode: false,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Check the initial theme from localStorage or system preference
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		const prefersDarkScheme = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (storedTheme === "dark" || (!storedTheme && prefersDarkScheme)) {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark"); // Add dark class
		}
	}, []);

	// Toggle theme and update localStorage
	const toggleTheme = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem("theme", newMode ? "dark" : "light");
			if (newMode) {
				document.documentElement.classList.add("dark"); // Add dark class
			} else {
				document.documentElement.classList.remove("dark"); // Remove dark class
			}
			return newMode;
		});
	};

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
