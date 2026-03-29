import React from "react";
import { Reveal } from "@/components/motion/Reveal";

const TestimonialSection = () => {
  return (
    <section className="bg-[#F6F6F6] text-[#1A1A1A] py-20 px-8 md:px-16 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-32">
          <Reveal className="md:col-span-3" short>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">
              About / Testimonials
            </span>
          </Reveal>

          <Reveal className="md:col-span-4 border-r border-gray-300 pr-8 md:pr-12" delay={0.06}>
            <blockquote className="text-3xl md:text-[2.6rem] font-bold leading-[1.05] tracking-tight uppercase mb-8">
              &quot;Ethan translates complexity into elegant, high-converting digital experiences. Our visits are up 40%&quot;
            </blockquote>
            <div className="flex flex-col">
              <cite className="not-italic text-[10px] font-bold tracking-widest uppercase">
                Sarah Jenkins, CEO at Bitwise
              </cite>
            </div>
          </Reveal>

          <Reveal className="md:col-span-5 pl-0 md:pl-4" delay={0.14}>
            <blockquote className="text-3xl md:text-[2.6rem] font-bold leading-[1.05] tracking-tight uppercase mb-8 max-w-md">
              &quot;A master of design and Webflow, Ethan built a brand that is beautiful and results-driven. He&apos;s one of a kind.&quot;
            </blockquote>
            <div className="flex flex-col">
              <cite className="not-italic text-[10px] font-bold tracking-widest uppercase">
                Marcus Thorne, Marketing Director, Everbridge
              </cite>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="pt-20 border-t border-gray-200">
            <p className="text-center text-[9px] font-bold tracking-[0.2em] uppercase opacity-50 mb-12">
              Trusted by Innovators
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale">
              <div className="h-6 font-black text-xl italic tracking-tighter">FLUX</div>
              <div className="h-6 font-bold text-2xl lowercase tracking-tighter">yahoo!</div>
              <div className="h-6 font-black text-xl italic underline decoration-4">F3</div>
              <div className="h-6 font-medium text-xl tracking-tight">awwwards.</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TestimonialSection;
