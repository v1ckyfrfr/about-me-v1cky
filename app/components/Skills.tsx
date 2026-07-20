"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { SKILLS } from "../data/portfolio";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t-4 border-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl md:text-5xl font-black mb-10 inline-block bg-[#B290FF] px-4 py-2 border-3 border-black brutal-shadow-sm transform -rotate-1">
          Skills Arsenal
        </h2>
        <motion.div
          variants={staggerContainer}
          className="flex flex-wrap gap-4"
        >
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
              className={`${skill.color} border-3 border-black px-6 py-3 font-bold text-lg brutal-shadow-sm cursor-default`}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
