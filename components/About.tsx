"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Code2, Heart, Lightbulb, Zap } from "lucide-react";
import { personalInfo } from "@/lib/tools-data";

/**
 * Animated counter that counts from 0 to target when in view
 */
function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return controls.stop;
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const values = [
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Identifying real challenges and building practical solutions.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Maintainable, performant, and built with user experience in mind.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "Browser-based processing for privacy and lightning speed.",
  },
  {
    icon: Heart,
    title: "Free & Open",
    description: "All tools free to use, available 24/7, no sign-up required.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-32 bg-surface-900/80 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_50%,rgba(45,212,191,0.06),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* ── Eyebrow ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-400 font-display">
              About Me
            </span>
          </motion.div>

          {/* ── Two-column layout: Title/Bio + Stats ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Left column */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight mb-10"
              >
                Passionate about
                <br />
                <span className="gradient-text">making a difference</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-5 text-white/50 text-base leading-relaxed"
              >
                <p>
                  I&apos;m {personalInfo.name}, a web developer who believes in
                  the power of simple, effective tools. Each project I create is
                  designed to solve a specific problem that I or other developers
                  face.
                </p>
                <p>
                  From converting logos to generating Arabic placeholder text,
                  to securely sharing temporary links — every tool serves a
                  purpose. I focus on intuitive interfaces, privacy through
                  client-side processing, and making everything completely free.
                </p>
              </motion.div>
            </div>

            {/* Right column — Stats */}
            <div className="flex items-end">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-2 gap-5 w-full"
              >
                {[
                  { value: 6, suffix: "+", label: "Tools Built" },
                  { value: 100, suffix: "%", label: "Free to Use" },
                  { value: 24, suffix: "/7", label: "Available" },
                  {
                    value: 0,
                    suffix: "",
                    label: "Sign-ups Required",
                    displayValue: "Zero",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-500"
                  >
                    <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                      {stat.displayValue || (
                        <AnimatedCounter
                          target={stat.value}
                          suffix={stat.suffix}
                        />
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Enhanced Values Grid with 3D Globe ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Left side - 4 value cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30, rotateY: -20 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                  whileHover={{ 
                    y: -8,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + i * 0.1,
                  }}
                  className="group p-7 md:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/[0.08] hover:border-primary-400/30 transition-all duration-500 shadow-xl perspective-[1000px]"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/0 via-primary-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-accent-400/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay: i * 2 }
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <value.icon className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-500" />
                    </motion.div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-500">
                      {value.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-500">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side - 3D Globe Visualization */}
            <div className="lg:col-span-2 hidden lg:flex items-center justify-center perspective-[1500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1,
                  rotateY: [0, 360]
                } : {}}
                transition={{
                  opacity: { duration: 1, delay: 0.8 },
                  scale: { duration: 1, delay: 0.8 },
                  rotateY: { duration: 20, repeat: Infinity, ease: "linear", delay: 1.5 }
                }}
                className="relative w-80 h-80"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Globe sphere */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 to-accent-400/10 backdrop-blur-xl border border-white/[0.15] shadow-2xl overflow-hidden">
                  {/* Grid lines - latitude */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={`lat-${i}`}
                      className="absolute left-0 right-0 h-px bg-white/[0.08]"
                      style={{ top: `${(i + 1) * 14.28}%` }}
                    />
                  ))}
                  
                  {/* Grid lines - longitude */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`lon-${i}`}
                      className="absolute top-0 bottom-0 w-px bg-white/[0.08] left-1/2"
                      style={{ 
                        transform: `translateX(-50%) rotateZ(${i * 22.5}deg)`,
                        transformOrigin: "center"
                      }}
                    />
                  ))}

                  {/* Glowing dots representing global availability */}
                  {[
                    { top: "20%", left: "30%" },
                    { top: "45%", left: "60%" },
                    { top: "65%", left: "25%" },
                    { top: "35%", left: "75%" },
                    { top: "70%", left: "50%" },
                    { top: "25%", left: "55%" },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-primary-400 shadow-lg"
                      style={pos}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.3
                      }}
                    >
                      <div className="absolute inset-0 rounded-full bg-primary-400 blur-md" />
                    </motion.div>
                  ))}

                  {/* Rotating ring around globe */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{ rotateX: [0, 360] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full border-2 border-accent-400/30 border-dashed"
                      style={{ transform: "rotateX(75deg)" }}
                    />
                  </motion.div>
                </div>

                {/* Outer glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-primary-400/20 rounded-full blur-3xl opacity-50" />
                
                {/* Orbiting particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-accent-400/60 shadow-lg"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 1
                    }}
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${120 + i * 20}px center`
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-accent-400 blur-sm" />
                  </motion.div>
                ))}

                {/* 24/7 Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary-400 text-surface-950 px-6 py-3 rounded-full font-display font-bold text-sm shadow-xl whitespace-nowrap"
                >
                  Available Globally 24/7
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
