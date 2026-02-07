"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import { Tool } from "@/lib/tools-data";

interface ToolCardProps {
  tool: Tool;
  index: number;
}

export default function ToolCard({ tool, index }: ToolCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[tool.icon] || Icons.Box;
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.a
      ref={ref}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group block"
    >
      <div className="relative flex flex-col md:flex-row md:items-center gap-5 md:gap-10 p-6 md:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500">
        {/* Number */}
        <span className="hidden md:block font-display text-5xl md:text-7xl font-bold text-white/[0.06] group-hover:text-primary-400/20 transition-colors duration-700 shrink-0 w-24 text-center leading-none">
          {num}
        </span>

        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1.5">
            <h3 className="text-lg md:text-2xl font-display font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
              {tool.name}
            </h3>
            {tool.category && (
              <span className="hidden sm:inline-block text-[10px] font-semibold uppercase tracking-widest text-white/35 px-2.5 py-1 rounded-full border border-white/[0.1]">
                {tool.category}
              </span>
            )}
          </div>
          <p className="text-sm md:text-base text-white/45 leading-relaxed line-clamp-2 max-w-2xl">
            {tool.description}
          </p>
        </div>

        {/* Arrow button */}
        <div className="shrink-0 w-11 h-11 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-primary-400/40 group-hover:bg-primary-400/15 transition-all duration-500">
          <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-primary-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.a>
  );
}
