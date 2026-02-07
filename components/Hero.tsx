"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { personalInfo } from "@/lib/tools-data";

/**
 * Word-by-word reveal animation component
 * Each word slides up from below with staggered timing
 */
function RevealText({
  children,
  delay = 0,
  className = "",
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {children.split(" ").map((word, i) => (
        <span key={i} className="overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.07,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -80]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const scrollToTools = () => {
    document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-950"
    >
      {/* ── Background Layers ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(45,212,191,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_50%,rgba(45,212,191,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(45,212,191,0.07),transparent)]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* ── Floating Orbs with Parallax ── */}
      <motion.div
        style={{ y: orb1Y }}
        className="absolute top-[15%] left-[8%] w-[500px] h-[500px] rounded-full bg-primary-400/[0.1] blur-[150px] animate-float"
      />
      <motion.div
        style={{ y: orb2Y }}
        className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-primary-400/[0.08] blur-[130px] animate-float"
        data-delay="-3s"
      />
      <div className="absolute top-[60%] left-[45%] w-[300px] h-[300px] rounded-full bg-primary-300/[0.05] blur-[100px] animate-glow" />

      {/* ── Decorative Lines ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-[12%] right-[18%] w-px h-40 bg-gradient-to-b from-transparent via-primary-500/20 to-transparent origin-top"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-[28%] left-[6%] w-40 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent origin-left"
      />

      {/* Spinning ring */}
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute top-[20%] right-[10%] w-24 h-24 text-primary-500/[0.08] animate-spin-slow"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 10" />
      </motion.svg>

      {/* ── Main Content Grid ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/60 font-display">
                Creative Developer
              </span>
            </motion.div>

            {/* Main Heading — word-by-word reveal */}
            <h1 className="font-display font-bold leading-[0.92] tracking-[-0.03em] mb-10">
              <span className="block text-[clamp(3rem,8vw,7.5rem)] text-white">
                <RevealText delay={0.3}>
                  {`I'm ${personalInfo.name.split(" ")[0]}`}
                </RevealText>
              </span>
              <span className="block text-[clamp(1.8rem,4.5vw,4rem)] text-white/40 mt-3">
                <RevealText delay={0.6}>I build digital tools</RevealText>
              </span>
              <span className="block text-[clamp(1.8rem,4.5vw,4rem)] mt-1">
                <span className="gradient-text">
                  <RevealText delay={0.85}>that solve real problems</RevealText>
                </span>
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-base md:text-lg text-white/50 max-w-xl leading-relaxed mb-14"
            >
              Free, practical web tools designed for developers and creators.
              Each one crafted with care and available 24/7.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="flex flex-wrap items-center gap-5"
            >
              <button
                onClick={scrollToTools}
                className="group relative px-9 py-4 rounded-full font-semibold text-sm uppercase tracking-wider text-surface-950 bg-primary-400 hover:bg-primary-300 transition-all duration-500 hover:shadow-[0_0_60px_-12px_rgba(20,184,166,0.5)]"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Tools
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </span>
              </button>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group px-9 py-4 rounded-full font-semibold text-sm uppercase tracking-wider text-white/60 border border-white/[0.12] hover:border-white/30 hover:text-white transition-all duration-500 hover:bg-white/[0.06]"
              >
                Say Hello
              </a>
            </motion.div>
          </div>

          {/* Right Column - 3D Floating Device */}
          <div className="hidden lg:flex items-center justify-center perspective-[1200px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                y: [0, -20, 0],
              }}
              transition={{
                opacity: { duration: 1, delay: 0.5 },
                scale: { duration: 1, delay: 0.5 },
                rotateY: { duration: 1.2, delay: 0.5 },
                y: { 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }
              }}
              className="relative w-full max-w-md"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Main Device Card */}
              <div 
                className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.12] shadow-2xl"
                style={{ transform: "rotateY(-5deg) rotateX(5deg)" }}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-accent-500/20 rounded-3xl blur-xl opacity-50" />
                
                {/* Header Bar */}
                <div className="relative mb-6 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  <div className="flex-1 ml-4 h-6 bg-white/[0.06] rounded-md" />
                </div>

                {/* Code Lines Simulation */}
                <div className="relative space-y-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="h-3 bg-primary-400/30 rounded"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="h-3 bg-accent-400/30 rounded"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    transition={{ duration: 1, delay: 1.6 }}
                    className="h-3 bg-primary-400/30 rounded"
                  />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="h-3 bg-accent-400/30 rounded"
                  />
                  
                  {/* Tool Icon Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 2 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="aspect-square bg-gradient-to-br from-primary-400/20 to-accent-400/10 rounded-xl border border-white/[0.08] flex items-center justify-center"
                      >
                        <div className="w-1/2 h-1/2 bg-primary-400/40 rounded-lg" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Floating Particles */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    x: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-6 -right-6 w-20 h-20 bg-primary-400/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    x: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Bottom Gradient to next section ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-surface-950 to-transparent pointer-events-none" />

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-display">
          Scroll
        </span>
        <div className="w-px h-14 bg-white/[0.08] relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-4 bg-primary-400/50"
            animate={{ y: [0, 56, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
