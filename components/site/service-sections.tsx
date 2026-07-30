import {
  Eyebrow,
  PillButton,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import { HeroFrame, HeroTitle } from "@/components/site/hero-frame";

/**
 * Services is laid out as a menu you can price and plan against — rows with
 * scope, duration and a starting figure — rather than the landing page's
 * accordion, which sells rather than specifies.
 */

const MENU = [
  {
    name: "Brand Identity",
    scope: "Naming, logo system, typography, colour, voice, guidelines",
    span: "6–10 weeks",
    from: "€24k",
  },
  {
    name: "UI/UX Design",
    scope: "Research, flows, interface design, component library",
    span: "8–14 weeks",
    from: "€32k",
  },
  {
    name: "Development",
    scope: "Next.js build, CMS, analytics, performance budget",
    span: "6–12 weeks",
    from: "€28k",
  },
  {
    name: "Design System",
    scope: "Tokens, components, documentation, adoption support",
    span: "10–16 weeks",
    from: "€40k",
  },
];

/**
 * Header as the menu itself: the four disciplines and their starting figures
 * are the first thing on the page, so nobody has to scroll to learn the two
 * facts they came for.
 */
export function ServicesHero() {
  return (
    <HeroFrame tone="dark" className="grain bg-ink text-white">
      <div className="grid gap-12 pt-32 sm:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16 lg:pt-48">
        <div>
          <Eyebrow className="text-white/60">(Service &mdash; 02)</Eyebrow>
          <HeroTitle>The Menu</HeroTitle>
          <p className="mt-8 max-w-[40ch] text-lg leading-relaxed text-white/60">
            Four disciplines, three ways to engage, and the figures to plan
            against. Fixed scope, fixed price, no discovery invoice.
          </p>
          <PillButton className="mt-8">Start Your Project</PillButton>
        </div>

        <dl className="lg:pb-2">
          <Eyebrow className="text-white/45">Starting from</Eyebrow>
          <div className="mt-5 border-t border-white/15">
            {MENU.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4"
              >
                <dt className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {item.name}
                </dt>
                <dd className="flex shrink-0 items-baseline gap-4">
                  <span className="hidden text-base text-white/40 sm:inline">
                    {item.span}
                  </span>
                  <span className="font-display text-xl font-semibold tracking-tight text-volt">
                    {item.from}
                  </span>
                </dd>
              </div>
            ))}
          </div>
        </dl>
      </div>

      <p className="pt-8 pb-10 text-base text-white/40 lg:pb-14">
        Figures are starting points for a full engagement, not an estimate for
        your project.
      </p>
    </HeroFrame>
  );
}

export function ServiceMenu() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Statement as="h2" className="max-w-[16ch] font-bold">
            What we do, and what it costs.
          </Statement>
          <Eyebrow className="text-black/45">
            (Fixed scope &mdash; fixed price)
          </Eyebrow>
        </div>

        <div className="reveal-children mt-12 border-t border-black/10">
          {MENU.map((item) => (
            <article
              key={item.name}
              className="grid gap-4 border-b border-black/10 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:gap-10 lg:grid-cols-[16rem_minmax(0,1fr)_9rem_7rem] lg:items-center lg:py-9"
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                {item.name}
              </h3>
              <p className="max-w-[44ch] text-base leading-relaxed text-black/55">
                {item.scope}
              </p>
              <p className="text-base text-black/45 lg:text-right">
                {item.span}
              </p>
              <p className="font-display text-2xl font-semibold tracking-tight lg:text-right">
                from {item.from}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-black/45">
          Figures are starting points for a full engagement, not estimates for
          your project. We quote properly after a call.
        </p>
      </Shell>
    </section>
  );
}

const MODELS = [
  {
    name: "Sprint",
    length: "2 weeks",
    body: "One question, answered. A positioning test, a concept round, or a prototype to put in front of users.",
    points: ["Single focus", "Daily check-ins", "Fixed fee"],
    featured: false,
  },
  {
    name: "Project",
    length: "6–16 weeks",
    body: "The full arc — discovery through launch, with the system that keeps it running after we leave.",
    points: ["Fixed scope and price", "Weekly demos", "Handover included"],
    featured: true,
  },
  {
    name: "Retainer",
    length: "6 months+",
    body: "A standing share of the studio for teams shipping continuously. Reserved capacity, not a ticket queue.",
    points: ["Reserved days", "Rolling backlog", "Monthly billing"],
    featured: false,
  },
];

export function EngagementModels() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-12">
          <Eyebrow className="text-black/45">(How we work together)</Eyebrow>
          <Statement className="max-w-[22ch] font-bold lg:justify-self-end lg:text-right">
            Three ways in.{" "}
            <span className="text-black/35">Pick the smallest one.</span>
          </Statement>
        </div>

        <div className="reveal-children mt-12 grid gap-4 lg:grid-cols-3">
          {MODELS.map((model) => (
            <article
              key={model.name}
              className={`flex min-h-[340px] flex-col justify-between rounded-3xl p-6 ${
                model.featured
                  ? "mesh-blue grain relative overflow-hidden text-white"
                  : "bg-white"
              }`}
            >
              <div className="relative z-10 flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {model.name}
                </h3>
                <span
                  className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                    model.featured
                      ? "bg-volt text-ink"
                      : "text-black/50 ring-1 ring-black/10"
                  }`}
                >
                  {model.length}
                </span>
              </div>

              <div className="relative z-10 mt-8">
                <p
                  className={`text-base leading-relaxed ${
                    model.featured ? "text-white/75" : "text-black/55"
                  }`}
                >
                  {model.body}
                </p>
                <ul
                  className={`mt-6 space-y-2.5 border-t pt-5 text-base ${
                    model.featured
                      ? "border-white/20 text-white/85"
                      : "border-black/10 text-black/65"
                  }`}
                >
                  {model.points.map((point) => (
                    <li key={point} className="flex items-baseline gap-2.5">
                      <span
                        className={model.featured ? "text-volt" : "text-ink/30"}
                      >
                        &bull;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  );
}

const QUESTIONS = [
  {
    q: "Do you work with in-house design teams?",
    a: "Often. We build the system and hand it to the people who live with it, then stay on call while it beds in.",
  },
  {
    q: "Who actually does the work?",
    a: "The four people on the team page. There is no junior layer and nothing is subcontracted.",
  },
  {
    q: "What do you need from us to start?",
    a: "A decision-maker in the room and access to whatever you already know about your customers. That's genuinely it.",
  },
  {
    q: "Can you work with our existing brand?",
    a: "Yes. Roughly half our work is reshaping something that exists rather than starting from nothing.",
  },
  {
    q: "How do you charge?",
    a: "Fixed fee against fixed scope, split across the engagement. Retainers bill monthly.",
  },
  {
    q: "What if it isn't working?",
    a: "Either side can stop at any phase boundary. You keep everything produced up to that point.",
  },
];

export function ServiceFaq() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Eyebrow className="text-black/45">(Before you ask)</Eyebrow>
            <PillButton tone="ink" className="mt-6">
              Ask us directly
            </PillButton>
          </div>

          <dl className="reveal-children grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {QUESTIONS.map((item) => (
              <div key={item.q} className="border-t border-black/15 pt-5">
                <dt className="font-display text-lg font-semibold tracking-tight">
                  {item.q}
                </dt>
                <dd className="mt-3 text-base leading-relaxed text-black/55">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
    </section>
  );
}
