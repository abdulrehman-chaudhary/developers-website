import React from "react";
import { footerLinks, socialIcons } from "../../data";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center bg-white pt-10 pb-6">
      <div className="w-[90%] md:w-[88%] lg:w-[85%] xl:w-[86%] max-w-360 flex flex-col">
        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-7 md:pb-12 xl:pb-20">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-7.25 h-5.5">
                <img src="/assets/svgs/dev-logo.svg" alt="Logo" />
              </div>
              <span className="text-[24px] text-black font-['Inspiration']">
                Ik developers
              </span>
            </div>
            <div>
              <p className="text-[#718096] text-[18px] leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div>
              <img
                src="/assets/svgs/google-page-icon.svg"
                alt="Google PageSpeed Badge"
              />
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#4A5568] font-bold text-base">Links</h3>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#718096] hover:text-purple-600 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h3 className="text-[#4A5568] font-bold text-base">Contact us</h3>
            <div className="flex flex-col gap-4">
              <p className="text-[#718096] text-sm leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p className="text-[#718096] text-sm">+923183561921</p>
            </div>
          </div>
          {/* Column 4 */}
          <div className="flex flex-col justify-end items-start lg:items-end">
            <div className="flex gap-0">
              {socialIcons.map((item, index) => (
                <a key={index} href={item.href} className="w-10 h-10">
                  <img src={item.src} alt="social icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-[#CBD5E0]" />
        {/* Copyright */}
        <div className="pt-8 pb-4 text-center">
          <p className="text-[#4A5568] text-xs">
            © 2023 Copyright by IK Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
