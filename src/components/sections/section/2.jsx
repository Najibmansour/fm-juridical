import PageTemplate from "@/components/reusables/pageTemplate";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const SecondSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#163131]/65" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8 space-y-5 flex-col">
        <h2>About Us</h2>
        <p className="lg:w-1/2">
          With a strong presence in around 40 countries, Macari & Frangieh Legal
          services offers an exceptional and comprehensive legal solutions for
          businesses. Our professional team of lawyers is ready to solve any
          complex and law issues across multiple jurisdictions.
        </p>

        <nav className="grid grid-cols-1 grid-rows-3  lg:w-1/2 z-50">
          <Link
            href="/contact"
            className="border-b-2 md:space-y-3 space-y-2 border-white  md:py-4 py-2 relative"
          >
            <h3 className="md:text-4xl text-2xl  ">Contacts</h3>
            <p>Learn about our experience</p>
            <ChevronRight className="size-5 absolute right-10 bottom-1/2 hover:scale-125 translate-y-1/2" />
          </Link>
          <Link
            href="/about"
            className="border-b-2 md:space-y-3 space-y-2 border-white  md:py-4 py-2 relative"
          >
            <h3 className="md:text-4xl text-2xl  ">Service Law</h3>
            <p>Find out our approach</p>
            <ChevronRight className="size-5 absolute right-10 bottom-1/2 hover:scale-125 translate-y-1/2" />
          </Link>
          <Link
            href="/"
            className="border-b-2 md:space-y-3 space-y-2 border-white  md:py-4 py-2 relative"
          >
            <h3 className="md:text-4xl text-2xl  ">Lorem Ipsum</h3>
            <p>Find out our approach</p>
            <ChevronRight className="size-5 absolute right-10 bottom-1/2 hover:scale-125 translate-y-1/2" />
          </Link>
        </nav>
        <Link href="/" className="text-secondary text-xl">
          Learn more about us {">"}
        </Link>
      </div>
    </PageTemplate>
  );
};

export default SecondSection;
