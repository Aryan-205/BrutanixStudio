import { Reveal } from "@/components/motion/Reveal";
import { QuoteHighlight, SectionEyebrow } from "./shared";

const paragraphs = [
  "At InvisiEdge, we are building more than a marketing agency. We are building systems that help brands grow with purpose.",
  "Today's businesses don't just need content or campaigns. They need clarity, consistency, execution, and strategy that actually drives results.",
  "Our focus is simple: build stronger brands, create better digital experiences, and help businesses scale in a smarter way.",
];

export default function AboutLeadershipSection() {
  return (
    <section className="about-mesh relative overflow-hidden px-6 py-20 text-white md:px-12 md:py-28">
      <div className="about-grid-overlay pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4 md:pt-1">
            <SectionEyebrow variant="dark">Leadership Message</SectionEyebrow>
          </div>

          <div className="flex flex-col gap-7 md:col-span-8 md:gap-9">
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 40)}
                className={
                  index === 0
                    ? "text-lg leading-[1.7] tracking-[-0.02em] text-white/90 md:text-xl"
                    : "text-base leading-[1.75] tracking-[-0.02em] text-white/65 md:text-[17px]"
                }
              >
                {paragraph}
              </p>
            ))}
            <QuoteHighlight variant="lavender">
              We're here to build brands that don't just exist — they grow,
              scale, and lead.
            </QuoteHighlight>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
