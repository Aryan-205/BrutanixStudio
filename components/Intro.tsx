"use client";

import React from "react";
import { motion } from "motion/react";
import AnimatedLogo from "./AnimatedLogo";

export default function Intro() {
  return (
    <motion.div
      exit={{ y: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-100 flex h-dvh w-full items-center justify-center bg-white"
    >
      <div className="w-full flex md:translate-x-24 md:translate-y-20">
        <AnimatedLogo />
      </div>
    </motion.div>
  );
}
