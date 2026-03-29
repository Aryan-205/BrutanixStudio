"use client";

import React, { useCallback, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { FlipStaggerLines } from "@/components/motion/FlipStaggerLines";
import { easePremium } from "@/components/motion/presets";

const heroLines = ["Stunning", "Brands", "& Digital", "Experiences"];

const fadeQuick = { duration: 0.55, ease: easePremium };

const panelSpring = {
  type: "spring" as const,
  damping: 28,
  stiffness: 320,
  mass: 0.82,
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : -12],
  );
  const headlineOpacity = useTransform(
    scrollYProgress,
    [0, 0.65],
    [1, reduce ? 1 : 0.92],
  );

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);
    },
    [reduce],
  );

  const navClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(id);
    };

  const openContact = useCallback(() => {
    setContactOpen(true);
  }, []);

  return (
    <div
      id="hero"
      ref={heroRef}
      className="min-h-screen bg-[#F9F9F9] text-black font-sans selection:bg-black selection:text-white px-4 md:px-12 py-6 flex flex-col justify-between relative overflow-x-hidden"
    >
      <motion.nav
        className="relative z-[100] flex w-full max-w-7xl mx-auto justify-between items-center pointer-events-auto"
        initial={reduce ? false : { opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...fadeQuick, delay: reduce ? 0 : 0.05 }}
      >
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={navClick("hero")}
            className="cursor-pointer font-black italic text-xl md:text-2xl tracking-tighter leading-none border-b-[3px] md:border-b-4 border-black hover:opacity-80 transition-opacity"
          >
            Brutanix Studio
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium text-xs lg:text-sm">
          <a
            href="#hero"
            onClick={navClick("hero")}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            HOME
          </a>
          <a
            href="#work"
            onClick={navClick("work")}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            WORK
          </a>
          <a
            href="#about"
            onClick={navClick("about")}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            ABOUT
          </a>
          <button
            type="button"
            onClick={openContact}
            className="cursor-pointer bg-[#1A1A1A] text-white px-6 py-3 rounded-md hover:bg-black transition-colors uppercase tracking-wider text-xs font-bold"
          >
            Schedule a Call
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3 font-bold text-[10px] tracking-widest uppercase">
          <a
            href="#hero"
            onClick={navClick("hero")}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            Home
          </a>
          <a
            href="#work"
            onClick={navClick("work")}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            Work
          </a>
          <a
            href="#about"
            onClick={navClick("about")}
            className="cursor-pointer hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <button
            type="button"
            onClick={openContact}
            className="cursor-pointer rounded bg-[#1A1A1A] px-2 py-1.5 text-white hover:bg-black transition-colors"
          >
            Call
          </button>
        </div>
      </motion.nav>

      <main className="grow flex flex-col justify-center max-w-7xl mx-auto w-full py-12 md:py-20">
        <div className="relative flex flex-col md:block">
          <motion.div style={{ y: headlineY, opacity: headlineOpacity }}>
            <FlipStaggerLines
              lines={heroLines}
              as="h1"
              trigger="mount"
              className="text-6xl sm:text-7xl md:text-[10vw] leading-[0.85] font-bold uppercase tracking-tighter"
            />
          </motion.div>

          <motion.div
            className="mt-8 md:mt-0 md:absolute md:bottom-20 lg:bottom-32 md:right-2 max-w-xs md:text-right md:left-[60%] lg:left-[55%]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: easePremium,
              delay: reduce ? 0 : 0.45,
            }}
          >
            <p className="text-lg md:text-xl lg:text-2xl font-bold leading-tight uppercase">
              Freelancer
              <br />
              Digital Designer
              <br />
              Webflow Expert
            </p>
          </motion.div>
        </div>
      </main>

      <motion.footer
        className="w-full max-w-7xl mx-auto pb-4 md:pb-8"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: easePremium,
          delay: reduce ? 0 : 0.55,
        }}
      >
        <p className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-6 md:mb-8 text-gray-500">
          Work Seen On
        </p>
        <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-6 md:gap-8 opacity-40 grayscale">
          <span className="text-center md:text-left text-lg md:text-xl font-black">
            FLUX
          </span>
          <span className="text-center md:text-left text-lg md:text-xl font-bold italic">
            yahoo!
          </span>
          <span className="text-center md:text-left text-lg md:text-xl font-black italic underline">
            F3
          </span>
          <span className="text-center md:text-left text-lg md:text-xl font-medium tracking-tighter">
            awwwards.
          </span>
        </div>
      </motion.footer>

      <div className="pointer-events-none fixed right-0 top-0 z-[85] flex h-full max-h-dvh flex-row items-stretch">
        <motion.aside
          className="pointer-events-auto flex h-full w-[min(calc(100vw-2.75rem),22rem)] flex-col overflow-y-auto border-l border-white/10 bg-neutral-950 text-white shadow-[-12px_0_40px_rgba(0,0,0,0.35)] sm:w-[min(calc(100vw-3rem),26rem)]"
          initial={false}
          animate={{ x: contactOpen ? 0 : "115%" }}
          transition={reduce ? { duration: 0.2 } : panelSpring}
        >
          <div className="flex flex-col gap-6 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Brutanix Studio
                </p>
                <h2 className="mt-1 text-xl font-bold tracking-tight md:text-2xl">
                  Let&apos;s talk
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setContactOpen(false)}
                className="rounded-md px-2 py-1 text-xs font-bold uppercase tracking-wider text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close contact panel"
              >
                Close
              </button>
            </div>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-white/50">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/40"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-white/50">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/40"
                  placeholder="you@example.com"
                />
              </label>
              <label className="flex flex-col gap-1.5 text-xs font-bold uppercase tracking-wider text-white/50">
                Message
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="resize-y rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm font-medium normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white/40"
                  placeholder="Tell us about your project"
                />
              </label>
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-white py-3 text-xs font-bold uppercase tracking-widest text-black transition-colors hover:bg-white/90"
              >
                Send message
              </button>
            </form>
          </div>
        </motion.aside>

        <div className="pointer-events-auto flex h-full items-center justify-center">
          {!contactOpen && (
            <motion.button
              type="button"
              onClick={() => setContactOpen((o) => !o)}
              aria-expanded={contactOpen}
              className="flex w-11 h-fit shrink-0 cursor-pointer flex-col items-center justify-center gap-3 bg-black py-6 text-white md:w-12 md:py-8"
              initial={reduce ? false : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.65,
                ease: easePremium,
                delay: reduce ? 0 : 0.28,
              }}
              whileTap={{ scale: 0.98 }}
              whileHover={{ backgroundColor: "#0a0a0a" }}
            >
              <span className="font-bold text-lg md:text-xl">A</span>
              <div className="[writing-mode:vertical-lr] rotate-180 border-t border-white/20 pt-3 text-[8px] font-bold uppercase tracking-[0.2em] md:pt-4 md:text-[10px]">
                Contact
              </div>
            </motion.button>
          )}
        </div>
      </div>

      {contactOpen ? (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-[75] cursor-pointer bg-black/40 backdrop-blur-[2px] md:bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: easePremium }}
          onClick={() => setContactOpen(false)}
        />
      ) : null}
    </div>
  );
};

export default HeroSection;
