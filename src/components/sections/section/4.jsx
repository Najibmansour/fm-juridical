import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const ForthSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#10151020]/65" {...props}>
      <div className="flex h-lvh w-full flex-col space-y-5 px-8 py-12 lg:px-28 lg:py-28">
        <h2>4th section</h2>
      </div>
    </PageTemplate>
  );
};

export default ForthSection;
