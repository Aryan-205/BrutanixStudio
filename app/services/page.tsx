import type { Metadata } from "next";
import {
  EngagementModels,
  ServiceFaq,
  ServiceMenu,
  ServicesHero,
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
        <ServicesHero />
        <ServiceMenu />
        <EngagementModels />
        <Process />
        <ServiceFaq />
      </main>
      <SiteFooter />
    </>
  );
}
