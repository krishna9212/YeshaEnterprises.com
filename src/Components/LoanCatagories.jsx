import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import PersonalLoan from "./../assets/PersonalLoan.png";
import MicroLoan from "./../assets/Loann.png";
import LoanImg from "./../assets/assets.png";
import LoanImg2 from "./../assets/car-loan.png";
import LoanImg6 from "./../assets/car-loan (1).png";
import LoanImg3 from "./../assets/Loan3.png";
import LoanImg4 from "./../assets/loan.png";
import LoanImg5 from "./../assets/debit-card.png";

function LoanCategories() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);



  const handleNavigation = (route) => {
    setLoading(true); // Show spinner

    setTimeout(() => {
      navigate(route);
      setLoading(false); // Hide spinner after navigation
    }, 1000); // 1.5-second delay for a smooth effect
  };

  const categories = [
    {
      id: 0,
      name: "Micro Loan",
      icon: MicroLoan,
      summary: "Quick loans under 50k to meet urgent needs.",
      buttonName: "Get Instant Loan",
      route: "/Micro-Loan",
    },
    {
      id: 1,
      name: "Personal Loan",
      icon: PersonalLoan,
      summary: "Hassle-free loans tailored to your needs.",
      buttonName: "Check Eligibility",
      route: "/personal-loan",
    },
    {
      id: 2,
      name: "Business Loan",
      icon: LoanImg3,
      summary: "Expand your business with low-interest loans.",
      buttonName: "Check Eligibility",
      route: "/business-loan",
    },
    {
      id: 3,
      name: "Credit Card",
      icon: LoanImg5,
      summary: "Instant cash solutions for urgent expenses.",
      buttonName: "Get Instant Loan",
      route: "/Credit-Card",
    },
    {
      id: 4,
      name: "Home Loan",
      icon: LoanImg4,
      summary: "Turn your dream home into reality.",
      buttonName: "Check Eligibility",
      route: "/home-loan",
    },
    {
      id: 5,
      name: "Loan Against Property",
      icon: LoanImg,
      summary: "Secure loans with competitive rates.",
      buttonName: "Know More",
      route: "/Loan-Against-Property",
    },
    {
      id: 6,
      name: "Used Car Loan",
      icon: LoanImg2,
      summary: "Affordable loans for your dream car.",
      buttonName: "Apply Now",
      route: "/Used-Car-Loan",
    },
    {
      id: 7,
      name: "Car Loan",
      icon: LoanImg6,
      summary: "Own your car with tailored loan offers.",
      buttonName: "Apply Now",
      route: "/Car-Loan",
    },
  ];
  
  
  return (
    <div className="h-min-screen w-full p-5 bg-transparent overflow-hidden flex flex-col">
      
      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-opacity-40 z-50">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
        </div>
      )}

        
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-[100%]    mt-6">
  {categories.map((category) => (
    <div
      key={category.id}
      className="group bg-orange-200 dark:bg-gray-900 loan-box w-full rounded-2xl shadow-lg flex flex-col items-center p-4 md:p-6 transition-all duration-300 ease-in-out hover:shadow-2xl  border border-gray-200 dark:border-gray-700 cursor-pointer"
      onClick={() => handleNavigation(category.route)}
    >
      {/* Icon & Title Section */}
      <div className="flex flex-col items-center">
        <img
          src={category.icon}
          alt={category.name}
          loading="lazy"
          decoding="async"
          className="h-16 w-18 object-contain transition-transform duration-300 group-hover:rotate-6"
        />
        <h2 className="text-[0.8rem] md:text-[1rem] font-semibold text-gray-800 dark:text-gray-100 mt-3">
          {category.name}
        </h2>
      </div>

      {/* Summary Text */}
      <p className="hidden md:block text-[0.75rem] text-gray-500 dark:text-gray-300 text-center mt-2 px-4">
        {category.summary}
      </p>

      {/* Action Button */}
      <button className="mt-4 flex items-center justify-center bg-[#0198D6] text-white text-[0.7rem] md:text-[0.8rem] font-medium px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#0077b6] hover:shadow-md">
        {category.buttonName}
        <FaArrowRight className="ml-2 text-[0.9rem]" />
      </button>
    </div>
  ))}
</div>

    </div>
  );
}

export default LoanCategories;
