import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";

import img from "@/assets/FM-pic1.webp";

const FithSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8 space-y-5 flex-col">
        <h2>Our Location</h2>
        <p className="lg:w-1/2">
          Tenetur ab voluptatem optio repellendus a quis.
        </p>
      </div>
    </PageTemplate>
  );
};

export default FithSection;
