import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Milestones } from "@/components/site/milestones";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Services — Brutanix Studio",
  description:
    "Brand identity, UI/UX design and production development — delivered as one system rather than three handoffs.",
};

export default function ServicesPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Service — 02)"
          title="Our Services"
          intro="Identity, interface and engineering under one roof. You brief once, and the same team carries it from positioning through to production code."
          cta="Start Your Project"
        />
        <Services />
        <Process />
        <Milestones />
      </main>
      <SiteFooter />
    </>
  );
}
