import React from "react";
import { Terminal, Code, Briefcase } from "lucide-react";

export const SKILLS = [
  { name: "HTML", color: "bg-[#FFDE59]" },
  { name: "CSS", color: "bg-[#FF90E8]" },
  { name: "JavaScript", color: "bg-[#90E0FF]" },
  { name: "React", color: "bg-[#B290FF]" },
  { name: "Next.js", color: "bg-[#FFDE59]" },
  { name: "Node.js", color: "bg-[#90FF90]" },
  { name: "Tailwind", color: "bg-[#FF90E8]" },
  { name: "Video Editing", color: "bg-[#90E0FF]" },
  { name: "Linux", color: "bg-[#FFB347]" },
  { name: "Git", color: "bg-[#FFDE59]" },
  { name: "C", color: "bg-[#B290FF]" },
  { name: "OS Installation", color: "bg-[#FFB347]" },
];

export const PROJECTS = [
  {
    title: "Artikel Bandung",
    description: "Simple article about Bandung",
    tech: ["HTML", "CSS"],
    color: "bg-[#B290FF]",
    image: "/Images/projects/project1.png",
    demoLink: "",
    githubLink: "https://github.com/v1ckyfrfr/artikel-bandung.git",
  },
  {
    title: "10 PM Circle K",
    description: "A video edited by myself.",
    tech: ["Capcut"],
    color: "bg-[#FF90E8]",
    image: "/Images/projects/project2.jpg",
    demoLink: "https://www.instagram.com/p/DWhBM6wj-Wa/",
    githubLink: "",
  },
  {
    title: "Website Kelas DKV",
    description: "Personal Project Website Kelas DKV",
    tech: ["Next.js", "React", "Supabase", "Javascript", "TypeScript", "CSS"],
    color: "bg-[#90E0FF]",
    image: "/Images/projects/project3.png",
    demoLink: "",
    githubLink: "https://github.com/v1ckyfrfr/website-kelas.git",
  },
  {
    title: "Vixy-AI",
    description: "A Personal AI Assistant powered By Gemini API",
    tech: ["Node.js", "SQLite", "Express", "HTML", "CSS", "JavaScript"],
    color: "bg-[#FFDE59]",
    image: "/Images/projects/project4.png",
    demoLink: "",
    githubLink: "https://github.com/v1ckyfrfr/vixy.git",
  },
  {
    title: "Echo-Crypt",
    description: "An Audio Steganography Lab",
    tech: ["React", "WaveSurfer.js", "Tailwind", "Sonner", "Lucide React"],
    color: "bg-[#90FF90]",
    image: "/Images/projects/project5.png",
    demoLink: "https://echo-crypt-ruddy.vercel.app/",
    githubLink: "https://github.com/v1ckyfrfr/echo-crypt.git",
  },
  {
    title: "Portfolio Website",
    description: "Simple Personal Portfolio Website",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "bg-[#FFB347]",
    image: "/Images/projects/project6.png",
    demoLink: "https://v1ckyfrfr.github.io/portfolio-vicky/",
    githubLink: "https://github.com/v1ckyfrfr/portfolio-vicky.git",
  },
];

export const TIMELINE = [
  {
    year: "2026",
    title: "Future Web Dev & Linux Enthusiast",
    description:
      "Started working on complex web applications, using Linux as the Main Operating System, and Exploring AI integrations.",
    icon: <Briefcase className="w-6 h-6" />,
    color: "bg-[#90FF90]",
  },
  {
    year: "2025",
    title: "Started my career",
    description:
      "Learning about Cybersecurity, Web Development, and Basic Linux commands with Termux, started building my first personal project using only a Phone!",
    icon: <Terminal className="w-6 h-6" />,
    color: "bg-[#FFB347]",
  },
  {
    year: "2024",
    title: "A Roblox Scripter",
    description:
      "Making a simple logic script in Lua, and build interactive UI/GUI in game.",
    icon: <Code className="w-6 h-6" />,
    color: "bg-[#90E0FF]",
  },
];

export const CERTIFICATES = [
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "2025",
    color: "bg-[#FFDE59]",
    image: "/Images/certifications/sertifikat1.jpg",
  },
  {
    title: "Foundations Of Cybersecurity",
    issuer: "Coursera",
    date: "2025",
    color: "bg-[#FF90E8]",
    image: "/Images/certifications/sertifikat2.jpg",
  },
  {
    title: "Web Development Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2026",
    color: "bg-[#B290FF]",
    image: "/Images/certifications/sertifikat3.jpg",
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    color: "bg-[#90FF90]",
    image: "/Images/certifications/sertifikat4.jpg",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    color: "bg-[#90E0FF]",
    image: "/Images/certifications/sertifikat5.jpg",
  },
  {
    title: "Information Technology Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "2025",
    color: "bg-[#FFDE59]",
    image: "/Images/certifications/sertifikat6.jpg",
  },
  {
    title: "Introduction To Financial Literacy",
    issuer: "Dicoding",
    date: "2026",
    color: "bg-[#FF90E8]",
    image: "/Images/certifications/sertifikat7.jpg",
  },
  {
    title: "Workshop PFN",
    issuer: "PFN",
    date: "2025",
    color: "bg-[#B290FF]",
    image: "/Images/certifications/sertifikat8.jpg",
  },
  {
    title: "English Club Program",
    issuer: "Direct English",
    date: "2025",
    color: "bg-[#90FF90]",
    image: "/Images/certifications/sertifikat9.jpg",
  },
  {
    title: "Introduction to Computers And Operating Systems And Security",
    issuer: "Coursera",
    date: "2026",
    color: "bg-[#90E0FF]",
    image: "/Images/certifications/sertifikat10.jpg",
  },
  {
    title: "Fundamentals of Red Hat Enterprise Linux",
    issuer: "Coursera",
    date: "2026",
    color: "bg-[#FFB347]",
    image: "/Images/certifications/sertifikat11.png",
  },
];
