import Image from "next/image";
import {
  Eyebrow,
  GradientText,
  Shell,
  UnderlineLink,
} from "@/components/ui/primitives";
import { AvatarStack } from "@/components/ui/avatar-stack";
import { PetalMark } from "@/components/ui/mockups";

export function ValueProp() {
  return (
    <section id="about" className="pt-14 sm:pt-20 lg:pt-24">
      <Shell>
        <div className="reveal flex items-end justify-between gap-6">
          <h2 className="font-display max-w-[24ch] text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Reshaping what exists, we&rsquo;re here to help you stand out
            <span className="text-black/35">
              &mdash;with clarity, creativity, and edge.
            </span>
          </h2>
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-volt text-base font-bold tracking-tight">
            0
          </span>
        </div>

        <div className="reveal-children mt-10 grid gap-4 sm:mt-14 md:grid-cols-3">
          {/* 1 — manifesto */}
          <article className="mesh-blue grain relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white">
            <PetalMark className="relative z-10 size-12 text-volt" />
            <div className="relative z-10">
              <Eyebrow className="text-white/65">Made for the bold</Eyebrow>
              <p className="mt-4 max-w-[22ch] text-xl leading-snug font-medium tracking-tight">
                Design experiences, not just screens. Tell stories, not just
                taglines.
              </p>
            </div>
          </article>

          {/* 2 — provenance */}
          <article className="relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-3xl bg-ink p-6 text-white">
            <Image
              src="/images/studio-object.jpg"
              alt="Studio still life from a Brutanix brand shoot"
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="relative z-10 self-start rounded-full bg-white/12 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/25 backdrop-blur-sm">
              Est. 2010
            </span>
          </article>

          {/* 3 — outcome */}
          <article className="flex min-h-[320px] flex-col justify-between rounded-3xl bg-white p-6">
            <Eyebrow className="text-black/40">(Growth)</Eyebrow>
            <div>
              <p className="font-display text-6xl leading-none font-bold tracking-tighter lg:text-7xl">
                <GradientText>+32%</GradientText>
              </p>
              <div className="mt-8 flex items-end justify-between gap-4 border-t border-black/10 pt-5">
                <p className="max-w-[18ch] text-base leading-snug text-black/55">
                  Design experiences, not just screens.
                </p>
                <AvatarStack ringClass="ring-white" />
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr_auto] sm:items-start sm:gap-8">
          <Eyebrow className="text-black/45">(About &mdash; 01)</Eyebrow>
          <p className="max-w-[38ch] text-sm leading-relaxed text-black/50 sm:justify-self-center">
            We help you to shape your ideas into visuals that resonate, disrupt,
            and last.
          </p>
          <UnderlineLink className="text-sm font-medium sm:justify-self-end">
            Book a Call Now
          </UnderlineLink>
        </div>
      </Shell>
    </section>
  );
}
