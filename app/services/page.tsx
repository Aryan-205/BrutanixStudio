import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ServicesPageHero from "@/components/Landingpage/ServicesPageHero";
import ServicesWhyPartner from "@/components/Landingpage/ServicesWhyPartner";
import ServicesShowcaseSection from "@/components/Landingpage/ServicesShowcaseSection";
import FAQSection from "@/components/Landingpage/FAQ";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "Services | InvisiEdge Marketing",
  description:
    "Full-service digital marketing from brand strategy to full-funnel execution. InvisiEdge provides creative, technical, and strategic support built for growth.",
};

export default function ServicesPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-white pb-10 shadow-[0_20px_50px_rgba(82,16,248,0.06)]">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <ServicesPageHero />
        <ServicesWhyPartner />
        <ServicesShowcaseSection />
        <FAQSection />
      </div>

      <div className="pointer-events-none hidden h-[560px] w-full bg-white md:block" />

      <FooterSection />
    </MotionProvider>
  );
}
