import React, { useState } from "react";
import { techStackData } from "../../data";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("backend");

  const activeCategory = techStackData.find(
    (category) => category.id === activeTab,
  );

  return (
    <section className="w-full flex justify-center items-center bg-white py-12 md:py-14 lg:py-24 xl:pt-20">
      <div className="max-w-360 w-[90%] md:w-[88%] lg:w-[85%] xl:w-[80%] flex flex-col items-center gap-8 md:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6.25">
          <div className="w-17.25 h-1.25 bg-linear-to-r from-grad-pink to-grad-purple"></div>
          {/* Title */}
          <div className="flex flex-col items-center">
            <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] leading-tight">
              Our
            </h2>
            <h2 className="text-brand-dark text-[28px] md:text-[32px] lg:text-[35px] font-bold leading-tight">
              Tech Stack
            </h2>
          </div>
        </div>
        {/* Tabs */}
        <div className="flex flex-col gap-12 lg:gap-16 xl:gap-20">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {techStackData.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 pb-4 transition-all relative cursor-pointer ${
                  activeTab === category.id
                    ? "bg-linear-to-r from-grad-pink to-grad-purple bg-clip-text text-transparent font-bold"
                    : "text-medium-gray hover:text-grad-pink font-medium"
                }`}
              >
                {category.label}

                <span
                  className={`absolute bottom-0 left-0 h-0.75 w-full bg-linear-to-r from-grad-pink to-grad-purple transition-all duration-200 ${activeTab === category.id ? "opacity-100" : "opacity-0"}`}
                />
              </button>
            ))}
          </div>
          {/* Tech grid */}
          <div className="w-full flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {activeCategory.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-full h-auto max-w-30 lg:max-w-50 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
