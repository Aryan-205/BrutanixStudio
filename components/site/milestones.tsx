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

        <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-9 border-t border-black/10 pt-8 sm:mt-6 sm:pt-10 lg:grid-cols-4">
          {MILESTONES.map((item) => (
            <div key={item.label}>
              <dd className="font-display text-[clamp(2.35rem,6vw,4.25rem)] leading-[0.9] font-medium tracking-[-0.045em]">
                {item.value}
              </dd>
              <dt className="mt-3 text-[11.5px] font-medium text-black/50">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>
      </Shell>
    </section>
  );
}
