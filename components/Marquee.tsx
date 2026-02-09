"use client";

import { motion } from "framer-motion";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "Web Tools",
  "REST APIs",
  "UI / UX",
  "Performance",
  "Privacy-First",
  "Open Source",
];

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
    <section className="relative py-16 bg-surface-950 overflow-hidden select-none">
      {/* Top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Floating 3D orbs in background */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 w-40 h-40 bg-accent-400/10 rounded-full blur-3xl"
      />

      {/* Row 1 — outlined / stroke text, scrolling left with 3D effect */}
      <div className="flex animate-marquee whitespace-nowrap mb-4 perspective-[1000px]">
        {doubled.map((skill, i) => (
          <motion.span
            key={`a-${i}`}
            className="mx-6 text-4xl md:text-6xl font-display font-bold text-transparent hover:scale-110 transition-transform duration-200"
            style={{ 
              WebkitTextStroke: "1px rgba(255,255,255,0.12)",
              transformStyle: "preserve-3d"
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Row 2 — filled with gradient, scrolling right with 3D effect */}
      <div className="flex animate-marquee-reverse whitespace-nowrap perspective-[1000px]">
        {doubled.map((skill, i) => (
          <motion.span
            key={`b-${i}`}
            className="mx-6 text-4xl md:text-6xl font-display font-bold gradient-text opacity-20 hover:opacity-50 hover:scale-110 transition-all duration-200"
            style={{ transformStyle: "preserve-3d" }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
