"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts, BlogPost } from "@/data/blogPosts";

interface PostCardProps {
  post: BlogPost;
}

function PostCard({ post }: PostCardProps) {
  return (
    <ScrollReveal direction="up" duration={0.7}>
      <Link
        href={`/blog/${post.slug}`}
        className="group block border border-accent-500/10 hover:border-accent-500/30 bg-primary-900/20 hover:bg-primary-900/40 transition-all duration-500 p-8 h-full flex flex-col justify-between"
      >
        <div>
          {/* Category + Date */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.25em] uppercase">
              {post.category}
            </span>
            <span className="font-manrope text-secondary-500 text-[0.6rem] tracking-[0.15em]">
              {post.date} · {post.readTime}
            </span>
          </div>

          {/* Divider */}
          <div className="w-8 h-px bg-accent-500/30 mb-5" />

          {/* Title */}
          <h3 className="font-cinzel text-accent-200 text-xl md:text-2xl font-normal tracking-[0.1em] leading-snug mb-2 group-hover:text-accent-300 transition-colors duration-300">
            {post.title}
          </h3>

          {post.subtitle && (
            <p className="font-cormorant text-accent-500/70 text-sm italic font-light tracking-wide mb-4">
              {post.subtitle}
            </p>
          )}

          {/* Excerpt */}
          <p className="font-sans text-secondary-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Read Essay CTA */}
        <div className="flex items-center gap-3 mt-4">
          <span className="font-manrope text-accent-500/60 group-hover:text-accent-500 text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300">
            Read essay
          </span>
          <span className="w-8 h-px bg-accent-500/30 group-hover:w-12 group-hover:bg-accent-500/60 transition-all duration-500" />
        </div>
      </Link>
    </ScrollReveal>
  );
}

const categories = [
  "All",
  "Reflections",
  "Philosophy",
  "Astronomy",
  "Ancient Civilizations",
];

export default function BlogClientContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPost = blogPosts[0]; // THE LIFE AND TIMES
  const otherPosts = blogPosts.filter((p) =>
    selectedCategory === "All" ? true : p.category === selectedCategory
  );

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Featured Essay Banner */}
      <ScrollReveal direction="up" duration={0.9}>
        <div className="mb-16 border border-accent-500/25 bg-gradient-to-br from-primary-900/50 via-primary-900/30 to-primary-800/20 p-8 md:p-14 relative overflow-hidden">
          <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.3em] uppercase">
            Featured Sanctuary Dispatch
          </span>
          <div className="w-10 h-px bg-accent-500/40 my-4" />

          <h2 className="font-cinzel text-accent-300 text-3xl md:text-5xl font-normal tracking-[0.12em] leading-snug mb-2">
            {featuredPost.title}
          </h2>

          {featuredPost.subtitle && (
            <p className="font-cormorant text-accent-500 text-lg md:text-xl italic font-light tracking-wide mb-6">
              {featuredPost.subtitle}
            </p>
          )}

          <p className="font-sans text-secondary-300 text-base md:text-lg font-light leading-relaxed mb-8 max-w-3xl">
            &ldquo;{featuredPost.excerpt}&rdquo;
          </p>

          <Link
            href={`/blog/${featuredPost.slug}`}
            className="inline-flex items-center gap-4 font-manrope text-accent-300 hover:text-accent-200 text-xs tracking-[0.25em] uppercase hover:gap-6 transition-all duration-300 border border-accent-500/30 px-6 py-3 bg-accent-500/5 hover:bg-accent-500/15"
          >
            Read Full Essay
            <span className="w-8 h-px bg-accent-500/60" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Category Filter */}
      <ScrollReveal direction="up" duration={0.6} delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-manrope text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-accent-500 text-accent-300 bg-accent-500/10"
                    : "border-accent-500/20 text-secondary-400 hover:border-accent-500/50 hover:text-accent-300"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
