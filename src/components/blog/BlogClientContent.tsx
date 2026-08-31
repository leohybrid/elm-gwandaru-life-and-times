"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  readTime: string;
}

function PostCard({ title, excerpt, date, category, slug, readTime }: PostCardProps) {
  return (
    <ScrollReveal direction="up" duration={0.7}>
      <Link href={`/blog/${slug}`} className="group block border border-accent-500/10 hover:border-accent-500/30 bg-primary-900/20 hover:bg-primary-900/40 transition-all duration-500 p-8">
        {/* Category + Date */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.25em] uppercase">
            {category}
          </span>
          <span className="font-manrope text-secondary-500 text-[0.6rem] tracking-[0.15em]">
            {date} · {readTime}
          </span>
        </div>

        {/* Divider */}
        <div className="w-8 h-px bg-accent-500/30 mb-5" />

        {/* Title */}
        <h3 className="font-cinzel text-accent-200 text-xl md:text-2xl font-normal tracking-[0.1em] leading-snug mb-4 group-hover:text-accent-300 transition-colors duration-300">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="font-sans text-secondary-400 text-sm font-light leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-3">
          <span className="font-manrope text-accent-500/60 group-hover:text-accent-500 text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300">
            Read essay
          </span>
          <span className="w-8 h-px bg-accent-500/30 group-hover:w-12 group-hover:bg-accent-500/60 transition-all duration-500" />
        </div>
      </Link>
    </ScrollReveal>
  );
}

const posts: PostCardProps[] = [
  {
    title: "The Night Sky as Sacred Text",
    excerpt: "For the ancient Egyptians, the heavens were not merely a backdrop to earthly life but a living scripture — constellations encoded wisdom, and the Milky Way was the river that carried souls to the Field of Reeds. To observe the sky is to read a language older than any civilization.",
    date: "August 2026",
    category: "Astronomy",
    slug: "the-night-sky-as-sacred-text",
    readTime: "7 min read",
  },
  {
    title: "Sacred Geometry & the Architecture of Consciousness",
    excerpt: "The Flower of Life does not merely describe nature's patterns — it describes the mind's capacity for infinite recursion. When we trace its overlapping circles, we are mapping the structure of thought itself: nested, self-similar, expanding outward from a silent center.",
    date: "July 2026",
    category: "Philosophy",
    slug: "sacred-geometry-and-consciousness",
    readTime: "9 min read",
  },
  {
    title: "Desert, Dust, and Deep Time",
    excerpt: "I stood at the foot of a dune and felt the weight of geological time pressing against my boots. The desert is not empty — it is full of silence, and silence, I have come to understand, is simply the sound of something very old thinking.",
    date: "June 2026",
    category: "Reflections",
    slug: "desert-dust-and-deep-time",
    readTime: "5 min read",
  },
  {
    title: "On the Solitude of Stargazing",
    excerpt: "There is a peculiar species of loneliness that arrives only when you look upward long enough. It is not the loneliness of isolation — it is the loneliness of scale. The realization that you are a temporary arrangement of ancient atoms, briefly sentient, briefly aware.",
    date: "May 2026",
    category: "Philosophy",
    slug: "on-the-solitude-of-stargazing",
    readTime: "6 min read",
  },
  {
    title: "Ancient Civilizations and the Memory of Water",
    excerpt: "Every great civilization was born beside water. The Nile, the Tigris, the Euphrates — these rivers were not just geographical features but living deities. The ancients understood something we have largely forgotten: that water is not a resource but a relationship.",
    date: "April 2026",
    category: "Ancient Civilizations",
    slug: "ancient-civilizations-and-water",
    readTime: "8 min read",
  },
  {
    title: "Reading the Bones",
    excerpt: "Archaeologists do not find the past — they interpret it. Every fragment of pottery, every calcified bone, every corroded coin is a riddle that must be solved through inference and imagination. The past does not speak; we learn to listen for it.",
    date: "March 2026",
    category: "Archaeology",
    slug: "reading-the-bones",
    readTime: "6 min read",
  },
];

const categories = ["All", "Philosophy", "Astronomy", "Reflections", "Ancient Civilizations", "Archaeology"];

export default function BlogClientContent() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Featured essay */}
      <ScrollReveal direction="up" duration={0.9}>
        <div className="mb-16 border border-accent-500/20 bg-gradient-to-br from-primary-900/40 to-primary-800/10 p-10 md:p-14">
          <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.3em] uppercase">
            Featured Essay
          </span>
          <div className="w-8 h-px bg-accent-500/30 my-4" />
          <h2 className="font-cinzel text-accent-300 text-2xl md:text-4xl font-normal tracking-[0.1em] leading-snug mb-6">
            The Night Sky as Sacred Text
          </h2>
          <p className="font-cormorant text-secondary-400 text-lg md:text-xl italic font-light leading-relaxed mb-8 max-w-2xl">
            "For the ancient Egyptians, the heavens were not merely a backdrop to earthly life 
            but a living scripture — constellations encoded wisdom, and the Milky Way was the river 
            that carried souls to the Field of Reeds."
          </p>
          <Link
            href="/blog/the-night-sky-as-sacred-text"
            className="inline-flex items-center gap-4 font-manrope text-accent-500 text-[0.65rem] tracking-[0.25em] uppercase hover:gap-6 transition-all duration-300"
          >
            Begin Reading
            <span className="w-10 h-px bg-accent-500/50" />
          </Link>
        </div>
      </ScrollReveal>

      {/* Category Filter */}
      <ScrollReveal direction="up" duration={0.6} delay={0.1}>
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              className="font-manrope text-[0.6rem] tracking-[0.2em] uppercase px-4 py-2 border border-accent-500/20 hover:border-accent-500/50 text-secondary-400 hover:text-accent-300 transition-all duration-300 cursor-pointer first:border-accent-500/50 first:text-accent-300"
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-accent-500/5">
        {posts.map((post) => (
          <div key={post.slug} className="bg-primary-950">
            <PostCard {...post} />
          </div>
        ))}
      </div>

      {/* Load More */}
      <ScrollReveal direction="up" duration={0.6} delay={0.2} className="text-center mt-16">
        <button className="font-manrope text-[0.65rem] tracking-[0.3em] uppercase text-accent-500/60 hover:text-accent-500 border border-accent-500/20 hover:border-accent-500/40 px-10 py-4 transition-all duration-300 cursor-pointer">
          Load More Essays
        </button>
      </ScrollReveal>
    </div>
  );
}
