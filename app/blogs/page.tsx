import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/Landingpage/FooterSection";
import { MotionProvider } from "../MotionProvider";

export const metadata: Metadata = {
  title: "Blogs | Invisiedge",
  description: "Insights, guides, and thoughts on design acceleration and SaaS marketing.",
};

const blogPosts = [
  {
    id: 1,
    title: "The Future of Brand Acceleration in SaaS",
    description: "Discover the critical strategies that modern SaaS startups are using to build unique identities and acquire users faster.",
    category: "Strategy",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    date: "Jun 24, 2026",
  },
  {
    id: 2,
    title: "Why We Choose Next.js and Motion for Immersive Webs",
    description: "An in-depth look at how scroll-linked animations and modern layout systems create memorable, engaging web experiences.",
    category: "Technology",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    date: "Jun 18, 2026",
  },
  {
    id: 3,
    title: "Integrating AI Transformations in Creative Agencies",
    description: "How AI is changing the landscape of marketing orchestration, from strategy research to asset scaling and execution.",
    category: "AI Tools",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    date: "Jun 12, 2026",
  },
  {
    id: 4,
    title: "collapsing Your Content Supply Chain into One System",
    description: "Learn how to optimize your production workflow and speed up asset releases using modern automation pipelines.",
    category: "Workflow",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    date: "Jun 05, 2026",
  },
];

export default function BlogsPage() {
  return (
    <MotionProvider>
      <div className="relative z-10 min-h-screen w-full overflow-x-clip bg-[#F9F9F9] shadow-[0_20px_50px_rgba(0,0,0,0.15)] pb-16 rounded-b-3xl">
        <header className="px-4 pt-5 md:px-8 md:pt-6">
          <Navbar />
        </header>

        {/* Blogs Page Hero */}
        <section className="px-6 pt-32 pb-12 text-center max-w-4xl mx-auto md:pt-40 md:pb-16 font-sans">
          <span className="rounded-full bg-linear-to-tr from-[#646161] via-[#000000] to-[#646161] px-4 py-1.5 text-sm font-medium text-white w-fit mx-auto inline-block">
            Resources & Insights
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight text-[#111] sm:text-5xl md:text-6xl lg:text-[4rem]">
            Thoughts, Guides, & Ideas <br className="hidden md:inline" />
            on Design & Acceleration
          </h1>
          <p className="mt-6 text-base md:text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Stay up to date with the latest tactics, technical tutorials, and product design philosophies from the Invisiedge team.
          </p>
        </section>

        {/* Blogs Grid */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16 font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden p-4 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-gray-100 mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-500 mb-3 px-1">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-neutral-700 transition-colors mb-3 px-1 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed px-1 mb-2">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>

    </MotionProvider>
  );
}
