"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";
import { serviceDetails, servicesHero } from "@/data/servicesPageContent";

const CYCLE_MS = 4000;

export default function ServicesPageHero() {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceDetails.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, [reduce]);

  const active = serviceDetails[activeIndex];

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center bg-white px-6 pb-20 pt-36 text-center md:min-h-[90vh] md:pb-28 md:pt-44">
      <div className="services-grid-overlay pointer-events-none absolute inset-0" />

      <motion.h1
        className="relative text-[clamp(4rem,18vw,12rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#111]"
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easePremium }}
      >
        {servicesHero.title}
      </motion.h1>

      <motion.div
        className="relative mt-20 max-w-xl md:mt-28"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400">
          Capabilities
        </p>

        <div className="mt-6 min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
              transition={{ duration: 0.55, ease: easePremium }}
            >
              <h2 className="text-3xl font-medium tracking-tight text-neutral-800 sm:text-4xl md:text-5xl">
                {active.shortTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
                {active.overview}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-1.5">
          {serviceDetails.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`View ${serviceDetails[i].shortTitle}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? "w-8 bg-[#5210F8]"
                  : "w-1.5 bg-neutral-200 hover:bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </motion.div>

      <motion.p
        className="relative mt-16 max-w-lg text-sm leading-relaxed text-neutral-400 md:mt-20"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {servicesHero.subheadline}
      </motion.p>
    </section>
  );
}
