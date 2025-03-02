import React from "react";
import svgFile from "./../assets/about-us-page-animate.svg";

const About = React.memo(() => {
  return (
    <section className="bg-orange-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-10">
          {/* Text Content */}
          <div className="text-center md:text-left w-full md:w-1/2">
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl leading-snug">
              Trusted Financial Solutions for a Secure Future
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              At <strong>YESHA ENTERPRISES</strong>, we specialize in providing 
              <b> tailored financial solutions</b> to help individuals and 
              businesses achieve stability and growth.
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Our team of <b>experts</b> assists you in choosing the best 
              <strong> Loan & Credit Solutions</strong>, ensuring 
              <b> competitive rates</b> and seamless approval processes.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-[120%] md:w-[60%] flex justify-center">
            <img
              src={svgFile}
              alt="Financial Growth"
              className="w-full   md:w-[1140%] "
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;
