"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import BrandLogo from "@/components/BrandLogo";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { blogCTA } from "@/lib/data/blogPageContent";

export default function BlogCTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#5210F8] to-[#072C55] px-6 py-20 text-white md:px-12 md:py-28">
      <motion.div
        className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C47DFD]/20 blur-3xl"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-10 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        animate={reduce ? undefined : { x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="pointer-events-none absolute top-0 right-0 opacity-[0.07]">
        <div className="translate-x-1/3 -translate-y-1/4 scale-125 grayscale">
          <BrandLogo />
        </div>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-[-0.03em] md:text-4xl lg:text-5xl">
            {blogCTA.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Get a personalized audit of your brand, website, and marketing
            systems — built around your growth goals.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <motion.div
            className="mt-10"
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.3, ease: easePremium }}
          >
            <Link
              href={blogCTA.href}
              className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[#5210F8] shadow-[0_8px_32px_rgba(0,0,0,0.15)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
            >
              {blogCTA.buttonLabel}
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
