import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHeroSection from "@/components/Landingpage/About/AboutHeroSection";
import AboutWhatWeDoSection from "@/components/Landingpage/About/AboutWhatWeDoSection";
import AboutWhoWeAreSection from "@/components/Landingpage/About/AboutWhoWeAreSection";
import AboutMissionVisionSection from "@/components/Landingpage/About/AboutMissionVisionSection";
import AboutBrandStorySection from "@/components/Landingpage/About/AboutBrandStorySection";
import AboutCoreValuesSection from "@/components/Landingpage/About/AboutCoreValuesSection";
import AboutLeadershipSection from "@/components/Landingpage/About/AboutLeadershipSection";
import AboutTeamSection from "@/components/Landingpage/About/AboutTeamSection";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "About Us | InvisiEdge Marketing",
  description:
    "InvisiEdge is the strategic growth partner behind modern brands — helping businesses build stronger brands, smarter digital systems, and marketing engines designed for measurable growth.",
};

export default function AboutPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-page-bg pb-10 shadow-[0_20px_60px_rgba(82,16,248,0.06)] font-(family-name:--font-onest)">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <AboutHeroSection />
        <AboutWhatWeDoSection />
        <AboutWhoWeAreSection />
        <AboutMissionVisionSection />
        <AboutBrandStorySection />
        <AboutCoreValuesSection />
        <AboutLeadershipSection />
        <AboutTeamSection />
      </div>

      <div className="hidden md:block h-[560px] w-full pointer-events-none bg-white" />

      <FooterSection />
    </MotionProvider>
  );
}
