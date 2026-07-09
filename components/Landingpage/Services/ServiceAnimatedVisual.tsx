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
  Globe,
  SlidersHorizontal,
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
 * 1. BRAND — brand board: lockup + morphing color blobs, palette,
 *    logo construction grid. (inspiration: brand identity boards)
 * ================================================================== */
const paletteColors = [
  { hex: "#FFFFFF", label: "Paper", text: "text-neutral-400" },
  { hex: PURPLE, label: "Signal", text: "text-white/70" },
  { hex: LAVENDER, label: "Lift", text: "text-white/80" },
  { hex: NAVY, label: "Depth", text: "text-white/70" },
  { hex: "#111111", label: "Ink", text: "text-white/60" },
];

const blobShapes = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "58% 42% 38% 62% / 62% 38% 62% 38%",
  "38% 62% 55% 45% / 55% 48% 52% 45%",
];

function BrandVisual() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setActive((p) => (p + 1) % paletteColors.length),
      1800,
    );
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className={`grid ${FRAME} grid-cols-5 grid-rows-[1.2fr_1fr] gap-3`}>
      {/* Lockup with morphing brand blobs */}
      <div
        className={`${CARD} relative col-span-5 flex items-center justify-center overflow-hidden`}
      >
        {/* dotted grid, radially masked */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(82,16,248,0.16) 1.1px, transparent 1.1px)",
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent)",
          }}
        />
        {[
          { c: PURPLE, top: "14%", left: "12%", d: 7 },
          { c: LAVENDER, top: "22%", right: "16%", d: 8.5 },
          { c: NAVY, bottom: "16%", left: "20%", d: 9.5 },
        ].map((b, i) => (
          <motion.div
            key={i}
            className="absolute h-9 w-11 md:h-11 md:w-14"
            style={{
              backgroundColor: b.c,
              top: b.top,
              left: b.left,
              right: b.right,
              bottom: b.bottom,
              borderRadius: blobShapes[i],
              filter: "blur(0.2px)",
            }}
            animate={
              reduce
                ? undefined
                : { borderRadius: blobShapes, scale: [1, 1.08, 1] }
            }
            transition={loop(b.d, i * 0.5)}
          />
        ))}

        <div className="relative flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 [&_svg]:h-full [&_svg]:w-full">
            <BrandLogo />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-[#111] md:text-[1.7rem]">
            InvisiEdge
          </span>
        </div>
      </div>

      {/* Palette strip — active swatch lifts (Emil: origin-aware, transform-only) */}
      <div className={`${CARD} col-span-3 flex gap-1.5 p-2.5`}>
        {paletteColors.map((color, i) => (
          <motion.div
            key={color.hex}
            className="relative flex-1 overflow-hidden rounded-lg border border-black/5"
            style={{ backgroundColor: color.hex, transformOrigin: "bottom" }}
            animate={reduce ? undefined : { scale: active === i ? 1 : 0.94 }}
            transition={{ duration: 0.4, ease: EASE_OUT }}
          >
            <span
              className={`absolute bottom-2 right-1 text-[8px] font-medium tracking-wider ${color.text}`}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {color.hex}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Logo construction grid */}
      <div className={`${CARD} col-span-2 relative overflow-hidden p-3`}>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(7,44,85,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(7,44,85,0.12) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <svg
          viewBox="0 0 100 100"
          className="relative h-full w-full"
          fill="none"
          stroke={PURPLE}
          strokeWidth="1"
        >
          <motion.g
            initial={reduce ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: EASE_OUT }}
          >
            <motion.rect
              x="24"
              y="24"
              width="52"
              height="52"
              rx="14"
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, ease: EASE_OUT }}
            />
            <motion.path
              d="M24 24 Q50 40 76 24 Q60 50 76 76 Q50 60 24 76 Q40 50 24 24Z"
              stroke={LAVENDER}
              initial={reduce ? false : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, delay: 0.2, ease: EASE_OUT }}
            />
          </motion.g>
          {[
            [24, 24],
            [76, 24],
            [24, 76],
            [76, 76],
            [50, 50],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="3" fill={PURPLE} stroke="none" />
          ))}
        </svg>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 2. WEBSITE — builder window + syntax-highlighted code panel + stack
 * ================================================================== */
const stack = [
  { name: "Next.js", active: true },
  { name: "React", active: false },
  { name: "Tailwind", active: false },
  { name: "Webflow", active: false },
];

const codeTokens: { k: string; rest: string }[] = [
  { k: "export default", rest: "function Hero() {" },
  { k: "  return", rest: "(" },
  { k: "    <section", rest: 'className="hero">' },
  { k: "      <h1>", rest: "Grow faster</h1>" },
  { k: "    </section>", rest: ");" },
  { k: "}", rest: "" },
];

function WebsiteVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`relative flex ${FRAME} flex-col justify-center`}>
      {/* stack pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        {stack.map((s, i) => (
          <motion.span
            key={s.name}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
              s.active
                ? "border-[#5210F8]/30 bg-[#5210F8]/5 text-[#5210F8]"
                : "border-neutral-200 bg-white text-neutral-500"
            }`}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06, ease: EASE_OUT }}
          >
            {s.name}
          </motion.span>
        ))}
      </div>

      {/* browser window + floating code panel — wrapper reserves room so the
          panel overlaps the window without spilling outside the frame */}
      <div className="relative pb-9">
        <div className={`${CARD} overflow-hidden`}>
          <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
            <span className="ml-2 text-[10px] text-neutral-400">
              invisiedge.com
            </span>
          </div>
          <div className="relative overflow-hidden bg-linear-to-br from-[#5210F8] to-[#072C55] p-6 md:p-7">
            {/* soft moving sheen */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(120px 120px at 20% 20%, rgba(196,125,253,0.35), transparent)",
              }}
              animate={reduce ? undefined : { x: ["-10%", "40%", "-10%"] }}
              transition={loop(9)}
            />
            <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
              Built for conversion
            </p>
            <p className="relative mt-2 text-xl font-semibold text-white md:text-2xl">
              Your value, clearly delivered
            </p>
            <motion.div
              className="relative mt-4 h-8 w-28 rounded-full bg-white/20"
              animate={reduce ? undefined : { scaleX: [1, 1.18, 1] }}
              style={{ transformOrigin: "left" }}
              transition={loop(3.2)}
            />
          </div>
        </div>

        {/* floating code panel — positive insets keep it inside the frame */}
        <motion.div
          className="absolute bottom-0 right-0 w-[58%] rounded-xl border border-white/10 bg-[#0e0e12] p-3.5 shadow-[0_16px_40px_-12px_rgba(7,44,85,0.5)]"
          animate={reduce ? undefined : { y: [0, -6, 0] }}
          transition={loop(4.5)}
        >
          <div className="mb-2 flex gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#C47DFD]/70" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
            <div className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <pre className="font-mono text-[10px] leading-relaxed md:text-[11px]">
            {codeTokens.map((line, i) => (
              <motion.div
                key={line.k + i}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.12, ease: EASE_OUT }}
              >
                <span className="text-[#C47DFD]">{line.k}</span>
                <span className="text-white/70"> {line.rest}</span>
              </motion.div>
            ))}
            <motion.span
              className="inline-block h-3 w-1.5 translate-y-0.5 bg-[#C47DFD]"
              animate={reduce ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </pre>
        </motion.div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 3. SEO — Search Performance card (queries / pages / countries / devices)
 * ================================================================== */
const seoTabs = ["QUERIES", "PAGES", "COUNTRIES", "DEVICES"];
const seoCountryData = [
  { country: "United States", clicks: "4,702,093", impressions: "253,120,445" },
  { country: "India", clicks: "3,751,421", impressions: "165,732,782" },
  { country: "United Kingdom", clicks: "1,083,446", impressions: "47,736,726" },
  { country: "Germany", clicks: "842,110", impressions: "32,104,551" },
];

function SeoVisual() {
  const [activeTab, setActiveTab] = useState("COUNTRIES");

  return (
    <div className="w-full overflow-hidden rounded-3xl border border-purple-100/50 bg-white p-6 shadow-[0_20px_50px_rgba(120,119,198,0.08)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_20px_60px_rgba(120,119,198,0.12)]">
      {/* Card header & tabs */}
      <div className="border-b border-slate-100 pb-2">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-600">
            <BarChart3 size={14} />
            Search Performance
          </div>
          <button className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-50">
            <SlidersHorizontal size={16} />
          </button>
        </div>

        {/* Navigation tabs */}
        <div className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth">
          {seoTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative whitespace-nowrap pb-3 text-xs font-bold tracking-widest transition-all duration-200 ${
                activeTab === tab
                  ? "text-slate-900"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-linear-to-r from-violet-600 to-indigo-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Table content */}
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-50">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <th className="px-4 py-3">Country</th>
              <th className="px-4 py-3 text-right">Clicks</th>
              <th className="hidden px-4 py-3 text-right sm:table-cell">
                Impressions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50 text-sm">
            {seoCountryData.map((row) => (
              <tr
                key={row.country}
                className="group transition-colors duration-150 hover:bg-violet-50/30"
              >
                {/* Country name & icon */}
                <td className="flex items-center gap-3 px-4 py-3.5 font-medium text-slate-700">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-50 text-slate-400 transition-colors group-hover:bg-purple-100/50 group-hover:text-purple-600">
                    <Globe size={14} />
                  </div>
                  {row.country}
                </td>

                {/* Clicks */}
                <td className="px-4 py-3.5 text-right font-semibold tabular-nums text-slate-900">
                  {row.clicks}
                </td>

                {/* Impressions */}
                <td className="hidden px-4 py-3.5 text-right font-medium tabular-nums text-slate-400 transition-colors group-hover:text-slate-500 sm:table-cell">
                  {row.impressions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card footer / callout */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-2 text-xs text-slate-400">
        <span>Showing top traffic sources</span>
        <a
          href="#details"
          className="flex items-center gap-1 font-semibold text-purple-600 transition-colors hover:text-purple-700"
        >
          Full Report <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 4. SOCIAL — auto-scrolling content feed (constant motion → linear)
 * ================================================================== */
const posts = [
  { platform: "LinkedIn", text: "Thought leadership post", likes: "2.4k" },
  { platform: "Instagram", text: "Brand story reel", likes: "8.1k" },
  { platform: "LinkedIn", text: "Product launch", likes: "1.9k" },
  { platform: "Instagram", text: "Behind the scenes", likes: "5.3k" },
];

function SocialVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${FRAME}`}>
      {/* fade masks top & bottom */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-10 bg-linear-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-10 bg-linear-to-t from-white to-transparent" />
      <motion.div
        className="flex flex-col gap-3"
        animate={reduce ? undefined : { y: ["0%", "-50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {[...posts, ...posts].map((post, i) => (
          <div key={`${post.text}-${i}`} className={`${CARD} p-4`}>
            <div className="flex items-center justify-between">
              <span
                className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                style={{
                  color: PURPLE,
                  backgroundColor: "rgba(82,16,248,0.07)",
                }}
              >
                {post.platform}
              </span>
              <span className="text-xs text-neutral-400">♥ {post.likes}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-700">{post.text}</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${PURPLE}, ${LAVENDER})` }}
                animate={reduce ? { width: "70%" } : { width: ["24%", "82%", "24%"] }}
                transition={loop(4, i * 0.4)}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ================================================================== *
 * 5. AI-VIDEO — generator: avatar + waveform + render progress cycle
 * ================================================================== */
const waveform = Array.from(
  { length: 28 },
  (_, i) => 24 + Math.sin(i * 0.7) * 34 + 30,
);

function AiVideoVisual() {
  const reduce = useReducedMotion();
  const [rendering, setRendering] = useState(true);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setRendering((p) => !p), 4200);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className={`flex ${FRAME} flex-col gap-3`}>
      {/* player card */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden rounded-2xl"
        style={{ background: `linear-gradient(150deg, ${NAVY}, #0d4a8a)` }}
      >
        {/* avatar orb */}
        <motion.div
          className="relative flex h-24 w-24 items-center justify-center rounded-full"
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
      </div>

      {/* waveform + timeline */}
      <div className={`${CARD} p-4`}>
        <div className="flex h-12 items-center justify-center gap-[3px]">
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
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
          <motion.div
            className="h-full rounded-full"
            style={{ background: `linear-gradient(90deg, ${PURPLE}, ${LAVENDER})`, transformOrigin: "left" }}
            animate={reduce ? { scaleX: 0.6 } : { scaleX: [0, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ================================================================== *
 * 6. CRM — funnel pipeline with a lead flowing stage → stage
 * ================================================================== */
const stages = [
  { label: "Lead", count: 128, w: "100%" },
  { label: "Qualified", count: 74, w: "82%" },
  { label: "Proposal", count: 39, w: "64%" },
  { label: "Closed", count: 21, w: "46%" },
];

function CrmVisual() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setStep((p) => (p + 1) % stages.length), 1400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <div className={`flex ${FRAME} flex-col justify-center gap-2.5`}>
      {stages.map((stage, i) => {
        const on = step === i;
        return (
          <motion.div
            key={stage.label}
            className="relative mx-auto flex items-center justify-between rounded-xl border px-4 py-3"
            style={{ width: stage.w }}
            animate={{
              borderColor: on ? "rgba(82,16,248,0.5)" : "rgba(0,0,0,0.08)",
              backgroundColor: on ? "rgba(82,16,248,0.05)" : "#ffffff",
              boxShadow: on
                ? "0 10px 24px -12px rgba(82,16,248,0.4)"
                : "0 2px 12px -8px rgba(82,16,248,0.15)",
            }}
            transition={{ duration: 0.35, ease: EASE_OUT }}
          >
            <span className="text-sm text-neutral-700">{stage.label}</span>
            <span
              className="text-xs font-bold"
              style={{ color: on ? PURPLE : "#a3a3a3" }}
            >
              {stage.count}
            </span>
            {/* flowing lead dot */}
            {on && !reduce && (
              <motion.span
                layoutId="crm-lead"
                className="absolute -left-1.5 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full"
                style={{ backgroundColor: PURPLE }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              />
            )}
          </motion.div>
        );
      })}
      <motion.div
        className="mx-auto mt-1 rounded-xl px-4 py-2.5 text-center text-xs font-medium"
        style={{
          width: "46%",
          color: PURPLE,
          backgroundColor: "rgba(82,16,248,0.06)",
        }}
        animate={reduce ? undefined : { opacity: [0.65, 1, 0.65] }}
        transition={loop(2.6)}
      >
        Auto follow-up sent
      </motion.div>
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
 * 8. GTM — campaign launch board: headline metrics + goal progress
 * ================================================================== */
const gtmTags = ["GTM", "Events", "Paid Ads", "Sales Deck"];
const gtmStats = [
  { label: "Reach", value: "2.4M" },
  { label: "Leads", value: "840" },
  { label: "ROI", value: "312%" },
];

function GtmVisual() {
  const reduce = useReducedMotion();

  return (
    <div className={`flex ${FRAME} flex-col gap-3`}>
      <div className="flex flex-wrap gap-2">
        {gtmTags.map((tag, i) => (
          <motion.span
            key={tag}
            className={`rounded-full border px-3 py-1 text-[11px] font-medium ${
              i === 0
                ? "border-[#5210F8]/30 bg-[#5210F8]/5 text-[#5210F8]"
                : "border-neutral-200 bg-white text-neutral-500"
            }`}
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.06, ease: EASE_OUT }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div
        className="relative flex-1 overflow-hidden rounded-2xl p-6"
        style={{
          background: `linear-gradient(150deg, ${PURPLE}, ${NAVY})`,
          boxShadow: "0 20px 44px -18px rgba(82,16,248,0.5)",
        }}
      >
        <motion.div
          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full"
          style={{ background: "rgba(196,125,253,0.35)", filter: "blur(24px)" }}
          animate={reduce ? undefined : { scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={loop(5)}
        />
        <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
          Campaign launch
        </p>
        <p className="relative mt-2 text-xl font-semibold text-white">
          Q4 Growth Sprint
        </p>

        <div className="relative mt-6 grid grid-cols-3 gap-3">
          {gtmStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.1, ease: EASE_OUT }}
            >
              <p className="text-lg font-bold text-white">{s.value}</p>
              <p className="text-[10px] text-white/55">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* goal progress */}
        <div className="relative mt-5">
          <div className="mb-1.5 flex justify-between text-[9px] text-white/55">
            <span>Goal progress</span>
            <span>78%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-white"
              style={{ transformOrigin: "left" }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 0.78 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: EASE_OUT }}
            />
          </div>
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
