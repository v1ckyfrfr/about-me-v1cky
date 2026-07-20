"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Terminal } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-20 border-t-4 border-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 inline-block bg-[#90E0FF] px-4 py-2 border-3 border-black brutal-shadow-sm transform rotate-1">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="text-lg font-medium leading-relaxed bg-white border-3 border-black p-6 brutal-shadow">
            <p className="mb-4">
              I'm a passionate developer who loves building things for the web
              and experimenting with AI. My journey started with customizing
              Linux environments and writing small scripts, which eventually led
              me down the rabbit hole of full-stack development.
            </p>
            <p>
              I believe in creating software that is not only functional but
              also visually striking and intuitive. When I'm not coding, you can
              find me reading docs, exploring new frameworks, or contributing to
              open-source projects.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-auto md:h-full bg-[#FFDE59] border-3 border-black brutal-shadow flex items-center justify-center overflow-hidden group p-4 md:p-8">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzAwMCIvPgo8L3N2Zz4=')] opacity-20"></div>
            <div className="relative z-10 w-64 h-64 md:w-full md:h-full max-h-[400px] border-4 border-black bg-[#FF90E8] flex items-center justify-center brutal-shadow group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
              <img
                src="/Images/myself/myself.jpg"
                alt="Myself"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
