import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/ProjectsPage/ProjectsHero";
import ProjectsShowcase from "@/components/ProjectsPage/ProjectsShowcase";
import ProjectsWorkList from "@/components/ProjectsPage/ProjectsWorkList";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "Projects | InvisiEdge Marketing",
  description: "Explore our recent works, design accelerations, and digital products.",
};

export default function ProjectsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip bg-[#F9F9F9] shadow-[0_20px_50px_rgba(0,0,0,0.15)] pb-10 rounded-b-3xl">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        {/* Custom Premium Projects Page components */}
        <ProjectsHero />
        <ProjectsShowcase />
        <ProjectsWorkList />
      </div>

      {/* Spacer to scroll and reveal the fixed footer behind it */}
      <div className="hidden md:block h-[560px] w-full pointer-events-none bg-white" />

      {/* Sticky Scroll-Reveal Footer */}
      <FooterSection />
    </MotionProvider>
  );
}
