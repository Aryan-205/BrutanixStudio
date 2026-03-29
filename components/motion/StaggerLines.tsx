"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  staggerLineContainerVariants,
  staggerLineItemReducedVariants,
  staggerLineItemVariants,
  viewportDefault,
} from "./presets";

type StaggerLinesProps = {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "div";
  /** Mount animation (hero) vs scroll into view */
  trigger?: "mount" | "inView";
};

export function StaggerLines({
  lines,
  className,
  lineClassName,
  as = "h1",
  trigger = "mount",
}: StaggerLinesProps) {
  const reduce = useReducedMotion();
  const itemVariants = reduce
    ? staggerLineItemReducedVariants
    : staggerLineItemVariants;

  const lineBlocks = lines.map((line, i) => (
    <motion.span
      key={i}
      className={lineClassName ? `${lineClassName} block` : "block"}
      variants={itemVariants}
    >
      {line}
    </motion.span>
  ));

  const motionProps =
    trigger === "mount"
      ? {
          initial: "hidden" as const,
          animate: "visible" as const,
        }
      : {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: viewportDefault,
        };

  if (as === "h2") {
    return (
      <motion.h2
        className={className}
        variants={staggerLineContainerVariants}
        {...motionProps}
      >
        {lineBlocks}
      </motion.h2>
    );
  }
  if (as === "div") {
    return (
      <motion.div
        className={className}
        variants={staggerLineContainerVariants}
        {...motionProps}
      >
        {lineBlocks}
      </motion.div>
    );
  }
  return (
    <motion.h1
      className={className}
      variants={staggerLineContainerVariants}
      {...motionProps}
    >
      {lineBlocks}
    </motion.h1>
  );
}
