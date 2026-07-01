import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[480px] z-0 bg-[#d2d6dc] text-black flex items-center select-none font-sans">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 relative py-8 md:py-12">
        {/* Decorative Floating Circle */}
        <div className="absolute left-[42%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#3b82f6] hidden md:block" />

        {/* Left Column (Span 5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between h-full min-h-[300px]">
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

          <div className="mt-6 md:mt-0">
            <p className="text-xs text-neutral-500 mb-1">
              Don’t like the forms? Drop us a line via email.
            </p>
            <a
              href="mailto:info@awsmd.com"
              className="text-sm font-bold underline hover:text-neutral-700 transition-colors"
            >
              info@awsmd.com
            </a>

            {/* Dribbble Select Badge */}
            <div className="mt-4 flex flex-col border border-neutral-400 bg-black text-white p-2.5 rounded-md w-fit shadow-lg">
              <span className="text-[6.5px] uppercase tracking-[0.25em] text-neutral-400 font-bold text-center block mb-1">
                TOP WEB DESIGN COMPANY
              </span>
              <div className="flex items-center justify-center gap-1.5 leading-none">
                <span className="font-serif italic font-extrabold text-[15px] tracking-tight lowercase">
                  dribbble
                </span>
                <span className="text-[7.5px] font-black uppercase tracking-wider text-black bg-white px-1.5 py-0.5 rounded-[2px] inline-block">
                  SELECT
                </span>
              </div>
            </div>
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
              info@awsmd.com
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
