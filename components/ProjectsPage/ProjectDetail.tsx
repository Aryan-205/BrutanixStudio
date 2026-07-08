"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { ProjectCaseStudy } from "@/data/projectsPageContent";

type ProjectDetailProps = {
  project: ProjectCaseStudy;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <section className="relative px-6 pb-20 pt-28 md:px-12 md:pt-36">
      <div className="mx-auto max-w-5xl">
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

        <Reveal delay={0.06}>
          <span className="mt-10 block text-sm font-medium tracking-tight text-neutral-400">
            {project.name}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-5 max-w-3xl text-[2rem] font-medium leading-[1.12] tracking-tight text-[#111] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            {project.headline}{" "}
            <span className="text-[#5210F8]">{project.highlight}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
            {project.description}
          </p>
        </Reveal>
      </div>

      {/* Visual — plain background, smaller rectangular image */}
      <Reveal delay={0.18}>
        <div className="mx-auto mt-14 flex max-w-5xl items-center justify-center rounded-2xl bg-neutral-100 px-6 py-16 md:mt-16 md:px-12 md:py-20">
          <div className="relative aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_24px_64px_rgba(7,44,85,0.12)]">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 48rem, 90vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 border-t border-neutral-100 pt-14 md:grid-cols-3 md:gap-8">
        <Reveal delay={0.05}>
          <h2 className="text-sm font-medium text-neutral-400">Services</h2>
        </Reveal>

        <div className="md:col-span-2">
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5210F8]" />
                  {service}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* How we helped — what we did for the brand */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 border-t border-neutral-100 pt-14 md:grid-cols-3 md:gap-8">
        <Reveal delay={0.05}>
          <h2 className="text-sm font-medium text-neutral-400">How we helped</h2>
        </Reveal>

        <div className="md:col-span-2">
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
              {project.contributionIntro}
            </p>
          </Reveal>

          <div className="mt-12 space-y-10">
            {project.approach.map((step, index) => (
              <Reveal key={step.title} delay={0.12 + index * 0.06}>
                <div className="flex gap-5">
                  <span className="mt-1 shrink-0 text-sm font-semibold tabular-nums text-[#5210F8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-tight text-[#111]">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
