import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsHero from "@/components/ProjectsPage/ProjectsHero";
import ProjectsCaseStudies from "@/components/ProjectsPage/ProjectsCaseStudies";
import ProjectsCTASection from "@/components/ProjectsPage/ProjectsCTASection";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "Projects | InvisiEdge Marketing",
  description: "Explore our recent works, design accelerations, and digital products.",
};

export default function ProjectsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-white pb-10 shadow-[0_20px_50px_rgba(82,16,248,0.06)]">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>
        <ProjectsHero />
        <ProjectsCaseStudies />
        <ProjectsCTASection />
      </div>

      <div className="pointer-events-none hidden h-[560px] w-full bg-white md:block" />

      <FooterSection />
    </MotionProvider>
  );
}
