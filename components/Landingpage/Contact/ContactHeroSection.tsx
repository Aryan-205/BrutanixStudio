"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";

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
      initial={{ opacity: 0, scale: 0.85 }}
      animate={
        reduce
          ? { opacity: 0.4, scale: 1 }
          : { opacity: [0.25, 0.4, 0.25], scale: [1, 1.06, 1] }
      }
      transition={
        reduce
          ? { duration: 0.6, delay }
          : { duration: 10, repeat: Infinity, ease: "easeInOut", delay }
      }
    />
  );
}

const headline = "Let's Talk Growth";

export default function ContactHeroSection() {
  const reduce = useReducedMotion();
  const words = headline.split(" ");

  return (
    <section className="relative mx-auto max-w-4xl overflow-hidden px-6 pb-12 pt-32 text-center md:pb-16 md:pt-40">
      <GradientOrb
        className="left-1/2 top-4 h-72 w-72 -translate-x-1/2 bg-[#5210F8]/25 md:h-96 md:w-96"
      />
      <GradientOrb
        className="right-[-10%] top-1/4 h-48 w-48 bg-[#C47DFD]/20 md:h-64 md:w-64"
        delay={3}
      />
      <GradientOrb
        className="bottom-0 left-[-5%] h-40 w-40 bg-[#072C55]/15 md:h-52 md:w-52"
        delay={5}
      />

      <div className="relative">
        <Reveal>
          <motion.span
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-1.5 text-sm font-medium shadow-[0_8px_32px_rgba(82,16,248,0.14)] backdrop-blur-md"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            transition={{ duration: 0.3, ease: easePremium }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#5210F8]" />
            <span className="bg-linear-to-r from-[#5210F8] to-[#072C55] bg-clip-text text-transparent tracking-[-0.02em]">
              Contact Us
            </span>
          </motion.span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="inline-block bg-linear-to-r from-[#5210F8] via-[#6b28f8] to-[#072C55] bg-clip-text text-transparent"
                initial={
                  reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" }
                }
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.75,
                  delay: 0.1 + i * 0.05,
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
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-neutral-500 md:text-lg md:leading-relaxed tracking-[-0.02em]">
            Have a project, campaign, website, or brand idea in mind? We&apos;d
            love to hear about your goals and help you find the right next step.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mx-auto mt-10 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-linear-to-r from-transparent to-[#5210F8]/35" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#5210F8]/60">
              Response within 24 hours
            </span>
            <span className="h-px w-14 bg-linear-to-l from-transparent to-[#5210F8]/35" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
