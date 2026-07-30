import { HugeiconsIcon } from "@hugeicons/react";
import { MultiplicationSignIcon } from "@hugeicons/core-free-icons";
import {
  Eyebrow,
  GradientText,
  Shell,
  UnderlineLink,
} from "@/components/ui/primitives";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { GlassObject } from "@/components/ui/mockups";

export function ValueProp() {
  return (
    <section id="about" className="pt-14 sm:pt-20 lg:pt-24">
      <Shell>
        <div className="flex items-start justify-between gap-6">
          <h2 className="font-display max-w-[22ch] text-[clamp(1.55rem,4.2vw,3.1rem)] leading-[1.08] font-bold tracking-[-0.032em]">
            Reshaping what exists, we&rsquo;re here to help you stand out
            <span className="text-black/35">
              &mdash;with clarity, creativity, and edge.
            </span>
          </h2>
          <span className="mt-2 grid size-9 shrink-0 place-items-center rounded-full bg-volt text-[13px] font-bold tracking-[-0.03em]">
            0
          </span>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-11 md:grid-cols-3 lg:gap-4">
          {/* 1 — manifesto */}
          <article className="mesh-blue grain relative flex min-h-[228px] flex-col justify-between overflow-hidden rounded-3xl p-5 text-white">
            <HugeiconsIcon
              icon={MultiplicationSignIcon}
              size={42}
              strokeWidth={3.2}
              className="relative z-10 text-volt"
            />
            <div className="relative z-10">
              <Eyebrow className="text-white/60">Made for the bold</Eyebrow>
              <p className="mt-3 max-w-[26ch] text-[14.5px] leading-[1.32] font-medium tracking-[-0.015em]">
                Design experiences, not just screens. Tell stories, not just
                taglines.
              </p>
            </div>
          </article>

          {/* 2 — provenance */}
          <article className="grain relative flex min-h-[228px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-5 text-white">
            <GlassObject />
            <Eyebrow className="relative z-10 text-white/55">Est. 2010</Eyebrow>
          </article>

          {/* 3 — outcome */}
          <article className="flex min-h-[228px] flex-col justify-between rounded-3xl bg-white p-5">
            <Eyebrow className="text-black/40">(Growth)</Eyebrow>
            <div>
              <p className="font-display text-[clamp(2.4rem,5.2vw,3.4rem)] leading-none font-bold tracking-[-0.045em]">
                <GradientText>+32%</GradientText>
              </p>
              <div className="mt-6 flex items-end justify-between gap-4">
                <p className="max-w-[17ch] text-[12.5px] leading-[1.35] text-black/55">
                  Design experiences, not just screens.
                </p>
                <AvatarStack ringClass="ring-white" />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8">
          <Eyebrow className="text-black/45">(About &mdash; 01)</Eyebrow>
          <p className="max-w-[38ch] text-[11.5px] leading-[1.45] text-black/50 sm:justify-self-center">
            We help you to shape your ideas into visuals that resonate, disrupt,
            and last.
          </p>
          <UnderlineLink className="text-[11.5px] font-medium sm:justify-self-end">
            Book a Call Now
          </UnderlineLink>
        </div>
      </Shell>
    </section>
  );
}
