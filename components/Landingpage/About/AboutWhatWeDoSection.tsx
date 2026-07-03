"use client";

import { Reveal } from "@/components/motion/Reveal";
import { BodyText, EditorialLayout } from "./shared";
import { Target, Monitor, Search, Zap } from "lucide-react";
import { motion } from "motion/react";

const paragraphs = [
  "InvisiEdge is a digital marketing and growth agency built for modern businesses that need more than disconnected marketing activities.",
  "We work behind the scenes as a strategic extension of your team, helping your brand show up stronger, communicate better, and convert more effectively.",
];

const pillars = [
  {
    icon: Target,
    title: "Brand Strategy",
    description: "Aligning your identity with unique market positioning to build authority.",
    color: "from-brand-purple/10 to-brand-lavender/5"
  },
  {
    icon: Monitor,
    title: "Digital Experience",
    description: "Building responsive, modern websites and apps with custom layout animations.",
    color: "from-brand-lavender/10 to-brand-purple/5"
  },
  {
    icon: Search,
    title: "Organic Dominance",
    description: "Elevating search visibility, domain rankings, and structured content clusters.",
    color: "from-brand-purple/10 to-brand-navy/5"
  },
  {
    icon: Zap,
    title: "Automation & AI",
    description: "Integrating custom automation pipelines, CRM databases, and workflows.",
    color: "from-brand-navy/10 to-brand-purple/5"
  }
];

export default function AboutWhatWeDoSection() {
  return (
    <EditorialLayout label="What We Do">
      <Reveal>
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col gap-6">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={paragraph.slice(0, 40)} lead={index === 0}>
                {paragraph}
              </BodyText>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-black/[0.05] bg-white p-6 shadow-[0_2px_12px_rgba(82,16,248,0.02)] transition-all duration-300 hover:border-brand-purple/15 hover:shadow-[0_8px_24px_rgba(82,16,248,0.06)]"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full bg-linear-to-br ${pillar.color} opacity-40 transition-transform duration-500 group-hover:scale-150`} />
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-purple/[0.06] text-brand-purple transition-all duration-300 group-hover:bg-brand-purple group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="mt-4 text-base font-bold tracking-tight text-neutral-900">
                    {pillar.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </EditorialLayout>
  );
}
