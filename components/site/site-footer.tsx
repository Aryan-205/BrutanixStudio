import Link from "next/link";
import type { IconSvgElement } from "@hugeicons/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DribbbleIcon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import {
  Eyebrow,
  GradientText,
  PillButton,
  Shell,
} from "@/components/ui/primitives";
import { Wordmark } from "@/components/site/site-nav";

const NAVIGATE = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Service", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Reviews", href: "/reviews" },
];

const SOCIAL: { label: string; href: string; icon: IconSvgElement }[] = [
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "Twitter (X)", href: "#", icon: NewTwitterIcon },
  { label: "LinkedIn", href: "#", icon: Linkedin01Icon },
  { label: "Dribbble", href: "#", icon: DribbbleIcon },
];

export function SiteFooter() {
  return (
    <footer id="contact" className="mt-16 bg-ink-deep text-white sm:mt-24">
      <Shell className="pt-14 pb-8 sm:pt-20 sm:pb-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <div className="min-w-0">
            <Eyebrow className="text-white/45">
              Have any project in mind?
            </Eyebrow>
            <a
              href="mailto:hello@brutanix.studio"
              className="font-display mt-6 block text-4xl leading-none font-bold tracking-tighter sm:text-6xl lg:text-8xl"
            >
              <GradientText>hello@brutanix.studio</GradientText>
            </a>
          </div>
          <PillButton
            href="mailto:hello@brutanix.studio"
            tone="white"
            className="sm:mt-9"
          >
            Book a Call
          </PillButton>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-9 sm:grid-cols-2 sm:mt-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          <div>
            <p className="text-sm text-white/45">
              &copy; 2025 Brutanix Studio.
            </p>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-white/70">
              Work with our strategists, designers, and developers who deliver
              high-quality work with passion.
            </p>
          </div>

          <nav aria-label="Footer">
            <Eyebrow className="text-white/40">Navigate</Eyebrow>
            <ul className="mt-4 space-y-2.5">
              {NAVIGATE.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-base text-white/70 transition-colors duration-200 hover:text-volt"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Social media">
            <Eyebrow className="text-white/40">Social media</Eyebrow>
            <ul className="mt-4 space-y-2.5">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-base text-white/70 transition-colors duration-200 hover:text-volt"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={16}
                      strokeWidth={1.8}
                      className="text-white/35 transition-colors duration-200 group-hover:text-volt"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 sm:mt-20">
          <Wordmark className="block text-5xl leading-none tracking-tighter sm:text-7xl lg:text-8xl" />
        </div>
      </Shell>
    </footer>
  );
}
