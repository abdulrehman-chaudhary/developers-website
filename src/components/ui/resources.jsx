import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { resourcesData } from "../../data";

const Resources = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="blog" className="w-full bg-white pt-12 md:pt-14 lg:pt-24 overflow-hidden">
      <div className="flex flex-col gap-8 md:12 lg:gap-16">
        {/* Header */}
        <div className="w-full flex justify-center flex-col items-center gap-6">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-[#F76680] to-[#57007B]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
              Featured
            </p>
            <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
              Resources
            </h2>
          </div>
        </div>
        {/* Embla Carousel */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          {/* Embla Container */}
          <div className="flex gap-8 md:gap-10 xl:gap-15">
            {resourcesData.map((resource) => (
              /* Embla Slide */
              <div key={resource.id} className="shrink-0 w-72 md:w-80">
                <div className="flex flex-col gap-4 group cursor-pointer">
                  {/* Image */}
                  <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <h3 className="text-[#2D3748] text-base md:text-[16px] font-medium leading-6.25 ">
                        {resource.title}
                      </h3>
                    </div>
                    <div>
                      <button className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                        Read More
                        <img
                          src="/assets/svgs/right-arrow.svg"
                          alt="Arrow"
                          className="w-3.5 h-3.5"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={scrollPrev}
            className="shrink-0 w-12 h-12 rounded-full border-2 border-[#57007B] flex items-center justify-center text-[#57007B] hover:invert-50 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <img src="/assets/svgs/left-arrow-purple.svg" alt="Left Arrow" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={scrollNext}
            className="shrink-0 w-12 h-12 rounded-full border-2 border-[#57007B] flex items-center justify-center hover:invert-50 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <img
              src="/assets/svgs/left-arrow-purple.svg"
              alt="Right Arrow"
              className="rotate-180"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
