"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionEyebrow } from "./shared";
import { motion } from "motion/react";

const cards = [
  {
    label: "Our Mission",
    content:
      "To help businesses grow through clear strategy, strong branding, smart technology, and consistent digital execution.",
  },
  {
    label: "Our Vision",
    content:
      "To become a trusted growth partner for brands that want to scale with purpose, creativity, and measurable results.",
  },
];

export default function AboutMissionVisionSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-brand-lavender/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/4 w-64 h-64 rounded-full bg-brand-purple/5 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal className="mb-12 md:mb-16">
          <SectionEyebrow>Purpose</SectionEyebrow>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.08}>
              <motion.div
                className="group relative h-full overflow-hidden rounded-3xl border border-neutral-200/50 bg-gradient-to-br from-neutral-50/60 to-white/90 p-8 md:p-10 shadow-[0_8px_32px_rgba(82,16,248,0.02)] backdrop-blur-md transition-all duration-500 hover:border-brand-purple/20 hover:shadow-[0_20px_50px_rgba(82,16,248,0.06)]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
                
                {/* Large Background Watermark Number */}
                <div className="absolute -right-2 -bottom-6 select-none text-[8rem] font-bold leading-none text-neutral-100/70 transition-colors duration-500 group-hover:text-brand-purple/[0.04] pointer-events-none font-sans">
                  0{index + 1}
                </div>

                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-purple/70">
                  0{index + 1} / Purpose
                </span>
                
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-neutral-900 md:text-[1.65rem] group-hover:text-brand-purple transition-colors duration-300">
                  {card.label}
                </h3>
                
                <p className="mt-4 text-base leading-[1.75] tracking-tight text-neutral-500 md:text-[17px] max-w-md relative z-10">
                  {card.content}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
