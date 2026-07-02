"use client";

import React from "react";
import { motion } from "motion/react";
import AnimatedLogo from "./AnimatedLogo";

export default function Intro() {
  return (
    <motion.div exit={{ y:"100%" }} transition={{ duration: 0.6, ease: "easeInOut" }} className="w-full h-screen flex items-center justify-center fixed inset-0 z-100 bg-white">
      <div className="translate-x-0 translate-y-0 md:translate-x-20 md:translate-y-20">
        <AnimatedLogo />
      </div>
    </motion.div>
  );
}
