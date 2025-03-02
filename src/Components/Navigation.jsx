import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "./../assets/LLoGGO.png";

function Navigation() {
  // Get initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Apply theme change when darkMode state updates
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <nav className="fixed top-2 left-1/2 transform opacity-[97%]   -translate-x-1/2  w-[98%] h-20 md:h-18 px-6 md:px-8 flex items-center justify-between rounded-full bg-orange-500 dark:bg-gray-950 dark:text-white shadow-md z-50 transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="LoanKarade" className="h-14  w-auto transition-all duration-300" />
      </Link>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="p-3 rounded-full border border-gray-300 dark:bg-gray-950 dark:hover:bg-black hover:bg-orange-600 transition-all duration-300"
      >
        {darkMode ? <FaSun className="text-gray-200 text-lg" /> : <FaMoon className="text-gray-200 text-lg" />}
      </button>
    </nav>
  );
}

export default Navigation;
