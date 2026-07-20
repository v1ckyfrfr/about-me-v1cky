"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#FDFBF7] border-b-4 border-black p-4 md:px-8 flex flex-col md:flex-row justify-between md:items-center brutal-shadow-sm">
      <div className="flex justify-between items-center w-full md:w-auto">
        <div className="text-2xl font-black tracking-tighter">
          DEV<span className="text-[#FF90E8]">.</span>
        </div>
        <button
          className="md:hidden p-2 border-2 border-black bg-[#90E0FF] brutal-shadow-sm hover:translate-y-1 hover:shadow-none transition-all"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 font-bold">
        <a
          href="#about"
          className="hover:underline underline-offset-4 decoration-4 decoration-[#90E0FF]"
        >
          About
        </a>
        <a
          href="#skills"
          className="hover:underline underline-offset-4 decoration-4 decoration-[#FFDE59]"
        >
          Skills
        </a>
        <a
          href="#projects"
          className="hover:underline underline-offset-4 decoration-4 decoration-[#B290FF]"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:underline underline-offset-4 decoration-4 decoration-[#FF90E8]"
        >
          Contact
        </a>
      </div>

      <a
        href="#contact"
        className="hidden md:inline-block border-2 border-black bg-[#FFDE59] px-4 py-2 font-bold brutal-shadow-sm hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#000] transition-all"
      >
        Hire Me
      </a>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 font-bold mt-6 pb-2">
          <a
            href="#about"
            onClick={toggleMenu}
            className="block p-3 border-2 border-black bg-[#90E0FF] text-center hover:bg-[#72cbf0] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="block p-3 border-2 border-black bg-[#FFDE59] text-center hover:bg-[#e6c747] transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block p-3 border-2 border-black bg-[#B290FF] text-center hover:bg-[#9974f0] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block p-3 border-2 border-black bg-[#FF90E8] text-center hover:bg-[#f074d6] transition-colors"
          >
            Contact
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block p-3 border-2 border-black bg-white text-center hover:bg-gray-100 transition-colors mt-2"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
