import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SectionEyebrow } from "./shared";

export default function AboutTeamSection() {
  return (
    <section className="border-t border-black/[0.05] bg-neutral-50/80 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="mb-6 flex justify-center">
            <SectionEyebrow>Our Team</SectionEyebrow>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] text-neutral-900 md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Meet the Team Behind the Growth
          </h2>

          <p className="text-balance mx-auto mt-6 max-w-xl text-base leading-[1.75] tracking-[-0.02em] text-neutral-500 md:text-[17px]">
            Our team brings together expertise across branding, design, content,
            websites, SEO, automation, AI, video, and performance marketing.
          </p>

          <div className="mt-12">
            <PrimaryButton href="/contact-us">Meet the Full Team</PrimaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
