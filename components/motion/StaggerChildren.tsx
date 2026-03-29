"use client";

import React, { Children, isValidElement } from "react";
import { motion, useReducedMotion } from "motion/react";
import { staggerItemVariants, viewportDefault } from "./presets";

type StaggerChildrenProps = {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.09,
}: StaggerChildrenProps) {
  const reduce = useReducedMotion();

  const containerVariants = reduce
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.02 } } }
    : {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.04,
          },
        },
      };

  const itemVariants = reduce
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : staggerItemVariants;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportDefault}
    >
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        return (
          <motion.div key={child.key ?? i} variants={itemVariants}>
            {child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
