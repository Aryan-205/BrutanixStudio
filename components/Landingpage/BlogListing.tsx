"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { easePremium } from "@/components/motion/presets";
import {
  blogCategories,
  blogPosts,
  type BlogPost,
} from "@/lib/data/blogPageContent";

function PostMeta({ date, category }: { date: string; category: string }) {
  return (
    <p className="text-sm text-neutral-400">
      {date}
      <span className="mx-2 text-neutral-300">·</span>
      {category}
    </p>
  );
}

function CompactPostCard({ post }: { post: BlogPost }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      layout
      className="group flex cursor-pointer gap-5 rounded-[1.75rem] bg-neutral-100/80 p-5 transition-colors duration-300 hover:bg-neutral-100 md:gap-6 md:p-6 h-full border"
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.35, ease: easePremium }}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <PostMeta date={post.date} category={post.category} />
        <h3 className="mt-3 text-lg font-medium leading-snug tracking-tight text-[#111] transition-colors duration-300 group-hover:text-[#5210F8] md:text-3xl">
          {post.title}
        </h3>
      </div>
      <div className="relative h-full w-auto shrink-0 overflow-hidden rounded-2xl bg-red-200 md:h-36 md:w-36">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="128px"
          className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
        />
      </div>
    </motion.article>
  );
}

function FeaturedPostCard({ post }: { post: BlogPost }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      layout
      className="group flex h-full cursor-pointer flex-col rounded-[1.75rem] bg-linear-to-t from-[#5210F8]/20 to-[#c47dfd]/20 p-5 md:p-6"
      whileHover={reduce ? undefined : { y: -3 }}
      transition={{ duration: 0.35, ease: easePremium }}
    >
      <PostMeta date={post.date} category={post.category} />
      <h3 className="mt-3 max-w-md text-xl font-medium leading-snug tracking-tight text-[#111] transition-colors duration-300 group-hover:text-[#5210F8] md:text-3xl">
        {post.title}
      </h3>
      <div className="relative mt-5 min-h-[220px] flex-1 overflow-hidden rounded-2xl bg-neutral-200 md:mt-6 md:min-h-[280px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
    </motion.article>
  );
}

function MoreArticleCard({ post }: { post: BlogPost }) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      layout
      className="group cursor-pointer"
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.35, ease: easePremium }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-neutral-100">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 px-1">
        <PostMeta date={post.date} category={post.category} />
        <h3 className="mt-2 text-lg font-medium leading-snug tracking-tight text-[#111] transition-colors duration-300 group-hover:text-[#5210F8] md:text-xl">
          {post.title}
        </h3>
      </div>
    </motion.article>
  );
}

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const reduce = useReducedMotion();

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost =
    filteredPosts.find((post) => post.featured) ?? filteredPosts[0];

  const compactPosts = filteredPosts
    .filter((post) => post.id !== featuredPost?.id)
    .slice(0, 2);

  const usedIds = new Set([
    featuredPost?.id,
    ...compactPosts.map((post) => post.id),
  ]);

  const remainingPosts = filteredPosts.filter((post) => !usedIds.has(post.id));
  const morePosts = remainingPosts.slice(0, visibleCount);
  const hasMore = remainingPosts.length > visibleCount;

  return (
    <div className="font-sans">
      {/* Category filters */}
      <div className="px-6 md:px-12">
        <div className="mx-auto max-w-7xl overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <motion.div
            className="flex w-max min-w-full items-center justify-center gap-x-5 px-2 md:gap-x-8"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: easePremium }}
          >
            {["All", ...blogCategories].map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(6);
                  }}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 md:text-base ${
                    isActive
                      ? "text-[#111]"
                      : "text-neutral-400 hover:text-neutral-600"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="blog-category-ring"
                      className="absolute inset-0 rounded-full border-2 border-[#5210F8]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Featured asymmetric grid */}
      <section className="px-6 pb-16 pt-12 md:px-12 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 && featuredPost ? (
              <motion.div
                key={activeCategory + "-featured"}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: easePremium }}
                className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5"
              >
                <div className="flex flex-col gap-4 md:gap-5 h-full">
                  {compactPosts.map((post) => (
                    <CompactPostCard key={post.id} post={post} />
                  ))}
                  {compactPosts.length === 0 && (
                    <div className="flex flex-1 items-center justify-center rounded-[1.75rem] bg-neutral-100/60 p-8 text-center text-sm text-neutral-400">
                      More articles in this category below
                    </div>
                  )}
                </div>
                <FeaturedPostCard post={featuredPost} />
              </motion.div>
            ) : (
              <motion.p
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center text-neutral-400"
              >
                No articles in this category yet.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* More articles */}
      {morePosts.length > 0 && (
        <section className="px-6 pb-16 md:px-12 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              className="mb-10 text-center text-2xl font-medium tracking-tight text-[#111] md:mb-14 md:text-5xl"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: easePremium }}
            >
              More articles
            </motion.h2>

            <motion.div
              layout
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {morePosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    layout
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{
                      delay: index * 0.06,
                      duration: 0.45,
                      ease: easePremium,
                    }}
                    className="h-full pb-14"
                  >
                    <MoreArticleCard post={post} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {hasMore && (
              <div className="mt-14 flex justify-center md:mt-16">
                <motion.button
                  type="button"
                  onClick={() => setVisibleCount((count) => count + 3)}
                  className="group inline-flex items-center gap-3 text-base font-medium text-[#111] transition-colors hover:text-[#5210F8]"
                  whileHover={reduce ? undefined : { y: -2 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  View more
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:border-[#5210F8] group-hover:bg-[#5210F8]/5">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </motion.button>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
