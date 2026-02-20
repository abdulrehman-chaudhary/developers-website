import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { servicesData } from "../../data";

const Services = () => {
  const total = servicesData.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="services"
      className="w-full flex justify-center items-center bg-[#F7F7FA] py-12 md:py-14 lg:py-24 overflow-hidden"
    >
      <div className="max-w-360 w-full flex flex-col gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-[#1A202C] text-[32px] md:text-[35px] font-bold">
            Services we offer
          </h2>
        </div>
        {/* Embla */}
        <div className="overflow-hidden px-5" ref={emblaRef}>
          <div className="flex gap-6">
            {servicesData.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.id}
                  className={`sm:min-w-83.25 min-w-60 sm:max-h-71.75 rounded-2xl p-5 sm:p-8 flex flex-col gap-5 transition-all duration-300 bg-white ${isActive
                    ? "border-2 border-[#57007B] shadow-lg"
                    : "border border-gray-100 shadow-sm"
                    }`}
                >
                  {/* Icon */}
                  <div className=" shrink-0 w-14 h-14 rounded-full border border-[#57007B] flex items-center justify-center">
                    <div
                      className={` w-8.5 h-8.5 rounded-full flex items-center justify-center`}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-8.5 h-8.5"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <h3
                      className={`text-[20px] font-semibold leading-[137%] md:whitespace-nowrap transition-colors duration-300 ${isActive ? "bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent" : "text-[#1A202C]"
                        }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[#718096] text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Controls */}
        <div className="relative flex items-center justify-between md:justify-center px-5">
          {/* Dots */}
          <div className="flex items-center gap-2">
            {servicesData.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-300  cursor-pointer ${index === activeIndex
                  ? "bg-linear-to-r from-[#F76680] to-[#57007B]"
                  : "bg-transparent border-2 border-[#CBD5E0]"
                  }`}
              />
            ))}
          </div>
          {/* Progress */}
          <div className="md:absolute md:right-20 lg:right-28 xl:right-50 right-5 flex items-center gap-3 text-sm font-semibold">
            <span className="text-[#A0AEC0] text-[16px] font-medium leading-6.25">{"0" + (activeIndex + 1)}</span>
            <div className="sm:w-37.5 w-20 h-0.75 bg-[#E2E8F0] relative overflow-hidden rounded-full">
              <div
                className="h-full bg-[#57007B] transition-all duration-300 ease-out"
                style={{
                  width: `${((activeIndex + 1) / total) * 100}%`,
                }}
              />
            </div>
            <span className="text-[#A0AEC0] text-[16px] font-medium leading-6.25">{"0" + total}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
