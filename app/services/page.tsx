import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SolutionsSection from "@/components/Landingpage/SolutionsSection";
import FAQSection from "@/components/Landingpage/FAQ";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "Services | Invisiedge",
  description: "Unifying design, performance marketing, content orchestration, and AI transformation.",
};

export default function ServicesPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip bg-[#F9F9F9] shadow-[0_20px_50px_rgba(0,0,0,0.15)] pb-10 rounded-b-3xl">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        {/* Services Page Hero */}
        <section className="px-6 pt-32 pb-12 text-center max-w-4xl mx-auto md:pt-40 md:pb-16 font-sans">
          <span className="rounded-full bg-linear-to-tr from-[#646161] via-[#000000] to-[#646161] px-4 py-1.5 text-sm font-medium text-white w-fit mx-auto inline-block">
            Our Offerings
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4rem]">
            High-Performance Systems <br className="hidden md:inline" />
            Designed for Strategy & Scale
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            We collaborate with ambitious brands to build brand systems, media acceleration paths, AI workflows, and content pipelines that accelerate growth.
          </p>
        </section>

        {/* Solutions Section */}
        <SolutionsSection />

        {/* FAQs */}
        <FAQSection />
      </div>

    </MotionProvider>
  );
}
