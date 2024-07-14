"use client";
import React, { useRef } from "react";

import PATTERN from "@/assets/Pattern-FM---Hana.webp";
import SecondSection from "./section/2";
import ForthSection from "./section/4";
import SixthSection from "./section/6";

import {
  useScroll,
  motion,
  useTransform,
  useMotionValueEvent,
  motionValue,
} from "framer-motion";

const LowerSection = () => {
  const ref2 = useRef(null);
  const ref4 = useRef(null);
  const ref6 = useRef(null);

  const { scrollY } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  const yscrollProgress = useTransform(scrollY, [0, 5555], [0, -200]);

  useMotionValueEvent(yscrollProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div className="-z-50 col-span-1 col-start-1 row-start-1">
      <div className="relative h-[calc(300svh)]">
        <div className="sticky top-0 h-[calc(100svh)]">
          <SecondSection
            objref={ref2}
            scrollval={yscrollProgress}
            img={PATTERN}
          />
        </div>
      </div>
      <div className="relative h-[calc(300svh)]">
        <div className="sticky top-0 -mt-[calc(100svh)] h-[calc(100svh)]">
          <ForthSection
            objref={ref4}
            scrollval={yscrollProgress}
            img={PATTERN}
          />
        </div>
      </div>
      <div className="relative h-[calc(300svh)]">
        <div className="sticky top-0 -mt-[calc(100svh)] h-[calc(100svh)]">
          <SixthSection
            objref={ref6}
            scrollval={yscrollProgress}
            img={PATTERN}
          />
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
