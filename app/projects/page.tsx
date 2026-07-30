import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ProjectIndex } from "@/components/site/project-index";
import { Milestones } from "@/components/site/milestones";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Projects — Brutanix Studio",
  description:
    "Selected brand identity, product design and development work from Brutanix Studio.",
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Project — 03)"
          title="Our Work"
          intro="Brand systems, products and campaigns for teams that would rather stand out than blend in. A selection, not an archive."
          cta="Book a Call"
        />
        <ProjectIndex />
        <Milestones />
      </main>
      <SiteFooter />
    </>
  );
}
