"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts } from "@/data/blogPosts";
import { poemList } from "@/data/poetryData";
import { artworkList } from "@/data/artData";

export interface FeedItem {
  id: string;
  type: "Poetry" | "Essay" | "Art";
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
  image?: string;
  timestamp: number; // For chronological sorting
}

// Convert month string + year to approximate timestamp for sorting
function parseDateToTimestamp(dateStr: string): number {
  const months: { [key: string]: number } = {
    january: 0,
    february: 1,
    march: 2,
    april: 3,
    may: 4,
    june: 5,
    july: 6,
    august: 7,
    september: 8,
    october: 9,
    november: 10,
    december: 11,
  };
  const parts = dateStr.toLowerCase().split(" ");
  if (parts.length === 2) {
    const month = months[parts[0]] ?? 8;
    const year = parseInt(parts[1], 10) || 2026;
    return new Date(year, month, 1).getTime();
  }
  return new Date(2026, 8, 1).getTime();
}

export default function LatestFeedSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const [lastRefreshedText, setLastRefreshedText] = useState<string>("Live");

  // Aggregate all items across Blog, Poetry, and Art
  const allFeedItems: FeedItem[] = useMemo(() => {
    const items: FeedItem[] = [];

    // 1. Add Poems
    poemList.forEach((poem, idx) => {
      items.push({
        id: `poetry-${poem.id}`,
        type: "Poetry",
        title: poem.title,
        subtitle: poem.subtitle,
        category: `Poetry · ${poem.category}`,
        date: poem.date,
        excerpt: poem.stanzas[0]?.replace(/\n/g, " ") || "",
        href: "/poetry",
        image: poem.image,
        // Priority weight: newest first (Odi to Ngono highest)
        timestamp: parseDateToTimestamp(poem.date) + (poemList.length - idx) * 1000,
      });
    });

    // 2. Add Blog Posts & Essays
    blogPosts.forEach((post, idx) => {
      items.push({
        id: `blog-${post.slug}`,
        type: "Essay",
        title: post.title,
        subtitle: post.subtitle,
        category: `Essay · ${post.category}`,
        date: post.date,
        excerpt: post.excerpt,
        href: `/blog/${post.slug}`,
        timestamp: parseDateToTimestamp(post.date) + (blogPosts.length - idx) * 500,
      });
    });

    // 3. Add Artworks
    artworkList.forEach((art, idx) => {
      items.push({
        id: `art-${art.id}`,
        type: "Art",
        title: art.title,
        category: `Art · ${art.category}`,
        date: art.year,
        excerpt: art.description,
        href: "/art",
        image: art.imageUrl,
        timestamp: parseDateToTimestamp(`September ${art.year}`) + (artworkList.length - idx) * 100,
      });
    });

    // Sort newest to oldest
    return items.sort((a, b) => b.timestamp - a.timestamp);
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    if (selectedFilter === "All") return allFeedItems;
    return allFeedItems.filter((item) => item.type === selectedFilter);
  }, [allFeedItems, selectedFilter]);

  // Handle reload action
  const handleReload = () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    setLastRefreshedText("Refreshing...");

    setTimeout(() => {
      setRefreshKey((prev) => prev + 1);
      setIsRefreshing(false);
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      setLastRefreshedText(`Updated at ${timeString}`);
    }, 650);
  };

  const filterTabs = ["All", "Poetry", "Essay", "Art"];

  return (
    <section id="latest-feed" className="relative bg-primary-950 py-24 md:py-36 px-6 section-fade border-t border-accent-500/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Header with Title + Reload Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-accent-500/20 pb-8">
          <div>
            <ScrollReveal direction="up" duration={0.6}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-manrope text-accent-500 text-[0.65rem] tracking-[0.3em] uppercase">
                  Live Sanctuary Feed
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" duration={0.8} delay={0.1}>
              <h2 className="font-cinzel text-accent-300 text-3xl sm:text-4xl md:text-5xl tracking-[0.1em] font-normal leading-tight">
                Latest from Newest
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" duration={0.7} delay={0.2}>
              <p className="font-cormorant text-accent-200/70 text-base md:text-lg italic font-light mt-2 max-w-xl">
                A unified live stream of poems, essays, reflections, and sacred visuals as they are birthed.
              </p>
            </ScrollReveal>
          </div>

          {/* Reload Control */}
          <ScrollReveal direction="up" duration={0.7} delay={0.25}>
            <div className="flex items-center gap-4">
              <span className="font-manrope text-[0.65rem] tracking-wider text-secondary-400">
                {lastRefreshedText}
              </span>

              <button
                onClick={handleReload}
                disabled={isRefreshing}
                className="group relative inline-flex items-center gap-2.5 px-4 py-2 border border-accent-500/30 hover:border-accent-500 bg-primary-900/40 hover:bg-accent-500/10 text-accent-300 font-manrope text-[0.65rem] tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50"
                aria-label="Reload feed stream"
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 text-accent-400"
                  animate={{ rotate: isRefreshing ? 360 : 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut", repeat: isRefreshing ? Infinity : 0 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </motion.svg>
                <span>Reload Feed</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Category Filter Pills */}
        <ScrollReveal direction="up" duration={0.6} delay={0.1}>
          <div className="flex flex-wrap gap-2.5 items-center">
            <span className="font-manrope text-secondary-500 text-[0.65rem] tracking-widest uppercase mr-2">
              Filter:
            </span>
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`font-manrope text-[0.65rem] tracking-[0.18em] uppercase px-4 py-2 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "border-accent-500 text-accent-300 bg-accent-500/15 shadow-[0_0_12px_rgba(210,179,106,0.15)] font-semibold"
                      : "border-accent-500/20 text-secondary-400 hover:border-accent-500/50 hover:text-accent-300 bg-primary-950"
                  }`}
                >
                  {tab === "All" ? "All Updates" : tab}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Live Grid Stream */}
        <motion.div
          key={refreshKey}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="h-full"
              >
                <Link
                  href={item.href}
                  className="group relative flex flex-col justify-between h-full bg-primary-900/25 hover:bg-primary-900/50 border border-accent-500/15 hover:border-accent-500/40 p-6 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_4px_30px_rgba(210,179,106,0.08)] overflow-hidden"
                >
                  {/* Subtle top shimmer bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-500/0 group-hover:via-accent-500/70 to-transparent transition-all duration-500" />

                  <div>
                    {/* Optional Thumbnail preview */}
                    {item.image && (
                      <div className="relative w-full aspect-[16/10] mb-5 overflow-hidden border border-accent-500/20 bg-primary-950">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 350px"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/80 via-transparent to-transparent" />
                      </div>
                    )}

                    {/* Category Under Specified */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-manrope text-[0.6rem] tracking-[0.2em] uppercase text-accent-400 bg-accent-500/10 border border-accent-500/25 px-2.5 py-1">
                        {item.category}
                      </span>
                      <span className="font-manrope text-[0.6rem] tracking-wider text-secondary-500">
                        {item.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cinzel text-accent-200 text-lg md:text-xl font-normal tracking-[0.08em] leading-snug mb-2 group-hover:text-accent-300 transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Subtitle if available */}
                    {item.subtitle && (
                      <p className="font-cormorant text-accent-500/75 text-sm italic font-light tracking-wide mb-3">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Excerpt */}
                    <p className="font-sans text-secondary-400 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 mb-6">
                      {item.excerpt}
                    </p>
                  </div>

                  {/* Read / Enter Link CTA */}
                  <div className="pt-4 border-t border-accent-500/10 flex items-center justify-between font-manrope text-[0.65rem] tracking-[0.2em] uppercase text-accent-400 group-hover:text-accent-200 transition-colors">
                    <span>
                      {item.type === "Poetry" ? "Read Verse" : item.type === "Art" ? "View Canvas" : "Read Essay"}
                    </span>
                    <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
