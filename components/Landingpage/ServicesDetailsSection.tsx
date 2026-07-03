"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { easePremium } from "@/components/motion/presets";
import { serviceDetails } from "@/lib/data/servicesPageContent";

const serviceSlugs = [
  "brand-strategy",
  "website-development",
  "seo",
  "social-media",
  "ai-video",
  "crm-automation",
  "lead-generation",
  "gtm-strategy",
] as const;

function ServiceList({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "services" | "benefits";
}) {
  const isBenefits = variant === "benefits";
  
  return (
    <div className={`rounded-3xl border border-neutral-200/40 p-6 backdrop-blur-sm md:p-7 bg-gradient-to-br ${
      isBenefits ? "from-brand-lavender/[0.02] to-white/90" : "from-brand-purple/[0.02] to-white/90"
    }`}>
      <h4 className={`text-[11px] font-bold uppercase tracking-[0.18em] ${isBenefits ? "text-brand-lavender" : "text-brand-purple"}`}>
        {title}
      </h4>
      <ul className="mt-5 space-y-3">
        {items.map((item, i) => (
          <motion.li
            key={item}
            className="flex items-start gap-3 text-sm leading-relaxed text-neutral-600 md:text-[15px]"
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: i * 0.04, ease: easePremium }}
          >
            <span
              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                variant === "benefits"
                  ? "bg-brand-lavender/10 text-brand-lavender"
                  : "bg-brand-purple/10 text-brand-purple"
              }`}
            >
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function ServiceBlock({
  service,
  index,
  slug,
  isActive,
  onActivate,
}: {
  service: (typeof serviceDetails)[number];
  index: number;
  slug: string;
  isActive: boolean;
  onActivate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const reduce = useReducedMotion();
  const isOpen = expanded;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Reveal delay={index * 0.03}>
      <motion.article
        id={slug}
        onViewportEnter={onActivate}
        viewport={{ amount: 0.35, margin: "-20% 0px -35% 0px" }}
        className={`group relative scroll-mt-32 overflow-hidden rounded-[2rem] border transition-[border-color,box-shadow] duration-500 ${
          isActive
            ? "border-brand-purple/20 shadow-[0_12px_40px_rgba(82,16,248,0.06)]"
            : "border-neutral-200/50 shadow-[0_2px_20px_rgba(0,0,0,0.02)]"
        } bg-white`}
        whileHover={
          reduce ? undefined : { borderColor: "rgba(82, 16, 248, 0.15)" }
        }
      >
        <div className="pointer-events-none absolute -right-4 -top-8 select-none text-[7rem] font-bold leading-none text-[#5210F8]/[0.03] transition-colors duration-500 group-hover:text-[#5210F8]/[0.06] md:text-[9rem] font-sans">
          {number}
        </div>

        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5210F8] to-[#C47DFD] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {isActive && (
          <motion.div
            layoutId="service-active-bar"
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#5210F8] to-[#C47DFD]"
            transition={{ duration: 0.4, ease: easePremium }}
          />
        )}

        <div className="relative p-8 md:p-10">
          <button
            type="button"
            className="flex w-full items-start justify-between gap-4 text-left md:pointer-events-none"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={isOpen}
          >
            <div className="flex items-start gap-4 md:gap-5">
              <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-purple/10 text-xs font-bold text-brand-purple">
                {number}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-neutral-900 md:text-[1.75rem] group-hover:text-brand-purple transition-colors duration-300">
                {service.title}
              </h3>
            </div>
            <motion.span
              className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-purple/15 bg-brand-purple/5 md:hidden"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.35, ease: easePremium }}
            >
              <ChevronDown className="h-4 w-4 text-brand-purple" />
            </motion.span>
          </button>

          <p className="mt-5 max-w-3xl pl-0 text-base leading-relaxed text-neutral-500 md:pl-[3.25rem] md:text-[17px] md:leading-relaxed">
            {service.overview}
          </p>

          <div className="md:pl-[3.25rem]">
            <div className="md:hidden">
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.4, ease: easePremium }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="grid grid-cols-1 gap-5">
                      <ServiceList
                        title="Key Services"
                        items={service.keyServices}
                        variant="services"
                      />
                      <ServiceList
                        title="Business Benefits"
                        items={service.businessBenefits}
                        variant="benefits"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              className="mt-10 hidden gap-6 md:grid md:grid-cols-2 md:gap-7"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: easePremium }}
            >
              <ServiceList
                title="Key Services"
                items={service.keyServices}
                variant="services"
              />
              <ServiceList
                title="Business Benefits"
                items={service.businessBenefits}
                variant="benefits"
              />
            </motion.div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

function ServiceNav({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav className="sticky top-28 hidden flex-col gap-1.5 lg:flex p-2.5 rounded-[2rem] border border-neutral-200/40 bg-white/60 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.01)]">
      <span className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.22em] text-neutral-400">
        All Services
      </span>
      {serviceDetails.map((service, index) => {
        const isActive = activeIndex === index;
        return (
          <button
            key={service.title}
            type="button"
            onClick={() => {
              onSelect(index);
              document
                .getElementById(serviceSlugs[index])
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-300 border border-transparent ${
              isActive
                ? "bg-white shadow-[0_8px_24px_rgba(82,16,248,0.06)] border-brand-purple/10"
                : "hover:bg-white/80 hover:border-neutral-200/30"
            }`}
          >
            <span
              className={`text-[10px] font-bold tabular-nums transition-colors duration-300 ${
                isActive ? "text-[#5210F8]" : "text-neutral-300"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className={`text-sm font-semibold leading-snug transition-colors duration-300 ${
                isActive ? "text-[#111]" : "text-neutral-500 group-hover:text-neutral-700"
              }`}
            >
              {service.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default function ServicesDetailsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-6 pb-28 md:px-12 md:pb-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#5210F8]/80 md:text-xs">
              Capabilities
            </span>
          </Reveal>
          <Reveal delay={0.06} className="md:col-span-8">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl md:text-[2.75rem]">
              Service Details
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500 md:text-[17px]">
              Eight integrated capabilities designed to help your brand grow from
              strategy through execution.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14 xl:grid-cols-[280px_1fr]">
          <ServiceNav
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />

          <div className="flex flex-col gap-5 md:gap-6">
            {serviceDetails.map((service, index) => (
              <ServiceBlock
                key={service.title}
                service={service}
                index={index}
                slug={serviceSlugs[index]}
                isActive={activeIndex === index}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
