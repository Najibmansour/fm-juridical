import PageTemplate from "@/components/reusables/pageTemplate";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

import bgImg from "@/assets/FM-pic3.webp";

import { motion } from "framer-motion";

const SecondSection = (props) => {
  return (
    <PageTemplate img={props.img} tint="bg-[#163131]/65" {...props}>
      <div className="flex h-svh w-full flex-col justify-center space-y-5 px-8 lg:px-28">
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
            className="relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl md:text-4xl">Contacts</h3>
            <p>Learn about our experience</p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 translate-y-1/2 hover:scale-125" />
          </Link>
          <Link
            href="/about"
            className="relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl md:text-4xl">Service Law</h3>
            <p>Find out our approach</p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 translate-y-1/2 hover:scale-125" />
          </Link>
          <Link
            href="/"
            className="relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl md:text-4xl">Lorem Ipsum</h3>
            <p>Find out our approach</p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 translate-y-1/2 hover:scale-125" />
          </Link>
        </nav>
        <Link href="/" className="text-xl text-secondary">
          Learn more about us {">"}
        </Link>
      </div>
      <div className="absolute top-0 h-svh w-full overflow-x-hidden opacity-25">
        <motion.div ref={props.objref} style={{ y: props.scrollval }}>
          <Image
            src={bgImg}
            alt="bg-obj"
            className="h-svh w-full"
            // objectFit="cover"
          />
        </motion.div>
      </div>
    </PageTemplate>
  );
};

export default SecondSection;
