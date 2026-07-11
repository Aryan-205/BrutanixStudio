"use client";

import { Reveal } from "@/components/motion/Reveal";
import {
  BrowserMockup,
  MacBookMockup,
} from "@/components/ProjectsPage/DeviceMockups";
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
        {project.gallery.map((shot, index) => {
          const isMacBook = shot.device === "macbook";

          return (
            <Reveal
              key={shot.src}
              delay={0.08 + index * 0.06}
              className={isMacBook ? "md:col-span-2" : undefined}
            >
              {isMacBook ? (
                <div className="rounded-3xl bg-gradient-to-br from-[#EEE7FF] via-[#F5F3FF] to-[#E4EEFF] p-6 sm:p-10 md:p-14">
                  <MacBookMockup
                    src={shot.src}
                    alt={shot.alt}
                    sizes="(min-width: 1024px) 44rem, 88vw"
                  />
                </div>
              ) : (
                <BrowserMockup src={shot.src} alt={shot.alt} />
              )}

              {shot.caption ? (
                <p className="mt-5 text-sm leading-relaxed text-neutral-500">
                  {shot.caption}
                </p>
              ) : null}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
