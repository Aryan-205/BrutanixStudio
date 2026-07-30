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

          <h1 className="font-display mt-6 max-w-[20ch] text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Design studio that not only creates digital products but also
            experiences.
          </h1>

          <div className="mt-9 flex items-end justify-between gap-6">
            <PillButton>Let&rsquo;s Collaborate</PillButton>
            <span className="hidden text-sm text-white/45 sm:block">
              (Scroll for more)
            </span>
          </div>
        </div>

        {/* Optically full-bleed wordmark closing the hero */}
        <div className="pt-12 pb-5 sm:pt-16 sm:pb-7 lg:pb-9">
          <span className="font-display block text-6xl leading-none font-extrabold tracking-widest sm:text-8xl lg:text-11xl">
            Brutanix
          </span>
        </div>
      </Shell>
    </section>
  );
}
