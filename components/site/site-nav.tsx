import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Shell, UnderlineLink } from "@/components/ui/primitives";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Project", href: "#project" },
  { label: "Team", href: "#team" },
  { label: "Reviews", href: "#reviews" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-[-0.03em] ${className}`}>
      Boulevard
      <sup className="ml-0.5 align-super text-[0.42em] font-medium tracking-normal">
        ™
      </sup>
    </span>
  );
}

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-5 sm:pt-7">
      <Shell>
        <div className="flex items-center justify-between gap-5 text-white">
          <div className="flex items-baseline gap-4 lg:gap-6">
            <a href="#top" className="shrink-0">
              <Wordmark className="text-[15px]" />
              <span className="sr-only">Boulevard, back to top</span>
            </a>
            <span className="hidden text-[11px] font-medium text-white/60 md:inline">
              <span className="mr-1 text-volt">&bull;</span>France, 03:47 PM
              (GMT+2)
            </span>
          </div>

          <nav
            aria-label="Sections"
            className="hidden items-center gap-1 text-[12.5px] text-white/85 lg:flex"
          >
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors duration-200 hover:text-volt"
              >
                {link.label}
                {i < NAV_LINKS.length - 1 && (
                  <span className="mr-1.5 text-white/45">,</span>
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Zero-JS disclosure keeps the sections reachable on small screens */}
            <details className="relative lg:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-1 text-[12.5px] text-white/85 [&::-webkit-details-marker]:hidden">
                Menu
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={14}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute right-0 z-30 mt-3 flex w-40 flex-col gap-1 rounded-2xl bg-ink-deep/95 p-3 text-[13px] ring-1 ring-white/10 backdrop-blur">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-2 py-1.5 text-white/85 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>

            <UnderlineLink className="text-[12.5px] font-medium">
              Get Connected
            </UnderlineLink>
          </div>
        </div>
      </Shell>
    </header>
  );
}
