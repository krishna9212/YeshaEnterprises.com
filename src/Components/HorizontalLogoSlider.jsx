import React, { useState } from "react";

const brands = [
  "https://1000logos.net/wp-content/uploads/2021/06/HDFC-Bank-logo-768x432.png",
  "https://download.logo.wine/logo/Axis_Bank/Axis_Bank-Logo.wine.png",
  "https://static.brandirectory.com/logos/icib001_icici_bank.png",
  "https://logos-download.com/wp-content/uploads/2016/06/Kotak_Mahindra_Bank_logo.png",
  "https://catalog.in/media/4635/small/new-logo.png?v=1",
  "https://logos-world.net/wp-content/uploads/2020/11/Bank-of-Baroda-Logo.png",
  "https://companieslogo.com/img/orig/PNB.NS-f0a1e3ee.png?t=1720244493",
  "https://www.freepnglogos.com/uploads/sbi-logo-png/state-bank-india-maitech-safe-and-secure-now-2.png",
  "https://www.cdnlogo.com/logos/u/84/union-bank-of-india.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUqCFKNrB9QcT5gRTxDO0P1F2WuT9OlF9oIw&s"
];

const HorizontalLogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative bg-[orange-100] w-full py-6 mx-auto">
      {/* Section Title */}
      <h2 className="text-2xl font-semibold poppins-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
        Our Banking Partners
      </h2>

      <div
        className={`flex w-[calc(350px*14)] gap-10 animate-scroll ${
          isPaused ? "paused" : ""
        }`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...brands, ...brands].map((logo, index) =>
          logo ? ( // Only render if the logo exists
            <div
              key={index}
              className="w-[4000px] h-[120px] flex justify-center items-center bg-white  p-2 rounded-md shadow-md"
            >
              <img
                src={logo}
                alt="Banking Partner Logo"
                className="h-full w-full object-contain"
              />
            </div>
          ) : null
        )}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 7)); }
        }
        .animate-scroll {
          animation: scroll 70s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default HorizontalLogoSlider;
