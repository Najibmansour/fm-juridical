import TintedImg from "@/components/reusables/tintedImage";
import React from "react";

import PATTERN from "@/assets/Pattern-FM---Hana.webp";
import IMG1 from "@/assets/FM-pic5.webp";
import IMG2 from "@/assets/FM-pic7.webp";
import PageTemplate from "@/components/reusables/pageTemplate";
import Image from "next/image";

const Services = () => {
  // const refTop = useRef();
  // const refBot = useRef();

  return (
    <main className="grid">
      <div className="h-svh col-start-1 row-start-1 col-span-1">
        <div className=" -z-40">
          <PageTemplate img={PATTERN} className="border-b-2 border-white  ">
            <div className="w-full h-full  flex flex-col justify-start items-center py-28">
              <div className="grid grid-cols-1 md:grid-cols-2 w-[90%]  gap-10">
                <div className=" flex flex-col items-center justify-between ">
                  <div className="overflow-hidden border-2 relative">
                    <Image
                      src={IMG1}
                      alt="asd"
                      className=" object-cover aspect-video transition-transform duration-300 transform hover:scale-110 peer "
                    />
                    <div class="absolute inset-0 bg-primary opacity-75 transition-opacity duration-300 peer-hover:opacity-0 pointer-events-none" />
                  </div>
                  <p className="text-xl tracking-wide ">Real Estate</p>
                </div>
                <div className=" flex flex-col items-center justify-between ">
                  <div className="overflow-hidden border-2 relative">
                    <Image
                      src={IMG2}
                      alt="asd"
                      className=" object-cover aspect-video transition-transform duration-300 transform hover:scale-110 peer "
                    />
                  </div>
                  <p className="text-xl tracking-wide ">Real Estate</p>
                </div>
              </div>
            </div>
          </PageTemplate>
        </div>
      </div>
      <div className="h-[calc(200svh)] relative w-full col-start-1 row-start-1 col-span-1 pointer-events-none">
        <div className="sticky top-0 -z-50">
          <PageTemplate img={PATTERN} className="sticky top-0">
            BOTTOM
          </PageTemplate>
        </div>
      </div>
    </main>
  );
};

export default Services;
