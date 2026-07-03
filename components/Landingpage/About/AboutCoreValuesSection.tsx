"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionEyebrow } from "./shared";
import { motion } from "motion/react";

const values = [
  {
    title: "Purpose-Driven Strategy",
    description:
      "Every project starts with intention. We build strategies that are aligned with your business goals, audience, and long-term growth.",
  },
  {
    title: "Creative Excellence",
    description:
      "We believe strong creative should not only look beautiful but also communicate clearly and drive action.",
  },
  {
    title: "Silent Expertise",
    description:
      "We work behind the scenes as a trusted partner, helping your brand shine while we handle the structure, systems, and execution.",
  },
  {
    title: "Continuous Innovation",
    description:
      "We use modern tools, AI workflows, automation, and data to keep your marketing efficient, relevant, and future-ready.",
  },
  {
    title: "Collaborative Growth",
    description:
      "We work closely with your team, align with your vision, and support your goals at every stage.",
  },
  {
    title: "Performance Focus",
    description:
      "We care about outcomes — visibility, engagement, leads, conversions, and long-term brand growth.",
  },
];

export default function AboutCoreValuesSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28 relative">
      <div className="absolute left-1/3 top-1/3 w-96 h-96 rounded-full bg-brand-purple/[0.02] blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        <Reveal className="mb-14 md:mb-16">
          <SectionEyebrow>Core Values</SectionEyebrow>
          <h2 className="text-balance mt-5 max-w-xl text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            What guides everything we do
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <motion.div
                className="group relative h-full rounded-2xl border border-neutral-200/50 bg-gradient-to-br from-neutral-50/50 via-white/80 to-white/90 p-7 md:p-8 shadow-[0_4px_24px_rgba(82,16,248,0.02)] backdrop-blur-md transition-all duration-300 hover:border-brand-purple/20 hover:shadow-[0_12px_36px_rgba(82,16,248,0.06)]"
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-x-0 top-0 h-[2px] w-0 bg-gradient-to-r from-brand-purple to-brand-lavender transition-all duration-500 group-hover:w-full" />
                
                <span className="text-xs font-bold tabular-nums tracking-wider text-brand-purple/60 bg-brand-purple/[0.04] border border-brand-purple/10 px-2 py-0.5 rounded-md">
                  {String(index + 1).padStart(2, "0")}
                </span>
                
                <h3 className="mt-5 text-lg font-bold tracking-tight text-neutral-900 md:text-xl group-hover:text-brand-purple transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="mt-3 text-sm leading-[1.7] tracking-tight text-neutral-500 md:text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
