import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

import img from "@/assets/FM-pic6.webp";

const ThirdSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/90" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8">
        third section
      </div>
    </PageTemplate>
  );
};

export default ThirdSection;
