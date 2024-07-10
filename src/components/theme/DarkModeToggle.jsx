import React, { useEffect, useState } from 'react';
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="flex md:hidden items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-800"
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
