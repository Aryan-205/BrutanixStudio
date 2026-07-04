"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { serviceDetails } from "@/lib/data/servicesPageContent";
import ServiceAnimatedVisual from "@/components/Landingpage/Services/ServiceAnimatedVisual";

function ServiceTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2 md:justify-start">
      {tags.map((tag, i) => (
        <motion.span
          key={tag}
          className={`rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${
            i === 0
              ? "border-[#5210F8]/25 bg-[#5210F8]/5 text-[#5210F8]"
              : "border-neutral-200 text-neutral-500"
          }`}
          whileHover={{ borderColor: "rgba(82,16,248,0.35)", color: "#5210F8" }}
        >
          {tag}
        </motion.span>
      ))}
    </div>
  );
}

function ServiceLists({
  keyServices,
  businessBenefits,
}: {
  keyServices: string[];
  businessBenefits: string[];
}) {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div>
        <h4 className="text-sm font-medium text-neutral-400">Key Services</h4>
        <ul className="mt-5 space-y-3">
          {keyServices.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-neutral-700"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5210F8]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-medium text-neutral-400">Business Benefits</h4>
        <ul className="mt-5 space-y-3">
          {businessBenefits.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-sm text-neutral-700"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C47DFD]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ServiceShowcaseBlock({
  service,
  index,
}: {
  service: (typeof serviceDetails)[number];
  index: number;
}) {
  const reduce = useReducedMotion();
  const isReversed = index % 2 === 1;

  return (
    <section className="border-t border-neutral-100 bg-white px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-medium tracking-tight text-[#111] sm:text-5xl md:text-6xl">
              {service.shortTitle}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-neutral-500 md:text-base">
              {service.overview}
            </p>
            <ServiceTags tags={service.tags} />
          </div>
        </Reveal>

        <div
          className={`mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            isReversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            className="rounded-3xl border border-neutral-200/80 bg-[#FAFAFA] p-5 shadow-[0_2px_24px_rgba(0,0,0,0.04)] md:p-6"
            initial={reduce ? false : { opacity: 0, x: isReversed ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easePremium }}
          >
            <ServiceAnimatedVisual type={service.visualType} />
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, x: isReversed ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easePremium }}
          >
            <ServiceLists
              keyServices={service.keyServices}
              businessBenefits={service.businessBenefits}
            />

            <Link
              href="/contact-us"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#5210F8] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#4210d0] hover:shadow-[0_8px_32px_rgba(82,16,248,0.25)]"
            >
              View details
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesShowcaseSection() {
  return (
    <div>
      {serviceDetails.map((service, index) => (
        <ServiceShowcaseBlock key={service.title} service={service} index={index} />
      ))}
    </div>
  );
}
