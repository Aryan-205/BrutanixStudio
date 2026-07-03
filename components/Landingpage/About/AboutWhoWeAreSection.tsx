"use client";

import { Reveal } from "@/components/motion/Reveal";
import { BodyText, EditorialLayout } from "./shared";
import { motion } from "motion/react";

const paragraphs = [
  "We are a highly integrated team of strategists, designers, developers, automation specialists, and growth marketers focused on scaling modern brands.",
  "Our operational model cuts out traditional agency bloat. We match elite subject-matter experts to your specific growth needs so that every dollar is spent on high-impact execution.",
];

const stats = [
  { value: "15+", label: "Core Specialists" },
  { value: "50+", label: "Brands Scaled" },
  { value: "98%", label: "Client Retention" },
  { value: "3x", label: "Avg. ROI Catalyst" }
];

export default function AboutWhoWeAreSection() {
  return (
    <EditorialLayout label="Who We Are" variant="muted">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            {paragraphs.map((paragraph, index) => (
              <BodyText key={paragraph.slice(0, 40)} lead={index === 0}>
                {paragraph}
              </BodyText>
            ))}
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl border border-black/[0.04] bg-white/60 p-5 shadow-[0_2px_8px_rgba(0,0,0,0.01)] backdrop-blur-xs text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <span className="block text-3xl font-black tracking-tight text-brand-purple bg-gradient-to-r from-brand-purple to-brand-lavender bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>
    </EditorialLayout>
  );
}
