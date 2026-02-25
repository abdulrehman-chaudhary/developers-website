import React from "react";
import { whyUsFeatures } from "../../data";

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="w-full flex justify-center items-center bg-bg-light py-12 md:py-14 lg:py-24 lg:pt-17.5"
    >
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[86%] flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6.25">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
          <div className="flex flex-col text-center lg:leading-13.75">
            <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px]">
              Our design and
              <br />
              <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold">
                development approach
              </span>
            </h2>
          </div>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6.25">
          {whyUsFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-brand-light border border-[#E7DAED] p-8 md:p-10 xl:py-14.5 flex flex-col lg:flex-row gap-6 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div
                className={`${feature.iconBg} xl:w-14.75 xl:h-14 shrink-0 w-12 h-12 rounded-[10px] flex items-center justify-center`}
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-brand-dark text-[16px] md:text-[20px] font-semibold leading-[137%]">
                  {feature.title}
                </h3>
                <p className="text-medium-gray text-sm md:text-[14px] leading-[162%]">
                  {feature.description.split(feature.highlightText)[0]}
                  <span
                    className={`${feature.highlightColor} clip-text text-transparent bg-clip-text`}
                  >
                    {feature.highlightText}
                  </span>
                  {feature.description.split(feature.highlightText)[1]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
