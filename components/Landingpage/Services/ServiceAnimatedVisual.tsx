"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "motion/react";
import BrandLogo from "@/components/BrandLogo";
import type { ServiceVisualType } from "@/lib/data/servicesPageContent";

const brandColors = [
  { hex: "#FFFFFF", label: "White" },
  { hex: "#5210F8", label: "Purple" },
  { hex: "#C47DFD", label: "Lavender" },
  { hex: "#072C55", label: "Navy" },
];

function BrandVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="grid h-full min-h-[320px] grid-cols-2 gap-3 md:min-h-[380px]">
      <motion.div
        className="col-span-2 flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
        animate={reduce ? undefined : { opacity: [0.92, 1, 0.92] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="grid flex-1 grid-cols-8 gap-1.5 opacity-60">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm"
              style={{
                backgroundColor:
                  [0, 5, 12, 18].includes(i) ? brandColors[(i % 3) + 1].hex : "transparent",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            />
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 [&_svg]:h-full [&_svg]:w-full">
            <BrandLogo />
          </div>
          <span className="text-2xl font-semibold tracking-tight text-[#111]">
            InvisiEdge
          </span>
        </div>
      </motion.div>

      <motion.div
        className="flex gap-2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
        animate={reduce ? undefined : { y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {brandColors.map((color, i) => (
          <div key={color.hex} className="flex flex-1 flex-col items-center gap-2">
            <motion.div
              className="w-full flex-1 rounded-full border border-neutral-100"
              style={{ backgroundColor: color.hex }}
              animate={reduce ? undefined : { scaleY: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
            <span
              className="text-[9px] font-medium tracking-wider text-neutral-400"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {color.hex}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
        animate={reduce ? undefined : { opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-px opacity-30">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="border border-neutral-200" />
          ))}
        </div>
        <div className="relative flex h-full items-center justify-center">
          <div className="h-16 w-16 opacity-90 [&_svg]:h-full [&_svg]:w-full">
            <BrandLogo />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function WebsiteVisual() {
  const reduce = useReducedMotion();
  const codeLines = [
    'const Page = () => (',
    '  <section className="hero">',
    '    <h1>Grow faster</h1>',
    '  </section>',
    ');',
  ];

  return (
    <div className="relative min-h-[320px] md:min-h-[380px]">
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
          <span className="ml-2 text-[10px] text-neutral-400">invisiedge.com</span>
        </div>
        <motion.div
          className="bg-linear-to-br from-[#5210F8] to-[#072C55] p-8 md:p-10"
          animate={reduce ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "200% 200%" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
            Built for conversion
          </p>
          <p className="mt-2 text-xl font-semibold text-white md:text-2xl">
            Your value, clearly delivered
          </p>
          <motion.div
            className="mt-4 h-8 w-28 rounded-full bg-white/20"
            animate={reduce ? undefined : { width: ["7rem", "8.5rem", "7rem"] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute -bottom-4 -right-2 w-[70%] rounded-xl border border-neutral-200 bg-[#111] p-4 shadow-xl md:-right-4"
        animate={reduce ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-2 flex gap-1.5">
          <div className="h-2 w-2 rounded-full bg-[#C47DFD]/60" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <pre className="font-mono text-[10px] leading-relaxed md:text-[11px]">
          {codeLines.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
            >
              <span className="text-[#C47DFD]">{line.split(" ")[0]}</span>
              <span className="text-white/70"> {line.split(" ").slice(1).join(" ")}</span>
            </motion.div>
          ))}
        </pre>
      </motion.div>
    </div>
  );
}

function SeoVisual() {
  const reduce = useReducedMotion();
  const bars = [40, 65, 45, 80, 55, 70, 90, 60];
  const linePoints = "10,50 30,35 50,45 70,20 90,30";

  return (
    <div className="grid min-h-[320px] grid-cols-2 gap-3 md:min-h-[380px]">
      <motion.div
        className="col-span-2 rounded-2xl border border-[#5210F8]/20 bg-[#5210F8] p-5 shadow-sm"
        animate={reduce ? undefined : { boxShadow: ["0 4px 20px rgba(82,16,248,0.15)", "0 8px 32px rgba(82,16,248,0.25)", "0 4px 20px rgba(82,16,248,0.15)"] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-20 shrink-0">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
              <motion.circle
                cx="40" cy="40" r="32" fill="none" stroke="white" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray="201"
                animate={reduce ? undefined : { strokeDashoffset: [201, 50, 201] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">
              17k
            </span>
          </div>
          <div className="flex flex-col gap-1.5 text-[11px] text-white/80">
            {["Direct 42%", "Organic 28%", "Paid 18%", "Social 12%"].map((item, i) => (
              <motion.span
                key={item}
                animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <p className="text-[10px] text-neutral-400">CTR by source</p>
        <div className="mt-3 flex h-24 items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-[#5210F8]/20"
              style={{ height: `${h}%` }}
              animate={reduce ? undefined : { height: [`${h}%`, `${h + 15}%`, `${h}%`] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
        <p className="text-[10px] text-neutral-400">Organic trend</p>
        <svg viewBox="0 0 100 60" className="mt-2 h-20 w-full" preserveAspectRatio="none">
          <motion.polyline
            points={linePoints}
            fill="none"
            stroke="#5210F8"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}

function SocialVisual() {
  const posts = [
    { platform: "LinkedIn", text: "Thought leadership post", likes: "2.4k" },
    { platform: "Instagram", text: "Brand story reel", likes: "8.1k" },
    { platform: "LinkedIn", text: "Product launch", likes: "1.9k" },
  ];

  return (
    <div className="relative min-h-[320px] overflow-hidden md:min-h-[380px]">
      <motion.div
        className="flex flex-col gap-3"
        animate={{ y: [0, -120, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {[...posts, ...posts].map((post, i) => (
          <div
            key={`${post.text}-${i}`}
            className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5210F8]">
                {post.platform}
              </span>
              <motion.span
                className="text-xs text-neutral-400"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                ♥ {post.likes}
              </motion.span>
            </div>
            <p className="mt-2 text-sm text-neutral-700">{post.text}</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
              <motion.div
                className="h-full rounded-full bg-[#5210F8]"
                animate={{ width: ["20%", "85%", "20%"] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function AiVideoVisual() {
  const bars = Array.from({ length: 24 }, (_, i) => 20 + Math.sin(i * 0.8) * 40 + 30);

  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:min-h-[380px]">
      <motion.div
        className="flex h-20 w-20 items-center justify-center rounded-full border border-[#5210F8]/25 bg-[#5210F8]/10"
        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(82,16,248,0)", "0 0 24px rgba(82,16,248,0.2)", "0 0 0 rgba(82,16,248,0)"] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="ml-1 h-0 w-0 border-y-8 border-l-12 border-y-transparent border-l-[#5210F8]" />
      </motion.div>
      <p className="mt-4 text-sm font-medium text-neutral-600">AI Avatar Video</p>
      <div className="mt-6 flex h-16 w-full items-end justify-center gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-full bg-linear-to-t from-[#5210F8] to-[#C47DFD]"
            animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.5}%`] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
          />
        ))}
      </div>
      <motion.div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-neutral-100">
        <motion.div
          className="h-full bg-[#C47DFD]"
          animate={{ width: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}

function CrmVisual() {
  const stages = ["Lead", "Qualified", "Proposal", "Closed"];

  return (
    <div className="flex min-h-[320px] flex-col justify-center gap-4 md:min-h-[380px]">
      {stages.map((stage, i) => (
        <div key={stage} className="relative">
          <div className="flex items-center justify-between rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-sm">
            <span className="text-sm text-neutral-700">{stage}</span>
            <motion.span
              className="text-xs font-bold text-[#5210F8]"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
            >
              {12 + i * 8} leads
            </motion.span>
          </div>
          <motion.div
            className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#5210F8]"
            animate={{ x: [0, 8, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.8 }}
          />
        </div>
      ))}
      <motion.div
        className="mt-2 rounded-xl border border-[#5210F8]/20 bg-[#5210F8]/5 px-4 py-3 text-center text-xs text-[#5210F8]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Auto follow-up triggered
      </motion.div>
    </div>
  );
}

function LeadGenVisual() {
  const metrics = [
    { label: "Leads", value: "360", change: "+24%" },
    { label: "Reply Rate", value: "18%", change: "+6%" },
    { label: "Meetings", value: "42", change: "+12%" },
  ];

  return (
    <div className="grid min-h-[320px] grid-cols-2 gap-3 md:min-h-[380px]">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className={`rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm ${i === 0 ? "col-span-2" : ""}`}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.6 }}
        >
          <p className="text-[10px] uppercase tracking-wider text-neutral-400">{m.label}</p>
          <motion.p
            className="mt-2 text-3xl font-bold text-[#111]"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
          >
            {m.value}
          </motion.p>
          <p className="mt-1 text-xs text-[#5210F8]">{m.change}</p>
        </motion.div>
      ))}
      <motion.div
        className="col-span-2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="space-y-2">
          {["Hi {{name}}, saw your post on...", "Following up on our conversation..."].map((msg) => (
            <div key={msg} className="rounded-lg bg-neutral-50 px-3 py-2 text-[11px] text-neutral-600">
              {msg}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function GtmVisual() {
  const tags = ["GTM", "Expo", "Paid Ads", "Sales Deck", "Events"];

  return (
    <div className="flex min-h-[320px] flex-col gap-4 md:min-h-[380px]">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
              i === 0
                ? "border-[#5210F8]/30 bg-[#5210F8]/5 text-[#5210F8]"
                : "border-neutral-200 text-neutral-500"
            }`}
            animate={i === 0 ? { borderColor: ["rgba(82,16,248,0.3)", "rgba(196,125,253,0.6)", "rgba(82,16,248,0.3)"] } : undefined}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="flex-1 rounded-2xl border border-[#5210F8]/15 bg-linear-to-br from-[#5210F8]/10 to-[#072C55]/10 p-6"
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#5210F8]">
          Campaign Launch
        </p>
        <p className="mt-3 text-xl font-semibold text-[#111]">Q4 Growth Sprint</p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {["Reach", "Leads", "ROI"].map((label, i) => (
            <div key={label} className="text-center">
              <motion.p
                className="text-lg font-bold text-[#111]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                {["2.4M", "840", "312%"][i]}
              </motion.p>
              <p className="text-[10px] text-neutral-400">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
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
