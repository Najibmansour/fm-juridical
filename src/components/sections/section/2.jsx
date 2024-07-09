import PageTemplate from "@/components/reusables/pageTemplate";
import Link from "next/link";
import React from "react";

const SecondSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8  flex-col">
        <h2>About Us</h2>
        <p className="lg:w-1/2">
          With a strong presence in around 40 countries, Macari & Frangieh Legal
          services offers an exceptional and comprehensive legal solutions for
          businesses. Our professional team of lawyers is ready to solve any
          complex and law issues across multiple jurisdictions.
        </p>

        <nav className="grid grid-cols-1 grid-rows-3 space-y-3 w-1/2">
          <div className="border-b-2 space-y-3 border-white">
            <h3 className="text-4xl ">Contacts</h3>
            <p>lern About our experience</p>
          </div>
          <div className="border-b-2 space-y-3 border-white">
            <h3 className="text-4xl ">Service Law</h3>
            <p>Find out our approach</p>
          </div>
          <div className="border-b-2 space-y-3 border-white">
            <h3 className="text-4xl ">Lorem Ipsum</h3>
            <p>Find out our approach</p>
          </div>
        </nav>
        <Link href="/" className="text-secondary">
          Learn more about us {">"}
        </Link>
      </div>
    </PageTemplate>
  );
};

export default SecondSection;
