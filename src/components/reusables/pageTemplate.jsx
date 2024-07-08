import React from "react";
import TintedImg from "./tintedImage";

const PageTemplate = ({ tint, children, img }, props) => {
  return (
    <section className="relative h-svh w-full " {...props}>
      <div className="absolute w-full h-full">{children}</div>
      <TintedImg src={img} tint={tint} />
    </section>
  );
};

export default PageTemplate;
