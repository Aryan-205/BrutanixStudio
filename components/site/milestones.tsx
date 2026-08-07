import { Eyebrow, Shell } from "@/components/ui/primitives";
import {
  ArcBloom,
  MonolithStack,
  NodeWeb,
  PetalLattice,
} from "@/components/ui/decor";

// Headline figures removed — the row now carries marks and plain claims
// instead of counts.
// const MILESTONES = [
//   { value: "15+", label: "Years of Experience" },
//   { value: "50+", label: "Projects Completed" },
//   { value: "20+", label: "Clients Worldwide" },
//   { value: "100%", label: "Customer Satisfaction" },
// ];

const MILESTONES = [
  {
    mark: <ArcBloom tone="current" className="h-16 w-20" />,
    label: "Experience",
    line: "Long enough in it to have opinions worth arguing.",
  },
  {
    mark: <MonolithStack className="h-16 w-20" />,
    label: "The work",
    line: "Shipped and live, not sitting in a case-study folder.",
  },
  {
    mark: <NodeWeb className="h-16 w-16" />,
    label: "Reach",
    line: "Clients across borders, time zones and industries.",
  },
  {
    mark: <PetalLattice className="h-16 w-16" />,
    label: "Aftermath",
    line: "The measure we trust: they come back with the next one.",
  },
];

export function Milestones() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <Shell>
        <Eyebrow className="text-black/45">Agency Milestones</Eyebrow>

        <dl className="reveal-children mt-6 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-black/10 pt-10 lg:grid-cols-4">
          {MILESTONES.map((item) => (
            <div key={item.label}>
              <dd className="text-brand-indigo">{item.mark}</dd>
              <dt className="font-display mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                {item.label}
              </dt>
              <p className="mt-3 max-w-[26ch] text-base leading-snug text-black/50">
                {item.line}
              </p>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}
