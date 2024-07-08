import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";

import img from "@/assets/FM-pic1.webp";

const FithSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8">
        5th section
      </div>
    </PageTemplate>
  );
};

export default FithSection;
