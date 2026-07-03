"use client";

import {
  Bot,
  Layers,
  Target,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium } from "@/components/motion/presets";
import { valueProps } from "@/lib/data/servicesPageContent";

const valuePropIcons: LucideIcon[] = [
  Target,
  Layers,
  Users,
  Bot,
  TrendingUp,
];

function ValuePropCard({
  title,
  description,
  index,
  icon: Icon,
}: {
  title: string;
  description: string;
  index: number;
  icon: LucideIcon;
}) {
  const reduce = useReducedMotion();
  const isLast = index === valueProps.length - 1;

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-4xl border border-neutral-200/50 bg-linear-to-br from-neutral-50/50 to-white p-8 shadow-md transition-all duration-500 hover:border-brand-purple/20 hover:shadow-lg cursor-pointer ${
        isLast ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""
      }`}
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ duration: 0.4, ease: easePremium }}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-purple/[0.03] transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-purple/[0.06] text-brand-purple transition-all duration-500 group-hover:bg-brand-purple group-hover:text-white">
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" strokeWidth={1.75} />
        </div>
        <span className="text-xs font-bold tabular-nums text-neutral-300 transition-colors duration-500 group-hover:text-brand-purple/60 bg-neutral-100/50 border border-neutral-200/30 px-2 py-0.5 rounded-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="relative mt-6 text-xl font-bold tracking-tight text-neutral-900 group-hover:text-brand-purple transition-colors duration-300">
        {title}
      </h3>
      <p className="relative mt-3 text-[15px] leading-relaxed text-neutral-500">
        {description}
      </p>

      <div className="relative mt-6 h-px w-full bg-black/[0.05] transition-all duration-500 group-hover:bg-linear-to-r group-hover:from-brand-purple/40 group-hover:to-transparent" />
    </motion.div>
  );
}

export default function ServicesWhyPartner() {
  return (
    <section className="px-6 pb-24 md:px-12 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5210F8]/80 md:text-xs">
              Why InvisiEdge
            </span>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-8">
            <h2 className="text-3xl font-semibold leading-[1.1] tracking-tight text-[#111] sm:text-4xl md:text-[2.75rem]">
              Why Partner With InvisiEdge?
            </h2>
          </Reveal>
        </div>

        <StaggerChildren
          staggerDelay={0.07}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {valueProps.map((prop, index) => (
            <ValuePropCard
              key={prop.title}
              title={prop.title}
              description={prop.description}
              index={index}
              icon={valuePropIcons[index]}
            />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
