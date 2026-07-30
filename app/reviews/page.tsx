import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import {
  QuoteWall,
  RatingBreakdown,
} from "@/components/site/review-sections";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Reviews — Brutanix Studio",
  description:
    "4.9 out of 5 across 148 verified engagement reviews, and every word clients said about working with Brutanix Studio.",
};

export default function ReviewsPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="(Reviews — 05)"
          title="The Receipts"
          intro="Words from the ones who know us best — the teams who shipped alongside us and then lived with the result."
          cta="Become a Client"
          meta={[
            { label: "Average rating", value: "4.9/5" },
            { label: "Verified reviews", value: "148" },
            { label: "Would work again", value: "96%" },
            { label: "Since", value: "2019" },
          ]}
        />
        <RatingBreakdown />
        <QuoteWall />
      </main>
      <SiteFooter />
    </>
  );
}
