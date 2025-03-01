import React from "react";
import { useNavigate } from "react-router-dom";
import img from './../assets/downfall-animate (1).svg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-100 dark:bg-gray-900 flex mt-[3.5rem] md:mt-16 items-center justify-center h-min-screen p-6">
      <div className="bg-orange-600 text-white rounded-lg p-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 w-full shadow-xl">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-5xl font-extrabold leading-snug">
            We help you find a better way to {" "}
            <span className="text-yellow-300">resolve</span> your <br />
            <span className="text-yellow-300">financial problems</span>.
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium">
            Apply for a loan now and get a chance to win a Gold Coin.
          </p>
          <p className="mt-3 text-sm md:text-base">
            Pro Fincare helps you find the best loan alternatives with top consultants and an easy process, all from the comfort of your home.
          </p>
          <button 
            className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => navigate("/products")}
          >
            Apply Now
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={img} alt="" className="w-[70%] " />
        </div>
      </div>
    </div>
  );
};

export default Landing;
