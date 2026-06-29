"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";

const testimonials = [
  {
    quote:
      "Brutanix Studio is a hands-on team with applicable advice beyond design. They focus on the end-user and help improve retention. They're committed to Agile development methods, and they look into user data and user behavior when driving new features. They excel in user experience and big-picture thinking.",
    name: "Lexie Ernst",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "Ethan translates complexity into elegant, high-converting digital experiences. Our visits are up 40% since launch. The attention to detail in every interaction shows a team that truly understands modern product design.",
    name: "Sarah Jenkins",
    role: "CEO at Bitwise",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "A master of design and Webflow, Brutanix built a brand that is beautiful and results-driven. They're one of a kind — strategic, fast, and deeply invested in outcomes that matter to our business.",
    name: "Marcus Thorne",
    role: "Marketing Director, Everbridge",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
  },
];

function ClutchBadge({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex h-[5.5rem] w-[5.5rem] shrink-0 flex-col items-center justify-center bg-[#1e3a44] px-2 py-3 text-center text-white [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)]">
      <span className="text-[6px] font-bold uppercase leading-tight tracking-wide">
        {title}
      </span>
      <span className="mt-1 text-[5px] font-semibold uppercase tracking-wider text-[#c9a227]">
        Clutch
      </span>
      <span className="mt-0.5 text-[5px] uppercase leading-tight text-white/70">
        {subtitle}
      </span>
    </div>
  );
}

const TestimonialSection = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const goTo = useCallback(
    (index: number) => {
      setActive((index + total) % total);
    },
    [total],
  );

  const goNext = useCallback(() => goTo(active + 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(goNext, 6000);
    return () => window.clearInterval(timer);
  }, [goNext, reduceMotion]);

  const current = testimonials[active];

  return (
    <section className="bg-white px-6 py-16 font-sans text-[#1a1a1a] antialiased md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="flex flex-col justify-between gap-10 lg:col-span-4">
            <div>
              <p className="text-sm font-medium text-[#8a8a8a] md:text-base">
                06 — What Our Clients Say
              </p>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#a3a3a3] md:text-[0.95rem]">
                We partner with founders and brands worldwide to build digital
                experiences that convert.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <ClutchBadge
                title="Top Design Company"
                subtitle="San Francisco 2023"
              />
              <ClutchBadge
                title="Top Webflow Experts"
                subtitle="San Francisco 2023"
              />
            </div>
          </aside>

          <div className="relative lg:col-span-8">
            <div className="relative min-h-[18rem] md:min-h-[22rem]">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1 top-0 select-none text-[5rem] font-bold leading-none text-black md:-left-2 md:text-[6.5rem]"
              >
                &ldquo;
              </span>

              <div className="relative pl-10 md:pl-14">
                <span
                  aria-hidden
                  className="absolute left-10 top-1 h-2 w-2 rounded-full bg-[#4B4DED] md:left-14"
                />

                <div className="overflow-hidden pt-5">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={active}
                      initial={
                        reduceMotion ? false : { opacity: 0, x: 40 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      exit={
                        reduceMotion ? undefined : { opacity: 0, x: -40 }
                      }
                      transition={{
                        duration: 0.55,
                        ease: easePremium,
                      }}
                    >
                      <blockquote className="max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-black md:text-[2rem] md:leading-[1.25] lg:text-[2.15rem]">
                        {current.quote}
                      </blockquote>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-10 border-t border-[#e8e8e8] pt-6">
                  <div className="flex items-center justify-between gap-6">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={active}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={
                          reduceMotion ? undefined : { opacity: 0, y: -8 }
                        }
                        transition={{
                          duration: 0.4,
                          ease: easePremium,
                        }}
                        className="flex items-center gap-4"
                      >
                        <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#f0f0f0]">
                          <Image
                            src={current.image}
                            alt={current.name}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-black">
                            {current.name}
                          </p>
                          <p className="text-sm text-[#9a9a9a]">
                            {current.role}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className="flex items-center gap-5">
                      <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous testimonial"
                        className="text-[#c8c8c8] transition-colors hover:text-[#1a1a1a]"
                      >
                        <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
                      </button>
                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next testimonial"
                        className="text-[#1a1a1a] transition-colors hover:text-[#4B4DED]"
                      >
                        <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
