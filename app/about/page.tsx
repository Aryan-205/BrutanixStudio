import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutPageIntro from "@/components/Landingpage/AboutPageIntro";
import WorkSection from "@/components/Landingpage/WorkSection";
import FAQSection from "@/components/Landingpage/FAQ";
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
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-page-bg pb-10 shadow-[0_20px_50px_rgba(82,16,248,0.06)]">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <AboutPageIntro />
        <WorkSection />
        <FAQSection />
      </div>

      <div className="hidden md:block h-[560px] w-full pointer-events-none bg-white" />

      <FooterSection />
    </MotionProvider>
  );
}

