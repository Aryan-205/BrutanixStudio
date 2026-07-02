"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";

type ServiceVisual = "development" | "platforms" | "website" | "marketing";

type Service = {
  title: string;
  description: string;
  visual: ServiceVisual;
};

const services: Service[] = [
  {
    title: "Development",
    description:
      "We can take care of your product's implementation, assuring the most efficient usage of time & resources in every decision & each line of code while maintaining seamless operation.",
    visual: "development",
  },
  {
    title: "Platforms",
    description:
      "Experience meets engineering to deliver a product your customers actually want and need.",
    visual: "platforms",
  },
  {
    title: "Website",
    description:
      "We don't just design websites. We build reliable sales & marketing tools that drive predictably good metrics.",
    visual: "website",
  },
  {
    title: "Marketing",
    description:
      "We establish comprehensive growth hypotheses, validate them through data, and execute campaigns in the most creative ways.",
    visual: "marketing",
  },
];

function ArcBackground() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 320 280"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden
    >
      {[60, 100, 140, 180, 220].map((r) => (
        <circle
          key={r}
          cx="0"
          cy="300"
          r={r}
          fill="none"
          stroke="#e5e5e5"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function DevIcon({
  bg,
  children,
  className,
}: {
  bg: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <div
      className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg shadow-black/10 ${className}`}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

function DevelopmentVisual() {
  return (
    <div className="relative h-full min-h-64 w-full overflow-hidden">
      <ArcBackground />
      <div className="relative h-full w-full">
        {/* Webflow */}
        <DevIcon bg="#8932ff" className="left-[12%] top-[8%] z-20">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
            <path d="M17.5 4L12 20L8.5 10.5L4 20L2 4H6.5L9 14L12.5 4H17.5Z" />
          </svg>
        </DevIcon>

        {/* React */}
        <DevIcon bg="#4ade80" className="right-[10%] top-[22%] z-30">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="white" strokeWidth="1.2">
            <ellipse cx="12" cy="12" rx="9" ry="3.5" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
            <circle cx="12" cy="12" r="2" fill="white" stroke="none" />
          </svg>
        </DevIcon>

        {/* WordPress */}
        <DevIcon bg="#2d2d2d" className="left-[8%] bottom-[18%] z-10">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white">
            <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" />
            <path d="M4.5 12C4.5 7.86 7.86 4.5 12 4.5C14.5 4.5 16.7 5.7 18 7.5L12 18L6 7.5C7.3 5.7 9.5 4.5 12 4.5" opacity="0.9" />
          </svg>
        </DevIcon>

        {/* JavaScript */}
        <DevIcon bg="#ffffff" className="left-[38%] bottom-[10%] z-40 border border-black/8">
          <span className="text-sm font-bold text-black">JS</span>
        </DevIcon>

        {/* API */}
        <DevIcon bg="#ff6b2c" className="right-[12%] bottom-[14%] z-20">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.5">
            <path d="M4 14a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4z" />
            <path d="M12 6v2M12 16v2M8 4l1.5 1.5M14.5 18.5L16 20" strokeLinecap="round" />
          </svg>
        </DevIcon>
      </div>
    </div>
  );
}

function PlatformsVisual() {
  return (
    <div className="flex h-full min-h-56 w-full items-end justify-center px-4 pb-2">
      <div className="grid w-full max-w-[280px] grid-cols-2 gap-2">
        {/* Daily goal */}
        <div className="col-span-1 rounded-2xl border border-black/6 bg-[#f5f5f5] p-3">
          <p className="text-[10px] font-semibold text-black/80">Daily goal</p>
          <p className="text-[9px] text-black/40">11/15 tasks</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-full bg-[#8932ff] px-2.5 py-1 text-[8px] font-semibold text-white">
              Edit Goal
            </span>
            <div className="relative ml-auto h-10 w-10">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#ff6b2c"
                  strokeWidth="3"
                  strokeDasharray="66 22"
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-black/70">
                75%
              </span>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="col-span-1 rounded-2xl border border-black/6 bg-[#f5f5f5] p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-black/30">‹</span>
            <p className="text-[10px] font-semibold text-black/80">Schedule</p>
            <span className="text-[9px] text-black/30">›</span>
          </div>
          <div className="mt-1.5 grid grid-cols-7 gap-0.5 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className="text-[6px] text-black/30">
                {d}
              </span>
            ))}
            {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
              const inRange = day >= 4 && day <= 8;
              const isEdge = day === 4 || day === 8;
              return (
                <span
                  key={day}
                  className={`relative flex h-3.5 items-center justify-center text-[7px] ${
                    inRange ? "text-black/70" : "text-black/35"
                  }`}
                >
                  {inRange && (
                    <span
                      className={`absolute inset-y-0 bg-black/8 ${
                        day === 4
                          ? "left-1/2 right-0 rounded-l-full"
                          : day === 8
                            ? "left-0 right-1/2 rounded-r-full"
                            : "inset-x-0"
                      }`}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isEdge
                        ? "flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white text-[7px] font-semibold shadow-sm"
                        : ""
                    }`}
                  >
                    {day}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Line chart */}
        <div className="col-span-2 rounded-2xl border border-black/6 bg-[#f5f5f5] p-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] font-semibold text-black/80">
                Activity
              </p>
              <p className="text-[8px] text-black/35">Jan – Apr</p>
            </div>
            <div className="rounded-md bg-black px-1.5 py-0.5 text-[7px] font-medium text-white">
              65 BPM
            </div>
          </div>
          <svg viewBox="0 0 200 50" className="mt-2 h-12 w-full">
            {[0, 1, 2].map((i) => (
              <line
                key={i}
                x1="0"
                y1={10 + i * 18}
                x2="200"
                y2={10 + i * 18}
                stroke="#ddd"
                strokeWidth="0.5"
                strokeDasharray="3 3"
              />
            ))}
            <path
              d="M 0 35 Q 30 30 50 22 T 100 28 T 150 15 T 200 20"
              fill="none"
              stroke="#ff6b2c"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="50" cy="22" r="3" fill="#ff6b2c" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="flex h-full min-h-56 w-full items-end justify-center px-6 pb-0">
      <div className="w-full max-w-[260px] overflow-hidden rounded-t-2xl border border-black/8 border-b-0 bg-white shadow-lg shadow-black/8">
        {/* Browser chrome */}
        <div className="flex items-center gap-1 border-b border-black/5 bg-[#fafafa] px-3 py-2">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="mx-auto h-3 w-24 rounded-full bg-black/5" />
        </div>

        {/* Mockup content */}
        <div className="bg-[#f8f8f8] px-4 pb-4 pt-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-8 rounded bg-black/10" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1 w-6 rounded bg-black/8" />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-[9px] leading-relaxed text-black/60">
            Meet all-in-one platform to{" "}
            <span className="rounded bg-[#fef08a] px-1 font-semibold text-black/80">
              connect
            </span>
          </p>

          <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-black" />

          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {["Remote", "Control", "Storage"].map((label) => (
              <div
                key={label}
                className="rounded-lg border border-black/5 bg-white p-1.5"
              >
                <p className="text-[6px] font-medium text-black/50">{label}</p>
                <div className="mt-1 h-6 rounded bg-black/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="relative flex h-full min-h-56 w-full items-center justify-center">
      <svg viewBox="0 0 220 220" className="h-52 w-52" aria-hidden>
        {/* Outer faint rings */}
        {[70, 58, 46].map((r) => (
          <circle
            key={r}
            cx="110"
            cy="110"
            r={r}
            fill="none"
            stroke="#ebebeb"
            strokeWidth="0.75"
          />
        ))}

        {/* Outer arc with nodes */}
        <circle
          cx="110"
          cy="110"
          r="82"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
        />
        {[
          { x: 110, y: 28 },
          { x: 180, y: 155 },
          { x: 40, y: 155 },
        ].map((pos, i) => (
          <circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="white"
            stroke="#d4d4d4"
            strokeWidth="1.5"
          />
        ))}

        {/* Gradient ring segments */}
        <defs>
          <linearGradient id="mkt-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b2c" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
          <linearGradient id="mkt-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ff6b2c" />
          </linearGradient>
          <linearGradient id="mkt-grad-3" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8932ff" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>

        <circle
          cx="110"
          cy="110"
          r="62"
          fill="none"
          stroke="url(#mkt-grad-1)"
          strokeWidth="10"
          strokeDasharray="130 260"
          strokeLinecap="round"
          transform="rotate(-30 110 110)"
        />
        <circle
          cx="110"
          cy="110"
          r="62"
          fill="none"
          stroke="url(#mkt-grad-2)"
          strokeWidth="10"
          strokeDasharray="90 300"
          strokeDashoffset="-130"
          strokeLinecap="round"
          transform="rotate(-30 110 110)"
        />
        <circle
          cx="110"
          cy="110"
          r="62"
          fill="none"
          stroke="url(#mkt-grad-3)"
          strokeWidth="10"
          strokeDasharray="100 290"
          strokeDashoffset="-220"
          strokeLinecap="round"
          transform="rotate(-30 110 110)"
        />

        {/* Labels */}
        <text
          x="110"
          y="14"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
        >
          Audience
        </text>
        <text
          x="195"
          y="168"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          transform="rotate(55 195 168)"
        >
          Campaign
        </text>
        <text
          x="25"
          y="168"
          textAnchor="middle"
          fill="#a3a3a3"
          fontSize="9"
          fontFamily="system-ui, sans-serif"
          transform="rotate(-55 25 168)"
        >
          Growth
        </text>
      </svg>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a1a1a] px-4 py-1.5">
        <span className="text-[10px] font-semibold text-white">Marketing</span>
      </div>
    </div>
  );
}

function CardVisual({ type }: { type: ServiceVisual }) {
  switch (type) {
    case "development":
      return <DevelopmentVisual />;
    case "platforms":
      return <PlatformsVisual />;
    case "website":
      return <WebsiteVisual />;
    case "marketing":
      return <MarketingVisual />;
  }
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex min-h-[520px] w-full flex-col overflow-hidden rounded-[2.5rem] border border-black/6 bg-white shadow-sm md:min-h-[560px]">
      <div className="px-8 pb-4 pt-10 text-center md:px-10 md:pt-12">
        <h3 className="text-2xl font-semibold tracking-tight text-black md:text-[1.75rem]">
          {service.title}
        </h3>
        <p className="mx-auto mt-4 max-w-[300px] text-sm leading-relaxed text-black/50 md:text-[0.9rem]">
          {service.description}
        </p>
      </div>

      <div className="relative mt-auto flex flex-1 items-end">
        <CardVisual type={service.visual} />
      </div>
    </article>
  );
}

const ServicesSection = () => {
  return (
    <section
      id="services-offerings"
      className="relative overflow-hidden bg-[#f9f9f9] px-6 py-20 font-sans text-black md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight md:text-[6rem]">
            Services
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-black/50 md:text-base">
            Whether you need a full-scale partner to define the roadmap or a
            vendor for particular tasks, we&apos;ve got you covered with
            marketing and development under one roof.
          </p>
        </Reveal>

        <StaggerChildren
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:gap-6"
          staggerDelay={0.08}
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default ServicesSection;
