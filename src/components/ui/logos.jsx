import React from "react";
import { logosData } from "../../data";

const Logos = () => {
  return (
    <section className="w-full bg-[#F9FAFB] py-12 md:py-16 overflow-hidden">
      {/* Marquee */}
      <div className="relative w-full flex animate-marquee">
        {logosData.map((logo) => (
          <div
            key={`first-${logo.id}`}
            className="shrink-0 px-8 md:px-12 lg:px-16 flex items-center justify-center"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="h-12 md:h-14 lg:h-16 w-auto object-contain hover:grayscale-0 transition-all duration-300 opacity-100 hover:opacity-60 cursor-pointer"
            />
          </div>
        ))}
        {logosData.map((logo) => (
          <div
            key={`second-${logo.id}`}
            className="shrink-0 px-8 md:px-12 lg:px-16 flex items-center justify-center"
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="h-12 md:h-14 lg:h-16 w-auto object-contain hover:grayscale-0 transition-all duration-300 opacity-100 hover:opacity-60"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
