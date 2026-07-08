"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium } from "@/components/motion/presets";
import { blogPosts } from "@/data/blogPageContent";

function BlogPostCard({
  title,
  description,
  category,
  readTime,
  image,
  date,
}: {
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group relative flex flex-col overflow-hidden rounded-4xl border border-neutral-200/50 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-500 hover:border-brand-purple/20 hover:shadow-[0_20px_48px_rgba(82,16,248,0.05)] cursor-pointer"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.5, ease: easePremium }}
    >
      <div className="relative m-3 aspect-16/10 overflow-hidden rounded-2xl bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full border border-brand-purple/10 bg-white/95 px-3 py-1 text-xs font-bold text-brand-purple shadow-sm backdrop-blur-xs">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
        <div className="mb-4 flex items-center justify-between text-xs font-bold text-neutral-400">
          <span>{date}</span>
          <span className="rounded-full bg-brand-purple/[0.06] px-2.5 py-0.5 text-brand-purple border border-brand-purple/5">
            {readTime}
          </span>
        </div>

        <h3 className="text-xl font-bold leading-snug tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-brand-purple">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-500">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-1.5 text-sm font-bold text-brand-purple">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            Read insight
          </span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPostsGrid() {
  return (
    <section className="px-6 pb-20 md:px-12 md:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5210F8]/80 md:text-xs">
              Latest Insights
            </span>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-8">
            <h2 className="text-2xl font-bold leading-[1.1] tracking-tight text-neutral-900 sm:text-3xl md:text-[2.25rem]">
              Expert perspectives to fuel your next growth move
            </h2>
          </Reveal>
        </div>

        <StaggerChildren
          staggerDelay={0.1}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </StaggerChildren>

        {/* Newsletter Subscription Box */}
        <Reveal delay={0.2} className="mt-20">
          <div className="rounded-[2.5rem] border border-neutral-200 bg-gradient-to-br from-neutral-50/60 via-white/80 to-white/90 p-8 md:p-14 shadow-[0_12px_40px_rgba(82,16,248,0.02)] backdrop-blur-md relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute right-[-10%] top-[-10%] w-64 h-64 rounded-full bg-brand-purple/[0.03] blur-[80px] pointer-events-none" />
            <div className="max-w-md relative z-10 text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-purple">
                Newsletter
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
                Get the InvisiEdge brief
              </h3>
              <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                Join founders and marketers receiving actionable tactical playbooks on growth, design systems, and automation.
              </p>
            </div>
            <form className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-neutral-200 bg-white px-4.5 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-300 hover:border-neutral-350 focus:border-brand-purple focus:shadow-[0_0_0_4px_rgba(82,16,248,0.08)]"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-purple px-6 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(82,16,248,0.2)] transition-all hover:bg-[#4210d0] active:scale-98 cursor-pointer text-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
