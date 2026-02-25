import React, { useState } from "react";
import { testimonials } from "../../data";

const Customer = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24 lg:pb-30 xl:pb-35 xl:pt-31 relative overflow-hidden">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[90%] flex flex-col gap-8 md:gap-12 lg:gap-14 xl:gap-20">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6.25">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
          <div className="flex flex-col items-center">
            <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] text-center lg:leading-13.75">
              Why cutomers love
              <br />
              <span className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold">
                working with us
              </span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 md:gap-15 lg:gap-20 xl:gap-30 w-full">
          {/* Card */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-8">
            {/* Left Arrow */}
            <div>
              <button
                onClick={handlePrev}
                className="group hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white border-2 border-grad-purple items-center justify-center hover:bg-grad-purple transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <img
                  src="/assets/svgs/left-arrow-purple.svg"
                  alt="Left Arrow"
                  className="w-3.5 h-3.5 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </div>
            {/* Quote */}
            <div className="relative text-center  w-full">
              <div>
                <img
                  src="/assets/svgs/left-comma.svg"
                  alt="Quote"
                  className="absolute top-0 -left-1  md:left-12 lg:left-15 xl:left-45"
                />
              </div>
              <div className="flex grow justify-center items-center w-full">
                <p className="text-medium-gray text-base md:text-lg w-[85%] md:max-w-129 leading-8 md:leading-9">
                  {activeTestimonial.quote}
                </p>
              </div>
              <div className="flex justify-center items-center w-full">
                <img
                  src="/assets/svgs/right-comma.svg"
                  alt="Quote"
                  className="absolute bottom-0 right-3 md:right-3 lg:right-20 xl:right-45"
                />
              </div>
            </div>
            {/* Right Arrow */}
            <div>
              <button
                onClick={handleNext}
                className="group hidden md:flex shrink-0 w-12 h-12 rounded-full bg-white border-2 border-grad-purple items-center justify-center hover:bg-grad-purple transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <img
                  src="/assets/svgs/left-arrow-purple.svg"
                  alt="Right Arrow"
                  className="w-3.5 h-3.5 rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </div>
            {/* Mobile */}
            <div className="flex md:hidden items-center justify-center gap-4">
              <button
                onClick={handlePrev}
                className="group shrink-0 w-12 h-12 rounded-full bg-white border-2 border-grad-purple flex items-center justify-center hover:bg-grad-purple transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <img
                  src="/assets/svgs/left-arrow-purple.svg"
                  alt="Left Arrow"
                  className="w-3.5 h-3.5 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </button>
              <button
                onClick={handleNext}
                className="group shrink-0 w-12 h-12 rounded-full bg-white border-2 border-grad-purple flex items-center justify-center hover:bg-grad-purple transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
              >
                <img
                  src="/assets/svgs/left-arrow-purple.svg"
                  alt="Right Arrow"
                  className="w-3.5 h-3.5 rotate-180 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </button>
            </div>
          </div>
          {/* Avatars Row */}
          <div className="flex justify-center items-end gap-2 md:gap-6 lg:gap-10 xl:gap-14 h-32 md:h-40 lg:max-h-45 xl:max-h-50">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex flex-col items-center gap-1.5 lg:gap-2.5 transition-all overflow-hidden duration-400 cursor-pointer ${
                    isActive
                      ? "scale-100 opacity-100"
                      : "scale-100 opacity-60 hover:opacity-80"
                  }`}
                >
                  <div
                    className={`rounded-full overflow-hidden transition-all duration-400 ${
                      isActive
                        ? "w-12 h-12 md:w-18 md:h-18 lg:w-25 lg:h-25 shadow-lg"
                        : "w-10 h-10 md:w-16 md:h-16 lg:w-21.25 lg:h-21.25"
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src="/assets/svgs/five-stars.svg"
                      alt="5 stars"
                      className="h-3 md:h-4 lg:h-5"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span
                      className={`font-semibold transition-all duration-300 ${
                        isActive
                          ? "text-xs md:text-sm lg:text-[18px] text-brand-dark"
                          : "text-[10px] md:text-xs lg:text-sm text-brand-gray"
                      }`}
                    >
                      {testimonial.name}
                    </span>
                    <span
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-[10px] md:text-xs lg:text-sm text-medium-gray"
                          : "text-[8px] md:text-[10px] lg:text-xs text-light-gray"
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
      </div>
    </section>
  );
};

export default Customer;
