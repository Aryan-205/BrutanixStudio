"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";

export default function ProjectsHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-32 text-center max-w-4xl mx-auto md:pt-40 md:pb-16 font-sans">
      {/* Background visual elements */}
      <div className="pointer-events-none absolute left-1/2 top-4 h-72 w-72 -translate-x-1/2 bg-brand-purple/[0.08] rounded-full blur-[100px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-48 w-48 bg-brand-lavender/[0.06] rounded-full blur-[80px]" />

      <div className="relative">
        <Reveal>
          <span className="rounded-full bg-linear-to-tr from-brand-navy via-brand-purple to-brand-navy border border-brand-purple/10 px-4.5 py-1.5 text-xs font-bold text-white shadow-sm inline-block tracking-wider uppercase">
            Case Studies
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-8 text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] bg-gradient-to-r from-neutral-950 via-brand-purple to-brand-navy bg-clip-text text-transparent pb-1">
            Engineered for Acceleration, <br className="hidden md:inline" />
            Designed for Immersion
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed tracking-tight">
            We help startup SaaS companies and digital brands accelerate through design systems, interactive experiences, and robust frontend frameworks.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-brand-purple/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-purple">
              7 Featured Works
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-brand-purple/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
