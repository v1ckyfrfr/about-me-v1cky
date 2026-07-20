"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { TIMELINE, CERTIFICATES } from "../data/portfolio";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Journey() {
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedCertificates = showAllCertificates
    ? CERTIFICATES
    : CERTIFICATES.slice(0, 5);

  return (
    <>
      <section className="py-20 border-t-4 border-black grid lg:grid-cols-2 gap-16">
        {/* Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-black mb-10 inline-block bg-[#FFDE59] px-4 py-2 border-3 border-black brutal-shadow-sm transform -rotate-1">
            My Journey
          </h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-black">
            {TIMELINE.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-3 border-black ${item.color} brutal-shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}
                >
                  {item.icon}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 border-3 border-black brutal-shadow-sm">
                  <div className="font-black text-xl mb-1">{item.title}</div>
                  <div className="font-bold text-sm bg-black text-white inline-block px-2 py-1 mb-2">
                    {item.year}
                  </div>
                  <p className="font-medium text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col"
        >
          <h2 className="text-4xl font-black mb-10 inline-block self-start bg-[#90FF90] px-4 py-2 border-3 border-black brutal-shadow-sm transform rotate-1">
            Certificates
          </h2>
          <div className="flex flex-col gap-6">
            <AnimatePresence>
              {displayedCertificates.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  layout
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  whileHover={{ x: 10 }}
                  className={`${cert.color} p-4 border-3 border-black brutal-shadow-sm flex items-center justify-between gap-4`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="bg-white border-2 border-black overflow-hidden w-16 h-12 flex items-center justify-center brutal-shadow-sm group cursor-pointer"
                      onClick={() =>
                        cert.image ? setSelectedImage(cert.image) : null
                      }
                    >
                      {cert.image ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                        />
                      ) : (
                        <span className="font-bold">?</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-black text-lg">{cert.title}</h4>
                      <p className="font-bold text-sm opacity-80">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <div className="font-black border-2 border-black bg-white px-2 py-1 text-sm transform rotate-3">
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {CERTIFICATES.length > 5 && (
            <button
              onClick={() => setShowAllCertificates(!showAllCertificates)}
              className="mt-8 self-center border-3 border-black bg-white px-6 py-3 font-black text-lg brutal-shadow-sm hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100 transition-all uppercase"
            >
              {showAllCertificates
                ? "Hide Certificates"
                : "Show All Certificates"}
            </button>
          )}
        </motion.div>
      </section>

      {/* Image Preview Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="max-w-full max-h-[85vh] object-contain border-4 border-black brutal-shadow-sm bg-white"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-[#FF90E8] border-3 border-black rounded-full flex items-center justify-center font-black text-xl hover:bg-[#FFDE59] brutal-shadow-sm z-50 transition-colors"
              >
                X
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
