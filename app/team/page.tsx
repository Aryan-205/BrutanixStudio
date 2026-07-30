import type { Metadata } from "next";
import {
  AskDirectory,
  OpenRoles,
  TeamHero,
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
        <TeamHero />
        <TeamRoster />
        <AskDirectory />
        <OpenRoles />
      </main>
      <SiteFooter />
    </>
  );
}
