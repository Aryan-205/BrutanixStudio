import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import {
  AskDirectory,
  OpenRoles,
  TeamRoster,
} from "@/components/site/team-sections";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Team — Brutanix Studio",
  description:
    "The four senior people behind Brutanix Studio, who to ask about what, and the roles we're hiring for.",
};

export default function TeamPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Team — 04)"
          title="Four People"
          intro="No account layer, no junior bench, nothing subcontracted. You brief the person who does the work, every time."
          cta="Work With Us"
          meta={[
            { label: "Studio size", value: "4" },
            { label: "Average tenure", value: "8 years" },
            { label: "Cities", value: "3" },
            { label: "Open roles", value: "2" },
          ]}
        />
        <TeamRoster />
        <AskDirectory />
        <OpenRoles />
      </main>
      <SiteFooter />
    </>
  );
}
