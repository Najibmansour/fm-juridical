import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ForthSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8 space-y-5 flex-col">
        <h2>4th section</h2>
      </div>
    </PageTemplate>
  );
};

export default ForthSection;
