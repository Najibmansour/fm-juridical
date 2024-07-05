import { cn } from "@/lib/utils";
import React from "react";

const PageTemplate = ({ tint, opacity, children }) => {
  // const bgTint = `bg-${tint}/${opacity}`;
  const bgTint = `bg-[${tint}/${opacity}]`;

  return (
    <section className="h-svh w-full ">
      {children}
      <div className={cn("h-svh w-full", bgTint)} />
    </section>
  );
};

export default PageTemplate;
