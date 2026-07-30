import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import {
  StudioPrinciples,
  StudioStory,
  StudioTimeline,
} from "@/components/site/about-sections";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "About — Brutanix Studio",
  description:
    "Four senior people, fifteen years, eight to ten engagements a year. The record of how Brutanix Studio works and why it stays small.",
};

export default function AboutPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(About — 01)"
          title="The Record"
          intro="Founded 2010 in a shared loft. Still four people, on purpose. Here is what we've built and what we hold to."
          cta="Book a Call"
          meta={[
            { label: "Founded", value: "2010" },
            { label: "Studio size", value: "4 people" },
            { label: "Projects shipped", value: "50+" },
            { label: "Engagements a year", value: "8–10" },
          ]}
        />
        <StudioStory />
        <StudioTimeline />
        <StudioPrinciples />
      </main>
      <SiteFooter />
    </>
  );
}
