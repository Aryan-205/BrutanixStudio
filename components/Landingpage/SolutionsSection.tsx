"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useReducedMotion } from "motion/react";

const solutions = [
  {
    id: 1,
    number: "01",
    title: "Real-Time Brands",
    description:
      "Brands built as living systems to move at the speed of culture",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    number: "02",
    title: "Media Acceleration",
    description:
      "Unifying intelligence, content, media, and measurement into one performance system",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    number: "03",
    title: "Marketing Orchestration",
    description:
      "We collapse your content supply chain into one AI-powered system",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    number: "04",
    title: "AI Transformation",
    description: "AI embedded across your business, from strategy to scale",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  },
];

function SolutionCard({
  number,
  title,
  description,
  image,
  id,
}: (typeof solutions)[number]) {
  return (
    <article
      className={`"group relative w-[min(82vw,22rem)] shrink-0 sm:w-88 md:w-[24rem] lg:w-104 cursor-pointer ${id % 2 == 0 ? "translate-y-10" : "-translate-y-10"}`}
    >
      <p className="absolute -top-12 right-0 text-black/80 text-7xl font-bold">
        {number}
      </p>

      <div className="relative z-10">
        <div className="relative mb-5 aspect-4/3 overflow-hidden rounded-sm bg-white">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 26rem, (min-width: 768px) 24rem, 22rem"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03] border"
          />
        </div>

        <p className="mb-2 text-sm text-[#5c5c5c]">Solutions</p>

        <div className="mb-3 flex items-center justify-start gap-4">
          <h3 className="text-xl font-semibold tracking-tight text-[#1a1a1a] md:text-[1.35rem]">
            {title}
          </h3>
          <button
            type="button"
            aria-label={`Learn more about ${title}`}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2b2b2b] text-white transition-colors hover:bg-black"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </button>
        </div>

        <p className="max-w-[18rem] text-sm leading-relaxed text-[#6b6b6b] md:text-[0.95rem]">
          {description}
        </p>
      </div>
    </article>
  );
}

const SolutionsSection = () => {
  const reduceMotion = useReducedMotion();
  const items = reduceMotion ? solutions : [...solutions, ...solutions];

  return (
    <section className="overflow-hidden bg-[#F9F9F9] font-sans">
      <div
        className={`solutions-marquee group/marquee ${reduceMotion ? "solutions-marquee--static" : ""}`}
      >
        <div className="solutions-track flex w-max gap-8 px-6 py-24 md:gap-10 md:px-12">
          {items.map((solution, index) => (
            <SolutionCard key={`${solution.number}-${index}`} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
