import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TintedImg = ({ tint, src, className }) => {
  return (
    <div className="-z-30 w-full h-full absolute ">
      <div className={cn("relative w-full h-full", className)}>
        <Image src={src} layout="fill" alt="image" />
        <div className={cn("absolute h-svh w-full ", tint)} />
      </div>
    </div>
  );
};

export default TintedImg;
