import type { Transition, Variant, Variants } from "motion/react";

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const viewportDefault = {
  once: true,
  amount: 0.28,
  margin: "0px 0px -12% 0px",
} as const;

export const transitionReveal: Transition = {
  duration: 0.85,
  ease: easePremium,
};

export const transitionRevealShort: Transition = {
  duration: 0.6,
  ease: easePremium,
};

export const transitionRevealLong: Transition = {
  duration: 1.05,
  ease: easePremium,
};

export const fadeUpHidden: Variant = {
  opacity: 0,
  y: 28,
};

export const fadeUpVisible: Variant = {
  opacity: 1,
  y: 0,
};

export const fadeUpVariants: Variants = {
  hidden: fadeUpHidden,
  visible: fadeUpVisible,
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionReveal,
  },
};

export const staggerLineContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

export const staggerLineItemVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...transitionRevealLong, filter: { duration: 0.75 } },
  },
};

export const staggerLineItemReducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.25 },
  },
};
