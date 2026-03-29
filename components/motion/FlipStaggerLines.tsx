"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  easePremium,
  staggerLineContainerVariants,
  viewportDefault,
} from "./presets";

type FlipStaggerLinesProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2";
  trigger?: "mount" | "inView";
};

const flipItemReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const flipItem = {
  hidden: {
    opacity: 0,
    rotateX: -78,
    y: 14,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easePremium,
    },
  },
};

export function FlipStaggerLines({
  lines,
  className,
  lineClassName,
  as = "h1",
  trigger = "mount",
}: FlipStaggerLinesProps) {
  const reduce = useReducedMotion();
  const itemVariants = reduce ? flipItemReduced : flipItem;

  const containerVariants = reduce
    ? staggerLineContainerVariants
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.11,
            delayChildren: 0.02,
          },
        },
      };

  const lineBlocks = lines.map((line, i) => (
    <motion.span
      key={i}
      className={lineClassName ? `${lineClassName} block` : "block"}
      variants={itemVariants}
      style={{ transformOrigin: "50% 100%", transformStyle: "preserve-3d" }}
    >
      {line}
    </motion.span>
  ));

  const motionProps =
    trigger === "mount"
      ? { initial: "hidden" as const, animate: "visible" as const }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: viewportDefault,
        };

  const inner =
    as === "h2" ? (
      <motion.h2
        className={className}
        variants={containerVariants}
        style={{ transformStyle: "preserve-3d" }}
        {...motionProps}
      >
        {lineBlocks}
      </motion.h2>
    ) : (
      <motion.h1
        className={className}
        variants={containerVariants}
        style={{ transformStyle: "preserve-3d" }}
        {...motionProps}
      >
        {lineBlocks}
      </motion.h1>
    );

  return (
    <div
      className="w-full perspective-distant"
      style={{ perspectiveOrigin: "50% 50%" }}
    >
      {inner}
    </div>
  );
}
