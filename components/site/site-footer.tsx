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
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#project" },
  { label: "Service", href: "#service" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
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
              href="mailto:hello@boulevard.com"
              className="font-display mt-5 block text-[clamp(1.55rem,7.4vw,6.25rem)] leading-[0.92] font-bold tracking-[-0.045em]"
            >
              <GradientText>hello@boulevard.com</GradientText>
            </a>
          </div>
          <PillButton
            href="mailto:hello@boulevard.com"
            tone="white"
            className="sm:mt-9"
          >
            Book a Call
          </PillButton>
        </div>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-9 sm:grid-cols-2 sm:mt-16 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">
          <div>
            <p className="text-[11.5px] text-white/45">
              &copy; 2025 Boulevard Creative.
            </p>
            <p className="mt-3.5 max-w-[34ch] text-[12.5px] leading-[1.5] text-white/70">
              Work with our strategists, designers, and developers who deliver
              high-quality work with passion.
            </p>
          </div>

          <nav aria-label="Footer">
            <Eyebrow className="text-white/40">Navigate</Eyebrow>
            <ul className="mt-4 space-y-2.5">
              {NAVIGATE.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[12.5px] text-white/70 transition-colors duration-200 hover:text-volt"
                  >
                    {item.label}
                  </a>
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
                    className="group inline-flex items-center gap-2 text-[12.5px] text-white/70 transition-colors duration-200 hover:text-volt"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={14}
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
          <Wordmark className="block text-[clamp(1.9rem,6.4vw,5rem)] leading-[0.9] tracking-[-0.045em]" />
        </div>
      </Shell>
    </footer>
  );
}
