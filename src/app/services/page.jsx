import TintedImg from "@/components/reusables/tintedImage";
import React from "react";

import PATTERN from "@/assets/Pattern-FM---Hana.webp";
import IMG1 from "@/assets/FM-pic5.webp";
import IMG2 from "@/assets/FM-pic7.webp";
import PageTemplate from "@/components/reusables/pageTemplate";
import Image from "next/image";
import ServiceCard from "@/components/reusables/serviceCard";
import Footer from "@/components/layout/footer/footer";
import Form from "@/components/form/form";

const Services = () => {
  return (
    <main>
      <div className="pointer-events-none grid">
        <div className="pointer-events-auto col-span-1 col-start-1 row-start-1 h-lvh">
          <div className="-z-40">
            <PageTemplate img={PATTERN} className="border-b-2 border-white">
              <div className="flex h-full w-full flex-col items-center justify-start py-28">
                <div className="grid w-[90%] grid-cols-1 gap-10 md:grid-cols-2">
                  <ServiceCard img={IMG1} title="Real Estate Law" />
                  <ServiceCard img={IMG2} title="Employment Law" />
                </div>
              </div>
            </PageTemplate>
          </div>
        </div>
        <div className="relative col-span-1 col-start-1 row-start-1 h-[calc(200svh)] w-full">
          <div className="sticky top-0 -z-50">
            <PageTemplate img={PATTERN} className="sticky top-0">
              <div className="flex h-[80%] w-full flex-col items-center justify-center md:h-3/4">
                <Form />
              </div>
              <div className="flex h-[20%] w-full flex-col items-center justify-center md:h-1/4">
                <Footer />
              </div>
            </PageTemplate>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
