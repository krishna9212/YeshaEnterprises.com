import React from "react";
import { Link } from "react-router-dom";
import img from "./../assets/404 Error-pana.png";

function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 p-6">
      <img src={img} alt="404 Not Found" className="w-[50%] max-w-md -mb-20" />
      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
