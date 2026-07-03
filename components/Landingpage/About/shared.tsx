import Link from "next/link";

export function SectionEyebrow({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  const light =
    "inline-flex items-center gap-2 rounded-full bg-brand-purple/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple";
  const dark =
    "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70";

  return (
    <span className={variant === "light" ? light : dark}>
      <span
        className={`h-1.5 w-1.5 rounded-full ${variant === "light" ? "bg-brand-purple" : "bg-brand-lavender"}`}
      />
      {children}
    </span>
  );
}

export function EditorialLayout({
  label,
  children,
  variant = "light",
}: {
  label: string;
  children: React.ReactNode;
  variant?: "light" | "muted" | "lavender";
}) {
  const bg =
    variant === "lavender"
      ? "bg-brand-lavender/[0.07]"
      : variant === "muted"
        ? "bg-neutral-50/80"
        : "bg-white";

  return (
    <section className={`px-6 py-20 md:px-12 md:py-28 ${bg}`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4 md:pt-1">
            <SectionEyebrow>{label}</SectionEyebrow>
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function BodyText({
  children,
  lead = false,
}: {
  children: React.ReactNode;
  lead?: boolean;
}) {
  return (
    <p
      className={
        lead
          ? "text-lg leading-[1.7] tracking-[-0.02em] text-neutral-800 md:text-xl"
          : "text-base leading-[1.75] tracking-[-0.02em] text-neutral-500 md:text-[17px]"
      }
    >
      {children}
    </p>
  );
}

export function QuoteHighlight({
  children,
  variant = "purple",
}: {
  children: React.ReactNode;
  variant?: "purple" | "lavender";
}) {
  const border =
    variant === "purple" ? "border-brand-purple text-brand-purple" : "border-brand-lavender text-brand-lavender";

  return (
    <blockquote
      className={`relative mt-4 border-l-[3px] pl-6 text-lg font-semibold leading-snug tracking-[-0.03em] md:text-xl ${border}`}
    >
      {children}
    </blockquote>
  );
}

export function PrimaryButton({
  href,
  children,
  variant = "purple",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "purple" | "white";
}) {
  const styles =
    variant === "purple"
      ? "bg-brand-purple text-white shadow-[0_8px_30px_rgba(82,16,248,0.25)] hover:bg-[#4210d0] hover:shadow-[0_12px_40px_rgba(82,16,248,0.35)]"
      : "bg-white text-brand-purple shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-white/95";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-[-0.02em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${styles}`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}
