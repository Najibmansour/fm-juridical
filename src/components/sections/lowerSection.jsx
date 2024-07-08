import Image from "next/image";
import React from "react";
import PageTemplate from "../reusables/pageTemplate";

import PATTERN from "@/assets/Pattern-FM---Hana.webp";
import IMG1 from "@/assets/Pattern-FM---Hana.webp";
import IMG2 from "@/assets/Pattern-FM---Hana.webp";
import IMG3 from "@/assets/Pattern-FM---Hana.webp";
import TintedImg from "../reusables/tintedImage";
import SectiionBehind from "./sectiionBehind";
import SecondSection from "./section/2";
import ForthSection from "./section/4";
import SixthSection from "./section/6";

const LowerSection = () => {
  return (
    <div className="-z-50 row-start-1 col-start-1 col-span-1 ">
      <div className="relative h-[calc(300svh)] ">
        <div className="sticky h-[calc(100svh)] top-0 ">
          <SecondSection img={PATTERN} />
        </div>
      </div>
      <div className="relative h-[calc(300svh)] ">
        <div className="sticky h-[calc(100svh)] top-0 -mt-[calc(100svh)] ">
          <ForthSection img={PATTERN} />
        </div>
      </div>
      <div className="relative h-[calc(300svh)] ">
        <div className="sticky h-[calc(100svh)] top-0 -mt-[calc(100svh)] ">
          <SixthSection img={PATTERN} />
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
