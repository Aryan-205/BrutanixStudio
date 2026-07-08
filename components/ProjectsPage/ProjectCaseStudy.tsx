"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";
import type { ProjectCaseStudy as ProjectCaseStudyType } from "@/data/projectsPageContent";

type ProjectCaseStudyProps = {
  project: ProjectCaseStudyType;
  index: number;
  isFirst?: boolean;
};

export default function ProjectCaseStudy({
  project,
  index,
  isFirst = false,
}: ProjectCaseStudyProps) {
  const reduce = useReducedMotion();
  const isReversed = index % 2 === 1;

  return (
    <section
      className={`grid min-h-screen grid-cols-1 lg:grid-cols-2 ${
        isFirst ? "pt-20 md:pt-24" : ""
      }`}
    >
      {/* Content panel */}
      <motion.div
        className={`flex flex-col justify-center bg-white px-8 py-20 md:px-14 md:py-28 lg:px-16 xl:px-24 ${
          isReversed ? "lg:order-2" : "lg:order-1"
        }`}
        initial={reduce ? false : { opacity: 0, x: isReversed ? 32 : -32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, ease: easePremium }}
      >
        <span className="text-sm font-medium tracking-tight text-neutral-400">
          {project.name}
        </span>

        <h2 className="mt-5 max-w-xl text-[2rem] font-medium leading-[1.12] tracking-tight text-[#111] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
          {project.headline}{" "}
          <span className="text-[#5210F8]">{project.highlight}</span>
        </h2>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
          {project.description}
        </p>

        <div className="mt-10">
          <h3 className="text-sm font-medium text-neutral-400">Services</h3>
          <ul className="mt-5 space-y-3">
            {project.services.map((service) => (
              <li
                key={service}
                className="flex items-center gap-3 text-sm text-neutral-700"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5210F8]" />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href={`/projects/${project.id}`}
          className="group mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-[#111] px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5210F8] hover:shadow-[0_8px_32px_rgba(82,16,248,0.25)]"
        >
          View details
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>

      {/* Visual panel */}
      <motion.div
        className={`relative flex items-center justify-center bg-neutral-100 px-8 py-16 md:px-12 md:py-20 ${
          isReversed ? "lg:order-1" : "lg:order-2"
        }`}
        initial={reduce ? false : { opacity: 0, x: isReversed ? -32 : 32 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.75, delay: 0.08, ease: easePremium }}
      >
        <div className="relative aspect-[16/10] w-full max-w-lg overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_24px_64px_rgba(7,44,85,0.12)]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 1024px) 32rem, 90vw"
            className="object-cover"
            priority={isFirst}
          />
        </div>
      </motion.div>
    </section>
  );
}
