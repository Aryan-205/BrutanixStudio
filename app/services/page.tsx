import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import {
  EngagementModels,
  ServiceFaq,
  ServiceMenu,
} from "@/components/site/service-sections";
import { Process } from "@/components/site/process";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Services — Brutanix Studio",
  description:
    "Brand identity, UI/UX, development and design systems — scoped, priced and delivered by the four people who do the work.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Service — 02)"
          title="The Menu"
          intro="Four disciplines, three ways to engage, and the figures to plan against. You brief once and the same team carries it to production."
          cta="Start Your Project"
          meta={[
            { label: "Disciplines", value: "4" },
            { label: "Typical span", value: "6–16 weeks" },
            { label: "Starting from", value: "€24k" },
            { label: "Team on your work", value: "4 senior" },
          ]}
        />
        <ServiceMenu />
        <EngagementModels />
        <Process />
        <ServiceFaq />
      </main>
      <SiteFooter />
    </>
  );
}
