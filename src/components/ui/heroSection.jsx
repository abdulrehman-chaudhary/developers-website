import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center bg-white py-12 pb-0 sm:py-16 lg:py-24 lg:pt-16 xl:pt-19 relative overflow-hidden">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-1">
        {/* Left */}
        <div className="lg:w-1/2 flex w-full flex-col gap-6 md:gap-8 xl:gap-15">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-[45px] text-brand-dark  leading-tight sm:leading-normal lg:leading-17.75">
              Great{" "}
              <span className="font-bold bg-linear-to-b from-brand-pink to-brand-blue-transparent bg-clip-text text-transparent">
                Product
              </span>{" "}
              is
              <br />
              <span className="text-black font-extrabold text-4xl md:text-[45px] lg:text-[53px]">
                built by great{" "}
              </span>
              <span className="font-extrabold text-4xl md:text-[45px] lg:text-[53px] bg-linear-to-r from-brand-pink to-brand-blue-transparent bg-clip-text text-transparent">
                teams
              </span>
            </h1>
            <p className="text-brand-gray text-base md:text-lg leading-9">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
          </div>
          <div>
            <button className="bg-brand-blue shadow-[0px_4px_49px_0px_#00000026] text-brand-light text-[14px] leading-3.5 font-semibold px-6 py-3 lg:py-4.75 lg:px-7.5 rounded-[5px] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
              Let's get started!
            </button>
          </div>
        </div>
        {/* Right */}
        <div className="flex justify-center items-center lg:w-[58%] w-full max-w-153.5 ">
          <img
            src="/assets/images/dev-hero-image.webp"
            alt="Team collaboration illustration"
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Ellipse */}
      <div className="absolute bottom-0 left-[35%] translate-y-1/2">
        <img src="/assets/svgs/ellipse.svg" alt="Circle icon" className="z-0" />
      </div>
    </section>
  );
};

export default HeroSection;
