import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";

const ForthSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8">
        4th section
      </div>
    </PageTemplate>
  );
};

export default ForthSection;
