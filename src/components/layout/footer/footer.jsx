import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid h-full w-full grid-cols-2 grid-rows-4 bg-green-200/50 md:w-3/4 md:grid-cols-9">
      <div className="col-span-1 col-start-1 row-span-3 row-start-1 bg-red-600 md:col-span-2 md:col-start-1 md:row-span-full md:row-start-1"></div>
      <div className="col-span-1 col-start-2 row-span-full row-start-1 bg-green-600 md:col-span-5 md:col-start-3 md:row-span-full md:row-start-1"></div>
      <div className="col-span-1 col-start-1 row-span-1 row-start-4 bg-blue-600 md:col-span-2 md:col-start-8 md:row-span-full md:row-start-1"></div>
    </footer>
  );
};

export default Footer;
