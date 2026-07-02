"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Rocket, TrendingUp, Zap } from "lucide-react";
import {
  useReducedMotion,
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const avatarImages = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
];

const avatarBorderColors = ["#ec4899", "#a855f7", "#eab308", "#ef4444"];

const stats = [
  {
    id: 1,
    variant: "funding" as const,
    value: "$300m",
    description: "In funding clients raised owing to our design work",
  },
  {
    id: 2,
    variant: "awards" as const,
    value: "60+",
    description: "World's biggest international design awards won",
  },
  {
    id: 3,
    variant: "users" as const,
    value: "100M",
    description:
      "Active users experiencing our design every day via products we made",
  },
  {
    id: 4,
    variant: "growth" as const,
    value: "24%",
    description:
      "Of total marketing budgets converted into sales with our branding & materials",
  },
];

function AvatarStack() {
  return (
    <div className="flex -space-x-2">
      {avatarImages.map((src, index) => (
        <div
          key={src}
          className="relative h-10 w-10 overflow-hidden rounded-full border-2"
          style={{ borderColor: avatarBorderColors[index] }}
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="28px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function SpringGraphic() {
  return (
    <div className="relative flex h-20 w-20 shrink-0 items-center justify-center md:h-24 md:w-24">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 80 80"
        aria-hidden
      >
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#1f1f1f"
          strokeWidth="1"
        />
        <path
          d="M 12 40 A 28 28 0 0 1 40 12"
          fill="none"
          stroke="#ff6b2c"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#141414]">
        <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
          <path
            d="M10 20 C10 12 14 8 20 8 C26 8 30 12 30 20 C30 28 26 32 20 32 C14 32 10 28 10 20"
            fill="none"
            stroke="#b8c0cc"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M14 20 C14 15 16 12 20 12 C24 12 26 15 26 20 C26 25 24 28 20 28 C16 28 14 25 14 20"
            fill="none"
            stroke="#d4dae2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 20 C18 18 19 17 20 17 C21 17 22 18 22 20 C22 22 21 23 20 23 C19 23 18 22 18 20"
            fill="none"
            stroke="#eef1f5"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function GrowthSparkline() {
  return (
    <svg viewBox="0 0 48 16" className="h-3 w-12" aria-hidden>
      <path
        d="M0 12 C6 4 10 14 16 8 S28 2 34 10 S42 6 48 4"
        fill="none"
        stroke="#ff6b2c"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FundingBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/5 bg-[#141414] p-2 pr-4 shadow-[inset_20px_6px_10px_1px_rgba(255,255,255,0.1),inset_-10px_-10px_10px_1px_rgba(0,0,0,0.06)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <Zap className="h-4 w-4 text-[#ff6b2c]" fill="#ff6b2c" />
      </div>
      <span className="text-sm font-medium text-white/90">
        Business-driven UX
      </span>
    </div>
  );
}

function UsersBadge() {
  return (
    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/5 bg-[#141414] p-1 pr-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
        <Rocket className="h-4 w-4 text-[#ff6b2c]" />
      </div>
      <AvatarStack />
    </div>
  );
}

function GrowthBadge() {
  return (
    <div className="ml-auto flex w-fit items-center gap-2 rounded-full border border-white/5 bg-[#141414] p-1 pr-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm">
        <span aria-hidden><Rocket className="h-4 w-4 text-[#4ade80]" /></span>
      </div>
      <div className="flex flex-col gap-0.5 pr-1">
        <span className="flex items-center gap-1 text-xs font-semibold text-[#4ade80]">
          <TrendingUp className="h-4 w-4" strokeWidth={2.5} />
          19%
        </span>
        <GrowthSparkline />
      </div>
    </div>
  );
}

function StatCardContent({
  variant,
  value,
  description,
}: {
  variant: (typeof stats)[number]["variant"];
  value: string;
  description: string;
}) {
  if (variant === "funding") {
    return (
      <>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full h-full flex justify-end">
          <FundingBadge />
        </div>
        <div className="mt-auto pt-10">
          <p className="text-7xl text-center font-semibold tracking-tight text-white md:text-[5rem]">
            {value}
          </p>
          <p className="mt-8 max-w-[16rem] text-lg leading-relaxed text-[#888] px-4">
            {description}
          </p>
        </div>
      </div>
      </>
    );
  }

  if (variant === "awards") {
    return (
      <>
        <div className="flex items-start justify-between gap-4">
          <p className="text-7xl font-semibold tracking-tight text-white md:text-[5rem]">
            {value}
          </p>
          <SpringGraphic />
        </div>
        <p className="mt-auto max-w-[18rem] pt-8 text-lg leading-relaxed text-[#888]">
          {description}
        </p>
      </>
    );
  }

  if (variant === "users") {
    return (
      <>
        <UsersBadge />
        <div className="mt-auto pt-10">
          <p className="text-7xl font-semibold tracking-tight text-white md:text-[5rem]">
            {value}
          </p>
          <p className="mt-4 max-w-[18rem] text-lg leading-relaxed text-[#888] px-4">
            {description}
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <GrowthBadge />
      <div className="mt-auto pt-10">
        <p className="text-7xl font-semibold tracking-tight text-white md:text-[5rem]"> 
          {value}
        </p>
        <p className="mt-4 max-w-[18rem] text-lg leading-relaxed text-[#888] px-4">
          {description}
        </p>
      </div>
    </>
  );
}

function SolutionCard({
  value,
  description,
  variant,
  id,
  index,
}: (typeof stats)[number] & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const isEvenIndex = index % 2 === 1;
  const initialX = isEvenIndex
    ? index === 1
      ? 150
      : 200
    : index === 0
      ? -150
      : -200;
  const initialRotate = isEvenIndex
    ? index === 1
      ? 8
      : 12
    : index === 0
      ? -8
      : -12;

  const finalY = id % 2 === 0 ? 40 : -40;
  const initialY = finalY + (isEvenIndex ? 120 : 80);

  const xVal = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce || isMobile ? 0 : initialX, 0],
  );
  const yVal = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? finalY : initialY, finalY],
  );
  const rotateVal = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce || isMobile ? 0 : initialRotate, 0],
  );
  const opacityVal = useTransform(scrollYProgress, [0, 0.75], [0, 1]);

  return (
    <motion.article
      ref={cardRef}
      style={{
        x: xVal,
        y: yVal,
        rotate: rotateVal,
        opacity: opacityVal,
      }}
      className="group relative flex min-h-70 w-full min-w-0 flex-col justify-between rounded-[1.75rem] bg-[#0a0a0a] p-7 md:min-h-76 md:p-8 shadow-[inset_1px_1px_10px_1px_rgba(255,255,255,0.1),inset_-4px_-4px_20px_0px_rgba(0,0,0,1)] border border-[#1c1c1c]"
    >
      <StatCardContent variant={variant} value={value} description={description} />
    </motion.article>
  );
}

const SolutionsSection = () => {
  return (
    <section id="services" className="overflow-hidden bg-[#080909] font-sans">
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex w-full max-w-5xl flex-col items-center gap-12 px-6 py-24 md:grid md:grid-cols-2 md:gap-6 md:px-12 md:py-24">
          {stats.map((stat, index) => (
            <SolutionCard key={stat.id} index={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
