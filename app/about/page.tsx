import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutPageIntro from "@/components/Landingpage/AboutPageIntro";
import WorkSection from "@/components/Landingpage/WorkSection";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "About Us | Invisiedge",
  description:
    "Invisiedge is a marketing and development agency helping brands grow through strategy, design, and technology.",
};

export default function AboutPage() {
  return (
    <MotionProvider>
      <div className="min-h-screen w-full overflow-x-clip bg-[#F9F9F9]">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <AboutPageIntro />
        <WorkSection />

        {/* <section id="contact" className="scroll-mt-6">
          <FooterSection />
        </section> */}
      </div>
    </MotionProvider>
  );
}
