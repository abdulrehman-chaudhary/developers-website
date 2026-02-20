import React from "react";
import { steps } from "../../data";

const Banner = () => {

  return (
    <section id="how-it-works" className="w-full flex justify-center items-center bg-[#F7FAFC] py-12 md:py-14 lg:py-24">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[85%] flex flex-col gap-8 sm:gap-12 lg:gap-18">
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-[#F76680] to-[#57007B]"></div>
          <div>
            <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] text-center leading-tight">
              How development
              <br />
              <span className="font-bold">
                through Alcaline works
              </span>
            </h2>
          </div>
        </div>
        {/* Timeline */}
        <div className="relative w-full">
          {/* Desktop */}
          <div className="hidden lg:block">
            {/* Top Row */}
            <div className="grid grid-cols-3 gap-8 ">
              {[steps[0], steps[2], steps[4]].map((step) => (
                <div key={step.number} className="flex flex-col items-start ">
                  <div className="bar bg-white rounded-lg lg:pl-4 xl:pl-6 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E7DAED] w-full lg:max-w-75 xl:max-h-40">
                    <div className="flex flex-col gap-3.75">
                      <div className="flex items-center gap-2">
                        <span className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-bold text-lg">
                          {step.number}
                        </span>
                        <h3 className="text-[#1A202C] font-bold text-lg whitespace-nowrap">
                          {step.title}
                        </h3>
                      </div>
                      <div>
                        <p className="text-[#718096] text-sm leading-5 ">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Middle Line */}
            <div className="relative hidden lg:flex items-center justify-center py-8">
              <hr className="w-full h-0.5 border-0 bg-linear-to-r from-[#F76680] to-[#57007B]" />
              {/* Trophy Icon */}
              <div className="absolute right-0 transform translate-x-8">
                <img src="/assets/svgs/trophy-icon.svg" />
              </div>
            </div>
            {/* Bottom Row */}
            <div className="grid grid-cols-3 gap-8  lg:pl-10 xl:pl-16">
              {[steps[1], steps[3], steps[5]].map((step) => (
                <div key={step.number} className="flex flex-col items-start">
                  <div className="bar-top bg-white rounded-lg lg:pl-4 xl:pl-6 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-[#E7DAED] w-full lg:max-w-75 xl:max-h-40">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-bold text-lg">
                          {step.number}
                        </span>
                        <h3 className="text-[#1A202C] font-bold text-lg xl:whitespace-nowrap">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-[#718096] text-sm leading-5">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Timeline */}
          <div className="lg:hidden flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bar bg-white rounded-lg p-6 shadow-sm">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent font-bold text-lg">
                      {step.number}
                    </span>
                    <h3 className="text-[#1A202C] font-semibold text-lg">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#718096] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
