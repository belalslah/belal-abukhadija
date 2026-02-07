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

      {/* Floating 3D skill badges - appears on larger screens */}
      <div className="hidden xl:block absolute inset-0 pointer-events-none">
        {[
          { skill: "React", top: "20%", left: "15%", delay: 0 },
          { skill: "Next.js", top: "60%", right: "20%", delay: 1 },
          { skill: "TypeScript", top: "35%", right: "10%", delay: 2 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: item.top, left: item.left, right: item.right }}
            initial={{ opacity: 0, scale: 0, rotateY: -180 }}
            animate={{ 
              opacity: [0.4, 0.7, 0.4],
              scale: [1, 1.1, 1],
              rotateY: 0,
              y: [0, -20, 0]
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
              rotateY: { duration: 1, delay: item.delay + 0.5 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }
            }}
          >
            <div 
              className="px-6 py-3 bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-full border border-white/[0.15] shadow-2xl"
              style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
            >
              <span className="text-sm font-display font-bold text-primary-400">
                {item.skill}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
