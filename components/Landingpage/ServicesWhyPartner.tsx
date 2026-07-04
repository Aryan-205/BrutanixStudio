"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { valueProps } from "@/lib/data/servicesPageContent";

export default function ServicesWhyPartner() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-neutral-100 bg-[#FAFAFA] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-[11px] font-medium uppercase tracking-[0.25em] text-neutral-400">
            Why InvisiEdge
          </p>
          <h2 className="mt-4 text-center text-2xl font-medium tracking-tight text-[#111] md:text-3xl">
            Why Partner With InvisiEdge?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-neutral-200/80 bg-neutral-200/80 sm:grid-cols-2 lg:grid-cols-5">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="group bg-white p-6 md:p-7"
              whileHover={reduce ? undefined : { backgroundColor: "#FAFAFA" }}
              transition={{ duration: 0.3, ease: easePremium }}
            >
              <span className="text-[10px] font-bold tabular-nums text-neutral-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-sm font-semibold tracking-tight text-[#111]">
                {prop.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
