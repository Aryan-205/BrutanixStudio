"use client";

import { motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";
import { blogHero } from "@/lib/data/blogPageContent";

export default function BlogsPageHero() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 pb-10 pt-32 font-sans md:pb-14 md:pt-40">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          className="text-4xl font-semibold tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4.5rem]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easePremium }}
        >
          {blogHero.headline}
        </motion.h1>
        <motion.p
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease: easePremium }}
        >
          {blogHero.subheadline}
        </motion.p>
      </div>
    </section>
  );
}
