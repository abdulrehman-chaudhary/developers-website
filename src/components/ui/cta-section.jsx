import React from "react";

const CtaSection = () => {
  return (
    <section className="w-full flex justify-center items-center bg-white py-12 pt-16 md:py-14 md:pt-16 lg:py-24">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[86%] bg-[#EFF4FC] rounded-3xl gap-5 md:gap-0 p-8 md:p-12 xl:px-21 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div>
          <h2 className="text-2xl md:text-[24px] lg:text-[28px] xl:text-[35px] md:w-[75%] xl:w-[80%] font-bold bg-linear-to-r from-[#29272E] to-[#27272E] bg-clip-text text-transparent xl:leading-13.75">
            Hire the best developers and designers around!
          </h2>
        </div>
        <div className=" relative md:right-10 xl:right-20">
          <div className="relative">
            <img
              src="/assets/svgs/sparkles.svg"
              alt="Sparkles"
              className="w-full h-auto"
            />
          </div>
          <div>
            <button className="absolute whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-r from-[#FFC656] to-[#F16063] text-white text-[14px] border border-white -tracking-[0.5px] font-semibold py-3.5 px-6.25 lg:py-4.25 xl:px-16.5 rounded-[5px] shadow-lg hover:shadow-xl hover:opacity-95 duration-300 cursor-pointer">
              Hire Top Developers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
