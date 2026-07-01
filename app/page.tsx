"use client";

import HeroSection from "@/components/Landingpage/HeroSection";
import AboutSection from "@/components/Landingpage/AboutSection";
import WorkSection from "@/components/Landingpage/WorkSection";
import ProjectsSection from "@/components/Landingpage/ProjectsSection";
import SolutionsSection from "@/components/Landingpage/SolutionsSection";
import HowItWorksSection from "@/components/Landingpage/HowItWorksSection";
import ProgressSection from "@/components/Landingpage/ProgressSection";
import FAQSection from "@/components/Landingpage/FAQ";
import TestimonialSection from "@/components/Landingpage/TestimonialSection";
import { MotionProvider } from "./MotionProvider";
import Prototype from "@/components/Landingpage/Prototype";
import FooterSection from "@/components/Landingpage/FooterSection";
import Intro from "@/components/Intro";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

export default function Home() {

  const [isIntroComplete, setIsIntroComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsIntroComplete(true);
    }, 3000);
  }, []);

  return (
    <MotionProvider>
      <div className="min-h-screen w-full overflow-x-clip bg-white">
        <AnimatePresence mode="wait">
        {!isIntroComplete && <Intro />}
        </AnimatePresence>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ProgressSection />
        <Prototype />
        <ProjectsSection />
        <HowItWorksSection />
        <TestimonialSection />
        <FAQSection />
        {/* <FooterSection /> */}
      </div>
    </MotionProvider>
  );
}
