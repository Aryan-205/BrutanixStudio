"use client";

import { Reveal } from "@/components/motion/Reveal";
import { BrowserMockup } from "@/components/ProjectsPage/DeviceMockups";
import type { ProjectCaseStudy } from "@/data/projectsPageContent";

type ProjectGalleryProps = {
  project: ProjectCaseStudy;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  if (project.gallery.length === 0) return null;

  return (
    <div className="mx-auto mt-16 max-w-5xl border-t border-neutral-100 pt-14">
      <Reveal>
        <h2 className="text-sm font-medium text-neutral-400">Inside the work</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        {project.gallery.map((shot, index) => (
          <Reveal
            key={shot.src}
            delay={0.08 + index * 0.06}
            className={shot.wide ? "md:col-span-2" : undefined}
          >
            <BrowserMockup
              src={shot.src}
              alt={shot.alt}
              sizes={
                shot.wide
                  ? "(min-width: 1024px) 64rem, 92vw"
                  : "(min-width: 768px) 32rem, 92vw"
              }
            />

            {shot.caption ? (
              <p className="mt-5 text-sm leading-relaxed text-neutral-500">
                {shot.caption}
              </p>
            ) : null}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
