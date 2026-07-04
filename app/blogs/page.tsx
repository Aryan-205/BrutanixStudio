import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BlogsPageHero from "@/components/Landingpage/BlogsPageHero";
import BlogListing from "@/components/Landingpage/BlogListing";
import BlogCTASection from "@/components/Landingpage/BlogCTASection";
import FooterSection from "@/components/Landingpage/FooterSection";
import { blogHero } from "@/lib/data/blogPageContent";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "Insights & Blog | InvisiEdge Marketing",
  description: blogHero.subheadline,
};

export default function BlogsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip rounded-b-3xl bg-white pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        <BlogsPageHero />
        <BlogListing />
        <BlogCTASection />
      </div>

      <div className="pointer-events-none hidden h-[560px] w-full bg-white md:block" />

      <FooterSection />
    </MotionProvider>
  );
}
