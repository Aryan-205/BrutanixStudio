import Image from "next/image";
import {
  Eyebrow,
  PillButton,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import { TrustpilotMark } from "@/components/ui/brand-marks";
import { HeroFrame, HeroTitle } from "@/components/site/hero-frame";

/**
 * Reviews is evidence rather than a carousel: the distribution behind the
 * headline score, then every quote at once so nothing is hidden behind an
 * arrow.
 */

/**
 * Header led by the evidence itself — one client sentence at display size,
 * with the score beside it. The page argues by quotation, so it opens on a
 * quote rather than a claim about quotes.
 */
export function ReviewsHero() {
  return (
    <HeroFrame tone="light" className="bg-volt text-ink">
      <div className="pt-32 pb-12 sm:pt-40 lg:pt-48 lg:pb-16">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow className="text-ink/70">(Reviews &mdash; 05)</Eyebrow>
            <HeroTitle>The Receipts</HeroTitle>
          </div>
          <PillButton tone="ink" className="lg:mb-3">
            Become a Client
          </PillButton>
        </div>

        <figure className="mt-14 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 lg:pt-12">
          <div>
            <blockquote className="font-display text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
              <span className="text-ink/35">&ldquo;</span>Four people
              out-delivered the thirty-person agency we used before. I
              don&rsquo;t fully understand how.
              <span className="text-ink/35">&rdquo;</span>
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-ink/10">
                <Image
                  src="/images/person-1.jpg"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <div>
                <p className="text-lg font-semibold tracking-tight">
                  Tomás Ferreira
                </p>
                <p className="mt-1 text-base text-ink/70">CMO, Halogen</p>
              </div>
            </figcaption>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 ring-1 ring-ink/10">
            <div>
              <Eyebrow className="text-black/40">Average rating</Eyebrow>
              <p className="font-display mt-4 text-6xl leading-none font-medium tracking-tighter">
                4.9<span className="text-black/30">/5</span>
              </p>
              <p className="mt-4 text-base leading-relaxed text-black/55">
                Across 148 verified engagement reviews since 2019.
              </p>
            </div>
            <TrustpilotMark />
          </div>
        </figure>
      </div>
    </HeroFrame>
  );
}

const DISTRIBUTION = [
  { stars: 5, share: 92 },
  { stars: 4, share: 6 },
  { stars: 3, share: 1 },
  { stars: 2, share: 0 },
  { stars: 1, share: 1 },
];

export function RatingBreakdown() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="reveal grid gap-10 rounded-3xl bg-white p-6 sm:p-10 lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] lg:gap-16">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <Eyebrow className="text-black/40">(Rating)</Eyebrow>
              <p className="font-display mt-6 text-7xl leading-none font-medium tracking-tighter lg:text-8xl">
                4.9<span className="text-black/30">/5</span>
              </p>
              <p className="mt-5 max-w-[26ch] text-base leading-relaxed text-black/55">
                Averaged across 148 verified engagement reviews since 2019.
              </p>
            </div>
            <TrustpilotMark />
          </div>

          <dl className="grid content-center gap-3">
            {DISTRIBUTION.map((row) => (
              <div key={row.stars} className="flex items-center gap-4">
                <dt className="w-16 shrink-0 text-base text-black/45 tabular-nums">
                  {row.stars} star
                </dt>
                <dd className="flex flex-1 items-center gap-4">
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                    <span
                      className="block h-full rounded-full bg-ink"
                      style={{ width: `${row.share}%` }}
                    />
                  </span>
                  <span className="w-12 shrink-0 text-right text-base text-black/45 tabular-nums">
                    {row.share}%
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}

const WALL = [
  {
    quote:
      "Working with Brutanix Studio felt less like hiring an agency and more like building with a creative partner. Every visual, every word—just hit right.",
    name: "Guy Hawkins",
    role: "Head of Product, Webflow",
    photo: "/images/person-2.jpg",
    stat: "+80%",
    statLabel: "Conversion rate",
    tone: "feature",
  },
  {
    quote:
      "They rebuilt our identity in six weeks and it still holds up three launches later. The system does the arguing for us now.",
    name: "Amara Osei",
    role: "Brand Director, Coinbase",
    photo: "/images/person-3.jpg",
    tone: "plain",
  },
  {
    quote:
      "Most studios hand over files. Brutanix handed over a product our engineers could ship the same day.",
    name: "Dev Raman",
    role: "VP Design, Spotify",
    photo: "/images/person-1.jpg",
    tone: "dark",
  },
  {
    quote:
      "The research phase alone changed what we thought we were selling. Worth the fee before a single screen existed.",
    name: "Lena Vogt",
    role: "Founder, Northbound",
    photo: "/images/person-4.jpg",
    tone: "plain",
  },
  {
    quote:
      "Four people out-delivered the thirty-person agency we used before. I don't fully understand how.",
    name: "Tomás Ferreira",
    role: "CMO, Halogen",
    photo: "/images/person-1.jpg",
    tone: "plain",
  },
];

function QuoteCard({ item }: { item: (typeof WALL)[number] }) {
  const feature = item.tone === "feature";
  const dark = item.tone === "dark";

  const surface = feature
    ? "mesh-blue grain relative overflow-hidden text-white sm:col-span-2"
    : dark
      ? "bg-ink text-white"
      : "bg-white";

  return (
    <figure
      className={`flex flex-col justify-between gap-8 rounded-3xl p-6 sm:p-8 ${surface}`}
    >
      <blockquote
        className={`font-display relative z-10 leading-snug font-medium tracking-tight ${
          feature ? "text-2xl sm:text-3xl" : "text-xl"
        } ${dark || feature ? "text-white" : "text-ink"}`}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <figcaption className="relative z-10">
        {feature && (
          <p className="font-display mb-6 text-5xl leading-none font-bold tracking-tighter text-volt">
            {item.stat}{" "}
            <span className="text-lg font-medium tracking-tight text-white/60">
              {item.statLabel}
            </span>
          </p>
        )}
        <div className="flex items-center gap-4">
          <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-volt">
            <Image
              src={item.photo}
              alt=""
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <div>
            <p
              className={`text-lg font-semibold tracking-tight ${
                dark || feature ? "text-white" : "text-ink"
              }`}
            >
              {item.name}
            </p>
            <p
              className={`mt-1 text-base ${
                dark || feature ? "text-white/60" : "text-black/45"
              }`}
            >
              {item.role}
            </p>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function QuoteWall() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Statement as="h2" className="max-w-[20ch] font-bold">
            Every word, unedited.
          </Statement>
          <Eyebrow className="text-black/45">({WALL.length} reviews)</Eyebrow>
        </div>

        <div className="reveal-children mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WALL.map((item) => (
            <QuoteCard key={item.name} item={item} />
          ))}
        </div>
      </Shell>
    </section>
  );
}
