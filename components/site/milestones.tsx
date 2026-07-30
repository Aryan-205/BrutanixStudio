import { Eyebrow, Shell } from "@/components/ui/primitives";

const MILESTONES = [
  { value: "15+", label: "Years of Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Clients Worldwide" },
  { value: "100%", label: "Customer Satisfaction" },
];

export function Milestones() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24">
      <Shell>
        <Eyebrow className="text-black/45">Agency Milestones</Eyebrow>

        <dl className="reveal-children mt-6 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-black/10 pt-10 lg:grid-cols-4">
          {MILESTONES.map((item) => (
            <div key={item.label}>
              <dd className="font-display text-5xl leading-none font-medium tracking-tighter sm:text-6xl lg:text-7xl">
                {item.value}
              </dd>
              <dt className="mt-4 text-base font-medium text-black/50">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}
