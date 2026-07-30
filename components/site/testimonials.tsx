"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import {
  Eyebrow,
  GradientText,
  SectionTitle,
  Shell,
} from "@/components/ui/primitives";
import { Avatar } from "@/components/ui/avatar-stack";
import {
  CoinbaseMark,
  SlackMark,
  SpotifyMark,
  WebflowMark,
} from "@/components/ui/brand-marks";

const TESTIMONIALS = [
  {
    quote:
      "Working with Boulevard felt less like building with a creative partner. Every visual, every word—just hit right.",
    stat: "+80%",
    statLabel: "Conversion Rate",
    name: "Guy Hawkins",
    role: "Head of Product of Webflow",
    initials: "GH",
  },
  {
    quote:
      "They rebuilt our identity in six weeks and it still holds up three launches later. The system does the arguing for us now.",
    stat: "+41%",
    statLabel: "Qualified Signups",
    name: "Amara Osei",
    role: "Brand Director at Coinbase",
    initials: "AO",
  },
  {
    quote:
      "Most studios hand over files. Boulevard handed over a product our engineers could ship on the same day.",
    stat: "2.4×",
    statLabel: "Faster Time to Ship",
    name: "Dev Raman",
    role: "VP Design at Spotify",
    initials: "DR",
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
      (current) =>
        (current + step + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  return (
    <section id="reviews" className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <Eyebrow className="text-black/45">(Reviews &mdash; 05)</Eyebrow>

        <div className="mt-4 flex items-end justify-between gap-6">
          <SectionTitle>Testimonials</SectionTitle>
          <div className="mb-2 flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous review"
              className="grid size-9 place-items-center rounded-full bg-white text-ink/70 ring-1 ring-black/[0.07] transition-colors duration-200 hover:text-ink"
            >
              <HugeiconsIcon
                icon={ArrowLeft01Icon}
                size={16}
                strokeWidth={2.2}
              />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next review"
              className="grid size-9 place-items-center rounded-full bg-white text-ink/70 ring-1 ring-black/[0.07] transition-colors duration-200 hover:text-ink"
            >
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={16}
                strokeWidth={2.2}
              />
            </button>
          </div>
        </div>

        <figure
          aria-live="polite"
          className="mt-9 grid gap-6 sm:mt-12 lg:grid-cols-[minmax(0,0.32fr)_minmax(0,1fr)] lg:gap-14"
        >
          <Eyebrow className="max-w-[18ch] text-black/45">
            Words from the ones who know us best
          </Eyebrow>
          <blockquote className="font-display text-[clamp(1.3rem,3.2vw,2.25rem)] leading-[1.18] font-medium tracking-[-0.032em] text-balance">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <div className="lg:col-start-1">
            <p className="font-display text-[clamp(2.2rem,5.2vw,3.25rem)] leading-none font-bold tracking-[-0.045em]">
              <GradientText>{active.stat}</GradientText>
            </p>
            <p className="mt-2.5 text-[11.5px] font-medium text-black/50">
              {active.statLabel}
            </p>
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-5 lg:col-start-2">
            <div className="flex items-center gap-3">
              <Avatar initials={active.initials} />
              <div>
                <p className="text-[13px] font-semibold tracking-[-0.015em]">
                  {active.name}
                </p>
                <p className="mt-0.5 text-[11px] text-black/45">
                  {active.role}
                </p>
              </div>
            </div>
            <WebflowMark />
          </figcaption>
        </figure>

        <div className="mt-12 sm:mt-16">
          <p className="text-[11px] font-medium text-black/45">
            <span className="mr-1.5 text-volt">&bull;</span>
            Working with brands that matter
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
            {CLIENTS.map((client) => (
              <li
                key={client.key}
                className="flex h-[76px] items-center justify-center rounded-2xl bg-white ring-1 ring-transparent transition-shadow duration-200 hover:ring-black/[0.08]"
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
