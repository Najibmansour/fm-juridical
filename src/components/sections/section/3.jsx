import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

import img from "@/assets/FM-pic6.webp";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const ThirdSection = (props) => {
  return (
    <PageTemplate img={img} tint="bg-[#163131]/90" {...props} id="about">
      <div className="flex h-svh w-full flex-col justify-center space-y-5 px-8 lg:px-28">
        <h2 className="z-50">Services</h2>
        <p className="z-50 lg:w-1/2">
          For you to be linked in a legal way to the global market, we provide
          you a lot of services that help you destroy barriers and rise in your
          own way.
        </p>

        <nav className="z-50 grid grid-cols-1 grid-rows-3 lg:w-1/2">
          <Link
            href="/contact"
            className="group pointer-events-auto relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl transition-all group-hover:tracking-wide md:text-4xl">
              Corporate Law
            </h3>
            <p>
              Services related to company formation, mergers and acquisitions,
              corporate governance, compliance, and dissolution.
            </p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 -translate-x-5 translate-y-1/2 opacity-0 transition-all group-hover:translate-x-5 group-hover:scale-110 group-hover:opacity-100" />
          </Link>
          <Link
            href="/about"
            className="group pointer-events-auto relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl transition-all group-hover:tracking-wide md:text-4xl">
              Litigation and Dispute Resolution
            </h3>
            <p>
              Representation in civil, commercial, and administrative courts, as
              well as arbitration and mediation services.
            </p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 -translate-x-5 translate-y-1/2 opacity-0 transition-all group-hover:translate-x-5 group-hover:scale-110 group-hover:opacity-100" />
          </Link>
          <Link
            href="/"
            className="group pointer-events-auto relative space-y-2 border-b-2 border-white py-2 md:space-y-3 md:py-4"
          >
            <h3 className="text-2xl transition-all group-hover:tracking-wide md:text-4xl">
              Tax Law
            </h3>
            <p>
              Advising on tax planning, compliance, disputes, and representation
              in tax audits and litigation.
            </p>
            <ChevronRight className="absolute bottom-1/2 right-10 size-5 -translate-x-5 translate-y-1/2 opacity-0 transition-all group-hover:translate-x-5 group-hover:scale-110 group-hover:opacity-100" />
          </Link>
        </nav>
        <div>
          <Link
            href={"/services"}
            className="group pointer-events-auto relative text-secondary"
          >
            <span className="cursor-pointer transition-all duration-300 hover:text-secondary">
              View all Services
            </span>
            <div className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 translate-y-1 bg-secondary duration-300 ease-out group-hover:w-full" />
          </Link>
        </div>
      </div>
    </PageTemplate>
  );
};

export default ThirdSection;
