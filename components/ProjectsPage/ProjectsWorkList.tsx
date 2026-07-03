"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "lucide-react";

const workItems = [
  {
    title: "HOUSTON EXPONENTIAL",
    description: "A comprehensive digital hub and resource ecosystem built to accelerate Houston's primary technology and startup landscape.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
    stats: "400+ Active Startups",
    achievement: "Decreased registration friction by 70% with modular workspace accounts."
  },
  {
    title: "NAMI ML",
    description: "A premium visual identity refresh and frontend design integration for the leading subscription app intelligence suite.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    reverse: true,
    stats: "100K+ Active Installs",
    achievement: "Boosted paywall onboarding progression rates by 24% globally."
  },
  {
    title: "THIN REEL",
    description: "How we scaled a localized production house into one of the most prominent commercial video marketing teams in the UK.",
    image: "https://images.unsplash.com/photo-1579165466541-75e248905b63?auto=format&fit=crop&w=1200&q=80",
    reverse: false,
    stats: "45M+ Video Views",
    achievement: "Re-platformed corporate assets, increasing direct inquiries by 180%."
  },
];

export default function ProjectsWorkList() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F9F9F9] text-neutral-900 px-6 md:px-12 py-24 border-t border-black/[0.03]">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
        {workItems.map((item, index) => (
          <Reveal
            key={index}
            x={item.reverse ? 30 : -30}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Content Column */}
            <div
              className={`lg:col-span-5 flex flex-col gap-5 ${
                item.reverse ? "lg:order-2 lg:pl-10" : "lg:pr-10"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-purple animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple">
                  {item.stats}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight uppercase text-neutral-900 group-hover:text-brand-purple transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
              
              <div className="mt-2 border-l border-brand-purple/20 pl-4 py-1 text-xs text-neutral-500 italic">
                {item.achievement}
              </div>

              <button
                type="button"
                className="group flex w-fit items-center gap-1.5 mt-4 text-xs font-bold uppercase tracking-wider text-brand-purple cursor-pointer"
              >
                Read full case study
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Image Column */}
            <div
              className={`lg:col-span-7 relative aspect-video w-full overflow-hidden rounded-3xl border border-neutral-200/40 shadow-[0_8px_32px_rgba(0,0,0,0.015)] ${
                item.reverse ? "lg:order-1" : ""
              }`}
            >
              <div className="bg-neutral-100 w-full h-full relative group">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent opacity-40" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
