import type { ReactNode } from "react";
import {
  Chip,
  Eyebrow,
  PillButton,
  SectionTitle,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import {
  ChatGeniusMockup,
  FieldTypeMockup,
  RockBottomMockup,
} from "@/components/ui/mockups";

export function ProjectCard({
  media,
  title,
  period,
  tags,
}: {
  media: ReactNode;
  title: string;
  period: string;
  tags: string[];
}) {
  return (
    <article>
      <div className="overflow-hidden rounded-2xl">{media}</div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-1.5 text-base text-black/45">{period}</p>
        </div>
        <ul className="flex flex-wrap justify-end gap-2">
          {tags.map((tag) => (
            <li key={tag}>
              <Chip tone="outline">{tag}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="project" className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <SectionTitle>Our Work</SectionTitle>

        <div className="mt-4 flex justify-end">
          <Eyebrow className="text-black/45">(Project &mdash; 03)</Eyebrow>
        </div>

        <div className="reveal-children mt-8 grid gap-8 md:grid-cols-2 lg:gap-6">
          <ProjectCard
            media={<ChatGeniusMockup />}
            title="Chat Genius"
            period="(2024 — Still on going)"
            tags={["Website Design", "Development"]}
          />
          <ProjectCard
            media={<FieldTypeMockup />}
            title="Field Type"
            period="(2023 — Jan 2025)"
            tags={["Branding", "Social Media"]}
          />
        </div>

        <div className="reveal mt-16 grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <article>
            <div className="overflow-hidden rounded-2xl">
              <RockBottomMockup />
            </div>
            <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
              Rock Bottom
            </h3>
            <p className="mt-1.5 text-base text-black/45">
              (Graphic Design — 2025)
            </p>
          </article>

          <div>
            <Statement className="max-w-[24ch] font-medium text-black/45">
              We born in a shared studio loft with one mission:{" "}
              <span className="font-bold text-ink">
                create work that doesn&rsquo;t blend in.
              </span>
            </Statement>
            <PillButton href="/projects" className="mt-8">
              See All Projects
            </PillButton>
          </div>
        </div>
      </Shell>
    </section>
  );
}
