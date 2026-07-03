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
    <section className="relative px-6 py-20 md:px-12 md:py-28">
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
          <h2 className="text-3xl font-bold tracking-[-0.03em] text-black md:text-4xl lg:text-5xl">
            {blogCTA.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-black/80 md:text-lg">
            Get a personalized audit of your brand, website, and marketing
            systems — built around your growth goals.
          </p>
        </Reveal>
        <Reveal delay={0.22}>
          <motion.div
            className="mt-10"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3, ease: easePremium }}
          >
            <Link
              href={blogCTA.href}
              className="group inline-flex items-center gap-2.5 rounded-full bg-linear-to-br from-brand-purple to-brand-navy px-8 py-4 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {blogCTA.buttonLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
