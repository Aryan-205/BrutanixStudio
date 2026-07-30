import {
  Eyebrow,
  PillButton,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import { HeroFrame, HeroTitle } from "@/components/site/hero-frame";

/**
 * The About page is built as a record rather than a pitch: a lede, a dated
 * timeline, and a set of principles stated as definitions. Cards are used
 * sparingly here — the landing page already owns that texture.
 */

const FILE = [
  { label: "Founded", value: "2010" },
  { label: "Base", value: "Amsterdam" },
  { label: "Size", value: "4 people" },
  { label: "Output", value: "8–10 a year" },
];

const INDEX = [
  { n: "01", label: "The short version", href: "#story" },
  { n: "02", label: "How we got here", href: "#timeline" },
  { n: "03", label: "What we hold to", href: "#principles" },
];

/**
 * Header as an archive card: the studio's own file on the right, and an index
 * of the page below it — this page is a record, so it opens like one.
 */
export function AboutHero() {
  return (
    <HeroFrame tone="light" className="ruled text-ink">
      <div className="grid gap-12 pt-32 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-16 lg:pt-48">
        <div>
          <Eyebrow className="text-black/45">(About &mdash; 01)</Eyebrow>
          <HeroTitle>The Record</HeroTitle>
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-black/55">
            Founded 2010 in a shared loft. Still four people, on purpose. Here
            is what we&rsquo;ve built, in the order it happened.
          </p>
          <PillButton tone="ink" className="mt-8">
            Book a Call
          </PillButton>
        </div>

        <dl className="rounded-3xl bg-white p-6 ring-1 ring-black/[0.06]">
          <Eyebrow className="text-black/40">Studio file</Eyebrow>
          <div className="mt-5">
            {FILE.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-4 border-t border-black/10 py-3.5"
              >
                <dt className="text-base text-black/45">{row.label}</dt>
                <dd className="font-display text-lg font-semibold tracking-tight">
                  {row.value}
                </dd>
              </div>
            ))}
          </div>
        </dl>
      </div>

      <ol className="mt-14 grid gap-px border-t border-black/15 pt-6 pb-10 sm:grid-cols-3 sm:gap-8 lg:pb-14">
        {INDEX.map((item) => (
          <li key={item.n}>
            <a
              href={item.href}
              className="group flex items-baseline gap-3 py-1.5"
            >
              <span className="font-display text-base text-black/35 tabular-nums transition-colors duration-200 group-hover:text-brand-blue">
                {item.n}
              </span>
              <span className="text-base text-black/65 transition-colors duration-200 group-hover:text-brand-blue">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </HeroFrame>
  );
}

export function StudioStory() {
  return (
    <section id="story" className="scroll-mt-24 pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="reveal grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-16">
          <Eyebrow className="text-black/45">(The short version)</Eyebrow>

          <div>
            <Statement as="h2" className="max-w-[26ch] font-bold">
              A loft, two desks, and a stubborn refusal to make forgettable
              work.
            </Statement>

            <div className="mt-10 grid gap-6 text-lg leading-relaxed text-black/60 sm:grid-cols-2 sm:gap-10">
              <p>
                Brutanix started in 2010 as a two-person studio taking on the
                jobs larger agencies had already scoped into blandness. The
                first client was a hardware startup with a good product and a
                logo drawn in a spreadsheet. We rebuilt the whole thing in six
                weeks.
              </p>
              <p>
                Fifteen years later the studio is still deliberately small.
                Four people, senior, no account layer between you and the
                person doing the work. We take on eight to ten engagements a
                year, which is the number we can do properly.
              </p>
            </div>

            <blockquote className="font-display mt-12 border-l-2 border-volt pl-6 text-2xl leading-snug font-medium tracking-tight text-ink sm:text-3xl">
              If it could carry another studio&rsquo;s logo without anyone
              noticing, we haven&rsquo;t finished it.
            </blockquote>
          </div>
        </div>
      </Shell>
    </section>
  );
}

const TIMELINE = [
  {
    year: "2010",
    title: "Two desks in a shared loft",
    body: "Founded on a hardware rebrand that ran six weeks and paid for the next three months.",
  },
  {
    year: "2014",
    title: "The studio learns to ship",
    body: "Added engineering in-house after one too many identities died in handoff. Design and build stop being separate invoices.",
  },
  {
    year: "2018",
    title: "First design system",
    body: "A fintech client needs one brand across nine products. The system outlives three of their design leads.",
  },
  {
    year: "2021",
    title: "Remote by default",
    body: "The team spreads across three cities and keeps the studio at four people on purpose.",
  },
  {
    year: "2025",
    title: "Still four people",
    body: "Fifty projects in, taking eight to ten engagements a year — the number that fits without diluting.",
  },
];

export function StudioTimeline() {
  return (
    <section id="timeline" className="scroll-mt-24 pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex items-end justify-between gap-6">
          <Statement as="h2" className="font-bold">
            How we got here
          </Statement>
          <Eyebrow className="shrink-0 text-black/45">
            (2010 &mdash; 2025)
          </Eyebrow>
        </div>

        <ol className="reveal-children mt-12 border-t border-black/10">
          {TIMELINE.map((entry) => (
            <li
              key={entry.year}
              className="grid gap-3 border-b border-black/10 py-8 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8 lg:grid-cols-[12rem_18rem_minmax(0,1fr)] lg:py-10"
            >
              <span className="font-display text-4xl leading-none font-bold tracking-tighter text-black/25 tabular-nums lg:text-5xl">
                {entry.year}
              </span>
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {entry.title}
              </h3>
              <p className="max-w-[46ch] text-base leading-relaxed text-black/55">
                {entry.body}
              </p>
            </li>
          ))}
        </ol>
      </Shell>
    </section>
  );
}

const PRINCIPLES = [
  {
    term: "Small on purpose",
    def: "Four senior people. You brief the person who does the work, every time.",
  },
  {
    term: "Systems, not artefacts",
    def: "We hand over the thing that keeps generating the work, not a folder of finals.",
  },
  {
    term: "Opinions, defended",
    def: "Every choice comes with the reasoning. Disagree and we'll change it — but you'll get an argument first.",
  },
  {
    term: "Shipped beats perfect",
    def: "A launched brand earns feedback. A perfect one in a deck earns nothing.",
  },
];

export function StudioPrinciples() {
  return (
    <section id="principles" className="scroll-mt-24 pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow className="text-black/45">(What we hold to)</Eyebrow>
            <p className="mt-5 max-w-[28ch] text-base leading-relaxed text-black/55">
              Four rules that decide what we take on and how we run it.
            </p>
          </div>

          <dl className="reveal-children grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <div key={item.term} className="border-t border-black/15 pt-5">
                <dt className="font-display text-xl font-semibold tracking-tight">
                  {item.term}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-black/55">
                  {item.def}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}
