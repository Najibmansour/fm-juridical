import React from "react";
import FirstSection from "./section/1";
import SecondSection from "./section/2";
import ThirdSection from "./section/3";
import FithSection from "./section/5";

const UpperSection = () => {
  return (
    <div className="-z-40  row-start-1 col-start-1 col-span-1 ">
      <FirstSection />
      <div className="h-svh w-full"></div>
      <ThirdSection />
      <div className="h-svh w-full"></div>
      <FithSection />
    </div>
  );
};

export default UpperSection;
