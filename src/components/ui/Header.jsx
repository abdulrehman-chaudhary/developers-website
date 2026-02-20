import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { navLinks } from "../../data";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="w-full flex justify-center items-center bg-white shadow-[0px_4px_40px_0px_#0000001A] sticky top-0 z-50">
        <div className="max-w-360 w-[90%] flex justify-between items-center py-3 md:py-4">
          {/* Left */}
          <div className="flex items-center gap-1">
            <div className="w-7.25 h-5.5">
              <img src="/assets/svgs/dev-logo.svg" alt="Logo" />
            </div>
            <span className="text-[24px] text-black font-['Inspiration']">
              Ik developers
            </span>
          </div>
          {/* Center */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#4A5568] hover:text-purple-600 text-[16px] font-medium leading-6.25 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="hidden lg:block bg-linear-to-r from-[#6675F7] to-[#57007B] text-white text-sm font-semibold py-3.5 px-6.25 rounded-md shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 cursor-pointer">
              Contact us
            </button>
            {/* Hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <img
                src="/assets/svgs/hamburger-icon.svg"
                alt="Menu"
                className="w-6 h-6 invert"
              />
            </button>
          </div>
        </div>
      </header>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        menuItems={navLinks}
      />
    </>
  );
};

export default Header;
