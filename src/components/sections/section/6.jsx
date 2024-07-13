import Form from "@/components/form/form";
import Footer from "@/components/layout/footer/footer";
import PageTemplate from "@/components/reusables/pageTemplate";
import React from "react";

import PATTERN from "@/assets/Pattern-FM---Hana.webp";

const SixthSection = (props) => {
  return (
    <PageTemplate img={PATTERN} tint="bg-[#10151020]" className="sticky top-0">
      <div className="flex h-[80%] w-full flex-col items-center justify-center md:h-3/4">
        <Form />
      </div>
      <div className="flex h-[20%] w-full flex-col items-center justify-center md:h-1/4">
        <Footer />
      </div>
    </PageTemplate>
  );
};

export default SixthSection;
