import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const TintedImg = ({ tint, src, className }) => {
  return (
    <div className="absolute h-svh w-full">
      <div className={cn("relative h-full w-full", className)}>
        <Image src={src} layout="fill" alt="image" objectFit="cover" />
        <div className={cn("absolute h-svh w-full", tint)} />
      </div>
    </div>
  );
};

export default TintedImg;
