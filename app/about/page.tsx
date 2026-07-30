import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ValueProp } from "@/components/site/value-prop";
import { Milestones } from "@/components/site/milestones";
import { Process } from "@/components/site/process";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "About — Brutanix Studio",
  description:
    "Brutanix Studio is a design and development agency built around one mission: create work that doesn't blend in.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(About — 01)"
          title="About Us"
          intro="We born in a shared studio loft with one mission: create work that doesn't blend in. Fifteen years later, that's still the whole brief."
        />
        <ValueProp />
        <Milestones />
        <Process />
      </main>
      <SiteFooter />
    </>
  );
}
