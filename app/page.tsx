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

export default function Home() {
  return (
    <MotionProvider>
      <div className="min-h-screen w-full overflow-x-hidden bg-white">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ProjectsSection />
        <HowItWorksSection />
        <ProgressSection />
        <WorkSection />
        <Prototype />
        <TestimonialSection />
        <FAQSection />
      </div>
    </MotionProvider>
  );
}
