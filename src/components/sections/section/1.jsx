import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";

import img from "@/assets/FM-pic2.webp";

const FirstSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/65" {...props}>
      <div className="flex h-lvh w-full px-8 py-12 lg:px-28 lg:py-28"></div>
    </PageTemplate>
  );
};

export default FirstSection;
