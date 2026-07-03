"use client";

import Navbar from "@/components/Navbar";
import ContactHeroSection from "@/components/Landingpage/Contact/ContactHeroSection";
import ContactFormSection from "@/components/Landingpage/Contact/ContactFormSection";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export default function ContactUsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-[#fafafa] pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.12)] font-(family-name:--font-onest)">
        {/* Subtle top gradient wash */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-linear-to-b from-[#5210F8]/[0.04] via-[#C47DFD]/[0.02] to-transparent" />

        <header className="relative px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <ContactHeroSection />
        <ContactFormSection />
      </div>

      <div className="pointer-events-none hidden h-[560px] w-full bg-white md:block" />

      <FooterSection />
    </MotionProvider>
  );
}
