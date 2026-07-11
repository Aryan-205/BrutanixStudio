"use client";

import {
  useEffect,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Transition,
} from "motion/react";
import {
  ArrowUp,
  ArrowUpRight,
  BarChart3,
  Bell,
  Bookmark,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Eye,
  FileText,
  Film,
  Filter,
  Globe,
  Handshake,
  Heart,
  Home,
  Layers,
  Link2,
  Mail,
  Megaphone,
  MessageCircle,
  Mic,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  MousePointerClick,
  Play,
  Plus,
  Repeat2,
  Rocket,
  Search,
  Send,
  Settings,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Tablet,
  ThumbsUp,
  Ticket,
  TrendingUp,
  Users,
  Zap,
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
 * 4. CONTENT — one mock per tab: a LinkedIn feed, an Instagram feed,
 *    a Reels player and the content calendar. The three phone mocks are
 *    drawn as flat wireframes — neutral placeholders, hairline rules,
 *    brand colour only where it carries meaning (active state, ring,
 *    progress) — so the UI reads as interface, not as decoration.
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

/** Month laid out for the grid — leading blanks align day 1 to a weekday. */
const calLeadingBlanks = 2;
const calDays = Array.from({ length: 30 }, (_, i) => i + 1);
const calToday = 9;
const calScheduled: Record<number, string[]> = {
  2: ["LI"],
  5: ["IG", "RL"],
  9: ["LI", "IG"],
  12: ["RL"],
  16: ["IG"],
  19: ["LI"],
  23: ["RL", "IG"],
  26: ["LI"],
};

const contentQueue = [
  { platform: "LI", title: "Thought leadership: scaling lean teams", time: "9:00 AM" },
  { platform: "IG", title: "Brand story carousel", time: "1:30 PM" },
  { platform: "RL", title: "60-sec product reel", time: "6:00 PM" },
];

/** Instagram-style glyph (lucide dropped its brand icons). */
function IgGlyph({ size = 12 }: { size?: number }) {
  return (
    <span
      className="relative inline-block rounded-[4px] border-[1.5px] border-current"
      style={{ height: size, width: size }}
    >
      <span className="absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-current" />
      <span className="absolute right-[1.5px] top-[1.5px] h-[1.5px] w-[1.5px] rounded-full bg-current" />
    </span>
  );
}

/** Phone shell shared by the LinkedIn, Instagram and Reels mocks. */
function PhoneShell({
  children,
  bleed = false,
}: {
  children: ReactNode;
  bleed?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`${FRAME} flex w-full items-center justify-center`}>
      <motion.div
        className="relative w-full max-w-[228px] overflow-hidden rounded-[30px] border-[6px] border-neutral-900 bg-white shadow-[0_30px_60px_-28px_rgba(7,44,85,0.45)]"
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        {/* notch */}
        <span className="absolute left-1/2 top-0 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-lg bg-neutral-900" />
        <div className={bleed ? undefined : "pt-5"}>{children}</div>
      </motion.div>
    </div>
  );
}

/** Neutral placeholder bar — keeps the mocks reading as UI, not as copy. */
function Skel({
  w,
  h = 5,
  dark = false,
}: {
  w: string;
  h?: number;
  dark?: boolean;
}) {
  return (
    <span
      className={`block shrink-0 rounded-full ${
        dark ? "bg-neutral-200" : "bg-neutral-100"
      }`}
      style={{ width: w, height: h }}
    />
  );
}

const liActions = [
  { icon: ThumbsUp, label: "Like", active: true },
  { icon: MessageCircle, label: "Comment" },
  { icon: Repeat2, label: "Repost" },
  { icon: Send, label: "Send" },
];

function LinkedInVisual() {
  const reduce = useReducedMotion();

  return (
    <PhoneShell>
      {/* app bar */}
      <div className="flex items-center gap-2 px-3 py-2">
        <span className="h-6 w-6 shrink-0 rounded-full bg-neutral-100" />
        <span className="flex h-6 flex-1 items-center gap-1.5 rounded-md bg-neutral-50 px-2">
          <Search size={10} className="text-neutral-300" />
          <Skel w="52px" h={4} dark />
        </span>
        <MessageCircle size={13} className="shrink-0 text-neutral-400" />
      </div>

      {/* post */}
      <div className="border-t border-neutral-100 px-3 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-[9px] font-semibold text-neutral-500">
            IE
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-semibold leading-tight text-[#111]">
              InvisiEdge
            </p>
            <p className="text-[8px] text-neutral-400">Growth studio · 2h</p>
          </div>
          <MoreHorizontal size={13} className="shrink-0 text-neutral-300" />
        </div>

        <p className="mt-2.5 text-[10px] leading-relaxed text-neutral-600">
          How we turned a lean team into a content engine.
        </p>
        <div className="mt-2 space-y-1.5">
          <Skel w="100%" h={4} />
          <Skel w="68%" h={4} />
        </div>

        {/* carousel placeholder */}
        <div className="mt-3 flex h-[84px] items-center justify-center rounded-lg border border-neutral-200/80 bg-neutral-50">
          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-neutral-300">
            Carousel · 1/6
          </span>
        </div>

        {/* reactions */}
        <div className="mt-2.5 flex items-center gap-1.5">
          <motion.span
            className="flex h-3.5 w-3.5 items-center justify-center rounded-full"
            style={{ backgroundColor: PURPLE }}
            animate={reduce ? undefined : { scale: [1, 1.18, 1] }}
            transition={loop(3.2)}
          >
            <ThumbsUp size={7} className="fill-white text-white" />
          </motion.span>
          <span className="text-[8px] text-neutral-400">
            128 · 24 comments
          </span>
        </div>

        {/* actions */}
        <div className="mt-2 flex items-center justify-between border-t border-neutral-100 pt-2">
          {liActions.map(({ icon: Icon, label, active }) => (
            <span
              key={label}
              className={`flex items-center gap-1 text-[8px] font-medium ${
                active ? "" : "text-neutral-400"
              }`}
              style={active ? { color: PURPLE } : undefined}
            >
              <Icon size={11} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-2.5 text-neutral-300">
        <span className="relative text-neutral-900">
          <Home size={13} />
          <span
            className="absolute -bottom-1 left-1/2 h-[2px] w-3.5 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: PURPLE }}
          />
        </span>
        <Users size={13} />
        <Plus size={13} />
        <Bell size={13} />
        <Briefcase size={13} />
      </div>
    </PhoneShell>
  );
}

const igStories = ["invisiedge", "team", "behind", "clients", "work"];

function InstagramPanel() {
  const reduce = useReducedMotion();

  return (
    <PhoneShell>
      {/* app bar */}
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[11px] font-semibold tracking-tight text-[#111]">
          invisiedge
        </span>
        <div className="flex items-center gap-2.5 text-neutral-400">
          <Heart size={13} />
          <Send size={13} />
        </div>
      </div>

      {/* stories */}
      <div className="flex gap-2.5 px-3 pb-2.5">
        {igStories.map((story, i) => (
          <motion.div
            key={story}
            className="flex flex-col items-center gap-1"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_OUT }}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full border p-[2px]"
              style={{ borderColor: i === 0 ? PURPLE : "#e5e5e5" }}
            >
              <span className="h-full w-full rounded-full bg-neutral-100" />
            </span>
            <Skel w="20px" h={3} dark />
          </motion.div>
        ))}
      </div>

      {/* post header */}
      <div className="flex items-center gap-2 border-t border-neutral-100 px-3 py-2">
        <span className="h-6 w-6 shrink-0 rounded-full border border-neutral-200 bg-neutral-50" />
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-semibold leading-tight text-[#111]">
            invisiedge
          </p>
          <p className="text-[8px] text-neutral-400">Brand story · Carousel</p>
        </div>
        <MoreHorizontal size={12} className="shrink-0 text-neutral-300" />
      </div>

      {/* media */}
      <div className="relative flex aspect-[4/3] w-full items-center justify-center border-y border-neutral-100 bg-neutral-50">
        <span className="h-12 w-12 rounded-md border border-neutral-200" />
        <span className="absolute right-2 top-2 rounded-full bg-white/80 px-1.5 py-0.5 text-[7px] font-semibold text-neutral-500">
          1/3
        </span>
        <span className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1">
          {[0, 1, 2].map((d) => (
            <span
              key={d}
              className="h-1 w-1 rounded-full"
              style={{
                backgroundColor: d === 0 ? PURPLE : "#d4d4d4",
              }}
            />
          ))}
        </span>
      </div>

      {/* actions */}
      <div className="flex items-center justify-between px-3 pb-1 pt-2.5">
        <div className="flex items-center gap-3">
          <motion.span
            style={{ color: PURPLE }}
            animate={reduce ? undefined : { scale: [1, 1.15, 1] }}
            transition={loop(3.4)}
          >
            <Heart size={14} className="fill-current" />
          </motion.span>
          <MessageCircle size={14} className="text-neutral-500" />
          <Send size={14} className="text-neutral-500" />
        </div>
        <Bookmark size={14} className="text-neutral-500" />
      </div>

      {/* caption */}
      <div className="px-3 pb-3">
        <p className="text-[9px] font-semibold text-[#111]">8,142 likes</p>
        <div className="mt-1.5 space-y-1.5">
          <Skel w="100%" h={4} />
          <Skel w="54%" h={4} />
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center justify-between border-t border-neutral-100 px-4 py-2.5 text-neutral-300">
        <Home size={13} className="text-neutral-900" />
        <Search size={13} />
        <Plus size={13} />
        <Play size={13} />
        <span className="h-3.5 w-3.5 rounded-full border border-neutral-300" />
      </div>
    </PhoneShell>
  );
}

const reelStats = [
  { icon: Heart, value: "8.1k" },
  { icon: MessageCircle, value: "640" },
  { icon: Send, value: "212" },
];

function ReelsPanel() {
  const reduce = useReducedMotion();

  return (
    <PhoneShell bleed>
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-50">
        {/* footage stand-in — a plain frame grid, no colour fill */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,44,85,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(7,44,85,0.05) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(82,16,248,0.07), transparent)",
          }}
          animate={reduce ? undefined : { x: ["-70%", "190%"] }}
          transition={loop(6)}
        />

        {/* top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-6 text-neutral-500">
          <span className="text-[10px] font-semibold text-neutral-900">
            Reels
          </span>
          <IgGlyph size={12} />
        </div>

        {/* play affordance */}
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white/70 backdrop-blur-sm">
          <span className="ml-[2px] h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-neutral-900" />
        </span>

        {/* action rail */}
        <div className="absolute bottom-14 right-2 flex flex-col items-center gap-3 text-neutral-500">
          {reelStats.map(({ icon: Icon, value }) => (
            <span key={value} className="flex flex-col items-center gap-0.5">
              <Icon size={14} />
              <span className="text-[7px] font-medium">{value}</span>
            </span>
          ))}
        </div>

        {/* caption */}
        <div className="absolute inset-x-0 bottom-4 pl-3 pr-10">
          <div className="flex items-center gap-1.5">
            <span className="h-4 w-4 rounded-full border border-neutral-300 bg-white" />
            <span className="text-[8px] font-semibold text-neutral-900">
              invisiedge
            </span>
            <span
              className="rounded-full px-1.5 py-[1px] text-[7px] font-semibold"
              style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
            >
              Follow
            </span>
          </div>
          <p className="mt-1 text-[8px] leading-tight text-neutral-500">
            Brand story reel · 60s
          </p>
        </div>

        {/* scrub bar */}
        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-neutral-200">
          <motion.div
            className="h-full origin-left"
            style={{ backgroundColor: PURPLE }}
            animate={reduce ? { scaleX: 0.4 } : { scaleX: [0, 1] }}
            transition={
              reduce
                ? undefined
                : { duration: 7, repeat: Infinity, ease: "linear" }
            }
          />
        </div>
      </div>
    </PhoneShell>
  );
}

function CalendarPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={`${CARD} ${FRAME} flex w-full flex-col p-5`}>
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
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: platformColor[key] }}
              />
              {platformName[key]}
            </span>
          ))}
        </div>
      </div>

      {/* Month calendar */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-neutral-700">
            July 2026
          </span>
          <span className="text-[10px] font-medium text-neutral-400">
            8 scheduled
          </span>
        </div>
        <div className="grid grid-cols-7 gap-x-1 gap-y-1 text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((w, i) => (
            <span
              key={i}
              className="text-[8px] font-semibold uppercase tracking-wide text-neutral-300"
            >
              {w}
            </span>
          ))}
          {Array.from({ length: calLeadingBlanks }).map((_, i) => (
            <span key={`b${i}`} />
          ))}
          {calDays.map((day) => {
            const posts = calScheduled[day];
            const isToday = day === calToday;
            return (
              <div
                key={day}
                className={`flex h-8 flex-col items-center justify-center rounded-md text-[10px] ${
                  isToday ? "font-semibold" : "text-neutral-500"
                }`}
                style={
                  isToday
                    ? { color: PURPLE, backgroundColor: "rgba(82,16,248,0.07)" }
                    : undefined
                }
              >
                {day}
                <span className="mt-0.5 flex h-1 items-center gap-0.5">
                  {posts?.map((key, pi) => (
                    <span
                      key={pi}
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: platformColor[key] }}
                    />
                  ))}
                </span>
              </div>
            );
          })}
        </div>
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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: EASE_OUT }}
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border text-[9px] font-semibold"
              style={{
                color: platformColor[post.platform],
                borderColor: `${platformColor[post.platform]}33`,
              }}
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
            <Heart size={12} className="text-neutral-400" /> 8.1k
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle size={12} className="text-neutral-400" /> 640
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
        className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl border"
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
        <div className="absolute left-3 top-3 ">
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
        <div className="w-full flex justify-center">
          <div className="rounded-full p-1 border border-neutral-200 flex gap-4 items-center w-fit pr-4">
            <img src="https://imgs.search.brave.com/G3UvNaiAK0qLtlTzR5gEzWFcDFIPuk5IwgEkSTx1YO8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/MTM4ODg4Ny9waG90/by9tZWRpdW0tcHJv/ZmlsZS1wb3J0cmFp/dC1vZi15b3VuZy1h/c2lhbi13b21hbi5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZTkxUFRMYnpBVDJG/X2k5ZUYxeW82RS1h/OUR4UF9XNHVMODNN/WUhVNlhHRT0" alt="" className="rounded-full w-12 h-12" />
            <div className="flex h-8 items-center justify-center gap-[3px] w-fit">
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
  social: LinkedInVisual,
  "ai-video": AiVideoVisual,
  crm: CrmVisual,
  "lead-gen": LeadGenVisual,
  gtm: GtmVisual,
};

/* ================================================================== *
 * TAB PANELS — each service's first tab shows the rich scene above;
 * the remaining tabs crossfade to one of these focused panels. Built
 * from a few reusable primitives so every service stays consistent
 * while each tab reads as a genuinely different view.
 * ================================================================== */

/** Shared brand badge header used by every panel. */
function PanelHeader({ badge }: { badge: string }) {
  return (
    <div className="flex items-center gap-2 self-start rounded-full bg-[#5210F8]/8 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#5210F8]">
      {badge}
    </div>
  );
}

const PANEL_SHELL = `${CARD} ${FRAME} flex w-full flex-col p-5`;

function ListPanel({
  badge,
  title,
  items,
}: {
  badge: string;
  title: string;
  items: string[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className={PANEL_SHELL}>
      <PanelHeader badge={badge} />
      <p className="mt-4 text-lg font-semibold tracking-tight text-[#111]">
        {title}
      </p>
      <div className="mt-4 flex flex-1 flex-col justify-center gap-2.5">
        {items.map((item, i) => (
          <motion.div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-neutral-200/70 bg-white px-3 py-2.5"
            initial={reduce ? false : { opacity: 0, x: -8, filter: "blur(4px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: EASE_OUT }}
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#5210F8]/10 text-[#5210F8]">
              <Check size={12} strokeWidth={2.5} />
            </span>
            <span className="text-[12px] font-medium text-neutral-700">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function BarsPanel({
  badge,
  title,
  stat,
  statLabel,
  bars,
}: {
  badge: string;
  title: string;
  stat: string;
  statLabel: string;
  bars: { label: string; pct: number }[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className={PANEL_SHELL}>
      <PanelHeader badge={badge} />
      <div className="mt-4">
        <p className="text-3xl font-bold leading-none tracking-tight text-[#111]">
          {stat}
        </p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-neutral-400">
          {statLabel}
        </p>
      </div>
      <p className="mb-3 mt-5 text-[12px] font-semibold text-neutral-600">
        {title}
      </p>
      <div className="flex flex-1 flex-col justify-center gap-3">
        {bars.map((b, i) => (
          <div key={b.label}>
            <div className="mb-1 flex items-center justify-between text-[10px]">
              <span className="font-medium text-neutral-600">{b.label}</span>
              <span className="font-semibold tabular-nums text-neutral-400">
                {b.pct}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                className="h-full origin-left rounded-full"
                style={{
                  background: `linear-gradient(to right, ${PURPLE}, ${LAVENDER})`,
                }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: b.pct / 100 }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: EASE_OUT }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RingPanel({
  badge,
  title,
  center,
  segments,
}: {
  badge: string;
  title: string;
  center: string;
  segments: { label: string; pct: number; color: string }[];
}) {
  const reduce = useReducedMotion();
  const stops = segments
    .map((s, i) => {
      const start = segments
        .slice(0, i)
        .reduce((sum, seg) => sum + seg.pct, 0);
      return `${s.color} ${start}% ${start + s.pct}%`;
    })
    .join(", ");

  return (
    <div className={PANEL_SHELL}>
      <PanelHeader badge={badge} />
      <p className="mt-4 text-[12px] font-semibold text-neutral-600">{title}</p>
      <div className="flex flex-1 items-center justify-center gap-6">
        <motion.div
          className="relative h-32 w-32 shrink-0 rounded-full"
          style={{ background: `conic-gradient(${stops})` }}
          initial={reduce ? false : { opacity: 0, rotate: -80, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="absolute inset-[14px] flex items-center justify-center rounded-full bg-white">
            <span className="text-lg font-bold tracking-tight text-[#111]">
              {center}
            </span>
          </div>
        </motion.div>
        <div className="flex flex-col gap-2.5">
          {segments.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex items-center gap-2 text-[11px]"
              initial={reduce ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: EASE_OUT }}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              <span className="font-medium text-neutral-600">{s.label}</span>
              <span className="ml-auto pl-3 font-semibold tabular-nums text-neutral-400">
                {s.pct}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepsPanel({
  badge,
  title,
  steps,
}: {
  badge: string;
  title: string;
  steps: { title: string; desc: string }[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className={PANEL_SHELL}>
      <PanelHeader badge={badge} />
      <p className="mb-4 mt-4 text-lg font-semibold tracking-tight text-[#111]">
        {title}
      </p>
      <div className="flex flex-1 flex-col justify-center">
        {steps.map((st, i) => (
          <motion.div
            key={st.title}
            className="flex gap-3"
            initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: EASE_OUT }}
          >
            <div className="flex flex-col items-center">
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                style={{ backgroundColor: PURPLE }}
              >
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="my-1 w-px flex-1 bg-neutral-200" />
              )}
            </div>
            <div className="pb-4">
              <p className="text-[13px] font-semibold text-[#111]">{st.title}</p>
              <p className="text-[11px] leading-relaxed text-neutral-400">
                {st.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * WEBSITE · Next.js — an editor with the page component open.
 * ------------------------------------------------------------------ */
const CODE_INK = {
  key: "#C47DFD",
  tag: "#7DD3FC",
  attr: "#FCD34D",
  str: "#86EFAC",
  fn: "#F0ABFC",
  punc: "#8A8AA3",
  plain: "#E7E7EF",
} as const;
type Ink = keyof typeof CODE_INK;

const codeLines: [string, Ink][][] = [
  [
    ["export default", "key"],
    [" function ", "plain"],
    ["Page", "fn"],
    ["() {", "punc"],
  ],
  [
    ["  return", "key"],
    [" (", "punc"],
  ],
  [
    ["    <", "punc"],
    ["main", "tag"],
    [" className", "attr"],
    ["=", "punc"],
    ['"hero"', "str"],
    [">", "punc"],
  ],
  [
    ["      <", "punc"],
    ["h1", "tag"],
    [">", "punc"],
    ["Built for Growth.", "plain"],
    ["</", "punc"],
    ["h1", "tag"],
    [">", "punc"],
  ],
  [
    ["      <", "punc"],
    ["Button", "fn"],
    [" href", "attr"],
    ["=", "punc"],
    ['"/contact"', "str"],
    [">", "punc"],
  ],
  [["        Get started", "plain"]],
  [
    ["      </", "punc"],
    ["Button", "fn"],
    [">", "punc"],
  ],
  [
    ["    </", "punc"],
    ["main", "tag"],
    [">", "punc"],
  ],
  [["  )", "punc"]],
  [["}", "punc"]],
];

const codeTabs = [
  { name: "page.tsx", active: true },
  { name: "layout.tsx", active: false },
  { name: "globals.css", active: false },
];

function CodeEditorPanel() {
  const reduce = useReducedMotion();

  return (
    <div
      className={`${FRAME} flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-[#0E0E14] shadow-[0_20px_50px_-24px_rgba(7,44,85,0.7)]`}
    >
      {/* File tabs */}
      <div className="flex shrink-0 items-center border-b border-white/8 bg-[#15151E]">
        {codeTabs.map((tab) => (
          <span
            key={tab.name}
            className={`relative flex items-center gap-1.5 px-3 py-2.5 text-[10px] font-medium ${
              tab.active ? "bg-[#0E0E14] text-white" : "text-neutral-500"
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-[2px]"
              style={{ backgroundColor: tab.active ? LAVENDER : "#3f3f46" }}
            />
            {tab.name}
            {tab.active && (
              <span
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ backgroundColor: PURPLE }}
              />
            )}
          </span>
        ))}
        <span className="ml-auto pr-3 text-[9px] font-medium tracking-wide text-neutral-600">
          app / page.tsx
        </span>
      </div>

      {/* Code */}
      <div className="flex min-h-0 flex-1 overflow-hidden py-3 font-mono text-[11px] leading-[1.75]">
        {/* gutter */}
        <div className="shrink-0 select-none px-3 text-right text-neutral-700">
          {codeLines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>
        <div className="min-w-0 flex-1 pr-4">
          {codeLines.map((tokens, i) => (
            <motion.div
              key={i}
              className="whitespace-pre"
              initial={reduce ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05, ease: EASE_OUT }}
            >
              {tokens.map(([text, ink], t) => (
                <span key={t} style={{ color: CODE_INK[ink] }}>
                  {text}
                </span>
              ))}
              {i === codeLines.length - 5 && (
                <motion.span
                  className="ml-px inline-block h-[11px] w-[1.5px] translate-y-[2px] bg-white"
                  animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                  transition={loop(1.1)}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex shrink-0 items-center gap-3 border-t border-white/8 bg-[#15151E] px-3 py-2 text-[9px] font-medium text-neutral-500">
        <span
          className="flex items-center gap-1.5 rounded-full px-2 py-0.5 text-white"
          style={{ backgroundColor: PURPLE }}
        >
          <Zap size={9} />
          Next.js 15
        </span>
        <motion.span
          className="flex items-center gap-1 text-emerald-400"
          animate={reduce ? undefined : { opacity: [0.45, 1, 0.45] }}
          transition={loop(3)}
        >
          <Check size={10} />
          Compiled in 212ms
        </motion.span>
        <span className="ml-auto hidden sm:inline">localhost:3000</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * WEBSITE · Landing pages — a page mock in a browser, with a second
 * hero variant floating over its bottom-right corner.
 * ------------------------------------------------------------------ */
function LandingPagePanel() {
  const reduce = useReducedMotion();

  return (
    <div className="relative">
      <div
        className={`${FRAME} flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-md`}
      >
        {/* browser chrome */}
        <div className="flex shrink-0 items-center gap-3 border-b border-neutral-100 px-3 py-2">
          <div className="flex items-center gap-1.5">
            {["bg-red-500", "bg-yellow-400", "bg-green-500"].map((c) => (
              <span key={c} className={`h-2 w-2 rounded-full ${c}`} />
            ))}
          </div>
          <span className="mx-auto flex items-center gap-1.5 rounded-full bg-neutral-50 px-3 py-0.5 text-[9px] font-medium text-neutral-400">
            <Globe size={9} />
            invisiedge.com/growth
          </span>
        </div>

        {/* page — drifts slowly, as if being scrolled */}
        <div className="relative min-h-0 flex-1 overflow-hidden bg-neutral-50">
          <motion.div
            className="p-3"
            animate={reduce ? undefined : { y: [0, -18, 0] }}
            transition={loop(12)}
          >
            {/* nav */}
            <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-2 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span
                  className="h-3 w-3 rounded-[3px]"
                  style={{ backgroundColor: PURPLE }}
                />
                <span className="text-[9px] font-bold tracking-tight text-[#111]">
                  invisiedge
                </span>
              </div>
              <div className="hidden items-center gap-2.5 sm:flex">
                {["Work", "Services", "About"].map((l) => (
                  <span key={l} className="text-[8px] text-neutral-400">
                    {l}
                  </span>
                ))}
                <span
                  className="rounded-full px-2 py-0.5 text-[8px] font-semibold text-white"
                  style={{ backgroundColor: PURPLE }}
                >
                  Book a call
                </span>
              </div>
            </div>

            {/* hero */}
            <div
              className="relative mt-2 overflow-hidden rounded-xl px-4 py-6 text-center"
              style={{ background: `linear-gradient(150deg, ${PURPLE}, ${NAVY})` }}
            >
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(90px 90px at 25% 30%, rgba(196,125,253,0.55), transparent)",
                }}
                animate={reduce ? undefined : { x: ["-18%", "42%", "-18%"] }}
                transition={loop(9)}
              />
              <p className="relative text-[15px] font-semibold leading-tight tracking-tight text-white">
                Built for Growth.
                <br />
                Designed for Impact.
              </p>
              <p className="relative mx-auto mt-1.5 max-w-[80%] text-[8px] leading-relaxed text-white/60">
                Brand, website and demand generation — shipped by one team.
              </p>
              <div className="relative mt-3 flex items-center justify-center gap-1.5">
                <span className="flex items-center gap-0.5 rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-[#111]">
                  Get started
                  <ArrowUpRight size={9} strokeWidth={2.5} />
                </span>
                <span className="rounded-full border border-white/30 px-2.5 py-1 text-[8px] font-semibold text-white/80">
                  See our work
                </span>
              </div>
            </div>

            {/* logo strip */}
            <div className="mt-2 flex items-center justify-center gap-2.5 rounded-lg bg-white px-3 py-2 shadow-sm">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-8 rounded-full bg-neutral-100"
                />
              ))}
            </div>

            {/* feature cards */}
            <div className="mt-2 grid grid-cols-3 gap-2">
              {[Sparkles, TrendingUp, Rocket].map((Icon, i) => (
                <motion.div
                  key={i}
                  className="rounded-lg bg-white p-2 shadow-sm"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: EASE_OUT,
                  }}
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded-[4px] text-white"
                    style={{ backgroundColor: i === 0 ? PURPLE : i === 1 ? LAVENDER : NAVY }}
                  >
                    <Icon size={9} />
                  </span>
                  <span className="mt-1.5 block h-1 w-3/4 rounded-full bg-neutral-200" />
                  <span className="mt-1 block h-1 w-1/2 rounded-full bg-neutral-100" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* second hero — an alternate section stacked over the corner */}
      <motion.div
        className="absolute -bottom-7 right-2 z-20 w-[52%] max-w-[210px] sm:right-4"
        initial={reduce ? false : { opacity: 0, y: 18, rotate: 3 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
      >
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_28px_60px_-22px_rgba(7,44,85,0.55)]">
          <div className="mb-1 flex items-center justify-between px-1">
            <span className="text-[8px] font-semibold text-neutral-500">
              Hero · Variant B
            </span>
            <span
              className="rounded-full px-1.5 py-0.5 text-[7px] font-bold text-white"
              style={{ backgroundColor: "#22C55E" }}
            >
              +38% CVR
            </span>
          </div>
          <div
            className="relative overflow-hidden rounded-lg px-3 py-4"
            style={{ background: `linear-gradient(140deg, ${LAVENDER}, ${PURPLE})` }}
          >
            <p className="text-[10px] font-semibold leading-tight text-white">
              Turn traffic into
              <br />
              booked calls.
            </p>
            <div className="mt-2 flex items-center gap-1">
              <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-bold text-[#111]">
                Start free
              </span>
              <span className="h-1 w-8 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * WEBSITE · Webflow — the Framer builder: layers, canvas, inspector.
 * ------------------------------------------------------------------ */
function FramerMark({ size = 12 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" style={{ height: size, width: size }} fill="currentColor">
      <path d="M4 0h16v8h-8zM4 8h16l-8 8H4zM4 16h8v8z" />
    </svg>
  );
}

const framerLayers = [
  { name: "Desktop", depth: 0 },
  { name: "Hero", depth: 1 },
  { name: "Heading", depth: 2, selected: true },
  { name: "CTA", depth: 2 },
  { name: "Features", depth: 1 },
];

function FramerPanel() {
  const reduce = useReducedMotion();

  return (
    <div
      className={`${FRAME} flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-md`}
    >
      {/* toolbar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-neutral-100 px-3 py-2">
        <span
          className="flex h-5 w-5 items-center justify-center rounded-md text-white"
          style={{ backgroundColor: "#111" }}
        >
          <FramerMark size={9} />
        </span>
        <span className="text-[10px] font-semibold text-[#111]">
          invisiedge
          <span className="font-normal text-neutral-300"> / Home</span>
        </span>
        <div className="mx-auto hidden items-center gap-1 rounded-md bg-neutral-50 p-0.5 sm:flex">
          {[Monitor, Tablet, Smartphone].map((Icon, i) => (
            <span
              key={i}
              className={`flex h-5 w-6 items-center justify-center rounded-[5px] ${
                i === 0 ? "bg-white text-[#111] shadow-sm" : "text-neutral-400"
              }`}
            >
              <Icon size={11} />
            </span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="h-5 w-5 rounded-full border-2 border-white bg-[#C47DFD]" />
          <div className="-ml-3 h-5 w-5 rounded-full border-2 border-white bg-[#072C55]" />
          <button
            className="rounded-md px-2.5 py-1 text-[10px] font-semibold text-white"
            style={{ backgroundColor: PURPLE }}
          >
            Publish
          </button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* layers */}
        <div className="hidden w-28 shrink-0 border-r border-neutral-100 py-2.5 sm:block">
          <p className="px-2.5 pb-1.5 text-[8px] font-semibold uppercase tracking-wider text-neutral-400">
            Layers
          </p>
          {framerLayers.map((layer, i) => (
            <motion.div
              key={layer.name}
              className={`flex items-center gap-1.5 py-1.5 pr-2 text-[10px] ${
                layer.selected
                  ? "bg-[#5210F8]/6 font-medium text-[#5210F8]"
                  : "text-neutral-500"
              }`}
              style={{ paddingLeft: 10 + layer.depth * 8 }}
              initial={reduce ? false : { opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06, ease: EASE_OUT }}
            >
              <Layers
                size={9}
                style={{ color: layer.selected ? PURPLE : "#c4c4c4" }}
              />
              {layer.name}
            </motion.div>
          ))}
        </div>

        {/* canvas */}
        <div className="relative flex min-w-0 flex-1 items-center justify-center bg-[#f1f1f3] p-4">
          <span className="absolute left-3 top-2 text-[8px] font-medium text-neutral-400">
            Desktop · 1200
          </span>
          <motion.div
            className="relative w-full max-w-[190px] rounded-lg bg-white p-2 shadow-[0_10px_30px_-12px_rgba(7,44,85,0.35)]"
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            <div
              className="h-14 rounded-md"
              style={{ background: `linear-gradient(140deg, ${PURPLE}, ${NAVY})` }}
            />
            {/* selected heading */}
            <div className="relative mt-2 px-0.5">
              <p className="text-[11px] font-semibold tracking-tight text-[#111]">
                Built for Growth.
              </p>
              <span
                className="pointer-events-none absolute -inset-[3px] rounded-[5px] border"
                style={{ borderColor: PURPLE }}
              />
              <Handle className="-left-[6px] -top-[6px]" />
              <Handle className="-right-[6px] -top-[6px]" />
              <Handle className="-bottom-[6px] -left-[6px]" />
              <Handle className="-bottom-[6px] -right-[6px]" />
            </div>
            <div className="mt-3 flex items-center gap-1.5 px-0.5">
              <span
                className="rounded-full px-2 py-0.5 text-[8px] font-bold text-white"
                style={{ backgroundColor: PURPLE }}
              >
                Get started
              </span>
              <span className="h-1 w-10 rounded-full bg-neutral-100" />
            </div>
          </motion.div>
        </div>

        {/* inspector */}
        <div className="hidden w-32 shrink-0 border-l border-neutral-100 p-2.5 md:block">
          <p className="pb-2 text-[8px] font-semibold uppercase tracking-wider text-neutral-400">
            Text
          </p>
          <div className="space-y-1.5 text-[9px]">
            {[
              { label: "Font", value: "Geist" },
              { label: "Size", value: "56" },
              { label: "Weight", value: "Semibold" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between rounded-md bg-neutral-50 px-1.5 py-1"
              >
                <span className="text-neutral-400">{row.label}</span>
                <span className="font-medium text-neutral-600">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between rounded-md bg-neutral-50 px-1.5 py-1">
              <span className="text-neutral-400">Fill</span>
              <span className="flex items-center gap-1 font-medium text-neutral-600">
                <span
                  className="h-2.5 w-2.5 rounded-[3px] border border-black/10"
                  style={{ backgroundColor: PURPLE }}
                />
                5210F8
              </span>
            </div>
          </div>

          <p className="pb-1.5 pt-3 text-[8px] font-semibold uppercase tracking-wider text-neutral-400">
            Interaction
          </p>
          <motion.div
            className="rounded-md border border-dashed px-1.5 py-1.5 text-[9px]"
            style={{ borderColor: "rgba(82,16,248,0.35)" }}
            animate={
              reduce
                ? undefined
                : { backgroundColor: ["rgba(82,16,248,0.04)", "rgba(82,16,248,0.12)", "rgba(82,16,248,0.04)"] }
            }
            transition={loop(3.2)}
          >
            <span className="flex items-center gap-1 font-medium text-[#5210F8]">
              <MousePointerClick size={9} />
              On tap
            </span>
            <span className="mt-0.5 block text-neutral-400">Smooth scroll →</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * SEO · Keywords — Search Console query report with position movement.
 * ------------------------------------------------------------------ */
function GoogleMark() {
  const dots = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];
  return (
    <span className="grid h-3 w-3 grid-cols-2 gap-[1px]">
      {dots.map((c) => (
        <span
          key={c}
          className="rounded-[1px]"
          style={{ backgroundColor: c }}
        />
      ))}
    </span>
  );
}

const keywordChips = [
  { word: "b2b saas branding", vol: "3.6K" },
  { word: "go-to-market strategy", vol: "8.1K" },
  { word: "brand positioning agency", vol: "1.9K" },
  { word: "lead generation services", vol: "12K" },
];

const keywordRows = [
  { query: "b2b saas branding agency", clicks: "1.2K", impr: "18.4K", pos: "3.2", delta: "2.1" },
  { query: "go-to-market strategy", clicks: "940", impr: "22.1K", pos: "5.8", delta: "1.4" },
  { query: "brand positioning agency", clicks: "610", impr: "9.7K", pos: "4.1", delta: "3.0" },
  { query: "lead generation services", clicks: "480", impr: "31.2K", pos: "8.6", delta: "0.7" },
];

function KeywordsPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Keywords" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          <GoogleMark />
          Search Console
        </span>
      </div>

      {/* tracked keywords */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {keywordChips.map((k, i) => (
          <motion.span
            key={k.word}
            className="flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-[10px] font-medium text-neutral-600"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_OUT }}
          >
            <Search size={9} className="text-neutral-300" />
            {k.word}
            <span className="text-neutral-300">{k.vol}/mo</span>
          </motion.span>
        ))}
      </div>

      {/* query table */}
      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-neutral-100 pb-1.5 text-[8px] font-semibold uppercase tracking-wider text-neutral-400">
          <span className="flex-1">Top query</span>
          <span className="w-10 text-right">Clicks</span>
          <span className="hidden w-12 text-right sm:inline">Impr.</span>
          <span className="w-14 text-right">Position</span>
        </div>
        {keywordRows.map((row, i) => (
          <motion.div
            key={row.query}
            className="flex items-center gap-3 border-b border-neutral-50 py-2 text-[11px]"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
          >
            <span className="flex-1 truncate font-medium text-neutral-700">
              {row.query}
            </span>
            <span className="w-10 text-right font-semibold tabular-nums text-[#111]">
              {row.clicks}
            </span>
            <span className="hidden w-12 text-right tabular-nums text-neutral-400 sm:inline">
              {row.impr}
            </span>
            <span className="flex w-14 items-center justify-end gap-1 tabular-nums">
              <span className="font-semibold text-[#111]">{row.pos}</span>
              <span className="flex items-center text-[9px] font-semibold text-emerald-500">
                <ArrowUp size={9} strokeWidth={3} />
                {row.delta}
              </span>
            </span>
          </motion.div>
        ))}

        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="text-[10px] text-neutral-400">
            1,240 keywords tracked
          </span>
          <span
            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
            style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
          >
            <TrendingUp size={10} />
            +18 in top 3
          </span>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * SEO · Content — each piece shown as a page preview with its details.
 * ------------------------------------------------------------------ */
const contentPieces = [
  {
    kind: "Pillar page",
    title: "The complete guide to B2B SaaS branding",
    desc: "Authoritative hub covering positioning, identity and messaging.",
    meta: ["2,400 words", "12 internal links", "SEO score 94"],
    accent: PURPLE,
  },
  {
    kind: "Cluster post",
    title: "How to build a go-to-market strategy",
    desc: "Long-tail supporting article that feeds authority back to the pillar.",
    meta: ["1,150 words", "6 internal links", "SEO score 88"],
    accent: LAVENDER,
  },
];

/** Miniature of the published page — the thumbnail beside each row. */
function PagePreview({ accent }: { accent: string }) {
  return (
    <div className="flex h-full w-full flex-col gap-1.5 rounded-xl border border-neutral-200/80 bg-white p-2 shadow-sm">
      <div
        className="h-6 shrink-0 rounded-md"
        style={{ background: `linear-gradient(140deg, ${accent}, ${NAVY})` }}
      />
      <span className="h-1 w-4/5 rounded-full bg-neutral-200" />
      <span className="h-1 w-full rounded-full bg-neutral-100" />
      <span className="h-1 w-full rounded-full bg-neutral-100" />
      <span className="h-1 w-2/3 rounded-full bg-neutral-100" />
      <div className="mt-auto flex gap-1">
        <span className="h-3 flex-1 rounded-[3px] bg-neutral-100" />
        <span className="h-3 flex-1 rounded-[3px] bg-neutral-100" />
      </div>
    </div>
  );
}

function ContentPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Content" />
        <span className="flex items-center gap-1.5 text-[10px] font-medium text-neutral-400">
          <Link2 size={11} />
          Topic cluster
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-center gap-3">
        {contentPieces.map((piece, i) => (
          <motion.div
            key={piece.title}
            className="flex gap-3.5 rounded-2xl border border-neutral-200/70 bg-white p-3"
            initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.45, delay: i * 0.12, ease: EASE_OUT }}
          >
            <div className="h-[92px] w-[68px] shrink-0">
              <PagePreview accent={piece.accent} />
            </div>

            <div className="flex min-w-0 flex-1 flex-col justify-center">
              <span
                className="flex w-fit items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-semibold"
                style={{
                  color: piece.accent,
                  backgroundColor: `${piece.accent}14`,
                }}
              >
                <FileText size={9} />
                {piece.kind}
              </span>
              <p className="mt-1.5 text-[13px] font-semibold leading-tight text-[#111]">
                {piece.title}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-neutral-400">
                {piece.desc}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                {piece.meta.map((m) => (
                  <span
                    key={m}
                    className="flex items-center gap-1 text-[9px] font-medium text-neutral-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-300" />
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * SEO · Reporting — the source-mix ring up top, the numbers beneath it.
 * ------------------------------------------------------------------ */
const reportSegments = [
  { label: "Organic", pct: 62, color: PURPLE },
  { label: "Direct", pct: 22, color: LAVENDER },
  { label: "Referral", pct: 16, color: NAVY },
];

const reportStats = [
  { label: "Sessions", value: "25.2M", change: "+34%" },
  { label: "Conversions", value: "8.4K", change: "+21%" },
  { label: "Avg. position", value: "5.6", change: "+2.3" },
];

const reportMovers = [
  { page: "/guide/saas-branding", clicks: "4.7K", pct: 82 },
  { page: "/services/seo", clicks: "3.1K", pct: 58 },
  { page: "/blog/gtm-strategy", clicks: "1.8K", pct: 34 },
];

function ReportingPanel() {
  const reduce = useReducedMotion();
  const stops = reportSegments
    .map((s, i) => {
      const start = reportSegments
        .slice(0, i)
        .reduce((sum, seg) => sum + seg.pct, 0);
      return `${s.color} ${start}% ${start + s.pct}%`;
    })
    .join(", ");

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Reporting" />
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          Last 90 days
        </span>
      </div>

      {/* Ring — traffic source mix, kept at the top */}
      <div className="mt-4 flex items-center gap-5">
        <motion.div
          className="relative h-24 w-24 shrink-0 rounded-full"
          style={{ background: `conic-gradient(${stops})` }}
          initial={reduce ? false : { opacity: 0, rotate: -80, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="absolute inset-[11px] flex flex-col items-center justify-center rounded-full bg-white">
            <span className="text-sm font-bold tracking-tight text-[#111]">
              25.2M
            </span>
            <span className="text-[8px] text-neutral-400">sessions</span>
          </div>
        </motion.div>

        <div className="flex flex-1 flex-col gap-2">
          {reportSegments.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex items-center gap-2 text-[11px]"
              initial={reduce ? false : { opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: EASE_OUT }}
            >
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              <span className="font-medium text-neutral-600">{s.label}</span>
              <span className="ml-auto font-semibold tabular-nums text-neutral-400">
                {s.pct}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Headline numbers */}
      <div className="mt-4 grid grid-cols-3 gap-2 border-y border-neutral-100 py-3">
        {reportStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.08, ease: EASE_OUT }}
          >
            <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
              {s.label}
            </p>
            <p className="mt-0.5 text-base font-semibold leading-none tracking-tight text-[#111]">
              {s.value}
            </p>
            <span className="mt-1 flex items-center gap-0.5 text-[9px] font-semibold text-emerald-500">
              <ArrowUp size={9} strokeWidth={3} />
              {s.change}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Top performing pages */}
      <p className="mb-2 mt-3 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
        Top performing pages
      </p>
      <div className="space-y-2">
        {reportMovers.map((m, i) => (
          <div key={m.page} className="flex items-center gap-2.5">
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between text-[10px]">
                <span className="truncate font-medium text-neutral-600">
                  {m.page}
                </span>
                <span className="font-semibold tabular-nums text-neutral-400">
                  {m.clicks}
                </span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  className="h-full origin-left rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${PURPLE}, ${LAVENDER})`,
                  }}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: m.pct / 100 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.35 + i * 0.08,
                    ease: EASE_OUT,
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

type Panel =
  | { kind: "custom"; component: ComponentType }
  | { kind: "list"; badge: string; title: string; items: string[] }
  | {
      kind: "bars";
      badge: string;
      title: string;
      stat: string;
      statLabel: string;
      bars: { label: string; pct: number }[];
    }
  | {
      kind: "ring";
      badge: string;
      title: string;
      center: string;
      segments: { label: string; pct: number; color: string }[];
    }
  | {
      kind: "steps";
      badge: string;
      title: string;
      steps: { title: string; desc: string }[];
    };

function renderPanel(p: Panel) {
  switch (p.kind) {
    case "custom": {
      const Custom = p.component;
      return <Custom />;
    }
    case "list":
      return <ListPanel badge={p.badge} title={p.title} items={p.items} />;
    case "bars":
      return (
        <BarsPanel
          badge={p.badge}
          title={p.title}
          stat={p.stat}
          statLabel={p.statLabel}
          bars={p.bars}
        />
      );
    case "ring":
      return (
        <RingPanel
          badge={p.badge}
          title={p.title}
          center={p.center}
          segments={p.segments}
        />
      );
    case "steps":
      return <StepsPanel badge={p.badge} title={p.title} steps={p.steps} />;
  }
}

/** Panels for tabs 1..3 of each service (tab 0 renders the rich scene). */
const EXTRA_PANELS: Record<ServiceVisualType, [Panel, Panel, Panel]> = {
  brand: [
    {
      kind: "list",
      badge: "Identity",
      title: "A cohesive identity system",
      items: [
        "Logo system & lockups",
        "Colour palette & tokens",
        "Typography scale",
        "Iconography & imagery",
        "Visual direction",
      ],
    },
    {
      kind: "steps",
      badge: "Messaging",
      title: "Messaging framework",
      steps: [
        { title: "Tagline", desc: "Built for Growth. Designed for Impact." },
        { title: "Value proposition", desc: "The one thing you own in the market." },
        { title: "Tone of voice", desc: "Confident · Human · Clear · Modern" },
      ],
    },
    {
      kind: "bars",
      badge: "Guidelines",
      title: "On-brand consistency across touchpoints",
      stat: "91%",
      statLabel: "Brand consistency",
      bars: [
        { label: "Website", pct: 96 },
        { label: "Social", pct: 88 },
        { label: "Sales deck", pct: 92 },
        { label: "Email", pct: 84 },
      ],
    },
  ],
  website: [
    { kind: "custom", component: CodeEditorPanel },
    { kind: "custom", component: LandingPagePanel },
    { kind: "custom", component: FramerPanel },
  ],
  seo: [
    { kind: "custom", component: KeywordsPanel },
    { kind: "custom", component: ContentPanel },
    { kind: "custom", component: ReportingPanel },
  ],
  social: [
    { kind: "custom", component: InstagramPanel },
    { kind: "custom", component: ReelsPanel },
    { kind: "custom", component: CalendarPanel },
  ],
  "ai-video": [
    {
      kind: "list",
      badge: "Voiceovers",
      title: "Studio-grade AI voice",
      items: [
        "Natural, human-like delivery",
        "30+ languages & accents",
        "Emotion & pacing control",
        "Pronunciation tuning",
        "Cloned brand voice",
      ],
    },
    {
      kind: "ring",
      badge: "Short-form",
      title: "Output format mix",
      center: "9:16",
      segments: [
        { label: "Vertical 9:16", pct: 55, color: PURPLE },
        { label: "Square 1:1", pct: 25, color: LAVENDER },
        { label: "Wide 16:9", pct: 20, color: NAVY },
      ],
    },
    {
      kind: "steps",
      badge: "Scripts",
      title: "From brief to final cut",
      steps: [
        { title: "Brief", desc: "Goal, audience and key message." },
        { title: "AI draft", desc: "Hook → body → call to action." },
        { title: "Human polish", desc: "On-brand tone and final edit." },
      ],
    },
  ],
  crm: [
    {
      kind: "bars",
      badge: "Email",
      title: "Lifecycle email funnel",
      stat: "18%",
      statLabel: "Reply rate",
      bars: [
        { label: "Sent", pct: 100 },
        { label: "Opened", pct: 68 },
        { label: "Clicked", pct: 32 },
        { label: "Replied", pct: 18 },
      ],
    },
    {
      kind: "steps",
      badge: "WhatsApp",
      title: "Automated WhatsApp journey",
      steps: [
        { title: "Opt-in", desc: "Lead subscribes from a form or ad." },
        { title: "Instant welcome", desc: "Auto-reply within seconds." },
        { title: "Nurture drip", desc: "Timed follow-ups over 3 days." },
      ],
    },
    {
      kind: "ring",
      badge: "Pipelines",
      title: "Deals by stage",
      center: "$1.2M",
      segments: [
        { label: "Qualified", pct: 42, color: PURPLE },
        { label: "Proposal", pct: 33, color: LAVENDER },
        { label: "Closed won", pct: 25, color: NAVY },
      ],
    },
  ],
  "lead-gen": [
    {
      kind: "bars",
      badge: "Email",
      title: "Cold email performance",
      stat: "18%",
      statLabel: "Reply rate",
      bars: [
        { label: "Delivered", pct: 98 },
        { label: "Opened", pct: 61 },
        { label: "Replied", pct: 18 },
        { label: "Booked", pct: 9 },
      ],
    },
    {
      kind: "list",
      badge: "ICP",
      title: "Ideal customer profile",
      items: [
        "Industry: B2B SaaS",
        "Company size: 50–500",
        "Role: Founder / CMO",
        "Region: Global",
        "Buying signal: hiring",
      ],
    },
    {
      kind: "steps",
      badge: "Sequences",
      title: "Multi-touch outreach cadence",
      steps: [
        { title: "Day 1", desc: "Connection request with a personal note." },
        { title: "Day 3", desc: "Value-led follow-up message." },
        { title: "Day 6", desc: "Relevant case study + soft CTA." },
      ],
    },
  ],
  gtm: [
    {
      kind: "steps",
      badge: "Events",
      title: "End-to-end event motion",
      steps: [
        { title: "Pre-event", desc: "Invites, landing page and sign-ups." },
        { title: "Live", desc: "Booth, demos and lead capture." },
        { title: "Follow-up", desc: "Nurture and route leads to sales." },
      ],
    },
    {
      kind: "ring",
      badge: "Paid Media",
      title: "Ad spend by channel",
      center: "312%",
      segments: [
        { label: "LinkedIn", pct: 45, color: PURPLE },
        { label: "Meta", pct: 30, color: LAVENDER },
        { label: "Google", pct: 25, color: NAVY },
      ],
    },
    {
      kind: "bars",
      badge: "Campaigns",
      title: "Reach by channel",
      stat: "2.4M",
      statLabel: "Total reach",
      bars: [
        { label: "Paid media", pct: 82 },
        { label: "Events", pct: 64 },
        { label: "Email", pct: 58 },
        { label: "Organic", pct: 46 },
      ],
    },
  ],
};

export default function ServiceAnimatedVisual({
  type,
  active = 0,
}: {
  type: ServiceVisualType;
  active?: number;
}) {
  const Scene = visualMap[type];
  const extras = EXTRA_PANELS[type];
  const content =
    active === 0 || !extras[active - 1] ? (
      <Scene />
    ) : (
      renderPanel(extras[active - 1])
    );

  return (
    <div className="h-full w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 0.985, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.99, filter: "blur(6px)" }}
          transition={{ duration: 0.26, ease: EASE_OUT }}
        >
          {content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
