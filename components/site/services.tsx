"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { MinusSignIcon, PlusSignIcon } from "@hugeicons/core-free-icons";
import {
  Chip,
  Eyebrow,
  SectionTitle,
  Shell,
  Statement,
} from "@/components/ui/primitives";
import { ToteMockup } from "@/components/ui/mockups";

const SERVICES = [
  {
    id: "brand-identity",
    title: "Brand Identity",
    body: "We specialize in crafting unique brand identities that resonate with audiences. Our expertise lies in understanding the essence of your brand and translating it into compelling visuals and narratives.",
    tags: [
      "Graphic Design",
      "Brand Name",
      "Logo Design",
      "Package Design",
      "Typography",
      "Color Scheme",
      "Voice and Tone",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    body: "We design interfaces people move through without friction. Research, flows, and a system of components that stays coherent as the product grows.",
    tags: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Usability Testing",
      "Motion",
    ],
  },
  {
    id: "development",
    title: "Development",
    body: "We ship the design as production code — typed, accessible, and fast on the devices your customers actually use.",
    tags: [
      "Next.js",
      "Design Engineering",
      "Headless CMS",
      "Webflow",
      "Performance",
      "Analytics",
    ],
  },
];

export function Services() {
  const [openId, setOpenId] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="service" className="pt-16 sm:pt-24 lg:pt-32">
      <Shell>
        <SectionTitle>Our Services</SectionTitle>

        <div className="mt-8 grid gap-5 sm:mt-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-12">
          <Eyebrow className="text-black/45">(Service &mdash; 02)</Eyebrow>
          <Statement className="max-w-[22ch] lg:justify-self-end lg:text-right">
            An agency that brings{" "}
            <span className="text-black/35">passion</span> into every project.
          </Statement>
        </div>

        <div className="reveal mt-10 grid gap-6 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.62fr)] lg:gap-12">
          <div className="border-t border-black/10">
            {SERVICES.map((service, i) => {
              const open = openId === service.id;
              return (
                <div key={service.id} className="border-b border-black/10">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : service.id)}
                      aria-expanded={open}
                      aria-controls={`${service.id}-panel`}
                      className="flex w-full items-center gap-4 py-5 text-left sm:gap-6 sm:py-6"
                    >
                      <span className="w-8 shrink-0 text-base font-medium text-black/40 tabular-nums">
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      <span className="font-display flex-1 text-2xl font-semibold tracking-tight sm:text-3xl">
                        {service.title}
                      </span>
                      <HugeiconsIcon
                        icon={open ? MinusSignIcon : PlusSignIcon}
                        size={22}
                        strokeWidth={2}
                        className="shrink-0 text-black/45"
                      />
                    </button>
                  </h3>

                  <div
                    id={`${service.id}-panel`}
                    className={`grid transition-[grid-template-rows] duration-400 ease-out motion-reduce:transition-none ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="pb-6 sm:pl-10">
                        <p className="max-w-[54ch] text-base leading-relaxed text-black/55">
                          {service.body}
                        </p>
                        <div className="mt-4 flex max-w-[46ch] flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <Chip key={tag}>{tag}</Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <figure className="overflow-hidden rounded-3xl bg-gradient-to-b from-[#f1f2f5] to-[#dfe1e7]">
            <ToteMockup />
            <figcaption className="sr-only">
              Brand identity work in the wild: a Brutanix tote bag.
            </figcaption>
          </figure>
        </div>
      </Shell>
    </section>
  );
}
