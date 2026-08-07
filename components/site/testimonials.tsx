"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Eyebrow, SectionTitle, Shell } from "@/components/ui/primitives";
import { Avatar } from "@/components/ui/avatar-stack";
import {
  CoinbaseMark,
  SlackMark,
  SpotifyMark,
  WebflowMark,
} from "@/components/ui/brand-marks";
import { ArcBloom } from "@/components/ui/decor";

// Each quote used to carry a headline metric (`stat` / `statSuffix` /
// `statLabel`). Those are commented out with the rest of the site's figures;
// the slot they occupied now holds the mark and the slide indicator.
const TESTIMONIALS = [
  {
    quote:
      "Working with Brutanix Studio felt less like building with a creative partner. Every visual, every word—just hit right.",
    // stat: "+80",
    // statSuffix: "%",
    // statLabel: "Conversion Rate",
    theme: "Conversion",
    name: "Guy Hawkins",
    role: "Head of Product of Webflow",
    photo: "/images/person-2.jpg",
  },
  {
    quote:
      "They rebuilt our identity in six weeks and it still holds up three launches later. The system does the arguing for us now.",
    // stat: "+41",
    // statSuffix: "%",
    // statLabel: "Qualified Signups",
    theme: "Identity",
    name: "Amara Osei",
    role: "Brand Director at Coinbase",
    photo: "/images/person-3.jpg",
  },
  {
    quote:
      "Most studios hand over files. Brutanix handed over a product our engineers could ship on the same day.",
    // stat: "2.4",
    // statSuffix: "×",
    // statLabel: "Faster Time to Ship",
    theme: "Handover",
    name: "Dev Raman",
    role: "VP Design at Spotify",
    photo: "/images/person-1.jpg",
  },
];

// Repeated Coinbase card mirrors the reference: the row reads as a slice of a
// longer client roster rather than a closed set of four.
const CLIENTS = [
  { key: "coinbase-1", mark: <CoinbaseMark /> },
  { key: "slack", mark: <SlackMark /> },
  { key: "coinbase-2", mark: <CoinbaseMark /> },
  { key: "spotify", mark: <SpotifyMark /> },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = TESTIMONIALS[index];

  const move = (step: number) =>
    setIndex(
      (current) => (current + step + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  return (
    <section id="reviews" className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <Eyebrow className="text-black/45">(Reviews &mdash; 05)</Eyebrow>

        <div className="mt-4 flex items-end justify-between gap-6">
          <SectionTitle>Testimonials</SectionTitle>
          <div className="mb-3 flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous review"
              className="grid size-12 place-items-center rounded-full text-ink/60 ring-1 ring-black/10 transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                size={18}
                strokeWidth={2.2}
              />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next review"
              className="grid size-12 place-items-center rounded-full text-ink/60 ring-1 ring-black/10 transition-colors duration-200 hover:bg-white hover:text-ink"
            >
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>

        <figure
          aria-live="polite"
          className="mt-8 grid gap-8 border-t border-black/10 pt-12 sm:mt-10 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-14"
        >
          <Eyebrow className="max-w-[18ch] text-black/70">
            Words from the ones who know us best
          </Eyebrow>
          <blockquote className="font-display text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          {/* Where the headline metric used to sit:
              <p className="font-display text-6xl leading-none font-medium tracking-tighter lg:text-7xl">
                {active.stat}
                <span className="text-black/30">{active.statSuffix}</span>
              </p>
              <p className="mt-4 text-base text-black/50">{active.statLabel}</p> */}
          <div className="lg:col-start-1">
            <ArcBloom className="h-20 w-28" />
            <p className="font-display mt-6 text-2xl font-semibold tracking-tight">
              {active.theme}
            </p>
            <ul className="mt-5 flex items-center gap-2">
              {TESTIMONIALS.map((item, i) => (
                <li
                  key={item.name}
                  aria-hidden="true"
                  className={`h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    i === index ? "w-8 bg-ink" : "w-3 bg-black/15"
                  }`}
                />
              ))}
            </ul>
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-5 lg:col-start-2">
            <div className="flex items-center gap-4">
              <Avatar src={active.photo} />
              <div>
                <p className="text-xl font-semibold tracking-tight">
                  {active.name}
                </p>
                <p className="mt-1 text-base text-black/45">{active.role}</p>
              </div>
            </div>
            <WebflowMark />
          </figcaption>
        </figure>

        <div className="mt-16 sm:mt-20">
          <p className="text-base font-medium text-black/45">
            <span className="mr-1.5 text-volt">&bull;</span>
            Working with brands that matter
          </p>
          <ul className="reveal-children mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {CLIENTS.map((client) => (
              <li
                key={client.key}
                className="flex h-24 items-center justify-center rounded-2xl bg-white ring-1 ring-transparent transition-shadow duration-200 hover:ring-black/[0.08]"
              >
                {client.mark}
              </li>
            ))}
          </ul>
        </div>
      </Shell>
    </section>
  );
}
