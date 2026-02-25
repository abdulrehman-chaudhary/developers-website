import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { resourcesData } from "../../data";

const Resources = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="blog"
      className="w-full bg-white pt-12 md:pt-14 lg:pt-0 overflow-hidden"
    >
      <div className="flex flex-col gap-8 md:12 lg:gap-16">
        {/* Header */}
        <div className="w-full flex justify-center flex-col items-center gap-4 md:gap-6.25">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
          <div className="flex flex-col items-center text-center lg:leading-13.75">
            <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px]">
              Featured
              <br />
              <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold">
                Resources
              </span>
            </h2>
          </div>
        </div>
        {/* Embla */}
        <div className="w-full overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 md:gap-10 xl:gap-15">
            {resourcesData.map((resource) => (
              <div
                key={resource.id}
                className="shrink-0 w-72 md:w-80 flex flex-col gap-5 group cursor-pointer max-w-63.5 max-h-78.75"
              >
                <div className="relative rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full max-h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-light-black text-base md:text-[16px] font-medium leading-6.25 ">
                      {resource.title}
                    </h3>
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="text-grad-purple font-semibold flex items-center gap-2 hover:gap-3 transition-all text-[16px] leading-6.25">
                      Read More
                      <img
                        src="/assets/svgs/right-arrow-line.svg"
                        alt="Arrow"
                        className="w-4 h-4 md:w-6 md:h-6"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="group shrink-0 w-12 h-12 rounded-full bg-white border-2 border-grad-purple flex items-center justify-center hover:bg-grad-purple transition-all duration-300 cursor-pointer"
          >
            <img
              src="/assets/svgs/left-arrow-purple.svg"
              alt="Left Arrow"
              className="w-3.5 h-3.5 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </button>
          <button
            onClick={scrollNext}
            className="group shrink-0 w-12 h-12 rounded-full bg-white border-2 border-grad-purple flex items-center justify-center hover:bg-grad-purple transition-all duration-300 cursor-pointer"
          >
            <img
              src="/assets/svgs/left-arrow-purple.svg"
              alt="Right Arrow"
              className="w-3.5 h-3.5 rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
