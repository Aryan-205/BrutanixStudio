import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealWords } from "@/components/motion/RevealWords";

const aboutLines = [
  "Ethan Suero is an independent designer focused on crafting immersive digital experiences.",
  "He believes every project is an opportunity to deliver a unique and memorable digital experience that delights users and builds brand equity.",
];

const aboutText = aboutLines.join(" ");

const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-6 bg-[#F9F9F9] text-black px-6 md:px-12 py-24 md:py-40"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-start-4 md:col-span-1">
          <Reveal short className="block">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-gray-500 block mt-2">
              About
            </span>
          </Reveal>
        </div>

        <div className="md:col-start-5 md:col-span-7">
          <RevealWords
            text={aboutText}
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.15] tracking-tight"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
