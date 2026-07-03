"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium } from "@/components/motion/presets";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "SACRÉ ARMAND",
    description: "Crafting a premium brand story and copywriting pipeline for high-end gourmet dining.",
    tags: ["copywriting", "strategy", "brand content"],
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    icon: "✳",
    metric: "+180% Engagement",
    color: "from-brand-purple/10 to-brand-lavender/5"
  },
  {
    title: "SMOTEO",
    description: "Complete digital strategy, visual branding, and conversion-optimized design.",
    tags: ["strategy", "copywriting", "design"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: "■",
    metric: "+55% Conversions",
    color: "from-brand-lavender/10 to-brand-purple/5"
  },
  {
    title: "NIIR",
    description: "Strategic communications and digital content hub for an innovative energy brand.",
    tags: ["communication", "branding", "content strategy"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    icon: "✦",
    metric: "4.2x Organic Reach",
    color: "from-brand-purple/10 to-brand-navy/5"
  },
  {
    title: "YOKITUP",
    description: "Editorial alignment and digital asset kit orchestration for a scaling culinary platform.",
    tags: ["editorial", "branding", "design", "copywriting"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80",
    icon: "✹",
    metric: "+$2.4M ARR Catalyst",
    color: "from-brand-navy/10 to-brand-purple/5"
  },
];

export default function ProjectsShowcase() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#F9F9F9] text-neutral-900 px-6 md:px-12 py-16 font-sans relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="relative">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-purple block mb-3 pl-1">
              Featured Case Studies
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none uppercase bg-gradient-to-r from-neutral-950 to-brand-purple bg-clip-text text-transparent pb-1">
              Creating Love Brands
            </h2>
          </div>

          <button
            type="button"
            className="group flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:border-brand-purple hover:bg-brand-purple hover:text-white cursor-pointer hover:scale-102 active:scale-98"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20"
          staggerDelay={0.11}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer flex flex-col h-full"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.45, ease: easePremium }}
            >
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-100 mb-6 rounded-3xl border border-neutral-250/20 shadow-[0_4px_24px_rgba(0,0,0,0.015)]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Metric Badge */}
                <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/90 px-4 py-1.5 text-xs font-bold text-brand-purple shadow-md backdrop-blur-xs relative z-20">
                  {project.metric}
                </span>

                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-brand-purple font-bold text-lg">{project.icon}</span>
                <h3 className="font-extrabold text-xl tracking-tight uppercase text-neutral-900 group-hover:text-brand-purple transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              <p className="text-neutral-500 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#2D2D2D]/[0.05] border border-black/[0.04] text-neutral-600 text-[10px] px-3.5 py-1 rounded-full uppercase font-bold tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
