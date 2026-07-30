import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import {
  FeaturedCase,
  ProjectLedger,
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
        <PageHero
          eyebrow="(Project — 03)"
          title="The Ledger"
          intro="Brand systems, products and campaigns for teams that would rather stand out than blend in. One opened up, the rest listed."
          cta="Book a Call"
          meta={[
            { label: "Shipped", value: "50+" },
            { label: "Longest engagement", value: "4 years" },
            { label: "Repeat clients", value: "62%" },
            { label: "Industries", value: "11" },
          ]}
        />
        <FeaturedCase />
        <ProjectLedger />
      </main>
      <SiteFooter />
    </>
  );
}
