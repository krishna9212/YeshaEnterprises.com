import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "./../assets/LLoGGO.png";

function Navigation() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark" ||
          (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  const [loading, setLoading] = useState(false); // Loading state

  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  

  useEffect(() => {
    if (location.pathname === "/") {
      setLoading(true);
      setTimeout(() => setLoading(false), 500);
    }
  }, [location.pathname]);

  return (
    <>
      
      <nav className="h-[9%] md:h-[10%] fixed z-50 w-full flex items-center justify-between bg-blue-500 dark:bg-gray-950 dark:text-white transition-all duration-300 px-4 md:px-10 shadow-md">
        <div className="flex items-center h-full">
          <Link to="/" className="w-full h-full flex items-center"> 
           
        
          <img
          src={logo}// Switch logo based on dark mode
          alt="LoanKarade"
          className="h-[60%] md:h-16 w-auto transition-all duration-300"
        />
          </Link>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6 pt-2">
          <button
            onClick={() => {
              setDarkMode(!darkMode)
              window.location.reload();
            }}
            className="px-[9px] py-[11.3px] rounded-md transition-all duration-1000 border-[0.4px] border-gray-400 dark:bg-gray-900 dark:hover:bg-transparent hover:bg-blue-600 flex items-center justify-center"
          >
            {darkMode ? (
              <FaSun className="text-gray-200 text-lg" />
            ) : (
              <FaMoon className="text-gray-200 text-lg" />
            )}
          </button>

          
        </div>
      </nav>

     

     

      </>
  );
}

export default Navigation;
