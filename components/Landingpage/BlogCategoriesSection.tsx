"use client";

import {
  Bot,
  Calendar,
  Crown,
  Globe,
  Search,
  Share2,
  Target,
  UserPlus,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium } from "@/components/motion/presets";
import { blogCategories } from "@/lib/data/blogPageContent";

const categoryIcons: Record<string, LucideIcon> = {
  "Brand Strategy": Target,
  "Website Growth": Globe,
  SEO: Search,
  "AI Marketing": Bot,
  "Social Media": Share2,
  "Lead Generation": UserPlus,
  "Marketing Automation": Workflow,
  "Founder Branding": Crown,
  "Event Marketing": Calendar,
};

function CategoryCard({
  category,
  index,
}: {
  category: string;
  index: number;
}) {
  const reduce = useReducedMotion();
  const Icon = categoryIcons[category] ?? Target;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-4xl border border-neutral-200/50 bg-linear-to-br from-neutral-50/50 to-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.01)] transition-[box-shadow,border-color] duration-500 hover:border-brand-purple/20 hover:shadow-[0_16px_40px_rgba(82,16,248,0.05)] cursor-pointer"
      whileHover={reduce ? undefined : { y: -5 }}
      transition={{ duration: 0.4, ease: easePremium }}
    >
      <div className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-brand-purple/20 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-purple/[0.06] text-brand-purple transition-colors duration-500 group-hover:from-brand-purple group-hover:to-brand-navy group-hover:text-white hover:bg-brand-purple/20">
          <Icon className="h-4 w-4 transition-transform duration-300 hover:text-white group-hover:rotate-6" strokeWidth={1.75} />
        </div>
        <span className="text-xs font-bold tabular-nums text-neutral-300 transition-colors duration-500 group-hover:text-brand-purple bg-neutral-100/50 border border-neutral-200/20 px-2 py-0.5 rounded-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mt-5 text-base font-bold tracking-tight text-neutral-900 group-hover:text-brand-purple transition-colors duration-300">
        {category}
      </p>

      <div className="relative mt-4 h-px w-full bg-black/[0.05] transition-all duration-500 group-hover:bg-linear-to-r group-hover:from-brand-purple/40 group-hover:to-transparent" />
    </motion.div>
  );
}

export default function BlogCategoriesSection() {
  return (
    <section className="px-6 pb-20 md:px-12 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-6 md:gap-8">
          <Reveal delay={0.06} className="md:col-span-8">
            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.25rem]">
              Explore topics across branding, growth, and digital strategy
            </h2>
          </Reveal>
        </div>

        <StaggerChildren
          staggerDelay={0.06}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogCategories.map((category, index) => (
            <CategoryCard key={category} category={category} index={index} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
