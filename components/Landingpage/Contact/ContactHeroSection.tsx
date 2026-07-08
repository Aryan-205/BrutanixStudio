"use client";

import { Reveal } from "@/components/motion/Reveal";

export default function ContactHeroSection() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pb-14 pt-32 text-center md:pb-20 md:pt-40">
      <Reveal>
        <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
          Contact Us
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-neutral-900 sm:text-5xl md:text-6xl">
          Let&apos;s talk growth
        </h1>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-neutral-500">
          Have a project, campaign, website, or brand idea in mind? Tell us about
          your goals and we&apos;ll help you find the right next step.
        </p>
      </Reveal>

      <Reveal delay={0.18}>
        <p className="mt-8 text-xs font-medium tracking-wide text-neutral-400">
          Typical response time — within 24 hours
        </p>
      </Reveal>
    </section>
  );
}
