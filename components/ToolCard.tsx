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
      <div className="relative h-full flex flex-col p-6 rounded-2xl border border-white/[0.08] bg-white/[0.025] hover:bg-white/[0.06] hover:border-primary-400/30 transition-all duration-500 overflow-hidden">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-400/[0.04] to-accent-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Top row: Icon + Arrow */}
          <div className="flex items-start justify-between mb-5">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}
            >
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-primary-400/40 group-hover:bg-primary-400/15 transition-all duration-500">
              <ArrowUpRight className="w-3.5 h-3.5 text-white/30 group-hover:text-primary-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>

          {/* Title + Category */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
              {tool.name}
            </h3>
            {tool.category && (
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/30 px-2 py-0.5 rounded-full border border-white/[0.08]">
                {tool.category}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-white/40 leading-relaxed flex-1">
            {tool.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
