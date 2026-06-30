"use client";

import React, { useCallback, useRef } from "react";
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import {
  Activity,
  ArrowUpRight,
  Rocket,
  Zap,
} from "lucide-react";
import { easePremium } from "@/components/motion/presets";

function ParallaxFloat({
  children,
  className,
  speed,
  scrollYProgress,
}: {
  children: React.ReactNode;
  className?: string;
  speed: number;
  scrollYProgress: MotionValue<number>;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, speed]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

function InfinityLogo() {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a1a1a] text-white">
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
        <path
          fill="currentColor"
          d="M8.2 7.8c1.9-1.9 5-1.9 6.9 0 1 1 1.5 2.3 1.5 3.6s-.5 2.6-1.5 3.6c-1.9 1.9-5 1.9-6.9 0-.5-.5-.9-1.1-1.2-1.7-.3.6-.7 1.2-1.2 1.7-1.9 1.9-5 1.9-6.9 0C2.4 14.7 2 13.4 2 12s.4-2.7 1.3-3.8c1.9-1.9 5-1.9 6.9 0 .5.5.9 1.1 1.2 1.7.3-.6.7-1.2 1.2-1.7Z"
        />
      </svg>
    </div>
  );
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoUrl = "https://dl.dropboxusercontent.com/scl/fi/ok2coppn7h6oszgfy30y4/showreel-home.mp4?rlkey=k7sd1apdwi6fyy3wxhk6dz87v&amp;st=am36ikxc&amp;dl=0";

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  const previewY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 400],
  );

  const previewScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 2],
  );

  const previewZIndex = useTransform(
    scrollYProgress,
    [0, 0.25, 0.85],
    [20, 35, 60],
  );

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", `#${id}`);
    },
    [],
  );

  const navClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(id);
    };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[210vh] overflow-x-clip bg-white px-4 pb-10 pt-5 font-sans text-[#111] selection:bg-[#ff6b2c] selection:text-white md:px-8 md:pb-14 md:pt-6"
    >
      <motion.nav
        className="relative z-50 mx-auto flex w-full max-w-4xl items-center justify-between gap-4 rounded-full border border-[#ececec] bg-white/90 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md md:px-4"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: easePremium }}
      >
        <InfinityLogo />

        <div className="hidden items-center gap-6 text-sm font-medium text-[#444] md:flex">
          <a href="#work" onClick={navClick("work")} className="hover:text-black">
            Cases
          </a>
          <a
            href="#hero"
            onClick={navClick("hero")}
            className="hover:text-black"
          >
            Service
          </a>
          <a href="#work" onClick={navClick("work")} className="hover:text-black">
            Blog
          </a>
          <a
            href="#about"
            onClick={navClick("about")}
            className="hover:text-black"
          >
            About us
          </a>
        </div>

        <button
          type="button"
          onClick={() => scrollToSection("about")}
          className="rounded-full bg-[#ff6b2c] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#f35f1f] md:px-5"
        >
          Contact
        </button>
      </motion.nav>

      <div className="relative mx-auto mt-10 max-w-7xl md:mt-14">
        <ParallaxFloat
          speed={-110}
          scrollYProgress={scrollYProgress}
          className="absolute left-[4%] top-[8%] z-20 hidden sm:block"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ef4444] text-white">
              <Activity className="h-4 w-4" strokeWidth={2.5} />
            </div>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-150}
          scrollYProgress={scrollYProgress}
          className="absolute left-[2%] top-[34%] z-20 hidden md:block"
        >
          <div className="w-44 rounded-2xl bg-[#1f1f1f] p-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                <Rocket className="h-3.5 w-3.5" />
              </div>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                346+
              </span>
            </div>
            <div className="flex h-14 items-end gap-1">
              {[38, 52, 44, 68, 50].map((h, i) => (
                <div
                  key={i}
                  className="w-4 rounded-sm bg-white/20"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-190}
          scrollYProgress={scrollYProgress}
          className="absolute bottom-[30%] left-[1%] z-20 hidden lg:block"
        >
          <div className="w-56 rounded-2xl bg-[#1f1f1f] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-xs text-white/70">Widget control</p>
            <div className="relative h-20">
              <svg viewBox="0 0 180 70" className="h-full w-full" aria-hidden>
                <path
                  d="M0 50 C30 20 50 58 80 35 S130 10 180 28"
                  fill="none"
                  stroke="#facc15"
                  strokeWidth="3"
                />
              </svg>
              <span className="absolute right-0 top-0 rounded-full bg-[#3b82f6] px-2 py-1 text-[10px] font-semibold">
                Result + 58%
              </span>
            </div>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-130}
          scrollYProgress={scrollYProgress}
          className="absolute right-[3%] top-[24%] z-20 hidden md:block"
        >
          <div className="w-48 rounded-2xl bg-[#1f1f1f] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-xs text-white/70">Installs</p>
            <div className="flex h-16 items-end gap-1.5">
              {[30, 42, 36, 55, 48, 62, 40].map((h, i) => (
                <div
                  key={i}
                  className={`w-3.5 rounded-sm ${
                    i === 5
                      ? "bg-[#22c55e]"
                      : i === 6
                        ? "bg-[#eab308]"
                        : "bg-white/20"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex gap-3 text-[10px] font-semibold">
              <span className="text-[#22c55e]">562</span>
              <span className="text-[#eab308]">286</span>
            </div>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-170}
          scrollYProgress={scrollYProgress}
          className="absolute right-[2%] top-[46%] z-20 hidden sm:block"
        >
          <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-[#3b82f6] p-3 text-center text-white shadow-[0_16px_40px_rgba(59,130,246,0.45)]">
            <span className="text-2xl font-bold">+30%</span>
            <span className="mt-1 text-[9px] leading-tight text-white/90">
              Speed up your productivity
            </span>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-210}
          scrollYProgress={scrollYProgress}
          className="absolute bottom-[24%] right-[4%] z-20 hidden lg:flex lg:flex-col lg:items-end lg:gap-3"
        >
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-[#7c5cff] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(124,92,255,0.35)]"
          >
            Book a call
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1f1f1f] px-3 py-1.5 text-[10px] font-medium text-white">
            <Zap className="h-3 w-3 text-[#ff6b2c]" />
            Key features
          </div>
        </ParallaxFloat>

        <motion.div
          style={{ y: headlineY }}
          className="relative z-30 mx-auto max-w-4xl pt-16 text-center md:pt-20"
        >
          <motion.span
            className="inline-block rounded-full bg-[#1f1f1f] px-4 py-1.5 text-xs font-medium text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easePremium, delay: 0.08 }}
          >
            Digital brand design agency
          </motion.span>

          <motion.h1
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.16 }}
          >
            Design &amp; Brand Acceleration
            <br />
            for SaaS Startups
          </motion.h1>
        </motion.div>

        <motion.div
          className="h-screen sticky top-0 mt-14 w-full md:mt-16 flex items-center justify-center bg-red-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easePremium, delay: 0.28 }}
        >
          <motion.div
            className="overflow-hidden border-2 border-black/20 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.12)] p-1 rounded-2xl"
          >
            <motion.video
              ref={videoRef}
              src={videoUrl}
              preload="auto"
              autoPlay
              muted
              loop
              playsInline
              className="aspect-video w-full object-cover rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
