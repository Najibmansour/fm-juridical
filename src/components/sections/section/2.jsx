import PageTemplate from "@/components/reusables/pageTemplate";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import bgImg from "@/assets/FM-pic3.webp";

import { motion } from "framer-motion";
import NavLink from "@/components/layout/navbar/navlink";

const SecondSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#10151020]/65" {...props}>
      <div className="flex h-lvh w-full flex-col justify-center space-y-5 px-8 lg:px-28">
        <h2 className="z-50">About Us</h2>
        <p className="z-50 lg:w-1/2">
          With a strong presence in around 40 countries, Macari & Frangieh Legal
          services offers an exceptional and comprehensive legal solutions for
          businesses. Our professional team of lawyers is ready to solve any
          complex and law issues across multiple jurisdictions.
        </p>

        <nav className="z-50 grid grid-cols-1 grid-rows-3 lg:w-1/2">
          <Link
            href="/contact"
            className="group pointer-events-auto relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl transition-all group-hover:tracking-wide md:text-4xl">
              Contacts
            </h3>
            <p>Learn about our experience</p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 -translate-x-5 translate-y-1/2 opacity-0 transition-all group-hover:translate-x-5 group-hover:scale-110 group-hover:opacity-100" />
          </Link>
          <Link
            href="/about"
            className="group pointer-events-auto relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl transition-all group-hover:tracking-wide md:text-4xl">
              Service Law
            </h3>
            <p>Find out our approach</p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 -translate-x-5 translate-y-1/2 opacity-0 transition-all group-hover:translate-x-5 group-hover:scale-110 group-hover:opacity-100" />
          </Link>
          <Link
            href="/"
            className="group pointer-events-auto relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl transition-all group-hover:tracking-wide md:text-4xl">
              Lorem Ipsum
            </h3>
            <p>Find out our approach</p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 -translate-x-5 translate-y-1/2 opacity-0 transition-all group-hover:translate-x-5 group-hover:scale-110 group-hover:opacity-100" />
          </Link>
        </nav>
        <div>
          <Link
            href={"/services"}
            className="group pointer-events-auto relative text-secondary"
          >
            <span className="cursor-pointer transition-all duration-300 hover:text-secondary">
              Learn more about us
            </span>
            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 translate-y-1 bg-secondary duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>
      </div>
      <div className="absolute top-0 h-lvh w-full overflow-x-clip opacity-25">
        <motion.div ref={props.objref} style={{ y: props.scrollval }}>
          <Image
            src={bgImg}
            alt="bg-obj"
            className="object-contain object-center"
          />
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default SecondSection;
