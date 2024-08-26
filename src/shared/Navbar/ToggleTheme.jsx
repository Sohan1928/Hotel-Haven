import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme" || "light");
    setTheme(storedTheme);
    document.documentElement.className = storedTheme;
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-300 dark:bg-gray-700 p-2 ml-16 md:ml-0 rounded-md"
        >
          {theme === "light" ? (
            <IoMoonOutline className="text-xl"></IoMoonOutline>
          ) : (
            <FiSun className="text-xl"></FiSun>
          )}
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
