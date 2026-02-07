"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { tools } from "@/lib/tools-data";
import ToolCard from "./ToolCard";

export default function Tools() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="tools"
      className="relative py-32 bg-surface-950 overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-400/[0.04] rounded-full blur-[250px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* ── Section Header with 3D Element ── */}
          <div ref={headerRef} className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isHeaderInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-400 font-display">
                  My Creations
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8"
              >
                Tools built with
                <br />
                <span className="gradient-text">purpose</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/50 max-w-sm text-base leading-relaxed"
              >
                Free, practical web tools that solve everyday problems for
                developers and creators.
              </motion.p>
            </div>

            {/* 3D Rotating Gear/Cog Mechanism */}
            <div className="hidden lg:flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative w-80 h-80"
              >
                {/* Outer glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 via-accent-400/20 to-primary-400/20 rounded-full blur-3xl opacity-50" />
                
                {/* Main large gear */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(45,212,191,0.3)" />
                        <stop offset="100%" stopColor="rgba(56,189,248,0.15)" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M50 10 L54 10 L56 5 L60 5 L62 10 L66 12 L70 8 L74 10 L74 14 L78 18 L82 16 L84 20 L80 24 L82 28 L88 28 L90 32 L90 36 L88 40 L90 44 L90 48 L88 50 L90 54 L90 58 L88 62 L82 62 L80 66 L84 70 L82 74 L78 72 L74 76 L74 80 L70 82 L66 78 L62 80 L60 85 L56 85 L54 80 L50 80 L46 80 L44 85 L40 85 L38 80 L34 78 L30 82 L26 80 L26 76 L22 72 L18 74 L16 70 L20 66 L18 62 L12 62 L10 58 L10 54 L12 50 L10 46 L10 42 L12 38 L10 34 L10 30 L12 28 L18 28 L20 24 L16 20 L18 16 L22 18 L26 14 L26 10 L30 8 L34 12 L38 10 L40 5 L44 5 L46 10 Z"
                      fill="url(#gearGradient)"
                      stroke="rgba(45,212,191,0.4)"
                      strokeWidth="0.5"
                    />
                    <circle cx="50" cy="50" r="20" fill="rgba(17,17,22,0.8)" stroke="rgba(45,212,191,0.3)" strokeWidth="1" />
                    <circle cx="50" cy="50" r="12" fill="rgba(45,212,191,0.1)" stroke="rgba(45,212,191,0.2)" strokeWidth="0.5" />
                  </svg>
                </motion.div>

                {/* Medium gear (counter-clockwise) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 right-0 w-32 h-32"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 15 L53 15 L55 10 L58 10 L60 15 L65 18 L70 14 L73 17 L70 22 L73 27 L78 27 L80 30 L80 34 L78 37 L80 42 L80 46 L78 49 L80 54 L80 58 L78 61 L73 61 L70 66 L73 71 L70 74 L65 70 L60 73 L58 78 L55 78 L53 73 L50 73 L47 73 L45 78 L42 78 L40 73 L35 70 L30 74 L27 71 L30 66 L27 61 L22 61 L20 58 L20 54 L22 49 L20 44 L20 40 L22 37 L20 32 L20 28 L22 25 L27 25 L30 20 L27 15 L30 12 L35 16 L40 13 L42 8 L45 8 L47 13 Z"
                      fill="rgba(56,189,248,0.2)"
                      stroke="rgba(56,189,248,0.4)"
                      strokeWidth="0.5"
                    />
                    <circle cx="50" cy="50" r="15" fill="rgba(17,17,22,0.9)" stroke="rgba(56,189,248,0.3)" strokeWidth="0.5" />
                  </svg>
                </motion.div>

                {/* Small gear (clockwise) */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute bottom-4 left-4 w-20 h-20"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      d="M50 20 L55 20 L58 12 L65 12 L68 20 L75 25 L82 18 L88 25 L80 32 L82 40 L92 42 L92 52 L82 54 L80 62 L88 68 L82 75 L75 68 L68 72 L65 80 L58 80 L55 72 L50 72 L45 72 L42 80 L35 80 L32 72 L25 68 L18 75 L12 68 L20 62 L18 54 L8 52 L8 42 L18 40 L20 32 L12 25 L18 18 L25 25 L32 20 L35 12 L42 12 L45 20 Z"
                      fill="rgba(45,212,191,0.15)"
                      stroke="rgba(45,212,191,0.35)"
                      strokeWidth="0.5"
                    />
                    <circle cx="50" cy="50" r="18" fill="rgba(17,17,22,0.9)" stroke="rgba(45,212,191,0.25)" strokeWidth="0.5" />
                  </svg>
                </motion.div>

                {/* Center icon - wrench */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center shadow-2xl">
                    <svg className="w-8 h-8 text-surface-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    x: [0, 10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 left-1/4 w-3 h-3 bg-primary-400/60 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    x: [0, -8, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-8 right-1/4 w-2 h-2 bg-accent-400/60 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [-8, 8, -8],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/4 -right-2 w-2 h-2 bg-primary-400/50 rounded-full blur-sm"
                />
              </motion.div>
            </div>
          </div>

          {/* ── Tool Cards ── */}
          <div className="space-y-3">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>

          {/* ── "More coming" note ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm text-white/30 font-display">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400/40 animate-pulse-soft" />
              More tools in development
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
