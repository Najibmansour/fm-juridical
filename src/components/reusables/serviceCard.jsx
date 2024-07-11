import Image from "next/image";
import React from "react";

const ServiceCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="relative overflow-hidden border-2">
        <Image
          src={img}
          alt="asd"
          className="peer aspect-video transform object-cover transition-transform duration-300 hover:scale-110"
        />
        <div class="pointer-events-none absolute inset-0 bg-primary opacity-30 transition-opacity duration-300 peer-hover:opacity-0" />
      </div>
      <p className="text-xl tracking-wide">{title}</p>
    </div>
  );
};

export default ServiceCard;
