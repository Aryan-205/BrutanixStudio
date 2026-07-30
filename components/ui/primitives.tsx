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
      className={`block text-[10px] leading-[1.4] font-semibold tracking-[0.15em] uppercase sm:text-[11px] ${className}`}
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
      className={`font-display text-[clamp(2.6rem,15.2vw,13rem)] leading-[0.86] font-extrabold tracking-[-0.045em] ${GRADIENT_TEXT} ${className}`}
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
      className={`group inline-flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-[13px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${PILL_TONES[tone]} ${className}`}
    >
      {children}
      <HugeiconsIcon
        icon={ArrowRight01Icon}
        size={15}
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

/** Small chip used for service capabilities. */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-lg bg-white px-2.5 py-1.5 text-[10.5px] font-medium tracking-[-0.005em] text-black/70 ring-1 ring-black/[0.06]">
      {children}
    </span>
  );
}
