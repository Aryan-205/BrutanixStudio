import { Eyebrow, PillButton, Shell } from "@/components/ui/primitives";
import { SiteNav } from "@/components/site/site-nav";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-mesh grain relative overflow-hidden text-white"
    >
      <SiteNav />

      <Shell className="relative z-10">
        <div className="pt-32 sm:pt-40 lg:pt-48">
          <Eyebrow className="text-white/60">Agency that moves culture</Eyebrow>

          <h1 className="font-display mt-6 max-w-[20ch] text-[clamp(1.65rem,4.3vw,3.1rem)] leading-[1.12] font-medium tracking-[-0.028em] text-balance">
            Design studio that not only creates digital products but also
            experiences.
          </h1>

          <div className="mt-9 flex items-end justify-between gap-6">
            <PillButton>Let&rsquo;s Collaborate</PillButton>
            <span className="hidden text-[11px] text-white/45 sm:block">
              (Scroll for more)
            </span>
          </div>
        </div>

        {/* Optically full-bleed wordmark closing the hero */}
        <div className="pt-12 pb-5 sm:pt-16 sm:pb-7 lg:pb-9">
          <span className="font-display block text-[clamp(3.4rem,20.4vw,17.5rem)] leading-[0.78] font-extrabold tracking-[-0.055em]">
            Boulevard
          </span>
        </div>
      </Shell>
    </section>
  );
}
