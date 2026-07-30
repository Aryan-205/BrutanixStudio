import type { Metadata } from "next";
import {
  FeaturedCase,
  ProjectLedger,
  ProjectsHero,
} from "@/components/site/project-sections";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Projects — Brutanix Studio",
  description:
    "One case study opened up, then every engagement Brutanix Studio has shipped since 2021.",
};

export default function ProjectsPage() {
  return (
    <>
      <main>
        <ProjectsHero />
        <FeaturedCase />
        <ProjectLedger />
      </main>
      <SiteFooter />
    </>
  );
}
