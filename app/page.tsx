"use client";

import HeroSection from "@/components/Landingpage/HeroSection";
import AboutSection from "@/components/Landingpage/AboutSection";
import WorkSection from "@/components/Landingpage/WorkSection";
import ProjectsSection from "@/components/Landingpage/ProjectsSection";
import ServicesSection from "@/components/Landingpage/ServicesSection";
import SolutionsSection from "@/components/Landingpage/SolutionsSection";
import HowItWorksSection from "@/components/Landingpage/HowItWorksSection";
import ProgressSection from "@/components/Landingpage/ProgressSection";
import TestimonialSection from "@/components/Landingpage/TestimonialSection";
import { MotionProvider } from "./MotionProvider";
import Prototype from "@/components/Landingpage/Prototype";
import Intro from "@/components/Intro";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Landingpage/FooterSection";

export default function Home() {

  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsIntroComplete(true);
    }, 3000);
  }, []);

  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip bg-[#f9f9f9] shadow-[0_20px_50px_rgba(0,0,0,0.15)] pb-10 rounded-b-3xl">
        <Navbar animated />
        <AnimatePresence mode="wait">
        {!isIntroComplete && <Intro />}
        </AnimatePresence>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        {/* <ProgressSection /> */}
        <Prototype />
        <ProjectsSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialSection />
      </div>

      {/* Spacer to scroll and reveal the fixed footer behind it */}
      <div className="hidden md:block h-[560px] w-full pointer-events-none bg-white" />

      {/* Sticky Scroll-Reveal Footer */}
      <FooterSection />
    </MotionProvider>
  );
}
