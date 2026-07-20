"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-start pt-10 pb-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-4xl"
      >
        <div className="inline-block border-2 border-black bg-[#90FF90] px-3 py-1 font-bold mb-6 brutal-shadow-sm transform -rotate-2">
          Hello World, I am
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-black mb-4 leading-none uppercase tracking-tight">
          Vicky <br />
          <span
            className="text-transparent bg-clip-text bg-black"
            style={{ WebkitTextStroke: "2px black", color: "#FFDE59" }}
          >
            Rachman
          </span>
        </h1>

        <p className="text-xl md:text-2xl font-bold mb-8 max-w-2xl border-l-4 border-black pl-4 py-2 bg-white/50">
          Student • Future Web Developer • Linux Enthusiast • AI Explorer
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[#FF90E8] border-3 border-black px-6 py-3 font-bold text-lg brutal-shadow hover:bg-[#ff7ae0] transition-colors"
          >
            View Projects <ChevronDown className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white border-3 border-black px-6 py-3 font-bold text-lg brutal-shadow hover:bg-gray-100 transition-colors"
          >
            Contact Me <Mail className="w-5 h-5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
