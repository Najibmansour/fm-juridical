import Image from "next/image";
import React from "react";

const PageWithOverlay = () => {
  return (
    <div className="sticky top-0 h-svh w-full">
      <Image src={IMG} layout="fill" alt="image" objectFit="cover" />
    </div>
  );
};

export default PageWithOverlay;
