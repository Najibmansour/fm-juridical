import LogoSVG from "@/components/icons/logo";
import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

const Footer = () => {
  return (
    <footer className="/50 grid h-full w-full grid-cols-2 grid-rows-4 md:w-3/4 md:grid-cols-9">
      <div className="col-span-1 col-start-1 row-span-3 row-start-1 flex flex-col items-center justify-center md:col-span-2 md:col-start-1 md:row-span-full md:row-start-1">
        <LogoSVG className="size-24" />
      </div>
      <div className="col-span-1 col-start-2 row-span-full row-start-1 flex flex-col items-start justify-start md:col-span-5 md:col-start-3 md:row-span-full md:row-start-1 md:items-center md:justify-center">
        <div className="-ml-2 grid grid-rows-3 text-sm md:ml-0 md:grid-cols-2 md:gap-y-5">
          <p>Telephone:</p>
          <p>+961 00 000 000</p>
          <p>Fax:</p>
          <p>+961 00 000 000</p>
          <p>Email:</p>
          <p>juridical@novoconcepts.com</p>
        </div>
      </div>
      <div className="col-span-1 col-start-1 row-span-1 row-start-4 flex flex-col items-center justify-center md:col-span-2 md:col-start-8 md:row-span-full md:row-start-1"></div>
    </footer>
  );
};

export default Footer;
