import { Eyebrow, Shell, Statement } from "@/components/ui/primitives";

const STEPS = [
  {
    title: "Discover",
    body: "We read the market, the analytics and the room. Nothing gets designed until we can argue for it.",
  },
  {
    title: "Define",
    body: "Positioning, message hierarchy and the one idea the work has to carry. Signed off before pixels.",
  },
  {
    title: "Design",
    body: "Identity, interface and motion built as one system — so every surface stays recognisably yours.",
  },
  {
    title: "Deploy",
    body: "Production code, typed and accessible, handed over with the design system that generated it.",
  },
];

export function Process() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="grid gap-6 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-12">
          <Eyebrow className="text-black/45">(Process)</Eyebrow>
          <Statement className="max-w-[24ch] font-bold lg:justify-self-end lg:text-right">
            Four steps, <span className="text-black/35">no mystery</span> about
            where the work is.
          </Statement>
        </div>

        <ol className="reveal-children mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex min-h-[260px] flex-col justify-between rounded-3xl bg-white p-6"
            >
              <span className="font-display text-base font-medium text-black/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-black/55">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Shell>
    </section>
  );
}
