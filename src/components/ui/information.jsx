import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ReactPlayer from "react-player";
import { informationData } from "../../data";

const Information = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
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
      className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24"
    >
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[86%] flex flex-col gap-10 md:gap-14 lg:gap-20">
        {/* First Section */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {informationData.map((data) => (
              <div key={data.id} className="flex-[0_0_100%] pr-1">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                  {/* Left */}
                  <div className="flex-1 flex flex-col gap-6">
                    {/* Header */}
                    <div className="w-17.25 h-1.25 bg-linear-to-r from-[#F76680] to-[#57007B]"></div>
                    <div className="flex flex-col">
                      <p className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
                        {data.heading}
                      </p>
                      <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
                        {data.subheading}
                      </h2>
                    </div>
                    {/* description */}
                    <div className="flex flex-col gap-6 xl:gap-12">
                      <p className="text-[#718096] text-base md:text-lg leading-relaxed">
                        {data.description.split(data.highlightText)[0]}
                        <span className="text-[#F76680] font-semibold">
                          {data.highlightText}
                        </span>
                        {data.description.split(data.highlightText)[1]}
                      </p>
                      <button className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                        {data.linkText}
                        <img
                          src="/assets/svgs/right-arrow.svg"
                          alt="Arrow"
                          className="w-4 h-4"
                        />
                      </button>
                    </div>
                  </div>
                  {/* Right Video */}
                  <div className="flex-1 relative rounded-2xl overflow-hidden bg-gray-900">
                    <video
                      className="w-full h-full object-cover rounded-2xl"
                      controls
                      preload="metadata"
                    >
                      <source src={data.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Second section */}
        <div className="flex flex-col gap-5 md:gap-8">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="w-28 h-1 bg-linear-to-r from-[#F76680] to-[#57007B] rounded-full" />
            <div className="flex flex-col">
              <p className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
                Meet the People
              </p>
              <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
                We are Working With
              </h2>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex gap-4 justify-start md:justify-end">
            <button
              onClick={handlePrev}
              className="w-12 h-12 cursor-pointer rounded-full border-2 border-[#57007B] flex items-center justify-center hover:border-black transition-all"
            >
              <img
                src="/assets/svgs/left-arrow-purple.svg"
                alt="Previous"
                className="w-3.5 h-3.5"
              />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 cursor-pointer rounded-full bg-[#57007B] text-white flex items-center justify-center hover:shadow-lg transition-all"
            >
              <img
                src="/assets/svgs/right-arrow-white.svg"
                alt="Next"
                className="w-3.5 h-3.5"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
