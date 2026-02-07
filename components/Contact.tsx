"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";
import { personalInfo } from "@/lib/tools-data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-32 bg-surface-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(45,212,191,0.08),transparent)]" />
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
              Contact
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text & Info */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8"
              >
                Let&apos;s work
                <br />
                <span className="gradient-text">together</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/50 text-lg leading-relaxed mb-12 max-w-lg"
              >
                Have a project in mind or just want to say hello? I&apos;d love to hear from you. 
                Let&apos;s create something amazing together.
              </motion.p>

              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                {[
                  { icon: Mail, label: "Email", value: personalInfo.email },
                  { icon: MapPin, label: "Location", value: "Available Worldwide" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                    className="group flex items-center gap-4 p-4 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-primary-400/30 hover:bg-white/[0.05] transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-400/10 flex items-center justify-center group-hover:bg-primary-400/20 transition-colors duration-500">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">{item.label}</span>
                      <p className="text-white font-display font-semibold">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - 3D Form Visualization */}
            <div className="hidden lg:block perspective-[1500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotateY: 0,
                  y: [0, -15, 0]
                } : {}}
                transition={{
                  opacity: { duration: 1, delay: 0.5 },
                  scale: { duration: 1, delay: 0.5 },
                  rotateY: { duration: 1.2, delay: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                className="relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Form Card */}
                <div 
                  className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.12] shadow-2xl"
                  style={{ transform: "rotateY(-5deg) rotateX(5deg)" }}
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-xl opacity-30" />

                  <div className="relative space-y-6">
                    {/* Simulated form fields */}
                    <div>
                      <div className="h-3 w-16 bg-white/[0.1] rounded mb-2" />
                      <motion.div 
                        className="h-12 bg-white/[0.05] rounded-lg border border-white/[0.08]"
                        animate={{
                          borderColor: ["rgba(255,255,255,0.08)", "rgba(45,212,191,0.3)", "rgba(255,255,255,0.08)"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>

                    <div>
                      <div className="h-3 w-20 bg-white/[0.1] rounded mb-2" />
                      <motion.div 
                        className="h-12 bg-white/[0.05] rounded-lg border border-white/[0.08]"
                        animate={{
                          borderColor: ["rgba(255,255,255,0.08)", "rgba(45,212,191,0.3)", "rgba(255,255,255,0.08)"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </div>

                    <div>
                      <div className="h-3 w-24 bg-white/[0.1] rounded mb-2" />
                      <motion.div 
                        className="h-32 bg-white/[0.05] rounded-lg border border-white/[0.08]"
                        animate={{
                          borderColor: ["rgba(255,255,255,0.08)", "rgba(45,212,191,0.3)", "rgba(255,255,255,0.08)"]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-primary-400 text-surface-950 font-display font-bold text-sm uppercase tracking-wider hover:bg-primary-300 transition-colors duration-300 shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </motion.a>
                  </div>

                  {/* Animated typing indicator */}
                  <motion.div
                    className="absolute bottom-28 left-12 flex items-center gap-1"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animation-delay-200" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 animation-delay-400" />
                  </motion.div>
                </div>

                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    x: [0, 10, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 w-20 h-20 bg-primary-400/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ 
                    y: [10, -10, 10],
                    x: [0, -8, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent-400/20 rounded-full blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
