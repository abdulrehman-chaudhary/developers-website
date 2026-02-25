import React, { useState } from "react";
import { caseStudies } from "../../data";

const CaseStudies = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const ShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  return (
    <section
      id="case-studies"
      className="w-full flex justify-center items-center bg-bg-light py-12 md:py-14 lg:py-24"
    >
      <div className="max-w-360 w-[90%] relative md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col gap-3 md:gap-8 lg:gap-15">
        {/* Header */}
        <div className="flex flex-col items-center">
          <div>
            {/* Left Arrow */}
            <img
              src="/assets/svgs/left-deco-arrow.svg"
              alt="Left Arrow"
              className="hidden lg:block absolute left-0 -top-50"
            />
          </div>
          <div>
            {/* Right Arrow */}
            <img
              src="/assets/svgs/right-deco-arrow.svg"
              alt="Right Arrow"
              className="hidden lg:block absolute right-0 -top-50"
            />
          </div>
          <div>
            {/* Small Ellipse */}
            <img
              src="/assets/svgs/small-ellipse.svg"
              alt="Circle icon"
              className="hidden lg:block absolute lg:left-[25%] xl:left-[20%] top-0"
            />
          </div>
          <div className="flex flex-col items-center text-center gap-4 lg:gap-6.25">
            {/* Line */}
            <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
            <div className="flex flex-col text-center lg:leading-13.75">
              <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px]">
                Our recent
                <br />
                <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold">
                  Case studies
                </span>
              </h2>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10">
          {caseStudies.slice(0, visibleCount).map((study) => (
            <div
              key={study.id}
              className={`${study.bgColor} rounded-3xl overflow-hidden border border-[#E7DAED] flex flex-col lg:flex-row opacity-0 translate-y-8 animate-fadeSlideIn`}
            >
              <div className="lg:w-1/2">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover rounded-[10px]"
                />
              </div>
              {/* Content */}
              <div className="lg:w-1/2 p-8 md:p-10 lg:p-12 xl:pt-15 xl:pb-20 flex flex-col gap-8 xl:gap-15 justify-center">
                <div className="flex flex-col gap-5">
                  <h3 className="text-2xl md:text-3xl xl:text-[28px] font-semibold text-light-black leading-[136%]">
                    {study.title}
                  </h3>
                  <p className="text-brand-gray text-sm md:text-base xl:text-[14px] leading-[1.62] -tracking-[0.5px]">
                    {study.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent font-semibold flex items-center gap-2 hover:gap-3 transition-all group whitespace-nowrap cursor-pointer">
                    Read more
                    <img
                      src="/assets/svgs/right-arrow.svg"
                      alt="Arrow"
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Show More */}
        {visibleCount < caseStudies.length  && (
        <div className="flex justify-end pt-9 lg:pt-0">
          <button
            onClick={ShowMore}
            className="bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent font-semibold flex items-center gap-2 hover:gap-4 transition-all group cursor-pointer text-lg"
          >
            Read more case studies
            <img
              src="/assets/svgs/right-arrow.svg"
              alt="Right Arrow"
              className="w-5 h-5"
            />
          </button>
        </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
