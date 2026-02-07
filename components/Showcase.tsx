"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Web Development Tools",
    description: "A comprehensive suite of free, privacy-focused web tools for developers and creators.",
    tags: ["Next.js", "React", "TypeScript"],
    gradient: "from-primary-400/20 to-accent-400/10",
  },
  {
    title: "Client-Side Processing",
    description: "All tools run entirely in your browser - your data never leaves your device.",
    tags: ["Privacy", "Security", "Fast"],
    gradient: "from-accent-400/20 to-primary-400/10",
  },
  {
    title: "Open & Accessible",
    description: "Free forever, no sign-ups, no tracking. Built for the community, by the community.",
    tags: ["Open Source", "Free", "24/7"],
    gradient: "from-primary-300/20 to-accent-500/10",
  },
];

export default function Showcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 bg-surface-900/80 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,212,191,0.08),transparent)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto" ref={ref}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-primary-400 font-display">
              Showcase
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight"
            >
              Building the
              <br />
              <span className="gradient-text">future of web</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/50 text-lg leading-relaxed flex items-end"
            >
              Every project is crafted with attention to detail, focusing on
              performance, accessibility, and user experience.
            </motion.p>
          </div>

          {/* Projects Grid with 3D Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-[2000px]">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -20 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                whileHover={{ 
                  y: -16,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.15,
                }}
                className="group relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Card */}
                <div 
                  className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.12] shadow-2xl overflow-hidden transition-all duration-500 group-hover:border-primary-400/30 h-full"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {/* Glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`} />

                  {/* 3D Mockup Area */}
                  <div className="relative mb-8 h-48 rounded-2xl bg-gradient-to-br from-surface-950/50 to-surface-950/20 overflow-hidden border border-white/[0.08]">
                    {/* Browser-like header */}
                    <div className="flex items-center gap-2 p-4 border-b border-white/[0.06]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                      <div className="flex-1 ml-3 h-5 bg-white/[0.04] rounded" />
                    </div>

                    {/* Content simulation */}
                    <div className="p-4 space-y-3">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${project.gradient} rounded w-3/4`}
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5
                        }}
                      />
                      <motion.div
                        className="h-2 bg-white/[0.06] rounded w-1/2"
                        animate={{
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5 + 0.2
                        }}
                      />
                      
                      {/* Grid of elements */}
                      <div className="grid grid-cols-3 gap-2 pt-2">
                        {[...Array(6)].map((_, j) => (
                          <motion.div
                            key={j}
                            className={`aspect-square bg-gradient-to-br ${project.gradient} rounded-lg`}
                            animate={{
                              opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: i * 0.5 + j * 0.1
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Floating particle */}
                    <motion.div
                      animate={{
                        y: [-10, 10, -10],
                        x: [-5, 5, -5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5
                      }}
                      className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-full blur-md`}
                    />
                  </div>

                  {/* Project Info */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed mb-6 group-hover:text-white/60 transition-colors duration-500">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-display font-semibold bg-white/[0.06] text-white/60 rounded-full border border-white/[0.08] group-hover:border-primary-400/30 group-hover:text-primary-400 transition-all duration-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-400/10 text-primary-400 text-sm font-semibold hover:bg-primary-400/20 transition-colors duration-300 border border-primary-400/20">
                        <ExternalLink className="w-4 h-4" />
                        View
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] text-white/60 text-sm font-semibold hover:bg-white/[0.1] hover:text-white transition-all duration-300 border border-white/[0.08]">
                        <Github className="w-4 h-4" />
                        Code
                      </button>
                    </div>
                  </div>
                </div>

                {/* 3D Shadow */}
                <div 
                  className="absolute inset-0 bg-surface-950/30 rounded-3xl blur-2xl opacity-50"
                  style={{ transform: "translateZ(-40px)" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
