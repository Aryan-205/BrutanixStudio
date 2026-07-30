import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import {
  Chip,
  Eyebrow,
  GradientText,
  PillButton,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import { HeroFrame, HeroTitle } from "@/components/site/hero-frame";
import {
  ChatGeniusMockup,
  FieldTypeMockup,
  RockBottomMockup,
} from "@/components/ui/mockups";

const COUNTS = [
  { label: "Shipped", value: "50+" },
  { label: "Repeat clients", value: "62%" },
  { label: "Industries", value: "11" },
];

/**
 * Header as a fanned stack of stills — the work leads, the type sits under
 * it. The fan is decorative and hidden from assistive tech; the ledger below
 * names every project properly.
 */
export function ProjectsHero() {
  return (
    <HeroFrame tone="light" className="bg-paper text-ink">
      <div className="grid gap-12 pt-32 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16 lg:pt-48">
        <div>
          <Eyebrow className="text-black/45">(Project &mdash; 03)</Eyebrow>
          <HeroTitle>
            <GradientText>The Ledger</GradientText>
          </HeroTitle>
          <p className="mt-8 max-w-[40ch] text-lg leading-relaxed text-black/55">
            Brand systems, products and campaigns for teams that would rather
            stand out than blend in. One opened up, the rest listed.
          </p>
          <PillButton tone="ink" className="mt-8">
            Book a Call
          </PillButton>
        </div>

        {/* Decorative fan — every project it shows is named in the ledger. */}
        <div
          aria-hidden="true"
          className="relative hidden h-80 sm:block lg:h-96"
        >
          <span className="absolute top-6 left-0 w-[58%] -rotate-6 overflow-hidden rounded-2xl shadow-[0_28px_60px_-28px_rgba(11,12,16,0.35)] ring-1 ring-black/[0.06]">
            <RockBottomMockup />
          </span>
          <span className="absolute top-0 left-[22%] w-[58%] rotate-3 overflow-hidden rounded-2xl shadow-[0_28px_60px_-28px_rgba(11,12,16,0.35)] ring-1 ring-black/[0.06]">
            <FieldTypeMockup />
          </span>
          <span className="absolute top-16 right-0 w-[56%] -rotate-2 overflow-hidden rounded-2xl shadow-[0_28px_60px_-28px_rgba(11,12,16,0.35)] ring-1 ring-black/[0.06]">
            <ChatGeniusMockup />
          </span>
        </div>
      </div>

      <dl className="grid grid-cols-3 gap-6 border-t border-black/15 py-8 lg:py-10">
        {COUNTS.map((item) => (
          <div key={item.label}>
            <dt className="text-sm text-black/45">{item.label}</dt>
            <dd className="font-display mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </HeroFrame>
  );
}

/**
 * The work index reads as a ledger: one case study opened up, then every
 * engagement as a dated row. Rows carry a preview that resolves on hover at
 * desktop widths, so the page stays scannable without becoming a card grid.
 */

const RESULTS = [
  { value: "+32%", label: "Trial-to-paid conversion" },
  { value: "6 wks", label: "Concept to launch" },
  { value: "9", label: "Products on one system" },
];

export function FeaturedCase() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex items-end justify-between gap-6">
          <Eyebrow className="text-black/45">(Case study)</Eyebrow>
          <Eyebrow className="shrink-0 text-black/45">2024 &mdash; now</Eyebrow>
        </div>

        <div className="reveal mt-6 overflow-hidden rounded-3xl">
          <ChatGeniusMockup />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tighter sm:text-5xl">
              Chat Genius
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Website Design", "Development", "Design System"].map((tag) => (
                <Chip key={tag} tone="outline">
                  {tag}
                </Chip>
              ))}
            </div>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-black/60">
              A research lab with a genuinely hard product and a website that
              read like a physics paper. We rebuilt the story around one claim,
              then built the system that lets their team publish against it
              without calling us.
            </p>
          </div>

          <dl className="grid grid-cols-3 gap-6 self-start border-t border-black/10 pt-8 lg:gap-4">
            {RESULTS.map((result) => (
              <div key={result.label}>
                <dd className="font-display text-3xl leading-none font-bold tracking-tighter lg:text-4xl">
                  <GradientText>{result.value}</GradientText>
                </dd>
                <dt className="mt-3 text-sm leading-snug text-black/50">
                  {result.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}

const LEDGER = [
  {
    year: "2025",
    client: "Rock Bottom",
    discipline: "Graphic Design, Print",
    preview: <RockBottomMockup />,
  },
  {
    year: "2025",
    client: "Field Type",
    discipline: "Branding, Social Media",
    preview: <FieldTypeMockup />,
  },
  {
    year: "2023",
    client: "Northbound",
    discipline: "Identity, Web",
    preview: <FieldTypeMockup />,
  },
  {
    year: "2023",
    client: "Halogen",
    discipline: "Product Design, Development",
    preview: <ChatGeniusMockup />,
  },
  {
    year: "2022",
    client: "Studio Mireille",
    discipline: "Branding, Packaging",
    preview: <RockBottomMockup />,
  },
  {
    year: "2021",
    client: "Meridian Health",
    discipline: "Design System",
    preview: <ChatGeniusMockup />,
  },
];

export function ProjectLedger() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Statement as="h2" className="font-bold">
            Everything else
          </Statement>
          <Eyebrow className="text-black/45">
            ({LEDGER.length} engagements)
          </Eyebrow>
        </div>

        <ul className="reveal-children mt-12 border-t border-black/10">
          {LEDGER.map((entry) => (
            <li
              key={entry.client}
              className="group relative border-b border-black/10"
            >
              <a
                href="#contact"
                className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 py-6 sm:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)_auto] sm:gap-8 lg:py-8"
              >
                <span className="font-display text-base font-medium text-black/35 tabular-nums">
                  {entry.year}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight transition-transform duration-300 ease-out group-hover:translate-x-2 motion-reduce:transition-none sm:text-2xl lg:text-3xl">
                  {entry.client}
                </h3>
                <p className="hidden text-base text-black/45 sm:block">
                  {entry.discipline}
                </p>
                <HugeiconsIcon
                  icon={ArrowUpRight01Icon}
                  size={22}
                  strokeWidth={2}
                  className="text-black/30 transition-colors duration-300 group-hover:text-ink"
                />
              </a>

              {/* Desktop-only preview: decorative, and the row already names
                  the project, so it stays out of the reading order. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-32 z-10 hidden w-64 -translate-y-1/2 overflow-hidden rounded-2xl opacity-0 shadow-[0_24px_48px_-24px_rgba(11,12,16,0.45)] transition-opacity duration-300 group-hover:opacity-100 motion-reduce:transition-none lg:block"
              >
                {entry.preview}
              </span>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}
