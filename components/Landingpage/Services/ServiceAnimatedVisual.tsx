"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Calendar,
  Check,
  Clock,
  Eye,
  Film,
  Filter,
  Globe,
  Handshake,
  Heart,
  Mail,
  Megaphone,
  MessageCircle,
  Mic,
  MoreVertical,
  Rocket,
  Settings,
  SlidersHorizontal,
  Sparkles,
  Ticket,
  TrendingUp,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import type { ServiceVisualType } from "@/data/servicesPageContent";

/* ------------------------------------------------------------------ *
 * Shared design tokens
 * Emil: use strong custom curves — the built-in CSS easings lack punch.
 * ------------------------------------------------------------------ */
const EASE_OUT = [0.23, 1, 0.32, 1] as const; // entrances / responsive feel
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const; // on-screen movement

const PURPLE = "#5210F8";
const LAVENDER = "#C47DFD";
const NAVY = "#072C55";

const CARD =
  "rounded-2xl border border-neutral-200/70 bg-white shadow-[0_2px_20px_-8px_rgba(82,16,248,0.18)]";
const FRAME = "min-h-[320px] md:min-h-[380px]";

/** Loop transition helper — decorative motion, so we keep it slow + gentle. */
function loop(duration: number, delay = 0): Transition {
  return { duration, delay, repeat: Infinity, ease: EASE_IN_OUT };
}

/* ================================================================== *
 * 1. BRAND — a clean brand guidelines sheet: lockup, type specimen,
 *    colour palette and brand voice.
 * ================================================================== */
const paletteColors = [
  { hex: "#FFFFFF", label: "Paper" },
  { hex: PURPLE, label: "Signal" },
  { hex: LAVENDER, label: "Lift" },
  { hex: NAVY, label: "Depth" },
  { hex: "#111111", label: "Ink" },
];

const brandVoice = ["Confident", "Human", "Clear", "Modern"];

function BrandVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`${CARD} ${FRAME} flex w-full flex-col overflow-hidden p-6`}>
      {/* Lockup */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="h-8 w-8 shrink-0 [&_svg]:h-full [&_svg]:w-full">
            <BrandLogo />
          </div>
          <span className="text-xl font-semibold tracking-tight text-[#111]">
            InvisiEdge
          </span>
        </div>
        <span className="rounded-full bg-[#5210F8]/8 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#5210F8]">
          Brand Guidelines
        </span>
      </div>

      {/* Typography specimen */}
      <motion.div
        className="mt-6 flex items-end justify-between border-b border-neutral-100 pb-5"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <span className="text-6xl font-semibold leading-none tracking-tight text-[#111]">
          Aa
        </span>
        <div className="text-right">
          <p className="text-[9px] font-medium uppercase tracking-wider text-neutral-400">
            Typeface
          </p>
          <p className="text-sm font-semibold text-[#111]">Geist Sans</p>
          <p className="mt-0.5 text-[11px] text-neutral-400">
            Regular · Medium · Semibold
          </p>
        </div>
      </motion.div>

      {/* Palette */}
      <div className="mt-5">
        <p className="mb-2 text-[9px] font-medium uppercase tracking-wider text-neutral-400">
          Palette
        </p>
        <div className="grid grid-cols-5 gap-2">
          {paletteColors.map((color, i) => (
            <motion.div
              key={color.hex}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: EASE_OUT }}
            >
              <div
                className="h-12 w-full rounded-lg border border-black/5"
                style={{ backgroundColor: color.hex }}
              />
              <p className="mt-1.5 text-[9px] font-semibold text-neutral-600">
                {color.label}
              </p>
              <p className="text-[8px] uppercase tracking-wide text-neutral-400">
                {color.hex}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand voice */}
      <div className="mt-auto pt-5">
        <p className="mb-2 text-[9px] font-medium uppercase tracking-wider text-neutral-400">
          Brand voice
        </p>
        <div className="flex flex-wrap gap-2">
          {brandVoice.map((word, i) => (
            <motion.span
              key={word}
              className="rounded-full border border-neutral-200 px-3 py-1 text-[11px] font-medium text-neutral-600"
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_OUT }}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 2. WEBSITE — a design-tool canvas: layers rail, artboard under
 *    selection, live dimension badge, and multiplayer cursors.
 * ================================================================== */
const layers = [
  { name: "Hero", depth: 0 },
  { name: "Nav", depth: 1 },
  { name: "CTA / active", depth: 1, selected: true },
  { name: "Pricing", depth: 0 },
  { name: "Footer", depth: 0 },
];

/** Collaborators drift on their own loops so the canvas never feels staged. */
const collaborators = [
  {
    name: "UX writer",
    color: LAVENDER,
    top: "16%",
    left: "46%",
    x: [0, 14, -6, 0],
    y: [0, -10, 6, 0],
    d: 7.5,
  },
  {
    name: "Developer",
    color: NAVY,
    top: "38%",
    left: "58%",
    x: [0, -12, 8, 0],
    y: [0, 8, -6, 0],
    d: 9,
  },
  {
    name: "Designer",
    color: PURPLE,
    bottom: "12%",
    left: "52%",
    x: [0, 10, -8, 0],
    y: [0, -6, 10, 0],
    d: 8.2,
  },
];

/** Selection handle — hollow square, the way every design tool draws it. */
function Handle({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-1.5 w-1.5 rounded-[1px] border bg-white ${className}`}
      style={{ borderColor: PURPLE }}
    />
  );
}

function Cursor({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 12 16" className="h-3.5 w-3.5 drop-shadow-sm">
      <path
        d="M1 1L11 11H6.2L4.2 15L1 1Z"
        fill={color}
        stroke="white"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WebsiteVisual() {
  const reduce = useReducedMotion();

  const dotColors = ["bg-red-500", "bg-yellow-400", "bg-green-500"];

  return (
    <div
      className={`relative ${FRAME} flex flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-md`}
    >
      {/* toolbar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-neutral-100 px-3 py-2">
        <div className="flex items-center gap-2.5 text-neutral-400">
          {dotColors.map((color, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-full ${color}`} />
          ))}
        </div>
        <span className="mx-auto truncate text-[10px] font-medium text-neutral-500">
          invisiedge <span className="text-neutral-300">/</span> Web design
        </span>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-full border-2 border-white bg-[#C47DFD]" />
          <div className="-ml-3 h-4 w-4 rounded-full border-2 border-white bg-[#072C55]" />
          <div className="-ml-3 h-4 w-4 rounded-full border-2 border-white bg-[#1eb95c]" />
          <span className="ml-1 hidden text-[9px] text-neutral-400 sm:inline">
            100%
          </span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* layers rail */}
        <div className="hidden w-32 shrink-0 border-r border-neutral-100 py-3 sm:block">
          <p className="px-3 pb-2 text-[9px] font-semibold uppercase tracking-wider text-neutral-500">
            Layers
          </p>
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              className={`flex items-center gap-1.5 py-1.5 pr-2 text-[10px] ${
                layer.selected
                  ? "bg-[#5210F8]/6 font-medium text-[#5210F8]"
                  : "text-neutral-500"
              }`}
              style={{ paddingLeft: 12 + layer.depth * 10 }}
              initial={reduce ? false : { opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: EASE_OUT }}
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{
                  backgroundColor: layer.selected ? PURPLE : "#d4d4d4",
                }}
              />
              {layer.name}
            </motion.div>
          ))}
        </div>

        {/* canvas */}
        <div className="relative flex min-w-0 flex-1 items-center justify-center bg-[#f1f1f3] p-5">
          {/* artboard */}
          <motion.div
            className="relative w-full max-w-[220px] rounded-lg bg-white p-2.5 shadow-[0_10px_30px_-12px_rgba(7,44,85,0.35)]"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT }}
          >
            <div
              className="relative h-20 overflow-hidden rounded-md md:h-24"
              style={{
                background: `linear-gradient(140deg, ${PURPLE}, ${NAVY})`,
              }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90px 90px at 25% 25%, rgba(196,125,253,0.55), transparent)",
                }}
                animate={reduce ? undefined : { x: ["-15%", "45%", "-15%"] }}
                transition={loop(9)}
              />
            </div>

            <div className="mt-2.5 flex items-baseline justify-between px-0.5">
              <span className="text-base font-semibold tracking-tight text-[#111]">
                Hero
              </span>
              <span className="text-[11px] text-neutral-400">v2.4</span>
            </div>

            {/* selected CTA — outline, handles, dimension badge */}
            <div className="relative mt-2.5 px-0.5 pb-1">
              <div
                className="relative flex h-9 items-center justify-center rounded-md text-[11px] font-bold tracking-wide text-white"
                style={{ backgroundColor: PURPLE }}
              >
                GET STARTED
                <ArrowUpRight size={12} className="ml-1" strokeWidth={2.5} />
              </div>

              <span
                className="pointer-events-none absolute -inset-[3px] rounded-[7px] border"
                style={{ borderColor: PURPLE }}
              />
              <Handle className="-left-[6px] -top-[6px]" />
              <Handle className="-right-[6px] -top-[6px]" />
              <Handle className="-bottom-[3px] -left-[6px]" />
              <Handle className="-bottom-[3px] -right-[6px]" />

              <motion.span
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-[3px] px-1.5 py-0.5 text-[8px] font-semibold text-white"
                style={{ backgroundColor: PURPLE }}
                animate={reduce ? undefined : { opacity: [1, 0.55, 1] }}
                transition={loop(3)}
              >
                220 × 36
              </motion.span>
            </div>
          </motion.div>

          {/* multiplayer cursors */}
          {collaborators.map((c) => (
            <motion.div
              key={c.name}
              className="absolute flex items-start"
              style={{
                top: c.top,
                left: c.left,
                bottom: c.bottom,
              }}
              animate={reduce ? undefined : { x: c.x, y: c.y }}
              transition={loop(c.d)}
            >
              <Cursor color={c.color} />
              <span
                className="-ml-0.5 mt-2 rounded-[4px] px-1.5 py-0.5 text-[9px] font-semibold text-white shadow-sm"
                style={{ backgroundColor: c.color }}
              >
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 3. SEO — a brand-styled "Search Performance" card. Abstract, not a
 *    literal analytics clone: two metric tiles, a dual-line trend
 *    chart, dimension tabs and a compact country breakdown.
 * ================================================================== */
const seoMetrics = [
  { label: "Clicks", value: "25.2M", filled: PURPLE },
  { label: "Impressions", value: "1.43B", filled: NAVY },
  { label: "Avg. CTR", value: "1.8%", filled: null },
  { label: "Avg. position", value: "11.2", filled: null },
];

const seoTabs = ["QUERIES", "PAGES", "COUNTRIES", "DEVICES"];

const seoCountryData = [
  { country: "United States", clicks: "4.7M", share: "34%" },
  { country: "India", clicks: "3.7M", share: "27%" },
  { country: "United Kingdom", clicks: "1.1M", share: "12%" },
];

const CHART_W = 620;
const CHART_H = 150;
const CHART_POINTS = 40;

/** Gentle wave → SVG path. Enough rhythm to read as a trend, no more. */
function buildSeries({
  base,
  trend,
  wave,
  phase,
}: {
  base: number;
  trend: number;
  wave: number;
  phase: number;
}) {
  const pts: string[] = [];
  for (let i = 0; i < CHART_POINTS; i++) {
    const x = (i / (CHART_POINTS - 1)) * CHART_W;
    const w = Math.sin((i / 6) * Math.PI + phase);
    const y = base - trend * (i / CHART_POINTS) - wave * w;
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return "M " + pts.join(" L ");
}

function SeoVisual() {
  const reduce = useReducedMotion();
  const [activeTab, setActiveTab] = useState("COUNTRIES");

  const impressionsPath = buildSeries({ base: 78, trend: 22, wave: 20, phase: 0 });
  const clicksPath = buildSeries({ base: 120, trend: 10, wave: 12, phase: 0.7 });

  return (
    <div className={`${CARD} ${FRAME} w-full overflow-hidden p-5`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-[#5210F8]/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5210F8]">
          <BarChart3 size={14} />
          Search Performance
        </div>
        <button className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-50">
          <SlidersHorizontal size={15} />
        </button>
      </div>

      {/* Metric tiles */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {seoMetrics.map((m) => (
          <div
            key={m.label}
            className={`rounded-xl px-3 py-2.5 ${
              m.filled ? "text-white" : "border border-neutral-200/70 bg-white text-[#111]"
            }`}
            style={m.filled ? { backgroundColor: m.filled } : undefined}
          >
            <p
              className={`text-[9px] font-medium uppercase tracking-wide ${
                m.filled ? "text-white/70" : "text-neutral-400"
              }`}
            >
              {m.label}
            </p>
            <p className="mt-1 text-lg font-semibold leading-none tracking-tight">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      {/* Trend chart */}
      <div className="mt-4">
        <div className="mb-1.5 flex items-center gap-4 text-[10px] font-medium">
          <span className="flex items-center gap-1.5 text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: LAVENDER }} />
            Clicks
          </span>
          <span className="flex items-center gap-1.5 text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: PURPLE }} />
            Impressions
          </span>
        </div>
        <svg
          viewBox={`0 0 ${CHART_W} ${CHART_H}`}
          className="h-24 w-full"
          preserveAspectRatio="none"
        >
          {[0.33, 0.66].map((g) => (
            <line
              key={g}
              x1="0"
              x2={CHART_W}
              y1={CHART_H * g}
              y2={CHART_H * g}
              stroke="#f1f1f3"
              strokeWidth="1"
            />
          ))}
          <motion.path
            d={impressionsPath}
            fill="none"
            stroke={PURPLE}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: EASE_OUT }}
          />
          <motion.path
            d={clicksPath}
            fill="none"
            stroke={LAVENDER}
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.15, ease: EASE_OUT }}
          />
        </svg>
      </div>

      {/* Dimension tabs */}
      <div className="no-scrollbar mt-4 flex gap-5 overflow-x-auto border-b border-neutral-100">
        {seoTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative whitespace-nowrap pb-2 text-[10px] font-bold tracking-widest transition-colors ${
              activeTab === tab
                ? "text-[#111]"
                : "text-neutral-400 hover:text-neutral-600"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span
                className="absolute -bottom-px left-0 h-[2px] w-full rounded-full"
                style={{ backgroundColor: PURPLE }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Country breakdown */}
      <div className="mt-2 space-y-0.5">
        {seoCountryData.map((row) => (
          <div
            key={row.country}
            className="flex items-center gap-3 rounded-lg px-1 py-2 text-[12px] transition-colors hover:bg-neutral-50"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-50 text-neutral-400">
              <Globe size={13} />
            </div>
            <span className="font-medium text-neutral-700">{row.country}</span>
            <span className="ml-auto font-semibold tabular-nums text-[#111]">
              {row.clicks}
            </span>
            <span className="w-9 text-right tabular-nums text-neutral-400">
              {row.share}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== *
 * 4. CONTENT — a content-calendar card: weekly plan across platforms,
 *    a scheduled-post queue, and community engagement.
 * ================================================================== */
const platformColor: Record<string, string> = {
  LI: NAVY,
  IG: LAVENDER,
  RL: PURPLE,
};
const platformName: Record<string, string> = {
  LI: "LinkedIn",
  IG: "Instagram",
  RL: "Reels",
};

const contentWeek: { day: string; posts: string[]; today?: boolean }[] = [
  { day: "M", posts: ["LI"] },
  { day: "T", posts: ["IG", "RL"] },
  { day: "W", posts: ["LI"] },
  { day: "T", posts: ["IG"], today: true },
  { day: "F", posts: ["RL", "LI"] },
  { day: "S", posts: ["IG"] },
  { day: "S", posts: [] },
];

const contentQueue = [
  { platform: "LI", title: "Thought leadership: scaling lean teams", time: "9:00 AM" },
  { platform: "IG", title: "Brand story carousel", time: "1:30 PM" },
  { platform: "RL", title: "60-sec product reel", time: "6:00 PM" },
];

function SocialVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`${CARD} ${FRAME} flex w-full flex-col overflow-hidden p-5`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-[#5210F8]/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5210F8]">
          <Calendar size={14} />
          Content Calendar
        </div>
        <div className="hidden items-center gap-3 text-[10px] font-medium text-neutral-400 sm:flex">
          {Object.keys(platformName).map((key) => (
            <span key={key} className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: platformColor[key] }}
              />
              {platformName[key]}
            </span>
          ))}
        </div>
      </div>

      {/* Weekly plan */}
      <div className="mt-4 grid grid-cols-7 gap-1.5">
        {contentWeek.map((d, di) => (
          <div
            key={di}
            className={`rounded-lg border p-1.5 ${
              d.today
                ? "border-[#5210F8]/40 bg-[#5210F8]/5"
                : "border-neutral-100 bg-white"
            }`}
          >
            <p
              className={`mb-1.5 text-center text-[9px] font-semibold ${
                d.today ? "text-[#5210F8]" : "text-neutral-400"
              }`}
            >
              {d.day}
            </p>
            <div className="flex min-h-[14px] flex-col gap-1">
              {d.posts.map((key, pi) => (
                <motion.span
                  key={pi}
                  className="h-1.5 origin-left rounded-full"
                  style={{ backgroundColor: platformColor[key] }}
                  initial={reduce ? false : { scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: di * 0.06 + pi * 0.08,
                    ease: EASE_OUT,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scheduled queue */}
      <p className="mb-2 mt-4 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
        Up next
      </p>
      <div className="space-y-2">
        {contentQueue.map((post, i) => (
          <motion.div
            key={post.title}
            className="flex items-center gap-2.5 rounded-xl border border-neutral-200/70 bg-white p-2.5"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: EASE_OUT }}
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[9px] font-bold text-white"
              style={{ backgroundColor: platformColor[post.platform] }}
            >
              {post.platform}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium text-neutral-700">
                {post.title}
              </p>
              <p className="text-[10px] text-neutral-400">
                {platformName[post.platform]} · {post.time}
              </p>
            </div>
            <span className="hidden shrink-0 rounded-full bg-neutral-50 px-2 py-0.5 text-[9px] font-medium text-neutral-400 sm:inline">
              Scheduled
            </span>
          </motion.div>
        ))}
      </div>

      {/* Community engagement */}
      <div className="mt-auto flex items-center justify-between border-t border-neutral-100 pt-3">
        <div className="flex items-center gap-3 text-[11px] font-medium text-neutral-500">
          <span className="flex items-center gap-1">
            <Heart size={12} style={{ color: LAVENDER }} /> 8.1k
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={12} style={{ color: PURPLE }} /> 640
          </span>
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
          style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
        >
          Engagement +42%
        </span>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 5. AI-VIDEO — an AI video studio: avatar player with live script
 *    captions + format badge, an AI-voiceover waveform, and an
 *    automated render queue churning out multiple video formats.
 * ================================================================== */
const waveform = Array.from(
  { length: 22 },
  (_, i) => 24 + Math.sin(i * 0.7) * 34 + 30,
);

const scriptLines = [
  "Meet your AI presenter —",
  "on-brand, in every format.",
  "Scripted, voiced, rendered.",
];

const renderQueue = [
  { label: "Explainer video", pct: 100, done: true, color: "#22C55E" },
  { label: "Corporate video", pct: 64, done: false, color: LAVENDER },
  { label: "Event recap", pct: 28, done: false, color: PURPLE },
];

function AiVideoVisual() {
  const reduce = useReducedMotion();
  const [rendering, setRendering] = useState(true);
  const [line, setLine] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setRendering((p) => !p), 4200);
    return () => clearInterval(t);
  }, [reduce]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setLine((p) => (p + 1) % scriptLines.length),
      2600,
    );
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className={`flex ${FRAME} flex-col gap-3`}>
      {/* Player card */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl"
        style={{ background: `linear-gradient(150deg, ${NAVY}, #0d4a8a)` }}
      >
        {/* soft light sweep */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120px 120px at 30% 25%, rgba(196,125,253,0.35), transparent)",
          }}
          animate={reduce ? undefined : { x: ["-12%", "40%", "-12%"] }}
          transition={loop(10)}
        />

        {/* avatar orb */}
        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-full md:h-24 md:w-24"
          style={{
            background: `radial-gradient(circle at 35% 30%, ${LAVENDER}, ${PURPLE})`,
          }}
          animate={reduce ? undefined : { scale: [1, 1.05, 1] }}
          transition={loop(3.4)}
        >
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ border: "1.5px solid rgba(255,255,255,0.4)" }}
            animate={reduce ? undefined : { scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: EASE_OUT }}
          />
          <div className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white" />
        </motion.div>

        {/* render status pill */}
        <div className="absolute left-3 top-3">
          <AnimatePresence mode="wait">
            <motion.span
              key={rendering ? "render" : "done"}
              className="flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm"
              initial={{ opacity: 0, y: -4, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 4, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: rendering ? LAVENDER : "#4ade80" }}
              />
              {rendering ? "Generating…" : "Ready to publish"}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* format badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
          <Sparkles size={11} />
          9:16 · Short-form
        </div>

        {/* live script caption */}
        <div className="absolute inset-x-3 bottom-3 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={line}
              className="rounded-lg bg-black/30 px-3 py-1.5 text-center text-[11px] font-medium text-white backdrop-blur-sm"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: EASE_OUT }}
            >
              {scriptLines[line]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* AI voiceover waveform */}
      <div className={`${CARD} p-3`}>
        <div className="mb-2 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[10px] font-semibold text-neutral-500">
            <Mic size={12} style={{ color: PURPLE }} />
            AI Voiceover
          </span>
          <span className="rounded-full bg-neutral-50 px-2 py-0.5 text-[9px] font-medium text-neutral-400">
            EN · Natural
          </span>
        </div>
        <div className="flex h-8 items-center justify-center gap-[3px]">
          {waveform.map((h, i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full"
              style={{
                background: `linear-gradient(to top, ${PURPLE}, ${LAVENDER})`,
              }}
              animate={
                reduce
                  ? { height: `${h * 0.6}%` }
                  : { height: [`${h * 0.45}%`, `${h}%`, `${h * 0.45}%`] }
              }
              transition={{
                duration: 1.1,
                repeat: Infinity,
                delay: i * 0.04,
                ease: EASE_IN_OUT,
              }}
            />
          ))}
        </div>
      </div>

      {/* Automated render queue */}
      <div className={`${CARD} p-3`}>
        <div className="mb-2.5 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-neutral-500">
            Render queue
          </span>
          <span
            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold"
            style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
          >
            <Sparkles size={9} />
            Automated
          </span>
        </div>
        <div className="space-y-2.5">
          {renderQueue.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white"
                style={{ backgroundColor: item.color }}
              >
                <Film size={12} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between">
                  <span className="truncate text-[11px] font-medium text-neutral-600">
                    {item.label}
                  </span>
                  <span
                    className="flex items-center gap-0.5 text-[10px] font-semibold tabular-nums"
                    style={{ color: item.done ? "#22C55E" : "#a3a3a3" }}
                  >
                    {item.done ? (
                      <>
                        <Check size={11} /> Done
                      </>
                    ) : (
                      `${item.pct}%`
                    )}
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className="h-full origin-left rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: item.pct / 100 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + i * 0.12,
                      ease: EASE_OUT,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 6. AUTOMATION — a workflow builder canvas: trigger → delay → branch,
 *    with a live toolbar and collaborator cursors that drift past the
 *    panel edges (deliberately unclipped for a "shared canvas" feel).
 * ================================================================== */
type FlowIcon = ComponentType<{ size?: number; className?: string }>;

/** A single automation step card. */
function FlowNode({
  icon: Icon,
  iconBg,
  label,
  title,
  highlight,
  delay = 0,
}: {
  icon: FlowIcon;
  iconBg: string;
  label: string;
  title: string;
  highlight?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`relative flex items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 shadow-[0_6px_18px_-8px_rgba(7,44,85,0.3)] ${
        highlight
          ? "border-amber-300 ring-2 ring-amber-100"
          : "border-neutral-200/80"
      }`}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: EASE_OUT }}
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-white"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={14} />
      </span>
      <div className="pr-1">
        <p className="text-[9px] font-medium text-neutral-400">{label}</p>
        <p className="text-[12px] font-semibold leading-tight text-[#111]">
          {title}
        </p>
      </div>
    </motion.div>
  );
}

/** Down-pointing connector arrowhead. */
function FlowArrow({ className }: { className: string }) {
  return (
    <span
      className={`absolute h-0 w-0 border-x-[3px] border-x-transparent border-t-[5px] ${className}`}
      style={{ borderTopColor: "#c9c9c9" }}
    />
  );
}

const flowCollab = [
  {
    name: "Lily Harper",
    color: PURPLE,
    style: { top: "22%", right: "-4%" } as const,
    x: [0, -9, 5, 0],
    y: [0, 7, -5, 0],
    d: 7,
  },
  {
    name: "Ethan Carter",
    color: "#12B76A",
    style: { bottom: "30%", left: "-5%" } as const,
    x: [0, 11, -6, 0],
    y: [0, -6, 9, 0],
    d: 8.5,
  },
];

const avatarGradients = [
  "linear-gradient(135deg,#c084fc,#7c3aed)",
  "linear-gradient(135deg,#60a5fa,#2563eb)",
  "linear-gradient(135deg,#fbbf24,#f97316)",
];

function CrmVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      {/* Canvas panel — dotted grid, clipped edges */}
      <div
        className={`relative flex ${FRAME} flex-col overflow-hidden rounded-2xl border border-neutral-200`}
        style={{
          backgroundColor: "#f6f6f8",
          backgroundImage:
            "radial-gradient(rgba(7,44,85,0.10) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        {/* Toolbar */}
        <div className="flex items-center justify-end gap-2 border-b border-neutral-200/60 bg-white/70 px-3 py-2 backdrop-blur-sm">
          <div className="mr-1 flex items-center">
            {avatarGradients.map((g, i) => (
              <div
                key={i}
                className={`h-6 w-6 rounded-full border-2 border-white ${
                  i > 0 ? "-ml-2" : ""
                }`}
                style={{ background: g }}
              />
            ))}
          </div>
          {[MoreVertical, Settings, Eye].map((Icon, i) => (
            <button
              key={i}
              className="flex h-6 w-6 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500"
            >
              <Icon size={13} />
            </button>
          ))}
          <button
            className="rounded-md px-3 py-1 text-[11px] font-semibold text-white"
            style={{ backgroundColor: PURPLE }}
          >
            Publish
          </button>
        </div>

        {/* Flow */}
        <div className="flex flex-1 flex-col items-center justify-center px-4 py-3">
          {/* trigger stem */}
          <div className="relative h-4 w-px bg-neutral-300">
            <FlowArrow className="-bottom-1 left-1/2 -translate-x-1/2" />
          </div>

          <FlowNode
            icon={Clock}
            iconBg="#F04438"
            label="Add delay"
            title="1 day"
            delay={0}
          />

          {/* connector */}
          <div className="relative h-6 w-px bg-neutral-300">
            <FlowArrow className="-bottom-1 left-1/2 -translate-x-1/2" />
          </div>

          <FlowNode
            icon={Filter}
            iconBg="#F59E0B"
            label="Check field"
            title="Plan is Premium"
            highlight
            delay={0.1}
          />

          {/* branch */}
          <div className="relative h-6 w-full">
            <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-neutral-300" />
            <div className="absolute left-[24%] right-[24%] top-3 h-px bg-neutral-300" />
            <div className="absolute left-[24%] top-3 h-3 w-px bg-neutral-300">
              <FlowArrow className="-bottom-1 left-1/2 -translate-x-1/2" />
            </div>
            <div className="absolute right-[24%] top-3 h-3 w-px bg-neutral-300">
              <FlowArrow className="-bottom-1 left-1/2 -translate-x-1/2" />
            </div>
          </div>

          {/* branch outcomes */}
          <div className="grid w-full grid-cols-2 gap-3">
            <FlowNode
              icon={Mail}
              iconBg="#072C55"
              label="Send email"
              title="Finish subscribing"
              delay={0.2}
            />
            <FlowNode
              icon={Handshake}
              iconBg="#F04438"
              label="Create new deal"
              title="High value customer"
              delay={0.28}
            />
          </div>
        </div>
      </div>

      {/* Collaborator cursors — allowed to spill outside the panel */}
      {flowCollab.map((c) => (
        <motion.div
          key={c.name}
          className="absolute z-20 flex items-start"
          style={c.style}
          animate={reduce ? undefined : { x: c.x, y: c.y }}
          transition={loop(c.d)}
        >
          <Cursor color={c.color} />
          <span
            className="-ml-0.5 mt-2 rounded-md px-2 py-0.5 text-[10px] font-semibold text-white shadow-sm"
            style={{ backgroundColor: c.color }}
          >
            {c.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ================================================================== *
 * 7. LEAD-GEN — metric cards w/ sparklines + outreach sequence
 * ================================================================== */
const metrics = [
  { label: "Leads", value: "360", change: "+24%", up: true },
  { label: "Reply rate", value: "18%", change: "+6%", up: true },
];
const spark = "0,18 14,10 28,14 42,5 56,12 70,3 84,8 100,2";

function LeadGenVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`grid ${FRAME} grid-cols-2 gap-3`}>
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className={`${CARD} p-4`}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: EASE_OUT }}
        >
          <p className="text-[10px] uppercase tracking-wider text-neutral-400">
            {m.label}
          </p>
          <p className="mt-1.5 text-2xl font-bold text-[#111]">{m.value}</p>
          <div className="mt-2 flex items-center justify-between">
            <span
              className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
              style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
            >
              {m.change}
            </span>
            <svg viewBox="0 0 100 22" className="h-5 w-14" preserveAspectRatio="none">
              <motion.polyline
                points={spark}
                fill="none"
                stroke={PURPLE}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={reduce ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2 + i * 0.1, ease: EASE_OUT }}
              />
            </svg>
          </div>
        </motion.div>
      ))}

      {/* outreach sequence */}
      <div className={`${CARD} col-span-2 p-4`}>
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[10px] font-medium text-neutral-400">
            Outreach sequence
          </p>
          <span className="text-[9px] font-semibold text-[#5210F8]">
            3 steps
          </span>
        </div>
        <div className="space-y-2">
          {[
            "Hi {{name}}, saw your post on…",
            "Following up on our conversation…",
            "Sharing a quick case study →",
          ].map((msg, i) => (
            <motion.div
              key={msg}
              className="flex items-center gap-2.5"
              initial={reduce ? false : { opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.14, ease: EASE_OUT }}
            >
              <span
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                style={{ backgroundColor: PURPLE }}
              >
                {i + 1}
              </span>
              <div className="flex-1 rounded-lg bg-neutral-50 px-3 py-2 text-[11px] text-neutral-600">
                {msg}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 8. GROWTH — a live campaign dashboard: gradient hero with KPIs, a
 *    weekly-reach growth chart, and the paid/events/organic channel mix.
 * ================================================================== */
const gtmKpis = [
  { label: "Reach", value: "2.4M" },
  { label: "Leads", value: "840" },
  { label: "ROI", value: "312%" },
];

const gtmBars = [40, 52, 46, 63, 58, 74, 82, 96];

const gtmChannels = [
  { icon: Megaphone, label: "Paid media", pct: 48, color: PURPLE },
  { icon: Ticket, label: "Events", pct: 32, color: LAVENDER },
  { icon: Globe, label: "Organic", pct: 20, color: NAVY },
];

function GtmVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`${CARD} ${FRAME} flex w-full flex-col overflow-hidden`}>
      {/* Gradient hero */}
      <div
        className="relative overflow-hidden p-5"
        style={{ background: `linear-gradient(150deg, ${PURPLE}, ${NAVY})` }}
      >
        <motion.div
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full"
          style={{ background: "rgba(196,125,253,0.35)", filter: "blur(24px)" }}
          animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={loop(5)}
        />

        <div className="relative flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-white/12 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
            <Rocket size={12} />
            Growth Campaign
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-white/12 px-2 py-1 text-[10px] font-bold tracking-wide text-white backdrop-blur-sm">
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
              transition={loop(1.6)}
            />
            LIVE
          </span>
        </div>

        <p className="relative mt-3 text-lg font-semibold text-white">
          Q4 Growth Sprint
        </p>
        <p className="relative text-[10px] text-white/55">
          Go-to-market · Paid + Events
        </p>

        <div className="relative mt-4 grid grid-cols-3 gap-3">
          {gtmKpis.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.1, ease: EASE_OUT }}
            >
              <p className="text-lg font-bold text-white">{s.value}</p>
              <p className="text-[10px] text-white/55">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Weekly reach chart */}
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-semibold text-neutral-500">
              Weekly reach
            </span>
            <span
              className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
              style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
            >
              <TrendingUp size={11} />
              +312%
            </span>
          </div>
          <div className="flex h-20 items-end gap-1.5">
            {gtmBars.map((b, i) => (
              <motion.div
                key={i}
                className="flex-1 origin-bottom rounded-t-sm"
                style={{
                  height: `${b}%`,
                  background: `linear-gradient(to top, ${PURPLE}, ${LAVENDER})`,
                }}
                initial={reduce ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: EASE_OUT }}
              />
            ))}
          </div>
        </div>

        {/* Channel mix */}
        <div className="mt-auto space-y-2.5">
          {gtmChannels.map((ch) => (
            <div key={ch.label} className="flex items-center gap-2.5">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-white"
                style={{ backgroundColor: ch.color }}
              >
                <ch.icon size={12} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center justify-between text-[10px]">
                  <span className="font-medium text-neutral-600">{ch.label}</span>
                  <span className="font-semibold tabular-nums text-neutral-400">
                    {ch.pct}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className="h-full origin-left rounded-full"
                    style={{ backgroundColor: ch.color }}
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: ch.pct / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: EASE_OUT }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visualMap: Record<ServiceVisualType, ComponentType> = {
  brand: BrandVisual,
  website: WebsiteVisual,
  seo: SeoVisual,
  social: SocialVisual,
  "ai-video": AiVideoVisual,
  crm: CrmVisual,
  "lead-gen": LeadGenVisual,
  gtm: GtmVisual,
};

export default function ServiceAnimatedVisual({
  type,
}: {
  type: ServiceVisualType;
}) {
  const Visual = visualMap[type];
  return (
    <div className="h-full w-full">
      <Visual />
    </div>
  );
}
