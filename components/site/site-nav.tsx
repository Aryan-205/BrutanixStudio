import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { Shell, UnderlineLink } from "@/components/ui/primitives";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Project", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Reviews", href: "/reviews" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold tracking-tight ${className}`}>
      Brutanix
      <sup className="ml-0.5 align-super text-[0.42em] font-medium tracking-normal">
        ™
      </sup>
    </span>
  );
}

/**
 * Nav link with a roll-up hover: the resting label slides out through the top
 * while its duplicate rises into the same slot from below. The clip lives on
 * the wrapper, so both copies are masked to a single line box.
 */
function NavLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="group relative block overflow-hidden leading-normal"
    >
      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:transition-none">
        {label}
      </span>
      {/* Sits exactly one line box below the clip, so nothing shows at rest
          and both copies travel the same distance on hover. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-full block text-volt transition-transform duration-300 ease-out group-hover:-translate-y-full motion-reduce:hidden"
      >
        {label}
      </span>
    </Link>
  );
}

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 pt-5 sm:pt-7">
      <Shell>
        <div className="flex items-center justify-between gap-5 text-white">
          <div className="flex items-baseline gap-4 lg:gap-6">
            <Link href="/" className="shrink-0">
              <Wordmark className="text-lg" />
              <span className="sr-only">Brutanix Studio, back to top</span>
            </Link>
          </div>

          <nav
            aria-label="Sections"
            className="hidden items-center gap-6 text-sm font-medium text-white/85 lg:flex"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* Zero-JS disclosure keeps the sections reachable on small screens */}
            <details className="relative lg:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-1 text-sm text-white/85 [&::-webkit-details-marker]:hidden">
                Menu
                <HugeiconsIcon
                  icon={ArrowDown01Icon}
                  size={15}
                  strokeWidth={2.2}
                />
              </summary>
              <div className="absolute right-0 z-30 mt-3 flex w-44 flex-col gap-1 rounded-2xl bg-ink-deep/95 p-3 text-sm ring-1 ring-white/10 backdrop-blur">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="rounded-lg px-2 py-2 text-white/85 hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <UnderlineLink className="text-sm font-medium">
              Get Connected
            </UnderlineLink>
          </div>
        </div>
      </Shell>
    </header>
  );
}
