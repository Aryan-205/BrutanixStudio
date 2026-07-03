import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/projects" },
  { label: "Case Studies", href: "/projects" },
  { label: "Insights", href: "/blogs" },
  { label: "Contact", href: "/contact-us" },
];

const serviceLinks = [
  { label: "Brand Strategy", href: "/services#brand-strategy" },
  { label: "Website Development", href: "/services#website-development" },
  { label: "SEO", href: "/services#seo" },
  { label: "Social Media", href: "/services#social-media" },
  { label: "AI Video", href: "/services#ai-video" },
  { label: "CRM Automation", href: "/services#crm-automation" },
  { label: "Lead Generation", href: "/services#lead-generation" },
  { label: "GTM Strategy", href: "/services#gtm-strategy" },
];

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "YouTube", url: "https://youtube.com" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export default function FooterSection() {
  return (
    <footer className="relative md:fixed md:bottom-0 md:left-0 w-full h-auto md:h-[560px] z-10 md:z-0 bg-[#080909] text-white flex items-center select-none font-sans py-12 md:py-0">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-10 relative pt-8 md:pt-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Tagline & Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.1] text-white mb-2">
                InvisiEdge
              </p>
              <p className="text-base md:text-lg text-white/50 leading-relaxed tracking-[-0.02em]">
                Built for Growth. Designed for Impact.
              </p>
            </div>

            <div>
              <p className="text-sm text-white/50 mb-4 leading-relaxed max-w-sm tracking-[-0.02em]">
                Get smart marketing insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/25 focus:bg-white/8 transition-all"
                />
                <button
                  type="button"
                  className="shrink-0 border border-white/20 bg-white/10 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Footer Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Follow Us
            </h4>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 text-white/30" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/8">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} InvisiEdge. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/35 hover:text-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
