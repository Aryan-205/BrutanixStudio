"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";
import { Reveal } from "@/components/motion/Reveal";
import { MacBookMockup } from "@/components/ProjectsPage/DeviceMockups";
import type { ProjectCaseStudy } from "@/data/projectsPageContent";

type ProjectHeroProps = {
  project: ProjectCaseStudy;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pt-32">
      <div className="services-grid-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors duration-300 hover:text-[#5210F8]"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            All projects
          </Link>
        </Reveal>

        <motion.h1
          className="mt-14 text-center text-[clamp(3rem,13vw,10rem)] font-medium leading-[0.92] tracking-[-0.04em] text-[#111] md:mt-16"
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easePremium }}
        >
          {project.name}
        </motion.h1>

        <motion.p
          className="mt-5 text-center text-lg tracking-tight text-neutral-400 md:text-2xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {project.tagline}
        </motion.p>

        {/* Spotlight · device · stats */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 md:mt-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,2.2fr)_minmax(0,0.95fr)] lg:gap-10">
          <Reveal delay={0.35} className="order-3 lg:order-1">
            <Spotlight text={project.spotlight} />
          </Reveal>

          <motion.div
            className="order-1 lg:order-2"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: easePremium }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-[#EEE7FF] via-[#F4F1FF] to-[#E4EEFF] p-6 sm:p-10 md:p-14">
              <MacBookMockup
                src={project.image}
                alt={`${project.name} product screen`}
                priority
                sizes="(min-width: 1024px) 40rem, 88vw"
              />
            </div>
          </motion.div>

          <div className="order-2 space-y-8 lg:order-3 lg:space-y-10">
            {project.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.3 + index * 0.08}>
                <p className="text-2xl font-medium tracking-tight text-[#5210F8] md:text-[1.75rem]">
                  {stat.value}
                </p>
                <p className="mt-1.5 max-w-[14rem] text-sm leading-relaxed text-neutral-500">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Gradient ring callout with a small progress track, echoing the product's core loop. */
function Spotlight({ text }: { text: string }) {
  return (
    <div className="mx-auto aspect-square w-full max-w-[16rem] rounded-full bg-gradient-to-br from-[#5210F8]/35 via-[#F0A9C8]/40 to-[#8FE0D6]/40 p-px">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 rounded-full bg-white px-8 text-center">
        <div className="flex items-center gap-1.5">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={
                dot === 2
                  ? "h-3.5 w-3.5 rounded-full bg-[#5210F8]"
                  : dot < 2
                    ? "h-2 w-2 rounded-full bg-[#5210F8]/40"
                    : "h-2 w-2 rounded-full bg-neutral-200"
              }
            />
          ))}
        </div>

        <p className="text-lg font-semibold leading-snug tracking-tight text-[#111]">
          {text}
        </p>
      </div>
    </div>
  );
}
