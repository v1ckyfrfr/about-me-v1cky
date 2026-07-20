"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const WHATSAPP_NUMBER = "6281287073349"; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !message.trim()) {
      setError("Please fill out both Name and Message.");
      return;
    }

    // Rate limiting logic
    const lastSentStr = localStorage.getItem("lastWhatsAppMessageTime");
    if (lastSentStr) {
      const lastSentTime = parseInt(lastSentStr, 10);
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - lastSentTime;

      if (timeDiff < 60000) {
        // 60 seconds
        const timeLeft = Math.ceil((60000 - timeDiff) / 1000);
        setError(
          `Please wait ${timeLeft} seconds before sending another message to prevent spam.`,
        );
        return;
      }
    }

    // Save current time to localStorage
    localStorage.setItem(
      "lastWhatsAppMessageTime",
      new Date().getTime().toString(),
    );

    const text = `Hello! My name is ${name}.\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setSuccess(true);
    setName("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 border-t-4 border-black mb-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="bg-[#111111] text-white p-8 md:p-12 border-4 border-black brutal-shadow relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF90E8] rounded-full filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase">
              Contact ME!
            </h2>
            <p className="text-xl font-medium mb-8">
              Got a project in mind, a question, or just want to say hi? I'm
              always open to new opportunities!
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/v1ckyfrfr"
                target="_blank"
                className="w-12 h-12 bg-[#FFDE59] text-black border-2 border-black flex items-center justify-center brutal-shadow hover:bg-white transition-colors"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/vickyy-rachman-8a742b38b/"
                target="_blank"
                className="w-12 h-12 bg-[#90E0FF] text-black border-2 border-black flex items-center justify-center brutal-shadow hover:bg-white transition-colors"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/v1ckyfr"
                target="_blank"
                className="w-12 h-12 bg-[#FF90E8] text-black border-2 border-black flex items-center justify-center brutal-shadow hover:bg-white transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-6 border-3 border-black brutal-shadow-sm flex flex-col gap-4"
          >
            {error && (
              <div className="bg-[#FF90E8] border-2 border-black p-3 font-bold text-sm">
                ⚠️ {error}
              </div>
            )}
            {success && (
              <div className="bg-[#90FF90] border-2 border-black p-3 font-bold text-sm">
                ✅ Redirecting to WhatsApp!
              </div>
            )}

            <div>
              <label className="block font-black mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-black p-3 bg-[#FDFBF7] focus:outline-none focus:bg-[#FFDE59] transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label className="block font-black mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-2 border-black p-3 bg-[#FDFBF7] focus:outline-none focus:bg-[#90FF90] transition-colors h-32 resize-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#B290FF] border-2 border-black py-4 font-black text-xl brutal-shadow-sm hover:translate-y-1 hover:shadow-none transition-all uppercase mt-2 cursor-pointer"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
