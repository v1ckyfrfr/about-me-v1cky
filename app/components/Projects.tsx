"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { GithubIcon } from "./icons";
import { PROJECTS } from "../data/portfolio";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t-4 border-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 inline-block bg-[#FF90E8] px-4 py-2 border-3 border-black brutal-shadow-sm transform rotate-1">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="bg-white border-3 border-black brutal-shadow flex flex-col h-full group"
            >
              <div
                className={`${project.color} h-48 border-b-3 border-black flex items-center justify-center overflow-hidden relative`}
              >
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')]"></div>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 relative z-10"
                  />
                ) : (
                  <div className="w-16 h-16 group-hover:scale-125 transition-transform duration-300 relative z-10 font-black text-4xl">
                    ?
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                <p className="font-medium text-gray-800 mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold px-2 py-1 border-2 border-black bg-gray-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.demoLink || "#"}
                    target={project.demoLink ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#FFDE59] border-2 border-black py-2 font-bold brutal-shadow-sm hover:bg-yellow-400"
                  >
                    Demo
                  </a>
                  <a
                    href={project.githubLink || "#"}
                    target={project.githubLink ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-white border-2 border-black py-2 font-bold flex justify-center items-center gap-2 brutal-shadow-sm hover:bg-gray-100"
                  >
                    <GithubIcon className="w-5 h-5" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
