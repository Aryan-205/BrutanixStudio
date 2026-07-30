import type { Metadata } from "next";
import {
  AboutHero,
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
        <AboutHero />
        <StudioStory />
        <StudioTimeline />
        <StudioPrinciples />
      </main>
      <SiteFooter />
    </>
  );
}
