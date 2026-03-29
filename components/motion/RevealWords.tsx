"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

type RevealWordsProps = {
  text: string;
  className?: string;
  wordClassName?: string;
  as?: "h2" | "p";
};

function WordSpan({
  word,
  index,
  total,
  scrollYProgress,
  wordClassName,
}: {
  word: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  wordClassName?: string;
}) {
  const n = Math.max(total, 1);
  const t0 = index / n;
  const t1 = (index + 1) / n;
  const pad = 0.1 / n;
  const opacity = useTransform(
    scrollYProgress,
    [t0, t1 + pad],
    [0, 1],
    { clamp: true }
  );
  const x = useTransform(
    scrollYProgress,
    [t0, t1 + pad],
    [-12, 0],
    { clamp: true }
  );

  return (
    <motion.span
      className={
        wordClassName
          ? `${wordClassName} inline-block align-baseline mr-[0.2em] last:mr-0`
          : "inline-block align-baseline mr-[0.2em] last:mr-0"
      }
      style={{ opacity, x }}
    >
      {word}
    </motion.span>
  );
}

export function RevealWords({
  text,
  className,
  wordClassName,
  as = "h2",
}: RevealWordsProps) {
  const ref = useRef<HTMLHeadingElement | HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.32"],
  });

  const words = text.trim().split(/\s+/).filter(Boolean);

  const MotionTag = as === "p" ? motion.p : motion.h2;

  if (reduce) {
    return (
      <MotionTag ref={ref} className={className}>
        {words.join(" ")}
      </MotionTag>
    );
  }

  return (
    <MotionTag ref={ref} className={className}>
      {words.map((word, index) => (
        <WordSpan
          key={`${index}-${word}`}
          word={word}
          index={index}
          total={words.length}
          scrollYProgress={scrollYProgress}
          wordClassName={wordClassName}
        />
      ))}
    </MotionTag>
  );
}
