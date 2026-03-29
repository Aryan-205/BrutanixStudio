"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { viewportDefault } from "./presets";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Slightly shorter motion for small UI */
  short?: boolean;
  /** Horizontal slide: positive = from right */
  x?: number;
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView">;

export function Reveal({
  children,
  className,
  delay = 0,
  short,
  x,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  const initial = reduce
    ? { opacity: 0 }
    : x !== undefined
      ? { opacity: 0, x }
      : { opacity: 0, y: 28 };

  const animateIn = reduce
    ? { opacity: 1 }
    : x !== undefined
      ? { opacity: 1, x: 0 }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animateIn}
      viewport={viewportDefault}
      transition={{
        duration: short ? 0.55 : 0.85,
        ease: [0.22, 1, 0.36, 1],
        delay: reduce ? 0 : delay,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export { viewportDefault } from "./presets";
