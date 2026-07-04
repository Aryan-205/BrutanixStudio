"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { valueProps } from "@/lib/data/servicesPageContent";

export default function ServicesWhyPartner() {
  const reduce = useReducedMotion();

  return (
    <section className=" bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-center text-base font-medium uppercase tracking-[0.25em] text-neutral-400">
            Why InvisiEdge
          </p>
          <h2 className="mt-4 text-center text-xl font-medium tracking-tight text-[#111] md:text-4xl">
            Why Partner With InvisiEdge?
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl sm:grid-cols-2 lg:grid-cols-5 shadow-[inset_0_0_10px_1px_rgba(82,16,248,0.3)]">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group bg-linear-to-t from-[#5210F8]/30 to-[#c47dfd]/20 p-6 md:p-7 cursor-pointer hover:bg-[#5210F8]/20 transition-colors duration-300"
            >
              <span className="text-[10px] font-bold tabular-nums text-neutral-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-sm font-semibold tracking-tight text-[#111]">
                {prop.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
