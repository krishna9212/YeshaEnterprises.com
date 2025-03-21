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
    <nav className="fixed top-2 left-1/2 transform opacity-[97%] -translate-x-1/2 w-[98%] h-18 md:h-16 px-6 md:px-8 flex items-center justify-between rounded-full bg-orange-500 dark:bg-gray-950 dark:text-white shadow-md z-50 transition-all duration-300">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img src={logo} alt="LoanKarade" className="h-16 w-auto transition-all duration-300" />
      </Link>

      <div className="flex items-center gap-4">
        {/* Solutions Button */}
        <Link
          to="/products"
          className="px-4 py-3 text-[0.80rem] poppins-semibold md:text-[0.8rem] md:text-base font-medium rounded-full bg-white text-orange-600 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-orange-600 hover:text-white dark:hover:bg-black transition-all duration-300"
        >
          Solutions
        </Link>

        {/* Theme Toggle Button */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="p-3 rounded-full border border-gray-300 dark:bg-gray-950 dark:hover:bg-black hover:bg-orange-600 transition-all duration-300"
        >
          {darkMode ? <FaSun className="text-gray-200 text-lg" /> : <FaMoon className="text-gray-200 text-lg" />}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
