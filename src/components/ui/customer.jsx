import React, { useState } from "react";
import { testimonials } from "../../data";

const Customer = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24 xl:pb-35 relative overflow-hidden">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col gap-8 md:gap-12 lg:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-6">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-[#F76680] to-[#57007B]"></div>
          <div className="flex flex-col items-center">
            <p className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px]">
              Why cutomers love
            </p>
            <h2 className="text-[#1A202C] text-[28px] md:text-[32px] lg:text-[35px] font-bold">
              working with us
            </h2>
          </div>
        </div>
        {/* Testimonial Card */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden md:flex shrink-0 w-12 h-12 rounded-full border-2 border-[#57007B] items-center justify-center text-[#57007B] hover:invert-50 hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <img src="/assets/svgs/left-arrow-purple.svg" alt="Left Arrow" />
          </button>
          {/* Quote */}
          <div className="flex-1 relative text-center  md:px-12 lg:px-20 w-full">
            <div>
              <img
                src="/assets/svgs/left-comma.svg"
                alt="Quote"
                className="absolute top-0 -left-1  md:left-12 lg:left-20 xl:left-35"
              />
            </div>
            <div className="flex justify-center items-center w-full">
              <p className="text-[#718096] text-base md:text-lg w-[85%] md:max-w-129 leading-8 md:leading-9">
                {activeTestimonial.quote}
              </p>
            </div>
            <div className="flex justify-center items-center w-full">
              <img
                src="/assets/svgs/right-comma.svg"
                alt="Quote"
                className="absolute bottom-0 right-4 md:right-12 lg:right-20 xl:right-40"
              />
            </div>
          </div>
          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden md:flex shrink-0 w-12 h-12 rounded-full border-2 border-[#57007B] items-center justify-center hover:invert-50 hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Next testimonial"
          >
            <img
              src="/assets/svgs/left-arrow-purple.svg"
              alt=""
              className="rotate-180"
            />
          </button>
          {/* Mobile Buttons */}
          <div className="flex md:hidden items-center justify-center gap-4 pt-4">
            <button
              onClick={handlePrev}
              className="shrink-0 w-12 h-12 rounded-full border-2 border-[#57007B] flex items-center justify-center text-[#57007B] hover:invert-50 hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous testimonial"
            >
              <img src="/assets/svgs/left-arrow-purple.svg" alt="Left Arrow" />
            </button>

            <button
              onClick={handleNext}
              className="shrink-0 w-12 h-12 rounded-full border-2 border-[#57007B] flex items-center justify-center hover:invert-50 hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Next testimonial"
            >
              <img
                src="/assets/svgs/left-arrow-purple.svg"
                alt=""
                className="rotate-180"
              />
            </button>
          </div>
        </div>
        {/* Avatars Row */}
        <div className="flex justify-center items-end gap-2 md:gap-10 lg:gap-14">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={testimonial.id}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center gap-2 transition-all overflow-hidden duration-400 cursor-pointer ${
                  isActive
                    ? "scale-90 sm:scale-110 opacity-100"
                    : "scale-90 opacity-60 hover:opacity-80"
                }`}
              >
                <div
                  className={`rounded-full overflow-hidden border-3 transition-all duration-400 ${
                    isActive
                      ? "w-14 h-14 md:w-24 md:h-24 border-[#57007B] shadow-lg shadow-purple-200"
                      : "w-14 h-14 md:w-18 md:h-18 border-gray-200"
                  }`}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <img src="/assets/svgs/five-stars.svg" alt="5 stars" />
                </div>
                <div className="flex flex-col items-center">
                  <span
                    className={`font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-sm md:text-base text-[#1A202C]"
                        : "text-xs md:text-sm text-[#4A5568]"
                    }`}
                  >
                    {testimonial.name}
                  </span>
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-xs md:text-sm text-[#718096]"
                        : "text-[10px] md:text-xs text-[#A0AEC0] italic"
                    }`}
                  >
                    {testimonial.role}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Customer;
