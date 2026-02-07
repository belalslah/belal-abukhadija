"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";
import { personalInfo } from "@/lib/tools-data";

export default function Footer() {
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-surface-950 text-white overflow-hidden"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-400/[0.04] rounded-full blur-[250px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ── Grand CTA Section ── */}
        <div ref={ctaRef} className="py-32 md:py-40 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/35 font-display">
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[0.95] tracking-tight mb-12"
          >
            Let&apos;s build
            <br />
            something{" "}
            <span className="gradient-text">together</span>
          </motion.h2>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            href={`mailto:${personalInfo.email}`}
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-semibold text-sm uppercase tracking-wider bg-white text-surface-950 hover:bg-primary-400 transition-all duration-500 hover:shadow-[0_0_80px_-20px_rgba(20,184,166,0.4)]"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </motion.a>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

        {/* ── Footer Links ── */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display font-bold mb-3">
              {personalInfo.name.split(" ")[0]}
              <span className="text-primary-400">.</span>
            </h3>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Building practical web tools that solve real problems. Free,
              private, and always available.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "hero" },
                { label: "Tools", id: "tools" },
                { label: "About", id: "about" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-display font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
              Connect
            </h4>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-sm text-white/45 hover:text-primary-400 transition-colors duration-300 mb-6"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <div className="flex gap-3 mt-2">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                {
                  href: personalInfo.linkedin,
                  icon: Linkedin,
                  label: "LinkedIn",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/[0.1] flex items-center justify-center text-white/40 hover:text-white hover:border-primary-400/40 hover:bg-primary-400/15 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} {personalInfo.name}
          </p>
          <p className="flex items-center gap-1.5 text-white/30 text-xs">
            Crafted with{" "}
            <Heart className="w-3 h-3 text-rose-500/50" /> for the developer
            community
          </p>
        </div>
      </div>
    </footer>
  );
}
