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
  Building2,
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
  QrCode,
  Repeat2,
  Rocket,
  Search,
  Send,
  Settings,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Square,
  Tablet,
  Target,
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
 * 4. CONTENT — one mock per tab: the content calendar, then a LinkedIn
 *    feed, an Instagram feed and a Reels player. The three phone mocks are
 *    drawn as flat wireframes — neutral placeholders, hairline rules,
 *    platform colour only where it carries meaning (active state, story
 *    ring, progress) — so the UI reads as interface, not as decoration.
 * ================================================================== */
/** Real platform brand colours, so each mock reads as the app it's imitating. */
const LINKEDIN_BLUE = "#0A66C2";
const IG_PINK = "#E1306C";
const IG_RED = "#ED4956"; // Instagram's "liked" heart
const IG_BLUE = "#0095F6"; // Instagram's active carousel dot
const IG_PURPLE = "#8134AF";
const IG_GRADIENT =
  "linear-gradient(45deg, #F58529, #DD2A7B 45%, #8134AF 75%, #515BD4)";

/** Solid ink — safe for text, borders and any single-colour surface. */
const platformColor: Record<string, string> = {
  LI: LINKEDIN_BLUE,
  IG: IG_PINK,
  RL: IG_PURPLE,
};
/** Fill — may be a gradient, so only ever set via `background`. */
const platformFill: Record<string, string> = {
  LI: LINKEDIN_BLUE,
  IG: IG_GRADIENT,
  RL: IG_PURPLE,
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
        <span
          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] text-[9px] font-bold lowercase text-white"
          style={{ backgroundColor: LINKEDIN_BLUE }}
        >
          in
        </span>
        <span className="flex h-6 flex-1 items-center gap-1.5 rounded-md bg-neutral-50 px-2">
          <Search size={10} className="text-neutral-300" />
          <Skel w="40px" h={4} dark />
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
            style={{ backgroundColor: LINKEDIN_BLUE }}
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
              style={active ? { color: LINKEDIN_BLUE } : undefined}
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
            style={{ backgroundColor: LINKEDIN_BLUE }}
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
            {/* unviewed stories carry Instagram's gradient ring */}
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full p-[1.5px]"
              style={{
                background: i < 3 ? IG_GRADIENT : "#e5e5e5",
              }}
            >
              <span className="flex h-full w-full items-center justify-center rounded-full bg-white p-[1.5px]">
                <span className="h-full w-full rounded-full bg-neutral-100" />
              </span>
            </span>
            <Skel w="20px" h={3} dark />
          </motion.div>
        ))}
      </div>

      {/* post header */}
      <div className="flex items-center gap-2 border-t border-neutral-100 px-3 py-2">
        <span
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full p-[1.5px]"
          style={{ background: IG_GRADIENT }}
        >
          <span className="h-full w-full rounded-full border border-white bg-neutral-100" />
        </span>
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
                backgroundColor: d === 0 ? IG_BLUE : "#d4d4d4",
              }}
            />
          ))}
        </span>
      </div>

      {/* actions */}
      <div className="flex items-center justify-between px-3 pb-1 pt-2.5">
        <div className="flex items-center gap-3">
          <motion.span
            style={{ color: IG_RED }}
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
              "linear-gradient(90deg, transparent, rgba(221,42,123,0.08), transparent)",
          }}
          animate={reduce ? undefined : { x: ["-70%", "190%"] }}
          transition={loop(6)}
        />

        {/* top bar */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-3 pt-6 text-neutral-500">
          <span className="text-[10px] font-semibold text-neutral-900">
            Reels
          </span>
          <span style={{ color: IG_PINK }}>
            <IgGlyph size={12} />
          </span>
        </div>

        {/* play affordance */}
        <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white/70 backdrop-blur-sm">
          <span className="ml-[2px] h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-neutral-900" />
        </span>

        {/* action rail */}
        <div className="absolute bottom-14 right-2 flex flex-col items-center gap-3 text-neutral-500">
          {reelStats.map(({ icon: Icon, value }, i) => (
            <span key={value} className="flex flex-col items-center gap-0.5">
              <Icon
                size={14}
                className={i === 0 ? "fill-current" : undefined}
                style={i === 0 ? { color: IG_RED } : undefined}
              />
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
              style={{ color: IG_PINK, backgroundColor: "rgba(225,48,108,0.09)" }}
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
            style={{ background: IG_GRADIENT }}
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
                style={{ background: platformFill[key] }}
              />
              {platformName[key]}
            </span>
          ))}
        </div>
      </div>

      {/* Month calendar */}
      <div className="mt-3">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-neutral-700">
            July 2026
          </span>
          <span className="text-[10px] font-medium text-neutral-400">
            8 scheduled
          </span>
        </div>
        <div className="grid grid-cols-7 gap-x-0.5 gap-y-0.5 text-center">
          {["S", "M", "T", "W", "T", "F", "S"].map((w, i) => (
            <span
              key={i}
              className="pb-0.5 text-[8px] font-semibold uppercase tracking-wide text-neutral-300"
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
                className={`flex h-6 flex-col items-center justify-center rounded-[5px] text-[9px] leading-none ${
                  isToday ? "font-semibold" : "text-neutral-500"
                }`}
                style={
                  isToday
                    ? { color: PURPLE, backgroundColor: "rgba(82,16,248,0.07)" }
                    : undefined
                }
              >
                {day}
                <span className="mt-[3px] flex h-1 items-center gap-0.5">
                  {posts?.map((key, pi) => (
                    <span
                      key={pi}
                      className="h-1 w-1 rounded-full"
                      style={{ background: platformFill[key] }}
                    />
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scheduled queue */}
      <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
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
 * 5. AI-VIDEO — one surface per tab: the presenter studio, the voice
 *    editor, the short-form export bay and the script doc. All drawn as
 *    flat, light UI — hairline rules, neutral placeholders, brand colour
 *    only on the active state — so each reads as a tool, not a poster.
 * ================================================================== */
const scriptLines = [
  "Meet your AI presenter —",
  "on-brand, in every format.",
  "Scripted, voiced, rendered.",
];

/** Speech-shaped waveform: loud through the middle, quiet at the edges. */
const waveform = Array.from({ length: 34 }, (_, i) =>
  Math.round(30 + Math.sin(i * 0.55) * 26 + Math.sin(i * 1.7) * 11),
);

const avatarPresets = [
  { name: "Ava", role: "Presenter" },
  { name: "Noah", role: "Explainer" },
  { name: "Mia", role: "Founder" },
  { name: "Leo", role: "Support" },
];

/** Wireframe bust — a stand-in for the presenter, never a stock photo. */
function AvatarBust({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none">
      <circle cx="32" cy="23" r="12" stroke="currentColor" strokeWidth="2" />
      <path
        d="M9 60c0-12.5 10.3-20 23-20s23 7.5 23 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AvatarStudioVisual() {
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
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="AI Avatars" />
        <AnimatePresence mode="wait">
          <motion.span
            key={rendering ? "render" : "done"}
            className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.26, ease: EASE_OUT }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: rendering ? PURPLE : "#22C55E" }}
            />
            {rendering ? "Generating…" : "Ready to publish"}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Stage */}
      <div className="relative mt-4 flex flex-1 items-center justify-center overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,44,85,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,44,85,0.04) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* the render pass, sweeping across the frame */}
        <motion.div
          className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(82,16,248,0.07), transparent)",
          }}
          animate={reduce ? undefined : { x: ["-80%", "300%"] }}
          transition={loop(7)}
        />

        <motion.div
          className="relative flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200 bg-white md:h-24 md:w-24"
          animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
          transition={loop(3.6)}
        >
          <motion.span
            className="absolute inset-0 rounded-full border"
            style={{ borderColor: "rgba(82,16,248,0.35)" }}
            animate={reduce ? undefined : { scale: [1, 1.45], opacity: [0.6, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: EASE_OUT }}
          />
          <AvatarBust className="h-10 w-10 text-neutral-300 md:h-12 md:w-12" />
        </motion.div>

        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[9px] font-medium text-neutral-500">
          <Sparkles size={9} style={{ color: PURPLE }} />
          Lip-sync · 60 fps
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-[9px] font-medium tabular-nums text-neutral-500">
          9:16
        </span>

        {/* the script, spoken line by line */}
        <div className="absolute inset-x-3 bottom-3 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={line}
              className="rounded-lg border border-neutral-200 bg-white/90 px-2.5 py-1 text-center text-[10px] font-medium text-neutral-600 backdrop-blur-sm"
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

      {/* Presenter presets */}
      <div className="mt-3 flex items-center gap-2">
        {avatarPresets.map((preset, i) => (
          <motion.div
            key={preset.name}
            className={`flex flex-1 items-center gap-2 rounded-xl border p-2 ${
              i === 0
                ? "border-[#5210F8]/30 bg-[#5210F8]/5"
                : "border-neutral-200/70 bg-white"
            }`}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_OUT }}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                i === 0 ? "border-[#5210F8]/40" : "border-neutral-200"
              }`}
            >
              <AvatarBust
                className={`h-3.5 w-3.5 ${
                  i === 0 ? "text-[#5210F8]" : "text-neutral-300"
                }`}
              />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-[10px] font-semibold text-[#111]">
                {preset.name}
              </span>
              <span className="block truncate text-[8px] text-neutral-400">
                {preset.role}
              </span>
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const voices = [
  { name: "Ava", tag: "Warm · Narration", active: true },
  { name: "Noah", tag: "Confident · Explainer", active: false },
  { name: "Brand voice", tag: "Cloned · Private", active: false },
];

function VoiceoverPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Voiceovers" />
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          EN · Natural
        </span>
      </div>

      {/* Track */}
      <div className="mt-4 rounded-xl border border-neutral-200/80 bg-white p-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111] text-white">
            <Play size={11} className="ml-[1px] fill-current" />
          </span>
          <div className="relative flex h-10 flex-1 items-center gap-[2px]">
            {waveform.map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-full bg-neutral-200"
                animate={
                  reduce
                    ? { height: `${h}%` }
                    : { height: [`${h * 0.45}%`, `${h}%`, `${h * 0.45}%`] }
                }
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.03,
                  ease: EASE_IN_OUT,
                }}
              />
            ))}
            {/* playhead — tints everything already spoken */}
            <motion.span
              className="pointer-events-none absolute inset-y-0 left-0 border-r"
              style={{
                borderColor: PURPLE,
                backgroundColor: "rgba(82,16,248,0.07)",
              }}
              animate={reduce ? { width: "40%" } : { width: ["0%", "100%"] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 8, repeat: Infinity, ease: "linear" }
              }
            />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[9px] font-medium tabular-nums text-neutral-400">
          <span>0:00</span>
          <span className="flex items-center gap-1.5">
            <span className="rounded-full bg-neutral-50 px-1.5 py-0.5">
              1.0×
            </span>
            <span className="rounded-full bg-neutral-50 px-1.5 py-0.5">
              Pitch −2
            </span>
          </span>
          <span>0:32</span>
        </div>
      </div>

      {/* Voice library */}
      <p className="mb-2 mt-4 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
        Voice
      </p>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {voices.map((voice, i) => (
          <motion.div
            key={voice.name}
            className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 ${
              voice.active
                ? "border-[#5210F8]/30 bg-[#5210F8]/5"
                : "border-neutral-200/70 bg-white"
            }`}
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: EASE_OUT }}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                voice.active
                  ? "text-white"
                  : "border border-neutral-200 text-neutral-400"
              }`}
              style={voice.active ? { backgroundColor: PURPLE } : undefined}
            >
              <Mic size={11} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-semibold text-[#111]">
                {voice.name}
              </span>
              <span className="block truncate text-[9px] text-neutral-400">
                {voice.tag}
              </span>
            </span>
            <span className="hidden items-center gap-[2px] sm:flex">
              {[6, 11, 5, 13, 8, 10, 6].map((h, bi) => (
                <span
                  key={bi}
                  className="w-[2px] rounded-full"
                  style={{
                    height: h,
                    backgroundColor: voice.active ? PURPLE : "#e5e5e5",
                  }}
                />
              ))}
            </span>
            {voice.active && (
              <Check size={12} strokeWidth={3} style={{ color: PURPLE }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const videoFormats = [
  { icon: Smartphone, label: "Vertical", ratio: "9:16", note: "Reels · Shorts", active: true },
  { icon: Square, label: "Square", ratio: "1:1", note: "Feed", active: false },
  { icon: Monitor, label: "Wide", ratio: "16:9", note: "Site · YouTube", active: false },
];

const renderQueue = [
  { label: "Explainer · 60s", pct: 100, done: true },
  { label: "Corporate cut · 30s", pct: 64, done: false },
  { label: "Event recap · 15s", pct: 28, done: false },
];

function ShortFormPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Short-form" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          <Sparkles size={10} style={{ color: PURPLE }} />
          Auto-captions
        </span>
      </div>

      <div className="mt-4 flex flex-1 gap-4">
        {/* 9:16 master */}
        <motion.div
          className="relative w-[84px] shrink-0 overflow-hidden rounded-xl border border-neutral-200/80 bg-neutral-50"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(7,44,85,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,44,85,0.04) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <span className="absolute left-1.5 top-1.5 rounded-full border border-neutral-200 bg-white px-1.5 py-[1px] text-[7px] font-medium tabular-nums text-neutral-500">
            0:12 / 0:60
          </span>

          <span className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white/80 backdrop-blur-sm">
            <span className="ml-[2px] h-0 w-0 border-y-[4px] border-l-[6px] border-y-transparent border-l-neutral-900" />
          </span>

          {/* burned-in caption */}
          <span className="absolute inset-x-1.5 bottom-3 rounded-md border border-neutral-200 bg-white/90 px-1.5 py-1 text-center text-[7px] font-semibold leading-tight text-neutral-600">
            on-brand, in every format.
          </span>

          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-neutral-200">
            <motion.span
              className="block h-full origin-left"
              style={{ backgroundColor: PURPLE }}
              animate={reduce ? { scaleX: 0.35 } : { scaleX: [0, 1] }}
              transition={
                reduce
                  ? undefined
                  : { duration: 8, repeat: Infinity, ease: "linear" }
              }
            />
          </div>
        </motion.div>

        <div className="flex min-w-0 flex-1 flex-col">
          {/* Aspect ratios */}
          <div className="flex flex-col gap-1.5">
            {videoFormats.map((format, i) => (
              <motion.div
                key={format.ratio}
                className={`flex items-center gap-2.5 rounded-xl border px-2.5 py-2 ${
                  format.active
                    ? "border-[#5210F8]/30 bg-[#5210F8]/5"
                    : "border-neutral-200/70 bg-white"
                }`}
                initial={reduce ? false : { opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: EASE_OUT }}
              >
                <format.icon
                  size={13}
                  style={{ color: format.active ? PURPLE : "#a3a3a3" }}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-semibold text-[#111]">
                    {format.label}
                  </span>
                  <span className="block truncate text-[9px] text-neutral-400">
                    {format.note}
                  </span>
                </span>
                <span
                  className="shrink-0 text-[10px] font-semibold tabular-nums"
                  style={{ color: format.active ? PURPLE : "#a3a3a3" }}
                >
                  {format.ratio}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Render queue */}
          <p className="mb-2 mt-4 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
            Renders
          </p>
          <div className="mt-auto space-y-2">
            {renderQueue.map((item, i) => (
              <div key={item.label} className="flex items-center gap-2">
                <Film size={11} className="shrink-0 text-neutral-300" />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between text-[10px]">
                    <span className="truncate font-medium text-neutral-600">
                      {item.label}
                    </span>
                    <span
                      className="flex shrink-0 items-center gap-0.5 font-semibold tabular-nums"
                      style={{ color: item.done ? "#22C55E" : "#a3a3a3" }}
                    >
                      {item.done ? (
                        <>
                          <Check size={10} strokeWidth={3} /> Done
                        </>
                      ) : (
                        `${item.pct}%`
                      )}
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                    <motion.div
                      className="h-full origin-left rounded-full"
                      style={{
                        backgroundColor: item.done ? "#22C55E" : PURPLE,
                      }}
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={{ scaleX: item.pct / 100 }}
                      transition={{
                        duration: 0.9,
                        delay: 0.2 + i * 0.1,
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
    </div>
  );
}

const scriptBeats = [
  {
    beat: "Hook",
    time: "0:00 – 0:03",
    text: "Your competitors ship content weekly. You ship quarterly.",
    lines: 1,
  },
  {
    beat: "Body",
    time: "0:03 – 0:45",
    text: "Here's the system we use to script, voice and render in a day.",
    lines: 2,
  },
  {
    beat: "Call to action",
    time: "0:45 – 0:60",
    text: "Book a call — we'll map your first 30 videos.",
    lines: 0,
    caret: true,
  },
];

function ScriptsPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Scripts" />
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          AI draft · v3
        </span>
      </div>

      {/* Script doc */}
      <div className="mt-4 flex flex-1 flex-col justify-center gap-3">
        {scriptBeats.map((beat, i) => (
          <motion.div
            key={beat.beat}
            className="flex gap-3"
            initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.45, delay: i * 0.1, ease: EASE_OUT }}
          >
            <span
              className="mt-0.5 w-[2px] shrink-0 rounded-full"
              style={{
                backgroundColor: beat.caret ? PURPLE : "#e5e5e5",
              }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                  {beat.beat}
                </span>
                <span className="shrink-0 text-[9px] font-medium tabular-nums text-neutral-300">
                  {beat.time}
                </span>
              </div>
              <p className="mt-1 text-[12px] leading-relaxed text-neutral-700">
                {beat.text}
                {beat.caret && (
                  <motion.span
                    className="ml-px inline-block h-[11px] w-[1.5px] translate-y-[2px] bg-[#111]"
                    animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                    transition={loop(1.1)}
                  />
                )}
              </p>
              {beat.lines > 0 && (
                <div className="mt-1.5 space-y-1.5">
                  {Array.from({ length: beat.lines }).map((_, li) => (
                    <Skel key={li} w={li === 0 ? "100%" : "62%"} h={4} />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Doc footer */}
      <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="text-[10px] font-medium tabular-nums text-neutral-400">
          148 words · ~60s runtime
        </span>
        <motion.span
          className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
          style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
          animate={reduce ? undefined : { opacity: [0.6, 1, 0.6] }}
          transition={loop(3)}
        >
          <Sparkles size={10} />
          Rewrite hook
        </motion.span>
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
 * 7. LEAD-GEN — one surface per tab: the LinkedIn outreach desk, the
 *    cold-email composer, the ICP filter and the multi-touch cadence.
 *    LinkedIn blue where it's genuinely LinkedIn; brand purple only on
 *    the active state.
 * ================================================================== */
const prospects = [
  { initials: "SR", name: "Sara Raines", role: "CMO · Northwind", status: "Replied" },
  { initials: "DK", name: "Dev Kapoor", role: "Founder · Acme Cloud", status: "Connected" },
  { initials: "ML", name: "Mara Liu", role: "VP Growth · Lumen", status: "Pending" },
];

const statusInk: Record<string, string> = {
  Replied: "#22C55E",
  Connected: LINKEDIN_BLUE,
  Pending: "#a3a3a3",
};

/** The LinkedIn "in" mark — small, blue, and only used on LinkedIn surfaces. */
function InMark({ size = 16 }: { size?: number }) {
  return (
    <span
      className="flex shrink-0 items-center justify-center rounded-[4px] font-bold lowercase text-white"
      style={{
        backgroundColor: LINKEDIN_BLUE,
        height: size,
        width: size,
        fontSize: size * 0.55,
      }}
    >
      in
    </span>
  );
}

function LinkedInOutreachVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="LinkedIn" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          <InMark size={12} />
          Sales Navigator
        </span>
      </div>

      {/* Outreach numbers */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { label: "Invites", value: "420" },
          { label: "Connect rate", value: "48%" },
          { label: "Replies", value: "22%" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded-xl border border-neutral-200/70 bg-white px-2.5 py-2"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: EASE_OUT }}
          >
            <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
              {stat.label}
            </p>
            <p className="mt-0.5 text-base font-semibold leading-none tracking-tight text-[#111]">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Prospects */}
      <p className="mb-2 mt-4 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
        Prospects
      </p>
      <div className="space-y-1.5">
        {prospects.map((person, i) => (
          <motion.div
            key={person.name}
            className="flex items-center gap-2.5 rounded-xl border border-neutral-200/70 bg-white px-2.5 py-2"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-[9px] font-semibold text-neutral-500">
              {person.initials}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-semibold text-[#111]">
                {person.name}
              </span>
              <span className="block truncate text-[9px] text-neutral-400">
                {person.role}
              </span>
            </span>
            <span
              className="flex shrink-0 items-center gap-1 text-[9px] font-semibold"
              style={{ color: statusInk[person.status] }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: statusInk[person.status] }}
              />
              {person.status}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Thread */}
      <div className="mt-auto space-y-1.5 border-t border-neutral-100 pt-3">
        <div className="flex justify-end">
          <span className="max-w-[80%] rounded-xl rounded-br-sm bg-neutral-50 px-2.5 py-1.5 text-[10px] leading-relaxed text-neutral-600">
            Saw Northwind is hiring 4 AEs — worth a quick chat?
          </span>
        </div>
        <motion.div
          className="flex items-center gap-2"
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: EASE_OUT }}
        >
          <span
            className="max-w-[80%] rounded-xl rounded-bl-sm px-2.5 py-1.5 text-[10px] leading-relaxed"
            style={{
              color: LINKEDIN_BLUE,
              backgroundColor: "rgba(10,102,194,0.07)",
            }}
          >
            Yes — send over a time. Thursday works.
          </span>
          <span className="text-[9px] font-medium text-neutral-300">2h</span>
        </motion.div>
      </div>
    </div>
  );
}

const emailFunnel = [
  { label: "Delivered", pct: 98 },
  { label: "Opened", pct: 61 },
  { label: "Replied", pct: 18 },
  { label: "Booked", pct: 9 },
];

/** Merge tag — the bit that makes cold email read as personalised. */
function MergeTag({ children }: { children: ReactNode }) {
  return (
    <span
      className="rounded-[3px] px-1 py-[1px] text-[10px] font-semibold"
      style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
    >
      {children}
    </span>
  );
}

function EmailOutreachPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Email" />
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          4 variables
        </span>
      </div>

      {/* Composer */}
      <motion.div
        className="mt-4 rounded-xl border border-neutral-200/80 bg-white"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE_OUT }}
      >
        <div className="flex items-center gap-2 border-b border-neutral-100 px-3 py-2">
          <Mail size={12} className="shrink-0 text-neutral-300" />
          <span className="text-[10px] text-neutral-400">To</span>
          <MergeTag>{"{{first_name}}"}</MergeTag>
          <span className="text-[10px] text-neutral-400">at</span>
          <MergeTag>{"{{company}}"}</MergeTag>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-[11px] font-semibold text-[#111]">
            Quick idea for <MergeTag>{"{{company}}"}</MergeTag>
          </p>
          <p className="mt-1.5 text-[10px] leading-relaxed text-neutral-500">
            Noticed you&apos;re hiring AEs — we help teams like yours book 30+
            qualified calls a month.
          </p>
          <div className="mt-2 space-y-1.5">
            <Skel w="100%" h={4} />
            <Skel w="58%" h={4} />
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-neutral-100 px-3 py-2">
          <span className="flex items-center gap-1 text-[9px] font-medium text-neutral-400">
            <Clock size={10} />
            Sends 9:00 AM local
          </span>
          <span className="flex items-center gap-1 rounded-full bg-[#111] px-2 py-0.5 text-[9px] font-semibold text-white">
            <Send size={9} />
            Send
          </span>
        </div>
      </motion.div>

      {/* Funnel */}
      <div className="mt-auto flex flex-col justify-end gap-2 pt-4">
        {emailFunnel.map((step, i) => (
          <div key={step.label} className="flex items-center gap-2.5">
            <span className="w-14 shrink-0 text-[10px] font-medium text-neutral-500">
              {step.label}
            </span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                className="h-full origin-left rounded-full"
                style={{
                  background: `linear-gradient(to right, ${PURPLE}, ${LAVENDER})`,
                }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: step.pct / 100 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + i * 0.08,
                  ease: EASE_OUT,
                }}
              />
            </div>
            <span className="w-8 shrink-0 text-right text-[10px] font-semibold tabular-nums text-[#111]">
              {step.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const icpCriteria = [
  { label: "Industry", value: "B2B SaaS" },
  { label: "Company size", value: "50–500" },
  { label: "Role", value: "Founder / CMO" },
  { label: "Region", value: "Global" },
  { label: "Buying signal", value: "Hiring" },
];

const icpAccounts = [
  { name: "Northwind", meta: "SaaS · 240 staff", score: 94 },
  { name: "Acme Cloud", meta: "SaaS · 120 staff", score: 88 },
  { name: "Lumen Labs", meta: "SaaS · 80 staff", score: 81 },
];

function IcpPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="ICP" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          <Target size={11} style={{ color: PURPLE }} />
          1,240 matched
        </span>
      </div>

      {/* Filters */}
      <div className="mt-4 space-y-1.5">
        {icpCriteria.map((row, i) => (
          <motion.div
            key={row.label}
            className="flex items-center gap-2.5 rounded-lg border border-neutral-200/70 bg-white px-2.5 py-1.5"
            initial={reduce ? false : { opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05, ease: EASE_OUT }}
          >
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#5210F8]/10">
              <Check size={9} strokeWidth={3} style={{ color: PURPLE }} />
            </span>
            <span className="flex-1 text-[10px] text-neutral-400">
              {row.label}
            </span>
            <span className="text-[10px] font-semibold text-[#111]">
              {row.value}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Matched accounts */}
      <p className="mb-2 mt-auto pt-4 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
        Best-fit accounts
      </p>
      <div className="space-y-2">
        {icpAccounts.map((account, i) => (
          <motion.div
            key={account.name}
            className="flex items-center gap-2.5"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.08, ease: EASE_OUT }}
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-400">
              <Building2 size={11} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[11px] font-semibold text-[#111]">
                {account.name}
              </span>
              <span className="block truncate text-[9px] text-neutral-400">
                {account.meta}
              </span>
            </span>
            <span className="hidden h-1 w-16 overflow-hidden rounded-full bg-neutral-100 sm:block">
              <motion.span
                className="block h-full origin-left rounded-full"
                style={{ backgroundColor: PURPLE }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: account.score / 100 }}
                transition={{
                  duration: 0.8,
                  delay: 0.35 + i * 0.08,
                  ease: EASE_OUT,
                }}
              />
            </span>
            <span
              className="w-8 shrink-0 text-right text-[11px] font-semibold tabular-nums"
              style={{ color: PURPLE }}
            >
              {account.score}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const cadence = [
  {
    day: "Day 1",
    title: "Connection request",
    channel: "LinkedIn",
    status: "Sent",
    linkedin: true,
  },
  {
    day: "Day 2",
    title: "Intro email",
    channel: "Email",
    status: "Sent",
    linkedin: false,
  },
  {
    day: "Day 4",
    title: "Value-led follow-up",
    channel: "LinkedIn",
    status: "Scheduled",
    linkedin: true,
  },
  {
    day: "Day 6",
    title: "Case study + soft CTA",
    channel: "Email",
    status: "Scheduled",
    linkedin: false,
  },
];

function SequencesPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Sequences" />
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          4 touches · 6 days
        </span>
      </div>

      {/* Cadence */}
      <div className="mt-4 flex flex-1 flex-col justify-center">
        {cadence.map((step, i) => {
          const sent = step.status === "Sent";
          return (
            <motion.div
              key={step.day}
              className="flex gap-3"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: EASE_OUT }}
            >
              {/* rail */}
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border ${
                    sent ? "border-transparent" : "border-dashed border-neutral-300"
                  }`}
                  style={sent ? { backgroundColor: "rgba(82,16,248,0.08)" } : undefined}
                >
                  {step.linkedin ? (
                    <InMark size={12} />
                  ) : (
                    <Mail
                      size={12}
                      style={{ color: sent ? PURPLE : "#a3a3a3" }}
                    />
                  )}
                </span>
                {i < cadence.length - 1 && (
                  <span
                    className="my-1 w-px flex-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, #e5e5e5 60%, transparent 0)",
                      backgroundSize: "1px 5px",
                    }}
                  />
                )}
              </div>

              <div className="min-w-0 flex-1 pb-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-[12px] font-semibold text-[#111]">
                    {step.title}
                  </span>
                  <span
                    className="shrink-0 text-[9px] font-semibold"
                    style={{ color: sent ? "#22C55E" : "#a3a3a3" }}
                  >
                    {step.status}
                  </span>
                </div>
                <p className="text-[10px] text-neutral-400">
                  {step.day} · {step.channel}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
        <span className="text-[10px] font-medium text-neutral-400">
          360 prospects enrolled
        </span>
        <span
          className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
          style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
        >
          <TrendingUp size={10} />
          18% reply rate
        </span>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 8. GROWTH — one surface per tab: the launch plan, the event motion,
 *    the paid-media manager and the live campaign dashboard.
 * ================================================================== */
const gtmMilestones = [
  { label: "Positioning", done: true },
  { label: "Offer", done: true },
  { label: "Sales deck", done: false, active: true },
  { label: "Launch", done: false },
];

const gtmTargets = [
  { label: "Reach", value: "2.4M" },
  { label: "Pipeline", value: "$1.2M" },
  { label: "ROI", value: "312%" },
];

const gtmChecklist = [
  { task: "Positioning & messaging locked", done: true },
  { task: "Pricing and offer structured", done: true },
  { task: "Sales deck + demo script", done: false },
];

function GtmPlanVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="GTM" />
        <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          Week 5 of 8
        </span>
      </div>

      {/* Launch timeline */}
      <div className="mt-6 px-1">
        <div className="relative flex items-start justify-between">
          {/* track */}
          <span className="absolute left-0 right-0 top-[5px] h-px bg-neutral-200" />
          <motion.span
            className="absolute left-0 top-[5px] h-px origin-left"
            style={{ backgroundColor: PURPLE }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 0.62 }}
            transition={{ duration: 1, ease: EASE_OUT }}
          />
          {gtmMilestones.map((milestone, i) => (
            <motion.span
              key={milestone.label}
              className="relative z-10 flex w-1/4 flex-col items-center gap-1.5"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 + i * 0.08, ease: EASE_OUT }}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full border-2 ${
                  milestone.done || milestone.active
                    ? "border-white"
                    : "border-white bg-neutral-200"
                }`}
                style={
                  milestone.done
                    ? { backgroundColor: PURPLE }
                    : milestone.active
                      ? { backgroundColor: LAVENDER }
                      : undefined
                }
              />
              <span
                className={`text-center text-[9px] font-medium ${
                  milestone.done || milestone.active
                    ? "text-[#111]"
                    : "text-neutral-400"
                }`}
              >
                {milestone.label}
              </span>
            </motion.span>
          ))}
        </div>
      </div>

      {/* Targets */}
      <div className="mt-6 grid grid-cols-3 gap-2">
        {gtmTargets.map((target, i) => (
          <motion.div
            key={target.label}
            className="rounded-xl border border-neutral-200/70 bg-white px-2.5 py-2"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease: EASE_OUT }}
          >
            <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
              {target.label}
            </p>
            <p className="mt-0.5 text-base font-semibold leading-none tracking-tight text-[#111]">
              {target.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Checklist */}
      <p className="mb-2 mt-auto pt-5 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
        Launch checklist
      </p>
      <div className="space-y-1.5">
        {gtmChecklist.map((item) => (
          <div key={item.task} className="flex items-center gap-2.5">
            <span
              className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border ${
                item.done ? "border-transparent" : "border-neutral-300"
              }`}
              style={item.done ? { backgroundColor: PURPLE } : undefined}
            >
              {item.done && (
                <Check size={9} strokeWidth={3} className="text-white" />
              )}
            </span>
            <span
              className={`text-[11px] ${
                item.done ? "text-neutral-400 line-through" : "text-neutral-700"
              }`}
            >
              {item.task}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const eventFunnel = [
  { label: "Registrations", value: "1,240", pct: 100 },
  { label: "Booth scans", value: "380", pct: 62 },
  { label: "Meetings booked", value: "64", pct: 34 },
  { label: "Deals opened", value: "12", pct: 16 },
];

function EventsPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Events" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          <Ticket size={11} style={{ color: PURPLE }} />
          Booth 214
        </span>
      </div>

      <div className="mt-4 flex flex-1 gap-4">
        {/* Event badge */}
        <motion.div
          className="flex w-[96px] shrink-0 flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <div className="border-b border-neutral-100 px-2.5 py-2 text-center">
            <p className="text-[10px] font-semibold leading-tight text-[#111]">
              SaaS Summit
            </p>
            <p className="text-[8px] text-neutral-400">Oct 14–16 · Berlin</p>
          </div>
          {/* perforation */}
          <div className="flex items-center justify-between px-1.5">
            <span className="-ml-3 h-2.5 w-2.5 rounded-full bg-neutral-100" />
            <span className="mx-1 h-px flex-1 border-t border-dashed border-neutral-200" />
            <span className="-mr-3 h-2.5 w-2.5 rounded-full bg-neutral-100" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-2 px-2.5 py-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 text-neutral-300">
              <QrCode size={22} />
            </span>
            <span className="w-full space-y-1">
              <Skel w="100%" h={3} dark />
              <Skel w="70%" h={3} />
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-[8px] font-semibold"
              style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
            >
              Exhibitor
            </span>
          </div>
        </motion.div>

        {/* Event funnel */}
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
          {eventFunnel.map((step, i) => (
            <div key={step.label}>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-[10px] font-medium text-neutral-500">
                  {step.label}
                </span>
                <span className="text-[11px] font-semibold tabular-nums text-[#111]">
                  {step.value}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  className="h-full origin-left rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${PURPLE}, ${LAVENDER})`,
                  }}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: step.pct / 100 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.15 + i * 0.08,
                    ease: EASE_OUT,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const adStats = [
  { label: "Spend", value: "$24k" },
  { label: "CPC", value: "$1.80" },
  { label: "ROAS", value: "4.2×" },
];

const adChannels = [
  { label: "LinkedIn", pct: 45, ink: LINKEDIN_BLUE },
  { label: "Meta", pct: 30, ink: "#0866FF" },
  { label: "Google", pct: 25, ink: "#4285F4" },
];

function PaidMediaPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Paid Media" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-medium text-neutral-500">
          <Megaphone size={11} style={{ color: PURPLE }} />3 channels live
        </span>
      </div>

      <div className="mt-4 flex flex-1 gap-4">
        {/* Ad preview */}
        <motion.div
          className="flex w-[116px] shrink-0 flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: EASE_OUT }}
        >
          <div className="flex items-center gap-1.5 px-2 py-1.5">
            <span className="h-4 w-4 shrink-0 rounded-[4px] bg-[#111]" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[8px] font-semibold text-[#111]">
                invisiedge
              </span>
              <span className="block text-[7px] text-neutral-400">
                Sponsored
              </span>
            </span>
          </div>
          <div
            className="relative flex-1"
            style={{
              minHeight: 64,
              backgroundImage:
                "linear-gradient(rgba(7,44,85,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(7,44,85,0.04) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          >
            <motion.span
              className="pointer-events-none absolute inset-y-0 w-1/2 -skew-x-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(82,16,248,0.06), transparent)",
              }}
              animate={reduce ? undefined : { x: ["-70%", "190%"] }}
              transition={loop(7)}
            />
          </div>
          <div className="border-t border-neutral-100 px-2 py-1.5">
            <p className="text-[9px] font-semibold leading-tight text-[#111]">
              Built for growth.
            </p>
            <span className="mt-1 flex items-center justify-between">
              <span className="text-[7px] text-neutral-400">invisiedge.com</span>
              <span className="rounded-[4px] bg-neutral-100 px-1.5 py-0.5 text-[7px] font-semibold text-neutral-600">
                Learn more
              </span>
            </span>
          </div>
        </motion.div>

        {/* Numbers */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="grid grid-cols-3 gap-2">
            {adStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="rounded-xl border border-neutral-200/70 bg-white px-2 py-1.5"
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: EASE_OUT }}
              >
                <p className="text-[8px] font-medium uppercase tracking-wide text-neutral-400">
                  {stat.label}
                </p>
                <p className="mt-0.5 text-[13px] font-semibold leading-none tracking-tight text-[#111]">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mb-2 mt-4 text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
            Spend by channel
          </p>
          <div className="mt-auto space-y-2.5">
            {adChannels.map((channel, i) => (
              <div key={channel.label}>
                <div className="mb-1 flex items-center gap-1.5 text-[10px]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: channel.ink }}
                  />
                  <span className="font-medium text-neutral-600">
                    {channel.label}
                  </span>
                  <span className="ml-auto font-semibold tabular-nums text-neutral-400">
                    {channel.pct}%
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                  <motion.div
                    className="h-full origin-left rounded-full"
                    style={{ backgroundColor: channel.ink }}
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={{ scaleX: channel.pct / 100 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.2 + i * 0.08,
                      ease: EASE_OUT,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const gtmKpis = [
  { label: "Reach", value: "2.4M" },
  { label: "Leads", value: "840" },
  { label: "ROI", value: "312%" },
];

const gtmBars = [40, 52, 46, 63, 58, 74, 82, 96];

const gtmChannels = [
  { icon: Megaphone, label: "Paid media", pct: 48 },
  { icon: Ticket, label: "Events", pct: 32 },
  { icon: Globe, label: "Organic", pct: 20 },
];

function CampaignsPanel() {
  const reduce = useReducedMotion();

  return (
    <div className={PANEL_SHELL}>
      <div className="flex items-center justify-between">
        <PanelHeader badge="Campaigns" />
        <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 text-[10px] font-bold tracking-wide text-neutral-500">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-emerald-500"
            animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
            transition={loop(1.6)}
          />
          LIVE
        </span>
      </div>

      {/* KPIs */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {gtmKpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            className="rounded-xl border border-neutral-200/70 bg-white px-2.5 py-2"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07, ease: EASE_OUT }}
          >
            <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
              {kpi.label}
            </p>
            <p className="mt-0.5 text-base font-semibold leading-none tracking-tight text-[#111]">
              {kpi.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Weekly reach */}
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] font-semibold uppercase tracking-wider text-neutral-400">
            Weekly reach
          </span>
          <span
            className="flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold"
            style={{ color: PURPLE, backgroundColor: "rgba(82,16,248,0.08)" }}
          >
            <TrendingUp size={10} />
            +312%
          </span>
        </div>
        <div className="flex h-16 items-end gap-1.5">
          {gtmBars.map((bar, i) => (
            <motion.div
              key={i}
              className="flex-1 origin-bottom rounded-t-sm"
              style={{
                height: `${bar}%`,
                // the last three weeks are the ones that matter — pick them out
                backgroundColor: i >= gtmBars.length - 3 ? PURPLE : "#ededf2",
              }}
              initial={reduce ? false : { scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: EASE_OUT }}
            />
          ))}
        </div>
      </div>

      {/* Channel mix */}
      <div className="mt-auto space-y-2.5 pt-4">
        {gtmChannels.map((channel, i) => (
          <div key={channel.label} className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-neutral-200 text-neutral-400">
              <channel.icon size={11} />
            </span>
            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-center justify-between text-[10px]">
                <span className="font-medium text-neutral-600">
                  {channel.label}
                </span>
                <span className="font-semibold tabular-nums text-neutral-400">
                  {channel.pct}%
                </span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
                <motion.div
                  className="h-full origin-left rounded-full"
                  style={{
                    background: `linear-gradient(to right, ${PURPLE}, ${LAVENDER})`,
                  }}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: channel.pct / 100 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.2 + i * 0.08,
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

const visualMap: Record<ServiceVisualType, ComponentType> = {
  brand: BrandVisual,
  website: WebsiteVisual,
  seo: SeoVisual,
  social: CalendarPanel,
  "ai-video": AvatarStudioVisual,
  crm: CrmVisual,
  "lead-gen": LinkedInOutreachVisual,
  gtm: GtmPlanVisual,
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
  key: "#CF222E",
  tag: "#116329",
  attr: "#0550AE",
  str: "#0A3069",
  fn: "#8250DF",
  punc: "#8C959F",
  plain: "#24292F",
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
      className={`${FRAME} flex w-full flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white shadow-[0_2px_20px_-8px_rgba(7,44,85,0.18)]`}
    >
      {/* File tabs */}
      <div className="flex shrink-0 items-center border-b border-neutral-100 bg-neutral-50/70">
        {codeTabs.map((tab) => (
          <span
            key={tab.name}
            className={`relative flex items-center gap-1.5 px-3 py-2.5 text-[10px] font-medium ${
              tab.active
                ? "bg-white text-[#111]"
                : "text-neutral-400"
            }`}
          >
            <span
              className="h-1.5 w-1.5 rounded-[2px]"
              style={{ backgroundColor: tab.active ? "#111" : "#d4d4d4" }}
            />
            {tab.name}
            {tab.active && (
              <span className="absolute inset-x-0 top-0 h-[2px] bg-[#111]" />
            )}
          </span>
        ))}
        <span className="ml-auto pr-3 text-[9px] font-medium tracking-wide text-neutral-300">
          app / page.tsx
        </span>
      </div>

      {/* Code */}
      <div className="flex min-h-0 flex-1 overflow-hidden py-3 font-mono text-[11px] leading-[1.75]">
        {/* gutter */}
        <div className="shrink-0 select-none px-3 text-right text-neutral-300">
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
                  className="ml-px inline-block h-[11px] w-[1.5px] translate-y-[2px] bg-[#111]"
                  animate={reduce ? undefined : { opacity: [1, 0, 1] }}
                  transition={loop(1.1)}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex shrink-0 items-center gap-3 border-t border-neutral-100 bg-neutral-50/70 px-3 py-2 text-[9px] font-medium text-neutral-400">
        <span className="flex items-center gap-1.5 rounded-full bg-[#111] px-2 py-0.5 text-white">
          <Zap size={9} />
          Next.js 15
        </span>
        <motion.span
          className="flex items-center gap-1 text-emerald-600"
          animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
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
            <div className="flex items-center justify-between rounded-lg border border-neutral-100 bg-white px-2.5 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-[3px] bg-[#111]" />
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
                <span className="rounded-full bg-[#111] px-2 py-0.5 text-[8px] font-semibold text-white">
                  Book a call
                </span>
              </div>
            </div>

            {/* hero */}
            <div className="relative mt-2 overflow-hidden rounded-xl border border-neutral-100 bg-white px-4 py-7 text-center">
              {/* a slow, barely-there light sweep — depth without colour */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120px 90px at 30% 20%, rgba(7,44,85,0.06), transparent)",
                }}
                animate={reduce ? undefined : { x: ["-18%", "42%", "-18%"] }}
                transition={loop(11)}
              />
              <span className="relative inline-flex items-center gap-1 rounded-full border border-neutral-200 px-2 py-0.5 text-[7px] font-medium tracking-wide text-neutral-400">
                <span className="h-1 w-1 rounded-full bg-emerald-500" />
                Now booking Q4
              </span>
              <p className="relative mt-2 text-[15px] font-semibold leading-tight tracking-tight text-[#111]">
                Built for Growth.
                <br />
                <span className="text-neutral-400">Designed for Impact.</span>
              </p>
              <p className="relative mx-auto mt-1.5 max-w-[80%] text-[8px] leading-relaxed text-neutral-400">
                Brand, website and demand generation — shipped by one team.
              </p>
              <div className="relative mt-3 flex items-center justify-center gap-1.5">
                <span className="flex items-center gap-0.5 rounded-full bg-[#111] px-2.5 py-1 text-[8px] font-bold text-white">
                  Get started
                  <ArrowUpRight size={9} strokeWidth={2.5} />
                </span>
                <span className="rounded-full border border-neutral-200 px-2.5 py-1 text-[8px] font-semibold text-neutral-500">
                  See our work
                </span>
              </div>
            </div>

            {/* logo strip */}
            <div className="mt-2 flex items-center justify-center gap-2.5 rounded-lg border border-neutral-100 bg-white px-3 py-2">
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
                  className="rounded-lg border border-neutral-100 bg-white p-2"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.08,
                    ease: EASE_OUT,
                  }}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-[4px] ${
                      i === 0
                        ? "bg-[#111] text-white"
                        : "bg-neutral-50 text-neutral-400"
                    }`}
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
        <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white p-1.5 shadow-[0_28px_60px_-24px_rgba(7,44,85,0.35)]">
          <div className="mb-1 flex items-center justify-between px-1">
            <span className="text-[8px] font-semibold text-neutral-500">
              Hero · Variant B
            </span>
            <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[7px] font-bold text-emerald-600">
              +38% CVR
            </span>
          </div>
          <div className="relative overflow-hidden rounded-lg bg-[#111] px-3 py-4">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(80px 60px at 20% 15%, rgba(255,255,255,0.10), transparent)",
              }}
            />
            <p className="relative text-[10px] font-semibold leading-tight text-white">
              Turn traffic into
              <br />
              <span className="text-white/45">booked calls.</span>
            </p>
            <div className="relative mt-2 flex items-center gap-1">
              <span className="rounded-full bg-white px-2 py-0.5 text-[7px] font-bold text-[#111]">
                Start free
              </span>
              <span className="h-1 w-8 rounded-full bg-white/20" />
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
    { kind: "custom", component: LinkedInVisual },
    { kind: "custom", component: InstagramPanel },
    { kind: "custom", component: ReelsPanel },
  ],
  "ai-video": [
    { kind: "custom", component: VoiceoverPanel },
    { kind: "custom", component: ShortFormPanel },
    { kind: "custom", component: ScriptsPanel },
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
    { kind: "custom", component: EmailOutreachPanel },
    { kind: "custom", component: IcpPanel },
    { kind: "custom", component: SequencesPanel },
  ],
  gtm: [
    { kind: "custom", component: EventsPanel },
    { kind: "custom", component: PaidMediaPanel },
    { kind: "custom", component: CampaignsPanel },
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
