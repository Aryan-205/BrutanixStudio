"use client";

import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";

export default function ProjectsHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-6 pt-28 text-center max-w-5xl mx-auto md:pt-36 md:pb-10 font-sans">
      {/* Subtle background glow for premium feel */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-brand-purple/[0.04] rounded-full blur-[80px]" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Minimalist pre-headline tag */}
        <Reveal>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-purple">
            Our Portfolio
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-brand-navy bg-clip-text text-transparent pb-1 text-balance">
            Work That Builds Brands <br className="hidden md:inline" />
            and Drives Growth
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-neutral-500 max-w-3xl mx-auto leading-relaxed tracking-tight text-balance font-normal">
            Explore how we help brands show up stronger through strategy, design, content, websites, campaigns, and digital systems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

