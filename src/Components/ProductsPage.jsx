import React from "react";
import img from "./../assets/growth-curve-animate.svg";
import LoanCategories from "./LoanCatagories";

function ProductsPage() {
  
  return (
    <div className="flex flex-col mt-[6rem] md:mt-[4.2rem] items-center w-full min-h-screen p-2 md:p-6 bg-orange-100 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="flex items-center justify-center w-full ">
        <div className="bg-orange-600 dark:bg-gray-800 text-white w-[90%] rounded-lg p-10 flex flex-col md:flex-row  items-center">
          {/* Text Content */}
          <div className=" md:-mt-30 md:ml-20 text-center md:text-left space-y-4">
            <h1 className="text-[2rem] md:text-5xl poppins-bold  leading-snug">
              <span className="text-yellow-300 -ml-2">Our Solutions </span>
            </h1>
            <p className="text-[0.9rem] md:text-base poppins-medium ">
              We thank you for choosing {" "}<b className="text-yellow-300">Yesha Enterprises</b> as your preferred guide. 
           <br />
            We assure you the best in-class service through the entire process.
            </p>
            
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img src={img} alt="Growth Curve" className="w-[120%] md:w-[70%]" />
          </div>
        </div>
      </div>
      {/* Loan Categories Section */}
      <LoanCategories />
    </div>
  );
}

export default ProductsPage;
