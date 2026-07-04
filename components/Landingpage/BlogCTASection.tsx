"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { blogCTA } from "@/lib/data/blogPageContent";

export default function BlogCTASection() {
  const reduce = useReducedMotion();

  return (
    <section className="px-6 py-20 md:px-12 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-[#111] md:text-3xl lg:text-4xl">
            {blogCTA.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div
            className="mt-8"
            whileHover={reduce ? undefined : { scale: 1.02 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.3, ease: easePremium }}
          >
            <Link
              href={blogCTA.href}
              className="inline-block rounded-full bg-[#5210F8] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(82,16,248,0.25)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(82,16,248,0.35)]"
            >
              {blogCTA.buttonLabel}
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
