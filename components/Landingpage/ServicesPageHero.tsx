"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { servicesHero } from "@/lib/data/servicesPageContent";

function GradientOrb({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        reduce
          ? { opacity: 0.35, scale: 1 }
          : { opacity: [0.3, 0.45, 0.3], scale: [1, 1.08, 1] }
      }
      transition={
        reduce
          ? { duration: 0.6, delay }
          : { duration: 8, repeat: Infinity, ease: "easeInOut", delay }
      }
    />
  );
}

export default function ServicesPageHero() {
  const reduce = useReducedMotion();
  const words = servicesHero.headline.split(" ");

  return (
    <section className="relative mx-auto max-w-5xl overflow-hidden px-6 pb-16 pt-32 text-center font-sans md:pb-24 md:pt-40">
      <GradientOrb
        className="left-1/2 top-8 h-64 w-64 -translate-x-1/2 bg-[#5210F8]/20 md:h-80 md:w-80"
        delay={0}
      />
      <GradientOrb
        className="right-0 top-1/3 h-48 w-48 bg-[#C47DFD]/15 md:h-64 md:w-64"
        delay={2}
      />
      <GradientOrb
        className="bottom-0 left-0 h-40 w-40 bg-[#072C55]/10 md:h-56 md:w-56"
        delay={4}
      />

      <div className="relative">
        <Reveal>
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#072C55] shadow-[0_8px_32px_rgba(82,16,248,0.12)] backdrop-blur-md"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease: easePremium }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5210F8]" />
            <span className="bg-linear-to-r from-[#5210F8] to-[#072C55] bg-clip-text text-transparent">
              {servicesHero.badge}
            </span>
          </motion.span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 text-4xl font-semibold leading-[1.06] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block"
                initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 + i * 0.04,
                  ease: easePremium,
                }}
              >
                {word}
                {i < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg md:leading-relaxed">
            {servicesHero.subheadline}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-linear-to-r from-transparent to-[#5210F8]/40" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5210F8]/70">
              8 integrated capabilities
            </span>
            <span className="h-px w-12 bg-linear-to-l from-transparent to-[#5210F8]/40" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
