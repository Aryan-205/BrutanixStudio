"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerLines } from "@/components/motion/StaggerLines";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  { 
    question: "DO YOU DO WEB DESIGN OR WEB DEVELOPMENT?",
    answer: "We offer both. We design highly immersive, premium interfaces in Figma and build them using custom frameworks like Next.js, React, and Tailwind CSS. We ensure a unified workflow between initial design direction and final production-ready code."
  },
  { 
    question: "I'M AN AGENCY, DO YOU DEVELOP FIGMA DESIGNS?",
    answer: "Yes, we frequently collaborate with design agencies and creative teams to bring Figma files to life. We translate design systems into clean, responsive, and high-performance code with precise micro-interactions."
  },
  { 
    question: "WHAT TECHNOLOGY STACK DO YOU USE FOR DEVELOPMENT?",
    answer: "We primarily build custom applications and marketing systems using React, Next.js, Tailwind CSS, and Framer Motion. This guarantees ultra-fast page speeds, robust SEO, and maximum flexibility for custom animations."
  },
  { 
    question: "HOW MUCH DOES IT COST?",
    answer: "Our pricing is project-based and depends entirely on the scope, complexity, and custom integrations required. We work with clients to define clear milestones and provide transparent, itemized proposals before kicking off."
  },
  { 
    question: "IS THERE ANY EXTRA COST INVOLVED?",
    answer: "No, there are no hidden fees. All code handoff, search engine setup, and initial performance optimizations are included in our proposal. Any third-party subscriptions (e.g. domain registry, specialized APIs) are billed directly."
  },
  { 
    question: "HOW LONG DOES IT TAKE?",
    answer: "A standard marketing site with custom visuals and setup typically takes 4 to 8 weeks. More complex applications or brand identity refreshes can take 8 to 12 weeks, depending on the scale and assets required."
  },
  { 
    question: "DO I NEED A DEVELOPER TO MAKE FUTURE UPDATES ON MY WEBSITE?",
    answer: "No. We construct our sites with modular components and integrate easy-to-use content management platforms so your team can edit text, upload media, and publish blogs without writing any code."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white text-black px-6 md:px-12 py-24 md:py-40 border-t border-black/3 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute right-[-10%] top-1/4 h-80 w-80 rounded-full bg-brand-purple/2 blur-[100px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-1/4 h-80 w-80 rounded-full bg-brand-lavender/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 relative z-10">
        <div className="hidden md:block md:col-span-4" />

        <div className="md:col-span-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-4">
            <StaggerLines
              as="h2"
              trigger="inView"
              lines={["Common", "Questions"]}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-extrabold leading-[0.85] tracking-tight uppercase text-[#111] pb-2"
              lineClassName="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-extrabold leading-[0.85] tracking-tight uppercase text-[#111]"
            />
            <Reveal short delay={0.12} className="md:pt-4">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] max-w-[120px] text-neutral-400">
                Some questions people usually ask
              </p>
            </Reveal>
          </div>

          <StaggerChildren
            className="flex flex-col border-t border-neutral-200/50"
            staggerDelay={0.05}
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-neutral-200/50 group">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full py-8 flex justify-between items-center text-left transition-all duration-300 cursor-pointer"
                  >
                    <span className={`text-xs md:text-sm font-bold uppercase tracking-wider pr-8 transition-colors duration-300 ${
                      isOpen ? "text-brand-purple" : "text-neutral-800 group-hover:text-brand-purple"
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen 
                        ? "bg-brand-purple border-brand-purple text-white rotate-45" 
                        : "border-neutral-200 bg-white text-neutral-600 group-hover:border-brand-purple/30 group-hover:bg-brand-purple/5"
                    }`}>
                      <Plus className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="pb-8 pr-12">
                          <p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
