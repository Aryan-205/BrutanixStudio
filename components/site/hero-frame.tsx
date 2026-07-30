import type { ReactNode } from "react";
import { Shell } from "@/components/ui/primitives";
import { SiteNav, type NavTone } from "@/components/site/site-nav";

/**
 * The chrome every page header shares — nav, stacking and horizontal rhythm.
 * The surface is deliberately not fixed here: the landing page owns the blue
 * mesh, and each other page brings its own ground so the headers don't read
 * as one template with the copy swapped.
 */
export function HeroFrame({
  children,
  className = "",
  tone = "dark",
}: {
  children: ReactNode;
  /** Surface classes — background, text colour, texture. */
  className?: string;
  /** Nav colouring for that surface. */
  tone?: NavTone;
}) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <SiteNav tone={tone} />
      <Shell className="relative z-10">{children}</Shell>
    </section>
  );
}

/** Shared opening type for a page header. */
export function HeroTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`font-display mt-6 text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl lg:text-9xl ${className}`}
    >
      {children}
    </h1>
  );
}
