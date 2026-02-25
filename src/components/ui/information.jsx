import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { informationData } from "../../data";

const Information = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  });

  const handlePrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const handleNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section
      id="about"
      className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24 xl:pb-8 relative overflow-hidden"
    >
      <div>
        {/* Top Ellipse */}
        <img
          src="/assets/svgs/ellipse.svg"
          alt="Top icon"
          className="absolute top-0 left-[7%] -translate-y-1/2"
        />
      </div>
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[86%] flex flex-col gap-10 md:gap-14 xl:gap-40">
        {/* First section */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {informationData.map((data) => (
              <div
                key={data.id}
                className="w-full flex-none pr-1 flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
              >
                {/* Left */}
                <div className="flex flex-col gap-8.5">
                  {/* Header */}
                  <div className="flex flex-col gap-4 md:gap-6.25">
                    <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
                    <div className="flex flex-col lg:leading-13.75">
                      <h2 className="text-brand-dark lg:whitespace-nowrap text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
                        {data.heading}
                        <br />
                        <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold xl:leading-13.75">
                          {data.subheading}
                        </span>
                      </h2>
                    </div>
                  </div>
                  {/* description */}
                  <div className="flex  flex-col gap-6 xl:gap-12.75">
                    <div>
                      <p className="text-medium-gray grow text-base md:text-lg leading-relaxed">
                        {data.description.split(data.highlightText)[0]}
                        <span className="bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent">
                          {data.highlightText}
                        </span>
                        {data.description.split(data.highlightText)[1]}
                      </p>
                    </div>
                    <div>
                      <button className="text-grad-purple font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        {data.linkText}
                        <img
                          src="/assets/svgs/right-arrow-line.svg"
                          alt="Arrow"
                          className="w-4 h-4 md:w-6 md:h-6"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Right Video */}
                <div className="relative rounded-2xl overflow-hidden">
                  <video
                    className="w-full h-full object-cover rounded-2xl"
                    controls
                  >
                    <source src={data.video} />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Second section */}
        <div className="flex flex-col gap-4 lg:gap-6.25">
          {/* Header */}
          <div className="flex flex-col gap-8">
            <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
            <div className="flex flex-col lg:leading-13.75">
              <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
                Meet the People
                <br />
                <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
                  We are Working With
                </span>
              </h2>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 justify-start md:justify-end">
            <button
              onClick={handlePrev}
              className="group w-12 h-12 cursor-pointer rounded-full bg-white border-2 border-grad-purple flex items-center justify-center hover:bg-grad-purple transition-all duration-300"
            >
              <img
                src="/assets/svgs/left-arrow-purple.svg"
                alt="Previous"
                className="w-3.5 h-3.5 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </button>
            <button
              onClick={handleNext}
              className="group w-12 h-12 cursor-pointer rounded-full bg-white border-2 border-grad-purple flex items-center justify-center hover:bg-grad-purple transition-all duration-300"
            >
              <img
                src="/assets/svgs/left-arrow-purple.svg"
                alt="Next"
                className="w-3.5 h-3.5 rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* Bottom Ellipse */}
        <img
          src="/assets/svgs/ellipse.svg"
          alt="Bottom icon"
          className="absolute bottom-0 right-[38%] translate-y-1/2"
        />
      </div>
    </section>
  );
};

export default Information;
