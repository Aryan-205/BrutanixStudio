"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { serviceDetails } from "@/data/servicesPageContent";
import ServiceAnimatedVisual from "@/components/Landingpage/Services/ServiceAnimatedVisual";

function ServiceTabs({
  tags,
  active,
  onSelect,
  groupId,
}: {
  tags: string[];
  active: number;
  onSelect: (index: number) => void;
  groupId: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {tags.map((tag, i) => {
        const isActive = i === active;
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onSelect(i)}
            aria-pressed={isActive}
            className={`relative rounded-full border px-3.5 py-1.5 text-[11px] font-medium tracking-wide transition-[color,border-color,transform] duration-200 ease-out active:scale-[0.96] cursor-pointer ${
              isActive
                ? "border-transparent bg-[#5210F8] text-white"
                : "border-neutral-200 text-neutral-500 hover:border-[#5210F8]/35 hover:text-[#5210F8]"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={`service-tab-${groupId}`}
                className="absolute inset-0 -z-10 rounded-full bg-[#5210F8]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            {tag}
          </button>
        );
      })}
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
  const [active, setActive] = useState(0);

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
            <ServiceTabs
              tags={service.tags}
              active={active}
              onSelect={setActive}
              groupId={service.visualType}
            />
          </div>
        </Reveal>

        <div
          className={`mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
            isReversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, x: isReversed ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: easePremium }}
          >
            <ServiceAnimatedVisual type={service.visualType} active={active} />
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
