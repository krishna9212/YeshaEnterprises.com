import React from "react";
import img from "./../assets/pray.png";
import LoanCategories from "./LoanCatagories";

function ProductsPage() {
  return (
    <div className="flex flex-col items-center mt-[3rem] p-10 min-h-screen bg-orange-100 dark:bg-gray-900">
      <div className="bg-orange-500 dark:bg-gray-800 text-white text-center p-10 rounded-lg w-full shadow-lg">
        <img
          alt="Icon of hands in prayer position"
          className="mx-auto mb-4 w-12 h-12"
          src={img}
        />
        <h1 className="text-3xl font-bold mb-2 poppins-semibold">Our Solutions</h1>
        <p className="text-lg poppins-regular dark:text-gray-300">
          We thank you for choosing yesha enterprises as your preferred guide.
        </p>
        <p className="text-lg poppins-regular dark:text-gray-300">
          We assure you the best in-class service through the entire process.
        </p>
      </div>
      <LoanCategories />
    </div>
  );
}

export default ProductsPage;
