"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerLines } from "@/components/motion/StaggerLines";
import { easePremium } from "@/components/motion/presets";
import { blogHero } from "@/lib/data/blogPageContent";

export default function BlogsPageHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-32 font-sans md:pb-20 md:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#5210F8]/[0.07] blur-3xl"
          animate={reduce ? undefined : { x: [0, 24, 0], y: [0, -16, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-[#C47DFD]/[0.12] blur-3xl"
          animate={reduce ? undefined : { x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-[#5210F8]/15 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="mx-auto inline-block w-fit rounded-full bg-linear-to-r from-[#5210F8] to-[#072C55] px-4 py-1.5 text-sm font-medium text-white shadow-[0_4px_20px_rgba(82,16,248,0.25)]">
            {blogHero.badge}
          </span>
        </Reveal>

        <StaggerLines
          trigger="mount"
          as="h1"
          lines={[
            "Ideas, Insights, and Strategies",
            "for Smarter Growth",
          ]}
          className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4rem]"
          lineClassName="text-4xl font-semibold leading-[1.08] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4rem]"
        />

        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg">
            {blogHero.subheadline}
          </p>
        </Reveal>

        <motion.div
          className="mx-auto mt-10 h-1 w-16 rounded-full bg-linear-to-r from-[#5210F8] to-[#C47DFD]"
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7, ease: easePremium }}
        />
      </div>
    </section>
  );
}
