"use client";

import { Reveal } from "@/components/motion/Reveal";
import { PrimaryButton, SectionEyebrow } from "./shared";
import { motion } from "motion/react";

export default function AboutTeamSection() {
  return (
    <section className="border-t border-black/[0.03] bg-[#F9F9F9] px-6 py-24 md:px-12 md:py-32 relative overflow-hidden">
      {/* Decorative gradient lines and glowing mesh */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-brand-purple/[0.03] blur-[100px] pointer-events-none" />
      
      <div className="mx-auto max-w-4xl relative z-10">
        <Reveal>
          <motion.div 
            className="rounded-[2.5rem] border border-neutral-200/50 bg-white/70 p-8 md:p-16 text-center shadow-[0_12px_40px_rgba(82,16,248,0.02)] backdrop-blur-md"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 flex justify-center">
              <SectionEyebrow>Our Team</SectionEyebrow>
            </div>

            <h2 className="text-balance text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1] bg-gradient-to-r from-neutral-950 via-neutral-800 to-brand-purple bg-clip-text text-transparent pb-1">
              Meet the Minds Behind the Growth
            </h2>

            <p className="text-balance mx-auto mt-6 max-w-xl text-base leading-[1.75] tracking-tight text-neutral-500 md:text-[17px]">
              We integrate senior branding directors, UX engineers, conversion copywriters, and systems architects to co-author your brand's growth story.
            </p>

            <div className="mt-10">
              <PrimaryButton href="/contact-us">
                Meet the Full Team
              </PrimaryButton>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
