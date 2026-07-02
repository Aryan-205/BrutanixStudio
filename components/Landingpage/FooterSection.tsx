import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative md:fixed md:bottom-0 md:left-0 w-full h-auto md:h-[480px] z-10 md:z-0 bg-[#d2d6dc] text-black flex items-center select-none font-sans py-12 md:py-0">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 relative py-8 md:py-12">

        {/* Left Column (Span 5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between h-auto md:h-full md:min-h-[300px] gap-6 md:gap-0">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.05] text-black mb-4">
              We would love to hear from you.
            </h2>
            <p className="text-sm text-neutral-600 max-w-sm mb-6 leading-relaxed">
              Feel free to reach out if you want to collaborate with us, or simply have a chat
            </p>
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md text-sm border border-neutral-300 w-fit"
            >
              Become a Client
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Spacing Column (Span 1 col) */}
        <div className="hidden md:block md:col-span-1" />

        {/* Contact us Column (Span 2 cols) */}
        <div className="md:col-span-2 flex flex-col gap-6 md:pt-4">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
              Contact us
            </h4>
            <p className="text-xs text-neutral-500 mb-1">Our Email</p>
            <a
              href="mailto:info@awsmd.com"
              className="text-sm font-bold underline hover:text-neutral-700 block mb-4"
            >
              info@invisiedge.com
            </a>
          </div>
          <div>
            <p className="text-xs text-neutral-600 max-w-[200px] leading-relaxed">
              San Francisco, CA 2 Embarcadero Center, 8 floor, 94111
            </p>
          </div>
        </div>

        {/* Follow us Column (Span 2 cols) */}
        <div className="md:col-span-2 md:pt-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
            Follow us
          </h4>
          <ul className="flex flex-col gap-2.5">
            {[
              { name: "dribbble", url: "https://dribbble.com" },
              { name: "linkedin", url: "https://linkedin.com" },
              { name: "clutch", url: "https://clutch.co" },
              { name: "instagram", url: "https://instagram.com" },
              { name: "behance", url: "https://behance.net" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:text-black transition-colors"
                >
                  {link.name}
                  <ArrowUpRight className="h-3 w-3 text-neutral-400" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Column (Span 2 cols) */}
        <div className="md:col-span-2 md:pt-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-3">
            Services
          </h4>
          <ul className="flex flex-col gap-2 text-sm text-neutral-600">
            <li>Mobile development</li>
            <li>Web development</li>
            <li>Solid design solutions</li>
            <li>About</li>
            <li>Development</li>
            <li>Blog</li>
            <li>Reviews</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
