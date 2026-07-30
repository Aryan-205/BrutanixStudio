import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Founder } from "@/components/site/founder";
import { TeamGrid } from "@/components/site/team-grid";
import { Milestones } from "@/components/site/milestones";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Team — Brutanix Studio",
  description:
    "The small, senior team behind Brutanix Studio — strategists, designers and engineers who ship together.",
};

export default function TeamPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Team — 04)"
          title="The People"
          intro="From digital campaigns to full-stack brand systems, our small team shipped big things. Every single one, intentional."
          cta="Work With Us"
        />
        <Founder />
        <TeamGrid />
        <Milestones />
      </main>
      <SiteFooter />
    </>
  );
}
