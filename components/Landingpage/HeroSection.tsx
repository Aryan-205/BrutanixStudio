"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Activity, ArrowUpRight, Rocket, Zap } from "lucide-react";
import { easePremium } from "@/components/motion/presets";
import Navbar from "@/components/Navbar";

function useMeasure<T extends HTMLElement>() {
  const [rect, setRect] = useState({ width: 0, height: 0 });
  const ref = useRef<T>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setRect({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, rect] as const;
}

function ParallaxFloat({
  children,
  className,
  speed,
  scrollYProgress,
  reduce,
}: {
  children: React.ReactNode;
  className?: string;
  speed: number;
  scrollYProgress: MotionValue<number>;
  reduce: boolean;
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : speed]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}

const chartBarHeights = [38, 52, 44, 68, 50, 62, 70, 80];

function ScrollingBars() {
  const bars = [...chartBarHeights, ...chartBarHeights];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex h-14 w-max items-end gap-1"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-4 shrink-0 rounded-sm bg-white/20"
            style={{ height: `${h}%` }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function WidgetLineChart() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const points = [
    { x: 10, y: 48 },
    { x: 50, y: 22 },
    { x: 90, y: 52 },
    { x: 130, y: 38 },
    { x: 170, y: 30 },
  ];

  const linePath = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`)
    .join(" ");

  return (
    <svg viewBox="0 0 180 70" className="h-full w-full" aria-hidden>
      {points.map((point, index) => (
        <line
          key={`grid-${months[index]}`}
          x1={point.x}
          y1={8}
          x2={point.x}
          y2={56}
          stroke="white"
          strokeOpacity={0.12}
          strokeDasharray="2 3"
        />
      ))}

      <motion.path
        d={linePath}
        fill="none"
        stroke="#facc15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity }}
      />

      {points.map((point, index) => (
        <motion.circle
          key={`point-${months[index]}`}
          cx={point.x}
          cy={point.y}
          r={3.5}
          fill="#facc15"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 0.15 + index * 0.12,
            duration: 0.35,
            ease: easePremium,
          }}
        />
      ))}

      {months.map((month, index) => (
        <text
          key={month}
          x={points[index].x}
          y={67}
          textAnchor="middle"
          fill="white"
          fillOpacity={0.45}
          fontSize="7"
        >
          {month}
        </text>
      ))}
    </svg>
  );
}

function AnimatedInstallBar({
  height,
  index,
  position,
  highlight,
  label,
}: {
  height: number;
  index: number;
  position: "top" | "bottom";
  highlight?: boolean;
  label?: string;
}) {
  const minHeight = height * 0.72;
  const maxHeight = height * 1.28;

  const isTop = position === "top";
  const isHighlightBottom = highlight && !isTop;
  const isHighlightTop = highlight && isTop;

  return (
    <motion.div
      className={`relative w-full rounded-lg ${
        isHighlightTop
          ? "bg-[#4ade80]"
          : isHighlightBottom
            ? "bg-[#eab308]"
            : isTop
              ? "bg-[#3a3a3a]"
              : "border border-white/5 bg-[#2a2a2a]"
      }`}
      style={
        !highlight && !isTop
          ? {
              backgroundColor: "#2a2a2a",
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0 2px, transparent 2px 6px)",
            }
          : undefined
      }
      initial={{ height }}
      animate={{ height: [height, maxHeight, minHeight, height] }}
      transition={{
        duration: 3 + index * 0.08,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.1 + (isTop ? 0.15 : 0),
      }}
    >
      {!highlight && isTop && (
        <div className="absolute top-1 left-1/2 h-0.5 w-2.5 -translate-x-1/2 rounded-lg bg-white/30" />
      )}
      {label && (
        <span className="absolute -top-2.5 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-1.5 py-px text-[7px] font-bold leading-tight text-[#111]">
          {label}
        </span>
      )}
    </motion.div>
  );
}

function InstallsChart() {
  const days = [
    { label: "Mon", bottom: 13, top: 17 },
    { label: "Tue", bottom: 9, top: 21 },
    { label: "Wed", bottom: 14, top: 15 },
    { label: "Thu", bottom: 11, top: 19 },
    { label: "Fri", bottom: 18, top: 24, highlight: true },
    { label: "Sat", bottom: 10, top: 18 },
    { label: "Sun", bottom: 12, top: 16 },
  ];

  return (
    <>
      <p className="mb-3 text-xs text-white/70">Installs</p>
      <div className="flex items-end justify-between gap-1">
        {days.map((day, index) => (
          <div key={day.label} className="flex flex-1 flex-col items-center">
            <div className="flex h-[58px] w-full flex-col items-center justify-end gap-[3px]">
              <AnimatedInstallBar
                height={day.top}
                index={index}
                position="top"
                highlight={day.highlight}
                label={day.highlight ? "562" : undefined}
              />
              <AnimatedInstallBar
                height={day.bottom}
                index={index}
                position="bottom"
                highlight={day.highlight}
                label={day.highlight ? "286" : undefined}
              />
            </div>
            <span className="mt-1.5 text-[8px] font-medium text-white/35">
              {day.label}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const videoUrl =
    "https://dl.dropboxusercontent.com/scl/fi/ok2coppn7h6oszgfy30y4/showreel-home.mp4?rlkey=k7sd1apdwi6fyy3wxhk6dz87v&amp;st=am36ikxc&amp;dl=0";

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const headlineY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : -36],
  );

  const previewY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);

  const [stickyRef, stickyRect] = useMeasure<HTMLDivElement>();
  const [placeholderRef, placeholderRect] = useMeasure<HTMLDivElement>();

  const videoScrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: videoScrollProgress } = useScroll({
    target: videoScrollRef,
    offset: ["start start", "end end"],
  });

  const videoWidth = useTransform(videoScrollProgress, (progress) => {
    const currentStart = placeholderRect.width || (typeof window !== "undefined" ? Math.min(window.innerWidth - 32, 768) : 768);
    const currentEnd = stickyRect.width || (typeof window !== "undefined" ? window.innerWidth : 1024);
    return `${currentStart + progress * (currentEnd - currentStart)}px`;
  });

  const videoHeight = useTransform(videoScrollProgress, (progress) => {
    const currentStart = placeholderRect.height || (typeof window !== "undefined" ? Math.min((window.innerWidth - 32) * 9 / 16, 432) : 432);
    const currentEnd = stickyRect.height || (typeof window !== "undefined" ? window.innerHeight : 768);
    return `${currentStart + progress * (currentEnd - currentStart)}px`;
  });

  const borderRadius = useTransform(videoScrollProgress, (progress) => {
    return `${16 * (1 - progress)}px`;
  });

  const padding = useTransform(videoScrollProgress, (progress) => {
    return `${4 * (1 - progress)}px`;
  });

  const border = useTransform(videoScrollProgress, (progress) => {
    const alpha = 1 - progress;
    return `${alpha}px solid rgba(236, 236, 236, ${alpha})`;
  });

  const videoY = useTransform(videoScrollProgress, [0, 1], [reduce ? 0 : -128, 0]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[115vh] overflow-x-clip bg-[#f9f9f9] px-4 pt-5 font-sans text-[#111] selection:bg-[#ff6b2c] selection:text-white md:px-8 md:pt-6"
    >

      <div className="relative mx-auto mt-4 max-w-7xl md:mt-6">
        <ParallaxFloat
          speed={-310}
          scrollYProgress={scrollYProgress}
          reduce={!!reduce}
          className="absolute left-[8%] top-[8%] z-20 hidden sm:block"
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)]">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ef4444] text-white">
              <Activity className="h-4 w-4" strokeWidth={2.5} />
            </div>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-310}
          scrollYProgress={scrollYProgress}
          reduce={!!reduce}
          className="absolute left-[2%] top-[16%] z-20 hidden md:block"
        >
          <div className="w-44 rounded-2xl bg-[#1f1f1f] p-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                <Rocket className="h-3.5 w-3.5" color="orange" />
              </div>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                346+
              </span>
            </div>
            <ScrollingBars />
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-310}
          scrollYProgress={scrollYProgress}
          reduce={!!reduce}
          className="absolute top-[24%] left-[6%] z-30 hidden lg:block"
        >
          <div className="w-56 rounded-2xl bg-[#1f1f1f] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)] relative">
            <p className="mb-3 text-xs text-white/70">Widget control</p>
            <div className="h-20">
              <WidgetLineChart />
            </div>
            <span className="absolute right-2 bottom-2 rounded-lg bg-[#3b82f6] px-2 py-1 text-[10px] font-semibold">
              Result + 58%
            </span>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-310}
          scrollYProgress={scrollYProgress}
          reduce={!!reduce}
          className="absolute right-[3%] top-[16%] z-20 hidden md:block"
        >
          <div className="w-52 rounded-2xl bg-[#1f1f1f] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <InstallsChart />
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-310}
          scrollYProgress={scrollYProgress}
          reduce={!!reduce}
          className="absolute right-[12%] top-[26%] z-0 hidden sm:block"
        >
          <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#3b82f6] p-3 text-center text-white shadow-[0_16px_40px_rgba(59,130,246,0.45)]">
            <span className="text-2xl font-bold">+30%</span>
            <span className="mt-1 text-[9px] leading-tight text-white/90">
              Speed up your productivity
            </span>
          </div>
        </ParallaxFloat>

        <ParallaxFloat
          speed={-310}
          scrollYProgress={scrollYProgress}
          reduce={!!reduce}
          className="absolute top-[10%] right-[4%] z-20 hidden lg:flex lg:flex-col lg:items-end lg:gap-3"
        >
          <div className="inline-flex items-center justify-start gap-2 rounded-full bg-[#1f1f1f] p-1 font-medium text-white w-40">
            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full">
              <Zap className="h-4 w-4 text-[#ff6b2c]" fill="#ff6b2c" />
            </div>
            <p className="text-sm font-medium py-2 pr-2">Key features</p>
          </div>
        </ParallaxFloat>

        <motion.div
          style={{ y: headlineY }}
          className="relative z-30 mx-auto max-w-4xl pt-16 text-center md:pt-20 flex flex-col justify-center items-center"
        >
          <motion.span
            className="rounded-full bg-linear-to-tr from-[#646161] via-[#000000] to-[#646161] px-4 py-2 text-sm font-medium text-white w-fit" 
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easePremium, delay: 0.08 }}
          >
            Digital brand design agency
          </motion.span>

          <motion.h1
            className="mt-6 max-w-3xl text-[2rem] font-semibold leading-[1.1] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easePremium, delay: 0.16 }}
          >
            Design &amp; Brand Acceleration
            <br />
            for SaaS Startups
          </motion.h1>
        </motion.div>

        {/* Mobile widget strip — decorative cards are hidden as absolute floaters below sm,
            so surface a curated set in a horizontal scroll instead (no overlap). */}
        <div className="no-scrollbar -mx-4 mt-10 flex gap-3 overflow-x-auto px-4 pb-2 sm:hidden">
          <div className="w-52 shrink-0 rounded-2xl bg-[#1f1f1f] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <InstallsChart />
          </div>
          <div className="w-56 shrink-0 rounded-2xl bg-[#1f1f1f] p-4 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <p className="mb-3 text-xs text-white/70">Widget control</p>
            <div className="h-20">
              <WidgetLineChart />
            </div>
          </div>
          <div className="flex h-32 w-32 shrink-0 flex-col items-center justify-center rounded-full bg-[#3b82f6] p-3 text-center text-white shadow-[0_16px_40px_rgba(59,130,246,0.45)]">
            <span className="text-2xl font-bold">+30%</span>
            <span className="mt-1 text-[9px] leading-tight text-white/90">
              Speed up your productivity
            </span>
          </div>
          <div className="w-44 shrink-0 rounded-2xl bg-[#1f1f1f] p-3 text-white shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
                <Rocket className="h-3.5 w-3.5" color="orange" />
              </div>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold">
                346+
              </span>
            </div>
            <ScrollingBars />
          </div>
        </div>

        {/* Placeholder to measure the initial dimensions of the video container on any screen width */}
        <div
          ref={placeholderRef}
          className="pointer-events-none opacity-0 absolute w-full max-w-3xl aspect-video rounded-2xl p-1"
          style={{ visibility: "hidden" }}
        />

        {/* 2 Container Method: Scroll Container (200vh) & Sticky Container (100vh) */}
        <div
          ref={videoScrollRef}
          className="relative w-screen left-1/2 -translate-x-1/2 h-[200vh] mt-14 md:mt-16"
        >
          <motion.div
            ref={stickyRef}
            className="z-20 sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
            initial={reduce ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easePremium, delay: 0.28 }}
          >
            <motion.div
              style={{
                width: videoWidth,
                height: videoHeight,
                borderRadius,
                padding,
                border,
                y: videoY,
              }}
              className="bg-black shadow-[0_30px_80px_rgba(0,0,0,0.12)] overflow-hidden flex items-center justify-center"
            >
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
