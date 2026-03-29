"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerLines } from "@/components/motion/StaggerLines";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

const faqs = [
  { question: "DO YOU DO WEB DESIGN OR WEB DEVELOPMENT?" },
  { question: "I'M AN AGENCY, DO YOU DEVELOP FIGMA DESIGNS?" },
  { question: "WHY DO I DEVELOP SOLELY USING WEBFLOW?" },
  { question: "HOW MUCH DOES IT COST?" },
  { question: "IS THERE ANY EXTRA COST INVOLVED?" },
  { question: "HOW LONG DOES IT TAKE?" },
  { question: "DO I NEED A DEVELOPER TO MAKE FUTURE UPDATES ON MY WEBSITE?" },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#F9F9F9] text-black px-6 md:px-12 py-24 md:py-40 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="hidden md:block md:col-span-4" />

        <div className="md:col-span-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-4">
            <StaggerLines
              as="h2"
              trigger="inView"
              lines={["Common", "Questions"]}
              className="text-7xl md:text-[120px] font-bold leading-[0.85] tracking-tighter uppercase"
              lineClassName="text-7xl md:text-[120px] font-bold leading-[0.85] tracking-tighter uppercase"
            />
            <Reveal short delay={0.12} className="md:pt-4">
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] max-w-[120px]">
                Some questions people usually ask
              </p>
            </Reveal>
          </div>

          <StaggerChildren
            className="flex flex-col border-t border-gray-100"
            staggerDelay={0.05}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex justify-between items-center text-left hover:opacity-60 transition-opacity cursor-pointer"
                >
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider pr-8">
                    {faq.question}
                  </span>
                  <Plus
                    className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-500 text-sm md:text-base max-w-xl">
                    This is where the answer would go. The design uses a clean,
                    minimalist font and provides ample breathing room for the text to be legible.
                  </p>
                </div>
              </div>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
