"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { BlogPost } from "@/data/blogPosts";
import MemberModal from "@/components/auth/MemberModal";

// Helper to convert numbers to Roman Numerals (I, II, III, IV, V, VI, etc.)
function toRomanNumeral(num: number): string {
  const lookup: { [key: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let roman = "";
  for (const i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman || "I";
}

interface CommentItem {
  id: string;
  authorAka: string;
  text: string;
  timestamp: string;
  isMember: boolean;
}

interface PostReaderProps {
  post: BlogPost;
}

export default function PostReader({ post }: PostReaderProps) {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: "1",
      authorAka: "Wanderer XIV",
      text: "Might as well have a look around. Beautifully written.",
      timestamp: "Just now",
      isMember: false,
    },
    {
      id: "2",
      authorAka: "Seeker VII",
      text: "Standing beside the ocean remembering how small we are.",
      timestamp: "1 hour ago",
      isMember: false,
    },
  ]);

  const [commentText, setCommentText] = useState("");
  const [akaInput, setAkaInput] = useState("");
  const [showAkaPrompt, setShowAkaPrompt] = useState(false);
  const [isMemberLoggedIn, setIsMemberLoggedIn] = useState(false);
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  // Check login state
  useEffect(() => {
    const savedUser = localStorage.getItem("gwandaru_member_email");
    if (savedUser) {
      setIsMemberLoggedIn(true);
    }
  }, []);

  // Calculate word count
  const words = commentText.trim() ? commentText.trim().split(/\s+/) : [];
  const wordCount = words.length;
  const isOverGuestLimit = !isMemberLoggedIn && wordCount > 15;

  // Process Title: First word larger + gold underline
  const titleWords = post.title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  // Helper to parse markdown-style double stars **text** into UPPERCASE gold spans
  const parseFormattedText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const cleanText = part.slice(2, -2).toUpperCase();
        return (
          <span key={i} className="font-manrope text-accent-300 tracking-wider font-semibold uppercase px-1">
            {cleanText}
          </span>
        );
      }
      return part;
    });
  };

  const handleStartReaction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    if (isOverGuestLimit) {
      setIsMemberModalOpen(true);
      return;
    }

    // Open AKA prompt
    setShowAkaPrompt(true);
  };

  const handleFinalSubmit = (overrideAka?: string) => {
    const finalAka =
      overrideAka ||
      akaInput.trim() ||
      `Roman Numeral ${toRomanNumeral(comments.length + 3)}`;

    const newComment: CommentItem = {
      id: Date.now().toString(),
      authorAka: finalAka,
      text: commentText.trim(),
      timestamp: "Just now",
      isMember: isMemberLoggedIn,
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    setAkaInput("");
    setShowAkaPrompt(false);
  };

  return (
    <article className="max-w-3xl mx-auto space-y-10">
      {/* Back to Journal Link */}
      <ScrollReveal direction="up" duration={0.6}>
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 font-manrope text-accent-500/70 hover:text-accent-300 text-[0.65rem] tracking-[0.2em] uppercase transition-colors mb-2"
        >
          <span className="text-lg">←</span> Back to The Journal
        </Link>
      </ScrollReveal>

      {/* Styled Title: Underlined + First word bigger */}
      <ScrollReveal direction="up" duration={0.8}>
        <div className="border-b border-accent-500/30 pb-6 mb-4">
          <h1 className="font-cinzel tracking-[0.12em] font-normal leading-tight">
            <span className="text-accent-400 text-4xl sm:text-6xl md:text-7xl tracking-[0.15em] mr-2 inline-block font-medium">
              {firstWord}
            </span>
            {restOfTitle && (
              <span className="text-accent-200 text-2xl sm:text-4xl md:text-5xl">
                {restOfTitle}
              </span>
            )}
          </h1>
        </div>
      </ScrollReveal>

      {/* Post Metadata */}
      <ScrollReveal direction="up" duration={0.7} delay={0.1}>
        <div className="flex items-center justify-between font-manrope text-secondary-400 text-xs tracking-wider border-b border-accent-500/10 pb-4">
          <span className="text-accent-500 uppercase tracking-widest text-[0.65rem]">
            {post.category}
          </span>
          <span>
            By {post.author} · {post.readTime}
          </span>
        </div>
      </ScrollReveal>

      {/* Post Body Content with **double star** UPPERCASE parsing */}
      <div className="space-y-6 pt-4">
        {post.content.map((paragraph, index) => {
          return (
            <ScrollReveal
              key={index}
              direction="up"
              duration={0.8}
              delay={0.1 + index * 0.04}
            >
              <p className="font-sans text-secondary-300 text-base md:text-lg font-light leading-relaxed whitespace-pre-line">
                {parseFormattedText(paragraph)}
              </p>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Closing Gold Divider */}
      <ScrollReveal direction="up" duration={0.8} delay={0.3}>
        <div className="divider-gold my-16" />
      </ScrollReveal>

      {/* REACT / COMMENTS SECTION */}
      <section id="react-section" className="pt-8 space-y-8">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="border-t border-accent-500/20 pt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.3em] uppercase block">
                  Sanctuary Reactions
                </span>
                <h3 className="font-cinzel text-accent-300 text-2xl md:text-3xl tracking-[0.15em] font-normal">
                  React
                </h3>
              </div>
              <span className="font-manrope text-secondary-500 text-xs">
                {comments.length} Reactions
              </span>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleStartReaction} className="space-y-4">
              <div className="relative">
                <textarea
                  rows={4}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  placeholder="Share a reflection... (Guest comments limited to 15 words)"
                  className="w-full bg-primary-900/30 border border-accent-500/20 focus:border-accent-500 text-accent-200 p-4 text-sm font-sans outline-none transition-colors resize-none placeholder:text-secondary-600"
                />

                {/* Word Counter & Guest Warning */}
                <div className="flex items-center justify-between mt-2 font-manrope text-[0.65rem]">
                  <span
                    className={
                      isOverGuestLimit
                        ? "text-red-400 font-medium"
                        : "text-secondary-500"
                    }
                  >
                    {wordCount} {isMemberLoggedIn ? "words" : "/ 15 words max (Guest)"}
                  </span>

                  {!isMemberLoggedIn && (
                    <button
                      type="button"
                      onClick={() => setIsMemberModalOpen(true)}
                      className="text-accent-500 hover:text-accent-300 uppercase tracking-widest underline cursor-pointer"
                    >
                      Log in for longer comments
                    </button>
                  )}
                </div>
              </div>

              {isOverGuestLimit && (
                <div className="p-3 border border-red-500/30 bg-red-500/5 text-red-300 text-xs font-sans">
                  Guest reactions are capped at 15 words. You have used {wordCount} words. Please shorten your message or{" "}
                  <button
                    type="button"
                    onClick={() => setIsMemberModalOpen(true)}
                    className="underline text-accent-300 hover:text-accent-200"
                  >
                    log in as a member
                  </button>{" "}
                  for unlimited length.
                </div>
              )}

              <button
                type="submit"
                disabled={!commentText.trim() || isOverGuestLimit}
                className="border border-accent-500/40 hover:border-accent-500 text-accent-300 font-manrope text-[0.7rem] uppercase tracking-[0.25em] px-8 py-3 bg-accent-500/10 hover:bg-accent-500/20 transition-all duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Post Reaction
              </button>
            </form>
          </div>
        </ScrollReveal>

        {/* AKA Prompt Modal / Inline */}
        {showAkaPrompt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/90 backdrop-blur-sm px-6">
            <div className="bg-primary-900 border border-accent-500/30 p-8 max-w-md w-full text-center space-y-6 shadow-2xl">
              <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.3em] uppercase block">
                Sanctuary Alias
              </span>
              <h4 className="font-cinzel text-accent-300 text-xl tracking-[0.15em]">
                Add an AKA
              </h4>
              <p className="font-cormorant text-secondary-400 text-base italic">
                How would you like your reflection to be remembered?
              </p>

              <input
                type="text"
                value={akaInput}
                onChange={(e) => setAkaInput(e.target.value)}
                placeholder="e.g. StarGazer, Pilgrim, or leave empty"
                className="w-full bg-primary-950 border border-accent-500/20 focus:border-accent-500 text-accent-200 p-3 text-sm font-sans outline-none text-center"
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => handleFinalSubmit()}
                  className="flex-1 border border-accent-500/40 hover:border-accent-500 text-accent-300 font-manrope text-[0.65rem] uppercase tracking-[0.2em] py-3 bg-accent-500/10 hover:bg-accent-500/20 transition-colors"
                >
                  {akaInput.trim() ? "Submit AKA" : "Skip (Use Roman Numeral)"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Reaction List */}
        <div className="space-y-4 pt-4">
          {comments.map((c) => (
            <div
              key={c.id}
              className="p-6 border border-accent-500/10 bg-primary-900/20 space-y-2"
            >
              <div className="flex items-center justify-between font-manrope text-[0.65rem] tracking-wider">
                <span className="text-accent-400 font-medium uppercase tracking-widest">
                  {c.authorAka}
                </span>
                <span className="text-secondary-500">{c.timestamp}</span>
              </div>
              <p className="font-sans text-secondary-300 text-sm font-light leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Members Modal for prompt */}
      <MemberModal
        isOpen={isMemberModalOpen}
        onClose={() => setIsMemberModalOpen(false)}
      />
    </article>
  );
}
