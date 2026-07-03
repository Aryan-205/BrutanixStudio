import { Reveal } from "@/components/motion/Reveal";
import { SectionEyebrow } from "./shared";

const values = [
  {
    title: "Purpose-Driven Strategy",
    description:
      "Every project starts with intention. We build strategies that are aligned with your business goals, audience, and long-term growth.",
  },
  {
    title: "Creative Excellence",
    description:
      "We believe strong creative should not only look beautiful but also communicate clearly and drive action.",
  },
  {
    title: "Silent Expertise",
    description:
      "We work behind the scenes as a trusted partner, helping your brand shine while we handle the structure, systems, and execution.",
  },
  {
    title: "Continuous Innovation",
    description:
      "We use modern tools, AI workflows, automation, and data to keep your marketing efficient, relevant, and future-ready.",
  },
  {
    title: "Collaborative Growth",
    description:
      "We work closely with your team, align with your vision, and support your goals at every stage.",
  },
  {
    title: "Performance Focus",
    description:
      "We care about outcomes — visibility, engagement, leads, conversions, and long-term brand growth.",
  },
];

export default function AboutCoreValuesSection() {
  return (
    <section className="bg-white px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-14 md:mb-16">
          <SectionEyebrow>Core Values</SectionEyebrow>
          <h2 className="text-balance mt-5 max-w-xl text-3xl font-bold tracking-[-0.04em] text-neutral-900 md:text-4xl">
            What guides everything we do
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.05}>
              <div className="premium-card h-full rounded-2xl p-7 md:p-8">
                <span className="text-xs font-semibold tabular-nums tracking-wider text-brand-purple/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-[-0.03em] text-neutral-900 md:text-xl">
                  {value.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.7] tracking-[-0.02em] text-neutral-500 md:text-[15px]">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
