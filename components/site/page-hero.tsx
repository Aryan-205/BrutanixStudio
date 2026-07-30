import type { ReactNode } from "react";
import { Eyebrow, PillButton, Shell } from "@/components/ui/primitives";
import { SiteNav } from "@/components/site/site-nav";

/**
 * Header for every page other than the landing page. It reuses the hero's
 * mesh, nav and pill so a subpage reads as the same site, but drops the
 * full-bleed wordmark — that belongs to the landing page alone.
 *
 * The meta row carries facts specific to the page, so each header opens with
 * information rather than the same decorative furniture.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  cta = "Let's Collaborate",
  meta,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  cta?: string;
  meta?: { label: string; value: string }[];
}) {
  return (
    <section className="hero-mesh grain relative overflow-hidden text-white">
      <SiteNav />

      <Shell className="relative z-10">
        <div className="pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48">
          <Eyebrow className="text-white/60">{eyebrow}</Eyebrow>

          <h1 className="font-display mt-6 max-w-[14ch] text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl lg:text-9xl">
            {title}
          </h1>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[46ch] text-lg leading-snug text-white/60">
              {intro}
            </p>
            <PillButton>{cta}</PillButton>
          </div>
        </div>

        {meta && (
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 py-8 sm:grid-cols-4 lg:py-10">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-sm text-white/45">{item.label}</dt>
                <dd className="font-display mt-2 text-2xl font-semibold tracking-tight">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </Shell>
    </section>
  );
}
