import { cn } from "@/lib/utils";
import React from "react";
import TintedImg from "./tintedImage";

import IMG from "@/assets/FM-pic1.webp";

const PageTemplate = ({ tint, children, img }) => {
  return (
    <section className="relative h-svh w-full ">
      <div className="absolute w-full h-full">{children}</div>
      <TintedImg src={img} tint={tint} />
    </section>
  );
};

export default PageTemplate;
