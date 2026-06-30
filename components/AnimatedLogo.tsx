"use client";

import { motion, type Transition } from "motion/react";

type DrawPathProps = {
  d: string;
  stroke: string;
  fill?: string;
  strokeWidth?: number;
  delay?: number;
  duration?: number;
  filled?: boolean;
};

function DrawPath({
  d,
  stroke,
  fill,
  strokeWidth = 2,
  delay = 0,
  duration = 1,
  filled = false,
}: DrawPathProps) {
  const transition: Transition = filled
    ? {
        pathLength: { duration, ease: "easeInOut", delay },
        fillOpacity: { duration: 0.8, delay: delay + duration * 0.9 },
      }
    : { duration, ease: "easeInOut", delay };

  return (
    <motion.path
      d={d}
      fill={filled ? fill : "none"}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, fillOpacity: filled ? 0 : 1 }}
      animate={{ pathLength: 1, fillOpacity: 1 }}
      transition={transition}
    />
  );
}

export default function AnimatedLogo() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="1517"
      height="1040"
      fill="none"
      viewBox="0 0 1517 1040"
      className="h-auto w-full"
    >
      <DrawPath
        d="M525.274 32.285h2v791h-2zM729.274 32.285h2v791h-2z"
        stroke="#404040"
        strokeWidth={2}
        delay={0}
      />
      <DrawPath
        d="m1298.29 12.51 1.338 1.486L259.065 950.601l-1.338-1.486z"
        stroke="#404040"
        strokeWidth={2}
        delay={0.1}
      />
      <DrawPath
        d="m369.184 2.676-1.289 1.53 1147.083 966.54 1.289-1.529z"
        stroke="#404040"
        strokeWidth={2}
        delay={0.2}
      />
      <DrawPath
        d="m600.07 507.068-72.796 63.481V264.803l72.796 62.185z"
        stroke="url(#logo-gradient)"
        fill="url(#logo-gradient)"
        filled
        delay={0.35}
      />
      <DrawPath
        d="M600.059 641.176V506.913l102.215-92.237-102.215-88.186V199.285l129.214 109.682v216.118z"
        stroke="url(#logo-gradient)"
        fill="url(#logo-gradient)"
        filled
        delay={0.5}
      />
      <DrawPath
        d="m221.469 0-1.302 1.518 1138.438 976.707 1.303-1.518z"
        stroke="#404040"
        strokeWidth={2}
        delay={0.15}
      />
      <DrawPath
        d="M598.274 32.285h2v791h-2z"
        stroke="#404040"
        strokeWidth={2}
        delay={0.05}
      />
      <DrawPath
        d="m1120.28 40.877 1.33 1.494L1.332 1039.857l-1.33-1.494z"
        stroke="#404040"
        strokeWidth={2}
        delay={0.25}
      />

      <defs>
        <linearGradient
          id="logo-gradient"
          x1="630"
          x2="630"
          y1="199"
          y2="641"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="rgb(82, 16, 248)" />
          <stop offset="1" stopColor="rgb(196, 125, 253)" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
