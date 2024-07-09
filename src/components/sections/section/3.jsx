import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

import img from "@/assets/FM-pic6.webp";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ThirdSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/90" {...props}>
      <div className="w-full h-svh flex lg:py-28 py-12 lg:px-28 px-8 space-y-5 flex-col">
        <h2>Services</h2>
        <p className="lg:w-1/2">
           For you to be linked in a legal way to the global market, we provide
          you a lot of services that help you destroy barriers and rise in your
          own way.
        </p>

        <nav className="grid grid-cols-1 grid-rows-3  lg:w-1/2 z-50">
          <Link
            href="/contact"
            className="border-b-2 md:space-y-3 space-y-2 border-white  md:py-4 py-2 relative"
          >
            <h3 className="md:text-4xl text-2xl  ">Coorprate Law</h3>
            <p>
              Services related to our company formation, mergers and
              aquisitions,coorprate governance, compliance and dissolution.
            </p>
            <ChevronRight className="size-5 absolute right-10 bottom-1/2 hover:scale-125 translate-y-1/2" />
          </Link>
          <Link
            href="/about"
            className="border-b-2 md:space-y-3 space-y-2 border-white  md:py-4 py-2 relative"
          >
            <h3 className="md:text-4xl text-2xl  ">
              Litigation and Dispute Resolution
            </h3>
            <p>
              Representation in civil, commercial, and administrative courts, as
              well as arbitration and mediation services.
            </p>
            <ChevronRight className="size-5 absolute right-10 bottom-1/2 hover:scale-125 translate-y-1/2" />
          </Link>
          <Link
            href="/"
            className="border-b-2 md:space-y-3 space-y-2 border-white  md:py-4 py-2 relative"
          >
            <h3 className="md:text-4xl text-2xl  ">Tax Law</h3>
            <p>
              Advising on tax planning, compliance, disputes, and representation
              in tax audits and litigation.
            </p>
            <ChevronRight className="size-5 absolute right-10 bottom-1/2 hover:scale-125 translate-y-1/2" />
          </Link>
        </nav>
        <Link href="/" className="text-secondary text-xl">
          View all services {">"}
        </Link>
      </div>
    </PageTemplate>
  );
};

export default ThirdSection;
