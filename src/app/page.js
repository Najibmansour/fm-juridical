"use client";

import LowerSection from "@/components/sections/lowerSection";
import UpperSection from "@/components/sections/uppperSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main className="grid pointer-events-none">
      <UpperSection></UpperSection>
      <LowerSection></LowerSection>
    </main>
  );
}
