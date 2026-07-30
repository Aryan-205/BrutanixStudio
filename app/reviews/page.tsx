import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { Testimonials } from "@/components/site/testimonials";
import { Milestones } from "@/components/site/milestones";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Reviews — Brutanix Studio",
  description:
    "What founders, brand directors and product leads say about working with Brutanix Studio.",
};

export default function ReviewsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Reviews — 05)"
          title="Kind Words"
          intro="Words from the ones who know us best — the teams who shipped alongside us and lived with the result."
          cta="Become a Client"
        />
        <Testimonials />
        <Milestones />
      </main>
      <SiteFooter />
    </>
  );
}
