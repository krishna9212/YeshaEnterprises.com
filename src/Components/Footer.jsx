import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/LLoGGO.png";

function Footer() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme");
      if (newTheme) setTheme(newTheme);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <footer className="bg-blue-500 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section - Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="LoanKarade" className="h-24 md:h-16 w-auto" />
          </Link>
          <p className="text-gray-300 mt-3 text-center md:text-left">
            Your trusted financial partner.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-lg font-semibold text-gray-100 mb-4 uppercase">Resources</h2>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white transition">Loankarade</a></li>
              <li><a href="https://tailwindcss.com/" className="hover:text-white transition">Tailwind CSS</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-100 mb-4 uppercase">Follow us</h2>
            <ul className="text-gray-300 space-y-2">
              <li><a href="https://github.com/themesberg/flowbite" className="hover:text-white transition">GitHub</a></li>
              <li><a href="https://discord.gg/4eeurUVvTy" className="hover:text-white transition">Discord</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-100 mb-4 uppercase">Legal</h2>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition whitespace-nowrap">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Us */}
        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-lg font-semibold text-gray-100 mb-4 uppercase">Contact Us</h2>
          <p className="text-gray-300">123 Business Street, Suite 100</p>
          <p className="text-gray-300">New Delhi, India</p>
          <p className="text-gray-300 mt-2">Phone: +91 9876543210</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">🌐</a>
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">📘</a>
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">🐦</a>
            <a href="#" className="text-gray-300 hover:text-white transition text-xl">🔗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
