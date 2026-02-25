import React from "react";
import { buildData } from "../../data";

const Build = () => {
  return (
    <section
      id="hire"
      className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24 lg:pt-20"
    >
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[86%] flex flex-col gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6.25 text-center">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
          <div className="flex flex-col text-center">
            <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] lg:leading-13.75">
              Way of building
              <br />
              <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
                Great Software
              </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-15 xl:gap-23.75">
          {/* Sections */}
          {buildData.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col ${item.imagePosition === "right"
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-16 xl:gap-30 relative`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-[50%] flex flex-col gap-4 lg:gap-7.5">
                <div>
                  <h3 className="text-brand-dark text-[24px] md:text-[28px] font-semibold leading-[136%]">
                    {item.title}
                  </h3>
                </div>
                <div className="text-light-black flex flex-col gap-4 xl:gap-7.5 leading-7.5">
                  <p className=" text-base md:text-lg">{item.description}</p>
                  <p className="text-base md:text-lg">
                    Our{" "}
                    <span className="bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent">
                      {item.deliveryModel}
                    </span>{" "}
                    {item.deliveryText}
                  </p>
                </div>
                {/* Quote */}
                <div className="flex flex-col gap-6.25">
                  <div className="flex gap-3.75">
                    <div className="w-0.75 shrink-0 rounded-full bg-linear-[225deg] from-grad-pink to-grad-purple"></div>
                    <p className="bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent text-base md:text-[16px] italic leading-7.5 w-full xl:w-[80%]">
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
                      <p className="text-brand-dark font-semibold text-sm">
                        {item.quote.author}
                      </p>
                      <p className="text-medium-gray text-xs">
                        {item.quote.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Image */}
              <div className="w-full lg:w-[50%] relative">
              <div>
                {/* Top ellipse */}
                <img
                  src="/assets/svgs/orange-ellipse.svg"
                  alt=""
                  className="absolute -top-5 -left-5 w-12 h-12 sm:w-16 sm:h-16 z-1"
                />
                </div>
                <div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto relative z-9"
                />
                </div>
                <div>
                {/* Bottom ellipse */}
                <img
                  src="/assets/svgs/purple-ellipse.svg"
                  alt=""
                  className="absolute -bottom-4 left-1/2 w-8 h-8 z-1"
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Build;
