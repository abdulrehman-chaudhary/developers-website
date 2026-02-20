import React from "react";

const Sidebar = ({ isOpen, onClose, menuItems }) => {
    return (
        <div
            className={`fixed top-0 right-0 h-screen w-full bg-white z-50 transition-transform duration-300 flex flex-col items-center justify-center ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div>
                {/* Close Button */}
                <button onClick={onClose} className="absolute top-5 right-5">
                    <img
                        src="/assets/svgs/close.svg"
                        alt="Close button"
                        className="w-full h-auto invert"
                    />
                </button>
            </div>
            {/* Links */}
            <div className="flex flex-col items-center gap-6">
                <ul className="flex flex-col gap-6 text-[22px] font-medium text-center">
                    {menuItems?.map((item) => (
                        <li
                            key={item.name}
                            onClick={onClose}
                            className="text-gray-600 cursor-pointer hover:text-brand-blue transition-colors"
                        >
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                {/* Sidebar Buttons */}
                <div className="p-[1.5px] rounded-full bg-linear-to-r from-brand-blue to-brand-cyan">
                    <button className=" text-white px-6 py-2 rounded-full font-medium bg-linear-to-r from-[#6675F7] to-[#57007B] hover:bg-gray-50 transition-all duration-300 text-sm block">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
