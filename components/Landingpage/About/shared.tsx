import Link from "next/link";

export function SectionEyebrow({
  children,
  variant = "light",
}: {
  children: React.ReactNode;
  variant?: "light" | "dark";
}) {
  const light =
    "inline-flex items-center gap-2 rounded-full border border-brand-purple/10 bg-brand-purple/[0.04] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-purple shadow-sm";
  const dark =
    "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 shadow-sm backdrop-blur-md";

  return (
    <span className={variant === "light" ? light : dark}>
      <span
        className={`h-1.5 w-1.5 rounded-full ${variant === "light" ? "bg-brand-purple" : "bg-brand-lavender"} animate-pulse`}
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
      ? "bg-gradient-to-br from-brand-lavender/[0.04] via-transparent to-transparent"
      : variant === "muted"
        ? "bg-neutral-50/60"
        : "bg-white";

  return (
    <section className={`px-6 py-20 md:px-12 md:py-28 relative ${bg}`}>
      <div className="mx-auto max-w-7xl relative z-10">
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
          ? "text-lg leading-[1.7] tracking-tight text-neutral-800 md:text-xl font-medium"
          : "text-base leading-[1.75] tracking-tight text-neutral-500 md:text-[17px]"
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
  const bgGradient =
    variant === "purple"
      ? "from-brand-purple/[0.03] to-transparent border-brand-purple/40"
      : "from-brand-lavender/[0.08] to-transparent border-brand-lavender/40";
      
  const textClass =
    variant === "purple" ? "text-neutral-800" : "text-white/95";

  return (
    <blockquote
      className={`relative mt-6 overflow-hidden rounded-r-2xl border-l-[3px] bg-gradient-to-r ${bgGradient} p-6 pl-8 text-lg font-bold leading-relaxed tracking-tight md:text-xl md:p-8 md:pl-10 ${textClass}`}
    >
      {/* Large double quote watermark */}
      <span className="absolute -left-2 -top-6 select-none text-[8rem] font-serif font-black leading-none opacity-[0.04] pointer-events-none">
        “
      </span>
      <p className="relative z-10 italic">{children}</p>
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
      ? "bg-brand-purple text-white shadow-[0_8px_30px_rgba(82,16,248,0.2)] hover:bg-[#4210d0] hover:shadow-[0_12px_40px_rgba(82,16,248,0.3)]"
      : "bg-white text-brand-purple border border-brand-purple/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:bg-neutral-50";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold tracking-tight transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${styles}`}
    >
      {children}
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
