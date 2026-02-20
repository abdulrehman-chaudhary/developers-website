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
      className="w-full flex justify-center items-center bg-[#f7f7fa] py-12 md:py-14 lg:py-24"
    >
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col gap-3 md:gap-8 lg:gap-18">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 relative">
          {/* Left Arrow */}
          <img
            src="/assets/svgs/left-deco-arrow.svg"
            alt="Left Arrow"
            className="hidden lg:block absolute left-0 -top-50 pointer-events-none"
          />
          {/* Right Arrow */}
          <img
            src="/assets/svgs/right-deco-arrow.svg"
            alt="Right Arrow"
            className="hidden lg:block absolute right-0 -top-50 pointer-events-none"
          />
          {/* Line */}
          <div className="w-17.25 h-1.25 bg-linear-to-r from-[#F76680] to-[#57007B]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px]">
              Our recent
            </p>
            <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] font-bold">
              Case studies
            </h2>
          </div>
        </div>
        {/* Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {caseStudies.slice(0, visibleCount).map((study, index) => (
            <div
              key={study.id}
              className={`${study.bgColor} rounded-3xl overflow-hidden flex flex-col lg:flex-row opacity-0 translate-y-8 animate-fadeSlideIn`}
            >
              <div className="lg:w-1/2 shrink-0">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col gap-8 justify-center">
                <div className="flex flex-col gap-5">
                  <h3 className="text-2xl md:text-3xl xl:text-[28px] font-semibold text-[#2D3748] leading-[136%]">
                    {study.title}
                  </h3>
                  <p className="text-[#4A5568] text-sm md:text-base xl:text-[14px] leading-[1.6]">
                    {study.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-semibold flex items-center gap-2 hover:gap-3 transition-all group whitespace-nowrap cursor-pointer">
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
        <div className="flex justify-end pt-8.75 lg:pt-0">
          <button
            onClick={ShowMore}
            className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-semibold flex items-center gap-2 hover:gap-4 transition-all group cursor-pointer text-lg"
          >
            Read more case studies
            <img
              src="/assets/svgs/right-arrow.svg"
              alt="Right Arrow"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
