"use client";
import React, { Children } from "react";
import PageTemplate from "../../reusables/pageTemplate";
import { motion } from "framer-motion";
import img from "@/assets/FM-pic1.webp";
import Image from "next/image";

import bgImg from "@/assets/phone.webp";

const FithSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/65" {...props}>
      <div className="flex h-lvh w-full flex-col space-y-5 px-8 py-12 lg:px-28 lg:py-28">
        <h2>Our Location</h2>
        <p className="lg:w-1/2">
          Tenetur ab voluptatem optio repellendus a quis.
        </p>
      </div>
      {/* <div className="absolute top-0 h-lvh w-full overflow-x-hidden opacity-25">
        <motion.div ref={props.objref} style={{ y: props.scrollval }}>
          <Image
            src={bgImg}
            alt="bg-obj"
            className="h-lvh w-full"
            objectFit="cover"
          />
        </motion.div>
      </div> */}
    </PageTemplate>
  );
};

export default FithSection;
