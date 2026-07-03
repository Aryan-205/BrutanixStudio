"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium } from "@/components/motion/presets";
import { blogPosts } from "@/lib/data/blogPageContent";

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
      className="group relative flex flex-col overflow-hidden rounded-4xl border border-black/[0.06] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.04)] transition-[box-shadow,border-color] duration-500 hover:border-[#5210F8]/15 hover:shadow-[0_20px_56px_rgba(82,16,248,0.1)]"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.5, ease: easePremium }}
    >
      <div className="relative m-3 aspect-16/10 overflow-hidden rounded-3xl bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#072C55]/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#5210F8] shadow-sm backdrop-blur-sm">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-2">
        <div className="mb-4 flex items-center justify-between text-xs font-medium text-neutral-400">
          <span>{date}</span>
          <span className="rounded-full bg-[#5210F8]/[0.06] px-2.5 py-0.5 text-[#5210F8]">
            {readTime}
          </span>
        </div>

        <h3 className="text-xl font-semibold leading-snug tracking-tight text-[#111] transition-colors duration-300 group-hover:text-[#5210F8]">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-neutral-500">
          {description}
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#5210F8]">
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            Read insight
          </span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2}
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
            <h2 className="text-2xl font-semibold leading-[1.1] tracking-tight text-[#111] sm:text-3xl md:text-[2.25rem]">
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
      </div>
    </section>
  );
}
