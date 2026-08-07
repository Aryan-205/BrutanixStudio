import type { Metadata } from "next";
import {
  QuoteWall,
  RatingBreakdown,
  ReviewsHero,
} from "@/components/site/review-sections";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Reviews — Brutanix Studio",
  description:
    "Verified engagement reviews, unedited — every word clients said about working with Brutanix Studio.",
};

export default function ReviewsPage() {
  return (
    <>
      <main>
        <ReviewsHero />
        <RatingBreakdown />
        <QuoteWall />
      </main>
      <SiteFooter />
    </>
  );
}
