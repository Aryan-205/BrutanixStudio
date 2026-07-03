import { Reveal } from "@/components/motion/Reveal";
import { SectionEyebrow } from "./shared";

const cards = [
  {
    label: "Our Mission",
    content:
      "To help businesses grow through clear strategy, strong branding, smart technology, and consistent digital execution.",
  },
  {
    label: "Our Vision",
    content:
      "To become a trusted growth partner for brands that want to scale with purpose, creativity, and measurable results.",
  },
];

export default function AboutMissionVisionSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-12 md:mb-16">
          <SectionEyebrow>Purpose</SectionEyebrow>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {cards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.08}>
              <div className="premium-card group relative h-full overflow-hidden rounded-2xl p-8 md:p-10">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-purple/40 to-transparent" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple/60">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-neutral-900 md:text-[1.65rem]">
                  {card.label}
                </h3>
                <p className="mt-4 text-base leading-[1.75] tracking-[-0.02em] text-neutral-500 md:text-[17px]">
                  {card.content}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
