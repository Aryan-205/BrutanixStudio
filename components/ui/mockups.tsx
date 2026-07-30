import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon } from "@hugeicons/core-free-icons";

/**
 * Project stills and brand objects are drawn in CSS/SVG so the layout is
 * deterministic, while the human-facing slots (portrait, studio still life)
 * use real photography from /public/images.
 */

/** Four-petal brand glyph — the volt mark on the dark cards. */
export function PetalMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className}>
      <g>
        {[0, 90, 180, 270].map((angle) => (
          <path
            key={angle}
            d="M24 24C15 15 14 5 24 2c10 3 9 13 0 22Z"
            transform={`rotate(${angle} 24 24)`}
          />
        ))}
      </g>
    </svg>
  );
}

/** Services panel: black tote bag held in frame. */
export function ToteMockup() {
  return (
    <div className="relative aspect-[5/6] w-full">
      <svg
        viewBox="0 0 320 384"
        className="absolute inset-0 size-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="tote-floor" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0" stopColor="#f3f4f7" />
            <stop offset="1" stopColor="#d5d8df" />
          </linearGradient>
          <linearGradient id="tote-skin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f0c4a2" />
            <stop offset="1" stopColor="#d99e75" />
          </linearGradient>
          <linearGradient id="tote-canvas" x1="0.1" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#1d1d1f" />
            <stop offset="0.55" stopColor="#111113" />
            <stop offset="1" stopColor="#050506" />
          </linearGradient>
        </defs>

        <rect width="320" height="384" fill="url(#tote-floor)" />

        {/* Forearm reaching in from the top of the frame */}
        <path
          d="M150 -20h34c6 0 10 5 9 11l-9 74c-1 7-7 12-14 12h-13c-7 0-13-6-13-13l-3-72c0-7 4-12 9-12Z"
          fill="url(#tote-skin)"
        />
        {/* Fist */}
        <path
          d="M139 66h44c8 0 14 7 13 15l-3 22c-1 8-8 14-16 14h-33c-8 0-15-7-15-15l1-21c0-8 6-15 9-15Z"
          fill="url(#tote-skin)"
        />
        <path
          d="M143 88h40"
          stroke="#c98d64"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.65"
        />
        <path
          d="M145 99h36"
          stroke="#c98d64"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Handles */}
        <path
          d="M120 196c-4-44 6-70 34-80"
          fill="none"
          stroke="#141416"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          d="M216 196c4-44-6-70-34-80"
          fill="none"
          stroke="#141416"
          strokeWidth="9"
          strokeLinecap="round"
        />

        {/* Bag body, sitting right of centre and cropped by the frame */}
        <path
          d="M104 190h150c4 0 7 3 7 7v187H97V197c0-4 3-7 7-7Z"
          fill="url(#tote-canvas)"
        />
        {/* Canvas fold */}
        <path
          d="M97 258c30 10 60 14 90 12s50-8 74-18"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.07"
        />

        <text
          x="112"
          y="352"
          className="font-display"
          fontSize="96"
          fontWeight="800"
          letterSpacing="-6"
          fill="#ffffff"
        >
          .us
        </text>
      </svg>

      {/* Arrow badge, stamped on the canvas */}
      <span className="absolute top-[15%] right-[14%] grid size-9 place-items-center rounded-full bg-white text-ink shadow-[0_6px_18px_-6px_rgba(0,0,0,0.5)]">
        <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} strokeWidth={2.4} />
      </span>
    </div>
  );
}

const SPECTRUM = [
  "from-[#ff4d6d] to-[#ffb03a]",
  "from-[#ffb03a] to-[#f8e45c]",
  "from-[#4ce0a8] to-[#2ec4f1]",
  "from-[#2ec4f1] to-[#5b6bff]",
  "from-[#5b6bff] to-[#a855f7]",
  "from-[#a855f7] to-[#ff4d6d]",
  "from-[#f8e45c] to-[#4ce0a8]",
];

/** Work grid: dark product screenshot for Chat Genius. */
export function ChatGeniusMockup() {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0c0d11]">
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_15%_10%,rgba(91,107,255,0.22)_0%,rgba(91,107,255,0)_70%)]" />

      <div className="absolute top-4 left-4 flex gap-1.5" aria-hidden="true">
        <span className="size-1.5 rounded-full bg-white/25" />
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/15" />
      </div>

      <p className="font-display absolute top-1/2 left-5 max-w-[62%] -translate-y-1/2 text-lg leading-tight font-bold tracking-tight text-white sm:left-6 sm:text-2xl lg:text-3xl">
        Pioneering research{" "}
        <span className="decoration-volt/70 underline decoration-2 underline-offset-[5px]">
          on the path to AGI
        </span>
      </p>

      <div
        className="absolute right-0 bottom-0 flex h-[62%] items-end gap-[3px] pr-5"
        aria-hidden="true"
      >
        {SPECTRUM.map((tone, i) => (
          <span
            key={tone}
            className={`w-[7px] rounded-t-full bg-gradient-to-t sm:w-[9px] ${tone}`}
            style={{ height: `${38 + ((i * 37) % 62)}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/** Work grid: slit-scan portrait for Field Type. */
export function FieldTypeMockup() {
  return (
    <div className="slit-scan relative aspect-[16/11] w-full overflow-hidden" />
  );
}

/** Work grid: print collateral for Rock Bottom. */
export function RockBottomMockup() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#eeeff2] to-[#d9dbe2]">
      <div className="absolute top-1/2 left-[46%] h-[58%] w-[36%] -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] rounded-[3px] bg-gradient-to-br from-[#f7f8fa] to-[#dcdee5] shadow-[0_14px_26px_-14px_rgba(20,25,60,0.4)]" />
      <div className="absolute top-1/2 left-[58%] h-[62%] w-[34%] -translate-x-1/2 -translate-y-1/2 rotate-[9deg] rounded-[3px] bg-gradient-to-br from-[#3446f6] to-[#161fa8] shadow-[0_18px_30px_-12px_rgba(18,24,90,0.55)]">
        <span className="font-display absolute bottom-3 left-3 text-xs font-bold tracking-[0.16em] text-white/80 uppercase">
          Rock
          <br />
          Bottom
        </span>
      </div>
    </div>
  );
}

/** Team section: portrait of the founder at his desk. */
export function FounderPortrait() {
  return (
    <>
      <Image
        src="/images/founder.jpg"
        alt="Portrait of the Brutanix Studio founder"
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.55)_100%)]" />
    </>
  );
}
