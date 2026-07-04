"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export default function ProjectsCTASection() {
  return (
    <section className="border-t border-neutral-100 bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-3xl font-medium tracking-tight text-[#111] sm:text-4xl md:text-5xl">
            Ready to accelerate your next project?
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-neutral-500 md:text-base">
            Let&apos;s build something remarkable together — from brand strategy
            to full-scale digital products.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact-us"
              className="inline-block rounded-full bg-[#5210F8] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(82,16,248,0.25)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(82,16,248,0.35)]"
            >
              Book a call
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-full border border-neutral-200 px-8 py-3.5 text-sm font-semibold text-neutral-700 transition-colors duration-300 hover:border-[#5210F8]/30 hover:text-[#5210F8]"
            >
              Explore services
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
