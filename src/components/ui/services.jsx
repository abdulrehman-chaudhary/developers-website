import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { servicesData } from "../../data";

const Services = () => {
  const total = servicesData.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
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
      className="w-full flex justify-center items-center bg-bg-light py-12 md:py-14 overflow-hidden"
    >
      <div className="max-w-360 w-full flex flex-col gap-12 xl:gap-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6.25">
          <h2 className="text-brand-black text-[28px] md:text-[32px] lg:text-[35px] font-bold">
            Services we offer
          </h2>
        </div>
        <div className="w-full flex flex-col gap-12 md:gap-16 xl:gap-20">
          {/* Embla */}
          <div className="overflow-hidden px-5" ref={emblaRef}>
            <div className="flex gap-6">
              {servicesData.map((service, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={service.id}
                    className={`sm:min-w-83.25 min-w-60 sm:max-h-71.75 rounded-2xl p-5 sm:p-8 flex flex-col gap-5 transition-all duration-300 bg-white shadow-[0px_4px_30px_0px_#0000000D] ${
                      isActive
                        ? "border-2 border-grad-purple"
                        : "border border-gray-100"
                    }`}
                  >
                    {/* Icon */}
                    <div className="shrink-0 w-14 h-14 rounded-full border border-grad-purple flex items-center justify-center">
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
                        className={`text-[20px] font-semibold leading-[137%] md:whitespace-nowrap transition-colors duration-300 ${
                          isActive
                            ? "bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent"
                            : "text-brand-dark"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-medium-gray text-sm leading-relaxed">
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
                  className={`w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === activeIndex
                      ? "bg-linear-to-r from-grad-pink to-grad-purple"
                      : "bg-transparent border-2 border-[#CBD5E0]"
                  }`}
                />
              ))}
            </div>
            {/* Progress */}
            <div className="absolute md:right-20 lg:right-28 xl:right-40 right-5 flex items-center gap-3 text-sm font-semibold">
              <div>
                <p className="text-light-gray text-[16px] font-medium leading-6.25">
                  {"0" + (activeIndex + 1)}
                </p>
              </div>
              <div className="sm:w-37.5 w-20 h-0.75 bg-[#E2E8F0] relative overflow-hidden rounded-full">
                <div
                  className="h-full bg-grad-purple transition-all duration-300 ease-out"
                  style={{
                    width: `${((activeIndex + 1) / total) * 100}%`,
                  }}
                />
              </div>
              <div>
                <p className="text-light-gray text-[16px] font-medium leading-6.25">
                  {"0" + total}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
