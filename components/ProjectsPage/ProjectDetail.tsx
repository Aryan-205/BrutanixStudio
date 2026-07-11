"use client";

import { Reveal } from "@/components/motion/Reveal";
import ProjectGallery from "@/components/ProjectsPage/ProjectGallery";
import ProjectHero from "@/components/ProjectsPage/ProjectHero";
import type { ProjectCaseStudy } from "@/data/projectsPageContent";

type ProjectDetailProps = {
  project: ProjectCaseStudy;
};

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <>
      <ProjectHero project={project} />

      <section className="relative px-6 pb-20 md:px-12">
        <div className="mx-auto max-w-5xl border-t border-neutral-100 pt-14">
          <Reveal>
            <h1 className="max-w-3xl text-[2rem] font-medium leading-[1.12] tracking-tight text-[#111] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              {project.headline}{" "}
              <span className="text-[#5210F8]">{project.highlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.06}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-500 md:text-lg">
              {project.description}
            </p>
          </Reveal>
        </div>

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

        <ProjectGallery project={project} />

        {/* How we helped — what we did for the brand */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 border-t border-neutral-100 pt-14 md:grid-cols-3 md:gap-8">
          <Reveal delay={0.05}>
            <h2 className="text-sm font-medium text-neutral-400">
              How we helped
            </h2>
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
    </>
  );
}
