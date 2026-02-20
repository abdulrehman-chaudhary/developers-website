import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full flex justify-center items-center bg-white py-12 pb-0 sm:py-16 lg:py-24 lg:pt-19">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-1">
        {/* Left */}
        <div className="lg:w-1/2 flex w-full flex-col gap-6 md:gap-8 xl:gap-17.5">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-[45px] text-[#1A202C] leading-normal  md:leading-17.75">
              Great{" "}
              <span className="font-bold bg-linear-to-r from-[#DE4396] to-[#D1C9F0] bg-clip-text text-transparent">
                Product
              </span>{" "}
              is
              <br />
              <span className="text-black font-extrabold text-4xl md:text-[53px]">
                built by great{" "}
              </span>
              <span className="font-extrabold text-4xl md:text-[53px] bg-linear-to-r from-[#DE4396] to-[#D1C9F0] bg-clip-text text-transparent">
                teams
              </span>
            </h1>

            <p className="text-[#4A5568] text-base md:text-lg leading-9">
              We help build and manage a team of world-class developers to bring
              your vision to life
            </p>
          </div>

          <div>
            <button className="bg-linear-to-r from-[#6675F7] to-[#57007B] text-white text-base font-semibold px-6 py-3 lg:py-3.5 lg:px-6 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
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
    </section>
  );
};

export default HeroSection;
