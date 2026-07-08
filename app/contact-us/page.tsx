"use client";

import Navbar from "@/components/Navbar";
import ContactHeroSection from "@/components/Landingpage/Contact/ContactHeroSection";
import ContactFormSection from "@/components/Landingpage/Contact/ContactFormSection";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export default function ContactUsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-white pb-10 shadow-[0_20px_50px_-30px_rgba(0,0,0,0.15)] font-(family-name:--font-onest)">
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
