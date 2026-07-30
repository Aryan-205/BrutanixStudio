import { Eyebrow, Shell } from "@/components/ui/primitives";
import { ProjectCard } from "@/components/site/work";
import {
  ChatGeniusMockup,
  FieldTypeMockup,
  RockBottomMockup,
} from "@/components/ui/mockups";

const PROJECTS = [
  {
    media: <ChatGeniusMockup />,
    title: "Chat Genius",
    period: "(2024 — Still on going)",
    tags: ["Website Design", "Development"],
  },
  {
    media: <FieldTypeMockup />,
    title: "Field Type",
    period: "(2023 — Jan 2025)",
    tags: ["Branding", "Social Media"],
  },
  {
    media: <RockBottomMockup />,
    title: "Rock Bottom",
    period: "(Graphic Design — 2025)",
    tags: ["Print", "Art Direction"],
  },
  {
    media: <FieldTypeMockup />,
    title: "Northbound",
    period: "(2022 — Nov 2023)",
    tags: ["Identity", "Web"],
  },
  {
    media: <ChatGeniusMockup />,
    title: "Halogen",
    period: "(2022 — Mar 2023)",
    tags: ["Product Design", "Development"],
  },
  {
    media: <RockBottomMockup />,
    title: "Studio Mireille",
    period: "(2021 — Aug 2022)",
    tags: ["Branding", "Packaging"],
  },
];

export function ProjectIndex() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex items-end justify-between gap-6">
          <Eyebrow className="text-black/45">(Selected work)</Eyebrow>
          <Eyebrow className="text-black/45">
            {PROJECTS.length} projects
          </Eyebrow>
        </div>

        <div className="reveal-children mt-8 grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2 lg:gap-x-6 lg:gap-y-14">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Shell>
    </section>
  );
}
