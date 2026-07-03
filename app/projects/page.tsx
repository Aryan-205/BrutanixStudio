import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Landingpage/ProjectsSection";
import WorkSection from "@/components/Landingpage/WorkSection";
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

        {/* Projects Page Hero */}
        <section className="px-6 pt-32 pb-12 text-center max-w-4xl mx-auto md:pt-40 md:pb-16 font-sans">
          <span className="rounded-full bg-linear-to-tr from-[#646161] via-[#000000] to-[#646161] px-4 py-1.5 text-sm font-medium text-white w-fit mx-auto inline-block">
            Case Studies
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Engineered for Acceleration, <br className="hidden md:inline" />
            Designed for Immersion
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            We help startup SaaS companies and digital brands accelerate through design systems, interactive experiences, and robust frontend frameworks.
          </p>
        </section>

        {/* Showcase Sections */}
        <ProjectsSection />
        <WorkSection />
      </div>

      {/* Spacer to scroll and reveal the fixed footer behind it */}
      <div className="hidden md:block h-[560px] w-full pointer-events-none bg-white" />

      {/* Sticky Scroll-Reveal Footer */}
      <FooterSection />
    </MotionProvider>
  );
}
