import React from "react";
import TintedImg from "./tintedImage";

const PageTemplate = ({ tint, children, img }, props) => {
  return (
    <section className="relative h-lvh w-full" {...props}>
      <div className="absolute z-10 h-lvh w-full">{children}</div>
      <TintedImg src={img} tint={tint} />
    </section>
  );
};

export default PageTemplate;
