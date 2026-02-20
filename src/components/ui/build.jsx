import React from "react";
import { buildData } from "../../data";

const Build = () => {
  return (
    <section
      id="hire"
      className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24"
    >
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col gap-8 sm:gap-12 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-[#F76680] to-[#57007B]"></div>
          <div className="flex flex-col">
            <p className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
              Way of building
            </p>
            <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
              Great Software
            </h2>
          </div>
        </div>
        {/* Sections */}
        {buildData.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col ${item.imagePosition === "right"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
              } items-center gap-10 lg:gap-16 relative`}
          >
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-4 lg:gap-6">
              <h3 className="text-[#1A202C] text-[24px] md:text-[28px] font-semibold leading-[136%]">
                {item.title}
              </h3>
              <div className="text-[#2D3748] flex flex-col gap-4 leading-7.5">
                <p className=" text-base md:text-lg">{item.description}</p>

                <p className="text-base md:text-lg">
                  Our{" "}
                  <span className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent">
                    {item.deliveryModel}
                  </span>{" "}
                  {item.deliveryText}
                </p>
              </div>
              {/* Quote */}
              <div className="flex flex-col gap-6">
                <div className="border-l-3 border-[#F76680] pl-6">
                  <p className="bg-linear-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent text-base md:text-[16px] italic leading-7.5 w-full xl:w-[80%]">
                    "{item.quote.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <img
                      src={item.quote.avatar}
                      alt={item.quote.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[#1A202C] font-semibold text-sm">
                      {item.quote.author}
                    </p>
                    <p className="text-[#718096] text-xs">
                      {item.quote.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="flex-1 relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Build;
