import { HugeiconsIcon } from "@hugeicons/react";
import { SparklesIcon } from "@hugeicons/core-free-icons";
import {
  Eyebrow,
  PillButton,
  SectionTitle,
  Shell,
} from "@/components/ui/primitives";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { TrustpilotMark } from "@/components/ui/brand-marks";
import { FounderPortrait } from "@/components/ui/mockups";

export function Founder() {
  return (
    <section id="team" className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <div className="flex justify-end">
          <Eyebrow className="text-black/45">(Team &mdash; 04)</Eyebrow>
        </div>

        <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
          <SectionTitle>
            Man Behind
            <br />
            The Work
          </SectionTitle>
          <div className="max-w-[36ch] lg:pb-4">
            <AvatarStack />
            <p className="mt-3.5 text-[11.5px] leading-[1.5] text-black/55">
              From digital campaigns to full-stack design systems, our small
              team shipped big things. Every single one, intentional.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-11 md:grid-cols-3 lg:gap-4">
          {/* Portrait */}
          <figure className="relative min-h-[240px] overflow-hidden rounded-3xl">
            <FounderPortrait />
            <figcaption className="absolute bottom-4 left-4 rounded-full bg-white/12 px-3 py-1.5 text-[10.5px] font-medium text-white ring-1 ring-white/25 backdrop-blur-sm">
              We deliver
            </figcaption>
          </figure>

          {/* Credo */}
          <article className="mesh-blue grain relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-3xl p-5 text-white">
            <HugeiconsIcon
              icon={SparklesIcon}
              size={28}
              strokeWidth={1.8}
              className="relative z-10 text-volt"
            />
            <div className="relative z-10">
              <Eyebrow className="text-white/60">Global recognition</Eyebrow>
              <p className="mt-3 max-w-[24ch] text-[14.5px] leading-[1.32] font-medium tracking-[-0.015em]">
                We thrive to create{" "}
                <span className="font-semibold">design that make impact</span>{" "}
                &mdash;not just impressions.
              </p>
            </div>
          </article>

          {/* Rating */}
          <article className="flex min-h-[240px] flex-col justify-between rounded-3xl bg-white p-5">
            <Eyebrow className="text-black/40">(Rating)</Eyebrow>
            <div>
              <p className="font-display text-[clamp(2.6rem,6vw,3.9rem)] leading-none font-medium tracking-[-0.05em]">
                4.9<span className="text-black/30">/5</span>
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t border-black/10 pt-4">
                <p className="max-w-[12ch] text-[11.5px] leading-[1.35] text-black/50">
                  by 200K+ clients world-wide
                </p>
                <TrustpilotMark />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <p className="max-w-[64ch] text-[11.5px] leading-[1.5] text-black/50">
            Whether you&rsquo;re launching something new or reshaping what
            exists, we&rsquo;re here to help you stand out&mdash;with clarity,
            creativity, and edge.
          </p>
          <PillButton>Start Your Project</PillButton>
        </div>
      </Shell>
    </section>
  );
}
