import React from "react";
import PageTemplate from "../reusables/pageTemplate";
import { cn } from "@/lib/utils";

const SectiionBehind = ({ children, img, tint, margin = false }) => {
  return (
    <div className="relative h-[calc(300svh)] ">
      <div
        className={cn(
          "sticky h-[calc(100svh)] top-0 ",
          margin && "-mt-[calc(100svh)]"
        )}
      >
        <PageTemplate tint={tint} img={img}>
          {children}
        </PageTemplate>
      </div>
    </div>
  );
};

export default SectiionBehind;
