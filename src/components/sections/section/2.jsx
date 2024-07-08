import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

const SecondSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8">
        2nd section
      </div>
    </PageTemplate>
  );
};

export default SecondSection;
