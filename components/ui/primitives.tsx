import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

/** The single horizontal rhythm for the whole page. */
export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Letterspaced micro-label. Copy is written in sentence case and uppercased
 * here so the source stays readable.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`block text-xs leading-snug font-semibold tracking-[0.15em] uppercase ${className}`}
    >
      {children}
    </span>
  );
}

const GRADIENT_TEXT =
  "bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-violet bg-clip-text text-transparent";

/** Blue → indigo → violet gradient type, used for every section title. */
export function GradientText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`${GRADIENT_TEXT} ${className}`}>{children}</span>;
}

/**
 * Section titles all share one type size, so shorter words simply occupy less
 * of the measure — the size itself is never the variable.
 */
export function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <Tag
      className={`font-display reveal-fade text-6xl leading-none font-extrabold tracking-tighter sm:text-8xl lg:text-10xl ${GRADIENT_TEXT} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * The statement type that carries each section: large, tight, and set against
 * a muted continuation clause.
 */
export function Statement({
  children,
  as: Tag = "p",
  className = "",
}: {
  children: ReactNode;
  as?: "h2" | "h3" | "p";
  className?: string;
}) {
  return (
    <Tag
      className={`font-display text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
}

const PILL_TONES = {
  volt: "bg-volt text-ink hover:bg-[#d9ff33]",
  white: "bg-white text-ink hover:bg-paper",
  ink: "bg-ink text-white hover:bg-ink-soft",
} as const;

export function PillButton({
  children,
  href = "#contact",
  tone = "volt",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  tone?: keyof typeof PILL_TONES;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-base font-semibold tracking-tight transition-colors duration-200 ${PILL_TONES[tone]} ${className}`}
    >
      {children}
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        size={17}
        strokeWidth={2.4}
        className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
      />
    </a>
  );
}

export function UnderlineLink({
  children,
  href = "#contact",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`underline decoration-1 underline-offset-4 transition-opacity duration-200 hover:opacity-55 ${className}`}
    >
      {children}
    </a>
  );
}

/** Small chip used for service capabilities and project tags. */
export function Chip({
  children,
  tone = "solid",
}: {
  children: ReactNode;
  tone?: "solid" | "outline";
}) {
  const tones = {
    solid: "bg-white text-black/70 ring-black/[0.06]",
    outline: "bg-transparent text-black/60 ring-black/15",
  } as const;

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-sm font-medium ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
