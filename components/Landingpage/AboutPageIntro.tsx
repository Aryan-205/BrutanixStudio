"use client";

import { motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";

const introText =
  "We are a marketing and development agency that helps ambitious brands grow through strategy, design, and technology.";

const paragraphs = [
  "InvisiEdge Marketing partners with startups and established companies to build digital products, launch campaigns, and create brand experiences that convert. From brand identity and content strategy to custom web development, we bring one integrated team to every challenge.",
  "Our approach blends creative marketing with engineering discipline. We research your audience, define a clear growth roadmap, and ship work that looks exceptional and performs in the real world — faster launches, stronger retention, and measurable ROI.",
  "Whether you need a full-funnel marketing partner, a product built from scratch, or a redesign that elevates your brand, we work closely with you at every step — transparent, agile, and focused on outcomes that matter.",
];

export default function AboutPageIntro() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F9F9F9] px-6 pb-16 pt-16 text-black md:px-12 md:pb-24 md:pt-24">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={reduce ? false : { opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-12 md:mb-24">
          <div className="md:col-span-4">
            <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 md:text-xs">
              About us
            </span>
          </div>

          <div className="md:col-span-8">
            <h2 className="text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-[56px]">
              {introText}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="flex flex-col gap-10 md:col-span-8 md:col-start-5 md:gap-12">
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-base leading-relaxed text-gray-600 md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-20 border-t border-gray-200 pt-12 md:col-span-8 md:col-start-5 md:mt-28">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                { label: "Marketing", value: "Brand, content & growth" },
                { label: "Development", value: "Web, product & Webflow" },
                { label: "Strategy", value: "Full-funnel partnership" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 md:text-xs">
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-medium tracking-tight text-black md:text-xl">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
