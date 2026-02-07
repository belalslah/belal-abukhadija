"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Paintbrush, Code2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I identify real problems that developers and creators face daily. Every tool starts with a genuine need — not a trend.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "Clean, intuitive interfaces that put the user first. No clutter, no confusion — just the functionality you need.",
    icon: Paintbrush,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Built with modern tech for speed and privacy. Client-side processing means your data never leaves your browser.",
    icon: Code2,
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-surface-950 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(45,212,191,0.06),transparent)]" />

      {/* Animated 3D Connection Lines */}
      <div className="absolute top-1/2 left-0 right-0 hidden md:block">
        <svg className="w-full h-1" viewBox="0 0 100 1" preserveAspectRatio="none">
          <motion.line
            x1="0"
            y1="0.5"
            x2="100"
            y2="0.5"
            stroke="url(#lineGradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,212,191,0)" />
              <stop offset="50%" stopColor="rgba(45,212,191,0.3)" />
              <stop offset="100%" stopColor="rgba(45,212,191,0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-400 font-display">
              How I Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-20"
          >
            From idea to
            <br />
            <span className="text-white/40">launch, simplified</span>
          </motion.h2>

          {/* ── Enhanced 3D Steps Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-[2000px]">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 80, rotateY: -30 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                whileHover={{ 
                  y: -12, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{
                  opacity: { duration: 0.7, delay: 0.3 + i * 0.2 },
                  y: { duration: 0.7, delay: 0.3 + i * 0.2 },
                  rotateY: { duration: 0.7, delay: 0.3 + i * 0.2 },
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Card Container */}
                <div 
                  className="relative p-8 md:p-10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.12] shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-primary-400/30"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/0 via-primary-400/20 to-accent-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                  
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Floating 3D Icon */}
                    <motion.div
                      initial={{ rotateY: 0 }}
                      animate={{ 
                        rotateY: [0, 180, 360],
                        y: [0, -10, 0]
                      }}
                      transition={{
                        rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay: i * 2 },
                        y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <step.icon className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors duration-500" />
                    </motion.div>

                    {/* Large 3D number in background */}
                    <div 
                      className="absolute top-6 right-6 font-display text-8xl font-bold text-white/[0.03] group-hover:text-primary-400/10 transition-colors duration-500 leading-none select-none"
                      style={{ transform: "translateZ(-10px)" }}
                    >
                      {step.number}
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Floating particle */}
                  <motion.div
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5
                    }}
                    className="absolute bottom-8 right-8 w-12 h-12 bg-primary-400/20 rounded-full blur-lg"
                  />
                </div>

                {/* 3D Shadow/Depth */}
                <div 
                  className="absolute inset-0 bg-surface-950/50 rounded-2xl blur-xl opacity-50"
                  style={{ transform: "translateZ(-30px)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
