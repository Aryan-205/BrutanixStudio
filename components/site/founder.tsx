import {
  Eyebrow,
  PillButton,
  SectionTitle,
  Shell,
} from "@/components/ui/primitives";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { TrustpilotMark } from "@/components/ui/brand-marks";
import { FounderPortrait, PetalMark } from "@/components/ui/mockups";
import { SignalMark } from "@/components/ui/decor";

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
          <div className="max-w-[38ch] lg:pb-4">
            <AvatarStack />
            <p className="mt-5 text-lg leading-snug text-black/55">
              From digital campaigns to full-stack brand systems, our small team
              shipped big things. Every single one, intentional.
            </p>
          </div>
        </div>

        <div className="reveal-children mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {/* Portrait */}
          <figure className="relative min-h-[340px] overflow-hidden rounded-3xl bg-ink">
            <FounderPortrait />
            <figcaption className="absolute bottom-5 left-5 rounded-full bg-white/12 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm">
              We deliver
            </figcaption>
          </figure>

          {/* Credo */}
          <article className="mesh-blue grain relative flex min-h-[340px] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white">
            <PetalMark className="relative z-10 size-10 text-volt" />
            <div className="relative z-10">
              <Eyebrow className="text-white/65">Global recognition</Eyebrow>
              <p className="mt-4 max-w-[22ch] text-xl leading-snug font-medium tracking-tight">
                We thrive to create{" "}
                <span className="font-semibold">design that make impact</span>{" "}
                &mdash;not just impressions.
              </p>
            </div>
          </article>

          {/* Rating. Score and client count removed — the mark stands in for
              both.
              <p className="font-display text-6xl leading-none font-medium tracking-tighter lg:text-7xl">
                4.9<span className="text-black/30">/5</span>
              </p>
              <p className="max-w-[14ch] text-base leading-snug text-black/50">
                by <span className="font-semibold text-ink">200K+</span>{" "}
                clients world-wide
              </p> */}
          <article className="flex min-h-[340px] flex-col justify-between rounded-3xl bg-white p-6">
            <Eyebrow className="text-black/40">(Rating)</Eyebrow>
            <div>
              <SignalMark className="size-24 text-brand-indigo" />
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-black/10 pt-5">
                <p className="max-w-[16ch] text-base leading-snug text-black/50">
                  Rated by the people we actually shipped with
                </p>
                <TrustpilotMark />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
          <p className="max-w-[60ch] text-base leading-relaxed text-black/50">
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
