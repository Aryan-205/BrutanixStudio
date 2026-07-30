import type { ReactNode } from "react";
import {
  Eyebrow,
  PillButton,
  SectionTitle,
  Shell,
} from "@/components/ui/primitives";
import {
  ChatGeniusMockup,
  FieldTypeMockup,
  RockBottomMockup,
} from "@/components/ui/mockups";

function ProjectCard({
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
      <div className="mt-3.5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[15px] font-semibold tracking-[-0.025em]">
            {title}
          </h3>
          <p className="mt-1 text-[11px] text-black/45">{period}</p>
        </div>
        <ul className="flex flex-wrap justify-end gap-x-4 gap-y-1 text-[11px] text-black/45">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
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

        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:gap-4">
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

        <div className="mt-10 grid gap-7 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
          <article>
            <div className="overflow-hidden rounded-2xl">
              <RockBottomMockup />
            </div>
            <h3 className="font-display mt-3.5 text-[15px] font-semibold tracking-[-0.025em]">
              Rock Bottom
            </h3>
            <p className="mt-1 text-[11px] text-black/45">
              (Graphic Design — 2025)
            </p>
          </article>

          <div>
            <p className="font-display max-w-[26ch] text-[clamp(1.35rem,3.3vw,2.35rem)] leading-[1.14] font-medium tracking-[-0.032em] text-black/45">
              We born in a shared studio loft with one mission:{" "}
              <span className="font-semibold text-ink">
                create work that doesn&rsquo;t blend in.
              </span>
            </p>
            <PillButton href="#project" className="mt-7">
              See All Projects
            </PillButton>
          </div>
        </div>
      </Shell>
    </section>
  );
}
