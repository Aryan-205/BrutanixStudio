"use client";

import { motion, useReducedMotion } from "motion/react";
import BrandLogo from "@/components/BrandLogo";
import { PrimaryButton, SectionEyebrow } from "./shared";

export default function AboutHeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="about-mesh relative overflow-hidden px-6 pb-24 pt-32 text-white md:px-12 md:pb-32 md:pt-44">
      <div className="about-grid-overlay pointer-events-none absolute inset-0" />

      <div className="pointer-events-none absolute -right-16 top-8 opacity-[0.07]">
        <div className="scale-[2]">
          <BrandLogo />
        </div>
      </div>

      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-lavender/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-12 top-1/3 h-48 w-48 rounded-full bg-brand-purple/30 blur-[80px]" />

      <motion.div
        className="relative mx-auto max-w-4xl text-center"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-8 flex justify-center">
          <SectionEyebrow variant="dark">About InvisiEdge</SectionEyebrow>
        </div>

        <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[3.75rem]">
          The Strategic Growth Partner Behind Modern Brands
        </h1>

        <p className="text-balance mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg md:leading-[1.7]">
          We help businesses build stronger brands, smarter digital systems, and
          marketing engines designed for measurable growth.
        </p>

        <div className="mt-12">
          <PrimaryButton href="/contact-us" variant="white">
            Get a Free Consultation
          </PrimaryButton>
        </div>
      </motion.div>
    </section>
  );
}
