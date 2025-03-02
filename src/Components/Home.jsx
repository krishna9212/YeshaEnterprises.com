import React from "react";
import Landing from "./Landing";
import About from "./AboutUs";
import EMICalculator from "./EmiCalculator";
import HorizontalLogoSlider from "./HorizontalLogoSlider";

const Home = () => {
  return (
    <div>
      <Landing />
      <HorizontalLogoSlider />
      <About />
      <EMICalculator />
    </div>
  );
};

export default Home;
