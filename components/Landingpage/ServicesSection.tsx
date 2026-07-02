"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerChildren } from "@/components/motion/StaggerChildren";
import { easePremium, viewportDefault } from "@/components/motion/presets";

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

const DEV_VIEWBOX = { w: 400, h: 320 };
const DEV_ORIGIN_Y = 340;

const devOrbitRadii = [85, 125, 165, 205] as const;

function devArcPath(radius: number) {
  return `M ${radius} ${DEV_ORIGIN_Y} A ${radius} ${radius} 0 0 1 0 ${DEV_ORIGIN_Y - radius}`;
}

type DevOrbitIconProps = {
  pathId: string;
  bg: string;
  size: number;
  dur: string;
  begin?: string;
  keyPoints: string;
  entranceDelay: number;
  staticX: number;
  staticY: number;
  border?: boolean;
  children: React.ReactNode;
};

function DevOrbitIcon({
  pathId,
  bg,
  size,
  dur,
  begin = "0s",
  keyPoints,
  entranceDelay,
  staticX,
  staticY,
  border,
  children,
}: DevOrbitIconProps) {
  const reduce = useReducedMotion();
  const half = size / 2;

  return (
    <g transform={reduce ? `translate(${staticX}, ${staticY})` : undefined}>
      {!reduce && (
        <animateMotion
          dur={dur}
          repeatCount="indefinite"
          begin={begin}
          keyPoints={keyPoints}
          keyTimes="0;0.5;1"
          calcMode="spline"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
        >
          <mpath href={`#${pathId}`} />
        </animateMotion>
      )}
      <foreignObject x={-half} y={-half} width={size} height={size}>
        <motion.div
          className={`flex h-full w-full items-center justify-center rounded-2xl shadow-lg shadow-black/10 ${
            border ? "border border-black/8" : ""
          }`}
          style={{ backgroundColor: bg }}
          initial={{ opacity: 0, scale: 0.4 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportDefault}
          transition={{ duration: 0.55, delay: entranceDelay, ease: easePremium }}
        >
          {children}
        </motion.div>
      </foreignObject>
    </g>
  );
}

function DevelopmentVisual() {
  const reduce = useReducedMotion();

  const icons: DevOrbitIconProps[] = [
    {
      pathId: "dev-orbit-205",
      bg: "#8932ff",
      size: 56,
      dur: "9s",
      begin: "0s",
      keyPoints: "0.58;0.68;0.58",
      staticX: 98,
      staticY: 118,
      entranceDelay: 0.15,
      children: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white" aria-hidden>
          <path d="M4 4h7.5L20 20h-6.5L9.5 10.5 4 20V4z" />
        </svg>
      ),
    },
    {
      pathId: "dev-orbit-165",
      bg: "#4ade80",
      size: 56,
      dur: "8s",
      begin: "0.4s",
      keyPoints: "0.34;0.44;0.34",
      staticX: 288,
      staticY: 178,
      entranceDelay: 0.25,
      children: (
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="white" strokeWidth="1.2" aria-hidden>
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="2" fill="white" stroke="none" />
        </svg>
      ),
    },
    {
      pathId: "dev-orbit-85",
      bg: "#2d2d2d",
      size: 56,
      dur: "7s",
      begin: "0.2s",
      keyPoints: "0.04;0.14;0.04",
      staticX: 52,
      staticY: 268,
      entranceDelay: 0.35,
      children: (
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="white" aria-hidden>
          <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" />
          <path d="M4.5 12C4.5 7.86 7.86 4.5 12 4.5c2.5 0 4.7 1.2 6 3L12 18 6 7.5C7.3 5.7 9.5 4.5 12 4.5" opacity="0.9" />
        </svg>
      ),
    },
    {
      pathId: "dev-orbit-125",
      bg: "#ffffff",
      size: 56,
      dur: "7.5s",
      begin: "0.6s",
      keyPoints: "0.2;0.3;0.2",
      staticX: 178,
      staticY: 252,
      entranceDelay: 0.45,
      border: true,
      children: <span className="text-sm font-bold text-black">JS</span>,
    },
    {
      pathId: "dev-orbit-165",
      bg: "#ff6b2c",
      size: 48,
      dur: "6.5s",
      begin: "0.8s",
      keyPoints: "0.1;0.2;0.1",
      staticX: 312,
      staticY: 242,
      entranceDelay: 0.55,
      children: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="1.5" aria-hidden>
          <path d="M4 14a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8H8a4 4 0 0 1-4-4z" />
          <path d="M12 6v2M12 16v2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative h-full min-h-72 w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${DEV_VIEWBOX.w} ${DEV_VIEWBOX.h}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMax meet"
        aria-hidden
      >
        <defs>
          {devOrbitRadii.map((r) => (
            <path key={r} id={`dev-orbit-${r}`} d={devArcPath(r)} />
          ))}
        </defs>

        {/* Orbital arc lines */}
        {devOrbitRadii.map((r, i) => (
          <g key={r}>
            <motion.path
              d={devArcPath(r)}
              fill="none"
              stroke="#e8e8e8"
              strokeWidth="1.25"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewportDefault}
              transition={{
                duration: 1.1,
                delay: reduce ? 0 : i * 0.1,
                ease: easePremium,
              }}
            />

            {/* Traveling pulse along each arc */}
            {!reduce && (
              <>
                <circle r="2.5" fill="#d4d4d4" opacity="0.5">
                  <animateMotion
                    dur={`${4.5 + i * 0.7}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                  >
                    <mpath href={`#dev-orbit-${r}`} />
                  </animateMotion>
                </circle>
                <motion.path
                  d={devArcPath(r)}
                  fill="none"
                  stroke="#d0d0d0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 220"
                  initial={{ strokeDashoffset: 0 }}
                  animate={{ strokeDashoffset: -226 }}
                  transition={{
                    duration: 3.5 + i * 0.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.4,
                  }}
                  opacity="0.7"
                />
              </>
            )}
          </g>
        ))}

        {/* Tech icons riding the orbital paths */}
        {icons.map((icon, i) => (
          <DevOrbitIcon key={`${icon.pathId}-${i}`} {...icon} />
        ))}
      </svg>
    </div>
  );
}

function PlatformsVisual() {
  const reduce = useReducedMotion();
  const widget = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: reduce ? 0 : i * 0.12, ease: easePremium },
    }),
  };

  return (
    <div className="flex h-full min-h-72 w-full items-end justify-center px-3 pb-3">
      <div className="grid w-full max-w-[400px] grid-cols-2 gap-3">
        {/* Daily goal */}
        <motion.div
          custom={0}
          variants={widget}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          className="col-span-1 rounded-2xl border border-black/6 bg-[#f5f5f5] p-4"
        >
          <p className="text-xs font-semibold text-black/80">Daily goal</p>
          <p className="text-[11px] text-black/40">11/15 tasks</p>
          <div className="mt-3 flex items-center gap-2">
            <motion.span
              className="rounded-full bg-[#8932ff] px-3 py-1.5 text-[10px] font-semibold text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportDefault}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.35, ease: easePremium }}
            >
              Edit Goal
            </motion.span>
            <div className="relative ml-auto h-14 w-14">
              <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                <circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#e0e0e0"
                  strokeWidth="3"
                />
                <motion.circle
                  cx="18"
                  cy="18"
                  r="14"
                  fill="none"
                  stroke="#ff6b2c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 88" }}
                  whileInView={{ strokeDasharray: "66 22" }}
                  viewport={viewportDefault}
                  transition={{ duration: 1.2, delay: reduce ? 0 : 0.4, ease: easePremium }}
                />
              </svg>
              <motion.span
                className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-black/70"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportDefault}
                transition={{ duration: 0.4, delay: reduce ? 0 : 1.1 }}
              >
                75%
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div
          custom={1}
          variants={widget}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          className="col-span-1 rounded-2xl border border-black/6 bg-[#f5f5f5] p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] text-black/30">‹</span>
            <p className="text-xs font-semibold text-black/80">Schedule</p>
            <span className="text-[11px] text-black/30">›</span>
          </div>
          <div className="mt-2 grid grid-cols-7 gap-0.5 text-center">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className="text-[8px] text-black/30">
                {d}
              </span>
            ))}
            {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => {
              const inRange = day >= 4 && day <= 8;
              const isEdge = day === 4 || day === 8;
              return (
                <span
                  key={day}
                  className={`relative flex h-5 items-center justify-center text-[9px] ${
                    inRange ? "text-black/70" : "text-black/35"
                  }`}
                >
                  {inRange && (
                    <motion.span
                      className={`absolute inset-y-0 bg-black/8 ${
                        day === 4
                          ? "left-1/2 right-0 rounded-l-full"
                          : day === 8
                            ? "left-0 right-1/2 rounded-r-full"
                            : "inset-x-0"
                      }`}
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={viewportDefault}
                      transition={{
                        duration: 0.35,
                        delay: reduce ? 0 : 0.5 + (day - 4) * 0.08,
                        ease: easePremium,
                      }}
                      style={{ transformOrigin: day === 4 ? "right" : day === 8 ? "left" : "center" }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isEdge
                        ? "flex h-5 w-5 items-center justify-center rounded-full bg-white text-[9px] font-semibold shadow-sm"
                        : ""
                    }`}
                  >
                    {day}
                  </span>
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Line chart */}
        <motion.div
          custom={2}
          variants={widget}
          initial="hidden"
          whileInView="visible"
          viewport={viewportDefault}
          className="col-span-2 rounded-2xl border border-black/6 bg-[#f5f5f5] p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-semibold text-black/80">Activity</p>
              <p className="text-[10px] text-black/35">Jan – Apr</p>
            </div>
            <motion.div
              className="rounded-md bg-black px-2 py-1 text-[9px] font-medium text-white"
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportDefault}
              transition={{ duration: 0.45, delay: reduce ? 0 : 1.2, ease: easePremium }}
            >
              65 BPM
            </motion.div>
          </div>
          <svg viewBox="0 0 200 50" className="mt-3 h-16 w-full">
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1="0"
                y1={10 + i * 18}
                x2="200"
                y2={10 + i * 18}
                stroke="#ddd"
                strokeWidth="0.5"
                strokeDasharray="3 3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportDefault}
                transition={{ duration: 0.3, delay: reduce ? 0 : 0.6 + i * 0.08 }}
              />
            ))}
            <motion.path
              d="M 0 35 Q 30 30 50 22 T 100 28 T 150 15 T 200 20"
              fill="none"
              stroke="#ff6b2c"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={viewportDefault}
              transition={{ duration: 1.4, delay: reduce ? 0 : 0.7, ease: easePremium }}
            />
            <motion.circle
              cx="50"
              cy="22"
              r="3.5"
              fill="#ff6b2c"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={viewportDefault}
              transition={{ duration: 0.35, delay: reduce ? 0 : 1.5, ease: easePremium }}
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

function WebsiteVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="flex h-full min-h-72 w-full items-end justify-center px-3 pb-0">
      <motion.div
        className="w-full max-w-[380px] overflow-hidden rounded-t-3xl border border-black/8 border-b-0 bg-white shadow-lg shadow-black/8"
        initial={{ opacity: 0, y: 48, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={viewportDefault}
        transition={{ duration: 0.75, ease: easePremium }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#fafafa] px-4 py-3">
          <div className="flex gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map((color, i) => (
              <motion.span
                key={color}
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportDefault}
                transition={{ duration: 0.3, delay: reduce ? 0 : 0.3 + i * 0.06, ease: easePremium }}
              />
            ))}
          </div>
          <motion.div
            className="mx-auto h-4 w-36 rounded-full bg-black/5"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 144, opacity: 1 }}
            viewport={viewportDefault}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.45, ease: easePremium }}
          />
        </div>

        {/* Mockup content */}
        <div className="bg-[#f8f8f8] px-5 pb-6 pt-4">
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportDefault}
            transition={{ duration: 0.4, delay: reduce ? 0 : 0.5 }}
          >
            <div className="h-3 w-12 rounded bg-black/10" />
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 w-8 rounded bg-black/8" />
              ))}
            </div>
          </motion.div>

          <motion.p
            className="mt-5 text-center text-xs leading-relaxed text-black/60"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportDefault}
            transition={{ duration: 0.5, delay: reduce ? 0 : 0.6, ease: easePremium }}
          >
            Meet all-in-one platform to{" "}
            <motion.span
              className="rounded bg-[#fef08a] px-1.5 py-0.5 font-semibold text-black/80"
              initial={{ backgroundColor: "rgba(254,240,138,0)" }}
              whileInView={{ backgroundColor: "rgba(254,240,138,1)" }}
              viewport={viewportDefault}
              transition={{ duration: 0.4, delay: reduce ? 0 : 0.9 }}
            >
              connect
            </motion.span>
          </motion.p>

          <motion.div
            className="mx-auto mt-3 h-7 w-28 rounded-full bg-black"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={viewportDefault}
            transition={{ duration: 0.45, delay: reduce ? 0 : 0.75, ease: easePremium }}
            style={{ transformOrigin: "center" }}
          />

          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Remote", "Control", "Storage"].map((label, i) => (
              <motion.div
                key={label}
                className="rounded-xl border border-black/5 bg-white p-2.5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportDefault}
                transition={{ duration: 0.45, delay: reduce ? 0 : 0.85 + i * 0.1, ease: easePremium }}
              >
                <p className="text-[9px] font-medium text-black/50">{label}</p>
                <motion.div
                  className="mt-2 h-10 rounded-md bg-black/4"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={viewportDefault}
                  transition={{ duration: 0.4, delay: reduce ? 0 : 1 + i * 0.1, ease: easePremium }}
                  style={{ transformOrigin: "bottom" }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MarketingVisual() {
  const reduce = useReducedMotion();

  const ringSegments = [
    { id: "mkt-grad-1", dasharray: "130 260", dashoffset: 0, delay: 0.2 },
    { id: "mkt-grad-2", dasharray: "90 300", dashoffset: -130, delay: 0.45 },
    { id: "mkt-grad-3", dasharray: "100 290", dashoffset: -220, delay: 0.7 },
  ];

  return (
    <div className="relative flex h-full min-h-72 w-full items-center justify-center py-4">
      <motion.svg
        viewBox="0 0 220 220"
        className="h-64 w-64 md:h-72 md:w-72"
        aria-hidden
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={viewportDefault}
        animate={reduce ? undefined : { rotate: [0, 3, 0, -3, 0] }}
        transition={{
          opacity: { duration: 0.7, ease: easePremium },
          scale: { duration: 0.7, ease: easePremium },
          rotate: reduce
            ? { duration: 0.7, ease: easePremium }
            : { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
      >
        {/* Outer faint rings */}
        {[70, 58, 46].map((r, i) => (
          <motion.circle
            key={r}
            cx="110"
            cy="110"
            r={r}
            fill="none"
            stroke="#ebebeb"
            strokeWidth="0.75"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportDefault}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.08, ease: easePremium }}
            style={{ transformOrigin: "110px 110px" }}
          />
        ))}

        {/* Outer arc with nodes */}
        <motion.circle
          cx="110"
          cy="110"
          r="82"
          fill="none"
          stroke="#d4d4d4"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={viewportDefault}
          transition={{ duration: 1, delay: reduce ? 0 : 0.15, ease: easePremium }}
        />
        {[
          { x: 110, y: 28 },
          { x: 180, y: 155 },
          { x: 40, y: 155 },
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="white"
            stroke="#d4d4d4"
            strokeWidth="1.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportDefault}
            transition={{ duration: 0.35, delay: reduce ? 0 : 0.6 + i * 0.15, ease: easePremium }}
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

        {ringSegments.map((seg) => (
          <motion.circle
            key={seg.id}
            cx="110"
            cy="110"
            r="62"
            fill="none"
            stroke={`url(#${seg.id})`}
            strokeWidth="10"
            strokeLinecap="round"
            transform="rotate(-30 110 110)"
            initial={{ strokeDasharray: "0 390", strokeDashoffset: seg.dashoffset }}
            whileInView={{
              strokeDasharray: `${seg.dasharray.split(" ")[0]} ${seg.dasharray.split(" ")[1]}`,
              strokeDashoffset: seg.dashoffset,
            }}
            viewport={viewportDefault}
            transition={{ duration: 1.1, delay: reduce ? 0 : seg.delay, ease: easePremium }}
          />
        ))}

        {/* Labels */}
        {[
          { x: 110, y: 14, label: "Audience", rotate: 0 },
          { x: 215, y: 168, label: "Campaign", rotate: 0 },
          { x: 25, y: 168, label: "Growth", rotate: 0 },
        ].map((item, i) => (
          <motion.text
            key={item.label}
            x={item.x}
            y={item.y}
            textAnchor="middle"
            fill="#a3a3a3"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            transform={item.rotate ? `rotate(${item.rotate} ${item.x} ${item.y})` : undefined}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportDefault}
            transition={{ duration: 0.4, delay: reduce ? 0 : 1.1 + i * 0.12 }}
          >
            {item.label}
          </motion.text>
        ))}
      </motion.svg>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1a1a1a] px-5 py-2"
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={viewportDefault}
        transition={{ duration: 0.5, delay: reduce ? 0 : 0.9, ease: easePremium }}
      >
        <span className="text-xs font-semibold text-white">Marketing</span>
      </motion.div>
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
  const reduce = useReducedMotion();
  const [animCycle, setAnimCycle] = useState(0);

  return (
    <motion.article
      className="group flex min-h-[520px] w-full cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-black/6 bg-white shadow-sm md:min-h-[560px]"
      whileHover={reduce ? undefined : { y: -3, boxShadow: "0 1px 10px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.35, ease: easePremium }}
      onMouseEnter={() => {
        if (!reduce) setAnimCycle((c) => c + 1);
      }}
    >
      <div className="px-8 pb-4 pt-10 text-center md:px-10 md:pt-12">
        <h3 className="text-2xl font-semibold tracking-tight text-black md:text-[3rem]">
          {service.title}
        </h3>
        <p className="mx-auto mt-4 max-w-[400px] text-sm leading-relaxed text-black/50 md:text-lg">
          {service.description}
        </p>
      </div>

      <div className="relative mt-auto flex flex-1 items-end overflow-hidden">
        <CardVisual key={animCycle} type={service.visual} />
      </div>
    </motion.article>
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
