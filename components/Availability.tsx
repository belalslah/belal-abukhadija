"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, MapPin, Wifi, Plane } from "lucide-react";

export default function Availability() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="availability" className="relative py-32 bg-surface-950 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(45,212,191,0.06),transparent)]" />
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
              Availability
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.05] tracking-tight mb-8"
              >
                Available
                <br />
                <span className="gradient-text">Worldwide</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-white/50 text-lg leading-relaxed mb-12 max-w-lg"
              >
                I work with clients across the globe through remote collaboration. 
                For on-site projects, I&apos;m available throughout the Arab region.
              </motion.p>

              {/* Availability Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                {[
                  { 
                    icon: Wifi, 
                    label: "Remote Work", 
                    value: "Available Worldwide",
                    description: "Online collaboration across all time zones"
                  },
                  { 
                    icon: Plane, 
                    label: "On-Site Work", 
                    value: "Arab Region",
                    description: "Available for in-person projects"
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                    className="group flex items-start gap-4 p-5 bg-white/[0.03] rounded-xl border border-white/[0.08] hover:border-primary-400/30 hover:bg-white/[0.05] transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-400/10 flex items-center justify-center group-hover:bg-primary-400/20 transition-colors duration-500 shrink-0">
                      <item.icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider">{item.label}</span>
                      <p className="text-white font-display font-semibold text-lg">{item.value}</p>
                      <p className="text-white/40 text-sm mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - World Map */}
            <div className="hidden lg:block perspective-[1500px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                {/* Map Container */}
                <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] p-6 overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-400/10 to-accent-400/10 rounded-3xl blur-2xl opacity-50" />
                  
                  {/* Grid lines */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute w-full h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        style={{ top: `${(i + 1) * 16.66}%` }}
                      />
                    ))}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
                        style={{ left: `${(i + 1) * 12.5}%` }}
                      />
                    ))}
                  </div>

                  {/* Dotted World Map */}
                  <div className="relative z-10 w-full h-full">
                    <svg
                      viewBox="0 0 100 50"
                      className="w-full h-full"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* World map made of dots - accurate continent positions */}
                      {/* North America */}
                      {[[12,8],[13,8],[14,8],[15,8],[11,9],[12,9],[13,9],[14,9],[15,9],[16,9],[10,10],[11,10],[12,10],[13,10],[14,10],[15,10],[16,10],[17,10],[10,11],[11,11],[12,11],[13,11],[14,11],[15,11],[16,11],[17,11],[18,11],[11,12],[12,12],[13,12],[14,12],[15,12],[16,12],[17,12],[18,12],[19,12],[12,13],[13,13],[14,13],[15,13],[16,13],[17,13],[18,13],[19,13],[20,13],[13,14],[14,14],[15,14],[16,14],[17,14],[18,14],[19,14],[20,14],[14,15],[15,15],[16,15],[17,15],[18,15],[19,15],[20,15],[21,15],[15,16],[16,16],[17,16],[18,16],[19,16],[20,16],[21,16],[16,17],[17,17],[18,17],[19,17],[20,17],[21,17],[17,18],[18,18],[19,18],[20,18],[21,18],[22,18],[18,19],[19,19],[20,19],[21,19],[22,19],[19,20],[20,20],[21,20],[22,20]].map(([x, y], i) => (
                        <motion.circle
                          key={`na-${i}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="rgba(255,255,255,0.4)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.5 + i * 0.005 }}
                        />
                      ))}
                      
                      {/* South America */}
                      {[[26,24],[27,24],[28,24],[25,25],[26,25],[27,25],[28,25],[29,25],[25,26],[26,26],[27,26],[28,26],[29,26],[30,26],[25,27],[26,27],[27,27],[28,27],[29,27],[30,27],[26,28],[27,28],[28,28],[29,28],[30,28],[26,29],[27,29],[28,29],[29,29],[30,29],[27,30],[28,30],[29,30],[30,30],[27,31],[28,31],[29,31],[30,31],[28,32],[29,32],[30,32],[28,33],[29,33],[30,33],[29,34],[30,34],[29,35],[30,35],[30,36],[30,37]].map(([x, y], i) => (
                        <motion.circle
                          key={`sa-${i}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="rgba(255,255,255,0.4)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.8 + i * 0.008 }}
                        />
                      ))}
                      
                      {/* Europe */}
                      {[[45,8],[46,8],[47,8],[48,8],[44,9],[45,9],[46,9],[47,9],[48,9],[49,9],[43,10],[44,10],[45,10],[46,10],[47,10],[48,10],[49,10],[50,10],[43,11],[44,11],[45,11],[46,11],[47,11],[48,11],[49,11],[50,11],[51,11],[44,12],[45,12],[46,12],[47,12],[48,12],[49,12],[50,12],[51,12],[45,13],[46,13],[47,13],[48,13],[49,13],[50,13],[51,13],[46,14],[47,14],[48,14],[49,14],[50,14]].map(([x, y], i) => (
                        <motion.circle
                          key={`eu-${i}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="rgba(255,255,255,0.4)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.008 }}
                        />
                      ))}
                      
                      {/* Africa */}
                      {[[47,18],[48,18],[49,18],[50,18],[51,18],[46,19],[47,19],[48,19],[49,19],[50,19],[51,19],[52,19],[45,20],[46,20],[47,20],[48,20],[49,20],[50,20],[51,20],[52,20],[53,20],[45,21],[46,21],[47,21],[48,21],[49,21],[50,21],[51,21],[52,21],[53,21],[45,22],[46,22],[47,22],[48,22],[49,22],[50,22],[51,22],[52,22],[53,22],[46,23],[47,23],[48,23],[49,23],[50,23],[51,23],[52,23],[53,23],[46,24],[47,24],[48,24],[49,24],[50,24],[51,24],[52,24],[47,25],[48,25],[49,25],[50,25],[51,25],[52,25],[47,26],[48,26],[49,26],[50,26],[51,26],[48,27],[49,27],[50,27],[51,27],[49,28],[50,28],[51,28],[50,29],[51,29]].map(([x, y], i) => (
                        <motion.circle
                          key={`af-${i}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="rgba(255,255,255,0.4)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.7 + i * 0.006 }}
                        />
                      ))}
                      
                      {/* Arab Region - Highlighted */}
                      {[[52,14],[53,14],[54,14],[55,14],[56,14],[51,15],[52,15],[53,15],[54,15],[55,15],[56,15],[57,15],[51,16],[52,16],[53,16],[54,16],[55,16],[56,16],[57,16],[58,16],[52,17],[53,17],[54,17],[55,17],[56,17],[57,17],[58,17],[59,17],[53,18],[54,18],[55,18],[56,18],[57,18],[58,18],[59,18],[60,18],[54,19],[55,19],[56,19],[57,19],[58,19],[59,19],[60,19],[55,20],[56,20],[57,20],[58,20],[59,20],[60,20],[56,21],[57,21],[58,21],[59,21]].map(([x, y], i) => (
                        <motion.circle
                          key={`ar-${i}`}
                          cx={x}
                          cy={y}
                          r="0.5"
                          fill="rgba(45,212,191,0.8)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.9 + i * 0.01 }}
                        />
                      ))}
                      
                      {/* Asia (excluding Arab region) */}
                      {[[60,8],[61,8],[62,8],[63,8],[64,8],[65,8],[66,8],[67,8],[68,8],[58,9],[59,9],[60,9],[61,9],[62,9],[63,9],[64,9],[65,9],[66,9],[67,9],[68,9],[69,9],[70,9],[56,10],[57,10],[58,10],[59,10],[60,10],[61,10],[62,10],[63,10],[64,10],[65,10],[66,10],[67,10],[68,10],[69,10],[70,10],[71,10],[72,10],[55,11],[56,11],[57,11],[58,11],[59,11],[60,11],[61,11],[62,11],[63,11],[64,11],[65,11],[66,11],[67,11],[68,11],[69,11],[70,11],[71,11],[72,11],[73,11],[55,12],[56,12],[57,12],[58,12],[59,12],[60,12],[61,12],[62,12],[63,12],[64,12],[65,12],[66,12],[67,12],[68,12],[69,12],[70,12],[71,12],[72,12],[73,12],[74,12],[56,13],[57,13],[58,13],[59,13],[60,13],[61,13],[62,13],[63,13],[64,13],[65,13],[66,13],[67,13],[68,13],[69,13],[70,13],[71,13],[72,13],[73,13],[74,13],[75,13],[61,14],[62,14],[63,14],[64,14],[65,14],[66,14],[67,14],[68,14],[69,14],[70,14],[71,14],[72,14],[73,14],[74,14],[75,14],[76,14],[62,15],[63,15],[64,15],[65,15],[66,15],[67,15],[68,15],[69,15],[70,15],[71,15],[72,15],[73,15],[74,15],[75,15],[76,15],[77,15],[63,16],[64,16],[65,16],[66,16],[67,16],[68,16],[69,16],[70,16],[71,16],[72,16],[73,16],[74,16],[75,16],[76,16],[77,16],[78,16],[64,17],[65,17],[66,17],[67,17],[68,17],[69,17],[70,17],[71,17],[72,17],[73,17],[74,17],[75,17],[76,17],[77,17],[78,17],[65,18],[66,18],[67,18],[68,18],[69,18],[70,18],[71,18],[72,18],[73,18],[74,18],[75,18],[76,18],[77,18],[78,18],[66,19],[67,19],[68,19],[69,19],[70,19],[71,19],[72,19],[73,19],[74,19],[75,19],[76,19],[77,19],[78,19],[79,19],[67,20],[68,20],[69,20],[70,20],[71,20],[72,20],[73,20],[74,20],[75,20],[76,20]].map(([x, y], i) => (
                        <motion.circle
                          key={`as-${i}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="rgba(255,255,255,0.4)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.6 + i * 0.003 }}
                        />
                      ))}
                      
                      {/* Australia */}
                      {[[75,30],[76,30],[77,30],[78,30],[79,30],[80,30],[74,31],[75,31],[76,31],[77,31],[78,31],[79,31],[80,31],[81,31],[73,32],[74,32],[75,32],[76,32],[77,32],[78,32],[79,32],[80,32],[81,32],[82,32],[73,33],[74,33],[75,33],[76,33],[77,33],[78,33],[79,33],[80,33],[81,33],[82,33],[74,34],[75,34],[76,34],[77,34],[78,34],[79,34],[80,34],[81,34],[82,34],[75,35],[76,35],[77,35],[78,35],[79,35],[80,35],[81,35],[76,36],[77,36],[78,36],[79,36],[80,36]].map(([x, y], i) => (
                        <motion.circle
                          key={`au-${i}`}
                          cx={x}
                          cy={y}
                          r="0.4"
                          fill="rgba(255,255,255,0.4)"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 1 + i * 0.008 }}
                        />
                      ))}
                      
                      {/* Continent Labels */}
                      <motion.text
                        x="15" y="6"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="2.5"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        North America
                      </motion.text>
                      <motion.text
                        x="24" y="22"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="2.5"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.3 }}
                      >
                        South America
                      </motion.text>
                      <motion.text
                        x="44" y="6"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="2.5"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.4 }}
                      >
                        Europe
                      </motion.text>
                      <motion.text
                        x="45" y="16"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="2.5"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      >
                        Africa
                      </motion.text>
                      <motion.text
                        x="52" y="11"
                        fill="rgba(45,212,191,0.9)"
                        fontSize="2.5"
                        fontWeight="700"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.6 }}
                      >
                        Arab Region
                      </motion.text>
                      <motion.text
                        x="65" y="6"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="2.5"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.7 }}
                      >
                        Asia
                      </motion.text>
                      <motion.text
                        x="73" y="28"
                        fill="rgba(255,255,255,0.6)"
                        fontSize="2.5"
                        fontWeight="600"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.8 }}
                      >
                        Australia
                      </motion.text>
                    </svg>

                    {/* Pulsing location markers */}
                    {[
                      { x: 18, y: 32, label: "North America", delay: 0 },
                      { x: 28, y: 62, label: "South America", delay: 0.15 },
                      { x: 47, y: 24, label: "Europe", delay: 0.3 },
                      { x: 50, y: 48, label: "Africa", delay: 0.45 },
                      { x: 56, y: 36, label: "Arab Region", highlight: true, delay: 0.6 },
                      { x: 70, y: 28, label: "Asia", delay: 0.75 },
                      { x: 78, y: 66, label: "Australia", delay: 0.9 },
                    ].map((dot, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.5 + dot.delay }}
                      >
                        {/* Pulse ring */}
                        <motion.div
                          className={`absolute -inset-3 rounded-full ${
                            dot.highlight 
                              ? "bg-primary-400/40" 
                              : "bg-white/20"
                          }`}
                          animate={{
                            scale: [1, 2.5, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: dot.delay,
                          }}
                        />
                        {/* Dot */}
                        <div
                          className={`w-3 h-3 rounded-full ${
                            dot.highlight
                              ? "bg-primary-400 shadow-lg shadow-primary-400/60"
                              : "bg-white/70"
                          }`}
                        />
                      </motion.div>
                    ))}

                    {/* Connection lines animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {/* Lines connecting to Arab region */}
                      {[
                        { from: { x: 18, y: 32 }, to: { x: 56, y: 36 } },  // North America
                        { from: { x: 28, y: 62 }, to: { x: 56, y: 36 } },  // South America
                        { from: { x: 47, y: 24 }, to: { x: 56, y: 36 } },  // Europe
                        { from: { x: 50, y: 48 }, to: { x: 56, y: 36 } },  // Africa
                        { from: { x: 70, y: 28 }, to: { x: 56, y: 36 } },  // Asia
                        { from: { x: 78, y: 66 }, to: { x: 56, y: 36 } },  // Australia
                      ].map((line, i) => (
                        <motion.line
                          key={i}
                          x1={`${line.from.x}%`}
                          y1={`${line.from.y}%`}
                          x2={`${line.to.x}%`}
                          y2={`${line.to.y}%`}
                          stroke="rgba(45,212,191,0.25)"
                          strokeWidth="1"
                          strokeDasharray="4 4"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                          transition={{ duration: 1.5, delay: 2 + i * 0.2 }}
                        />
                      ))}
                    </svg>
                  </div>

                  {/* Legend */}
                  <motion.div
                    className="absolute bottom-4 left-4 flex items-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary-400" />
                      <span className="text-xs text-white/50">On-site</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/60" />
                      <span className="text-xs text-white/50">Remote</span>
                    </div>
                  </motion.div>

                  {/* Globe icon */}
                  <motion.div
                    className="absolute top-4 right-4"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, rotate: 0 } : {}}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary-400/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary-400" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating particles */}
                <motion.div
                  animate={{ 
                    y: [-10, 10, -10],
                    x: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 bg-primary-400/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{ 
                    y: [8, -8, 8],
                    x: [0, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-8 w-20 h-20 bg-accent-400/20 rounded-full blur-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
