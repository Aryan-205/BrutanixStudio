import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import {
  Eyebrow,
  PillButton,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import { HeroFrame, HeroTitle } from "@/components/site/hero-frame";

/**
 * Team pages usually list people and stop. This one also answers the question
 * a visitor actually has — who do I talk to about my thing — and what it's
 * like to join.
 */

/**
 * Header led by the people rather than the type: all four faces sit on the
 * bottom edge of the mesh, so the page's claim — there are only four of us —
 * is the first thing you see rather than a line of copy.
 */
export function TeamHero() {
  return (
    <HeroFrame tone="light" className="bg-paper text-ink">
      <div className="pt-32 sm:pt-40 lg:pt-48">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Eyebrow className="text-black/45">(Team &mdash; 04)</Eyebrow>
            <HeroTitle>Four People</HeroTitle>
          </div>
          <div className="max-w-[34ch] lg:pb-3">
            <p className="text-lg leading-relaxed text-black/55">
              No account layer, no junior bench, nothing subcontracted. You
              brief the person who does the work, every time.
            </p>
            <PillButton tone="ink" className="mt-6">
              Work With Us
            </PillButton>
          </div>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:mt-16 lg:gap-4">
          {ROSTER.map((person) => (
            <li key={person.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-t-3xl bg-ink-soft">
                <Image
                  src={person.photo}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover grayscale transition duration-500 ease-out group-hover:grayscale-0 motion-reduce:transition-none"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-10 text-white">
                  <p className="font-display text-base font-semibold tracking-tight sm:text-lg">
                    {person.name}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{person.short}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </HeroFrame>
  );
}

const ROSTER = [
  {
    name: "Marc Delacroix",
    short: "Creative Director",
    role: "Founder, Creative Director",
    since: "2010",
    photo: "/images/person-2.jpg",
    line: "Runs positioning and holds the line on the idea.",
  },
  {
    name: "Ava Lindqvist",
    short: "Design Lead",
    role: "Design Lead",
    since: "2015",
    photo: "/images/person-4.jpg",
    line: "Interface, motion, and the systems that keep both consistent.",
  },
  {
    name: "Noor Haddad",
    short: "Brand Strategist",
    role: "Brand Strategist",
    since: "2019",
    photo: "/images/person-3.jpg",
    line: "Research, narrative, and the words the brand can defend.",
  },
  {
    name: "Elias Moreau",
    short: "Design Engineer",
    role: "Design Engineer",
    since: "2021",
    photo: "/images/person-1.jpg",
    line: "Turns the system into typed, accessible production code.",
  },
];

export function TeamRoster() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Statement as="h2" className="max-w-[20ch] font-bold">
            The whole studio, in one screenshot.
          </Statement>
          <Eyebrow className="text-black/45">(Four people)</Eyebrow>
        </div>

        <ul className="reveal-children mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ROSTER.map((person) => (
            <li key={person.name} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink">
                <Image
                  src={person.photo}
                  alt={`${person.name}, ${person.role}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <span className="absolute top-4 right-4 rounded-full bg-white/12 px-3 py-1.5 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm">
                  since {person.since}
                </span>
              </div>

              <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                {person.name}
              </h3>
              <p className="mt-1.5 text-base text-black/45">{person.role}</p>
              <p className="mt-3 text-base leading-relaxed text-black/55">
                {person.line}
              </p>
            </li>
          ))}
        </ul>
      </Shell>
    </section>
  );
}

const DIRECTORY = [
  { topic: "A new brand, from nothing", person: "Marc" },
  { topic: "Rebuilding an identity that stopped fitting", person: "Marc" },
  { topic: "An interface your team keeps arguing about", person: "Ava" },
  { topic: "A design system nobody adopted", person: "Ava" },
  { topic: "Messaging that tests badly", person: "Noor" },
  { topic: "A build that needs to survive handover", person: "Elias" },
];

export function AskDirectory() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow className="text-black/45">(Who to ask)</Eyebrow>
            <p className="mt-5 max-w-[30ch] text-base leading-relaxed text-black/55">
              Mail goes to the studio, but it helps to know whose desk it lands
              on.
            </p>
          </div>

          <dl className="reveal-children border-t border-black/10">
            {DIRECTORY.map((row) => (
              <div
                key={row.topic}
                className="flex items-baseline justify-between gap-6 border-b border-black/10 py-5"
              >
                <dt className="max-w-[40ch] text-lg leading-snug text-black/70">
                  {row.topic}
                </dt>
                <dd className="font-display shrink-0 text-lg font-semibold tracking-tight">
                  {row.person}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}

const ROLES = [
  {
    title: "Senior Design Engineer",
    detail: "Full-time · Remote (CET ±3)",
    note: "You've shipped a design system somebody else maintained happily.",
  },
  {
    title: "Brand Designer",
    detail: "Contract · Project-based",
    note: "Identity work with range — you can defend both the safe route and the strange one.",
  },
];

export function OpenRoles() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grain relative overflow-hidden rounded-3xl bg-ink px-6 py-10 text-white sm:px-10 sm:py-14">
          <div className="relative z-10 flex flex-wrap items-end justify-between gap-6">
            <Statement as="h2" className="max-w-[18ch] font-bold">
              We hire roughly{" "}
              <span className="text-white/40">once every two years.</span>
            </Statement>
            <Eyebrow className="text-white/45">(Open roles &mdash; 02)</Eyebrow>
          </div>

          <ul className="relative z-10 mt-10 border-t border-white/15">
            {ROLES.map((role) => (
              <li key={role.title} className="border-b border-white/15">
                <a
                  href="mailto:hello@brutanix.studio"
                  className="group grid gap-2 py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8"
                >
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-base text-white/50">
                      {role.detail}
                    </p>
                    <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-white/70">
                      {role.note}
                    </p>
                  </div>
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors duration-300 group-hover:bg-volt group-hover:text-ink">
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      size={20}
                      strokeWidth={2.2}
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="relative z-10 mt-8 text-base text-white/50">
            Nothing fitting? Send work anyway — we keep a list.
          </p>
        </div>
      </Shell>
    </section>
  );
}
