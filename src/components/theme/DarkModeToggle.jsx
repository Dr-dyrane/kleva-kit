import React from "react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const DarkModeToggle = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-800"
		>
			{isDarkMode ? (
				<BsLightbulbFill className="text-accent-dark/75" />
			) : (
				<BsLightbulbOffFill className="text-contrast/50" />
			)}
		</button>
	);
};

export default DarkModeToggle;
