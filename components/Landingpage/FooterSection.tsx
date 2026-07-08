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
      {/* Brand accent line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-purple/60 to-transparent" />
      {/* Subtle brand glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-purple/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col gap-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
          {/* Tagline & Newsletter */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.03em] leading-[1.1] mb-2">
                <span className="text-white">Invisi</span>
                <span className="text-brand-lavender">Edge</span>
              </p>
              <p className="text-base md:text-lg text-white/50 leading-relaxed tracking-[-0.02em]">
                Built for Growth. Designed for Impact.
              </p>
            </div>

            <div>
              <p className="text-sm text-white/50 mb-3 leading-relaxed max-w-sm tracking-[-0.02em]">
                Get smart marketing insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-label="Email address for newsletter"
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-[color,background-color,border-color,box-shadow] duration-200 focus:border-brand-purple focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(82,16,248,0.15)]"
                />
                <button
                  type="button"
                  className="shrink-0 bg-brand-purple text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 hover:bg-[#4210d0]"
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
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              <span className="h-1 w-1 rounded-full bg-brand-purple" />
              Links
            </h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-lavender transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              <span className="h-1 w-1 rounded-full bg-brand-purple" />
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-lavender transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              <span className="h-1 w-1 rounded-full bg-brand-purple" />
              Follow Us
            </h4>
            <ul className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-sm text-white/60 hover:text-brand-lavender transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 text-white/30 transition-colors group-hover:text-brand-lavender" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-white/8">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white/50">InvisiEdge</span>. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs text-white/35 hover:text-brand-lavender transition-colors"
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
