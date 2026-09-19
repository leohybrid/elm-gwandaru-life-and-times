"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { poemList, Poem } from "@/data/poetryData";

// Helper to parse markdown-style double stars **text** into UPPERCASE gold spans
function parseFormattedText(text: string) {
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
}

function PoemDisplay({ poem }: { poem: Poem }) {
  // Title formatting: First word enlarged + gold underline
  const titleWords = poem.title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <div className="space-y-10">
      {/* Title: Underlined + First Word Bigger */}
      <ScrollReveal direction="up" duration={0.8}>
        <div className="border-b border-accent-500/30 pb-6 mb-6">
          <h2 className="font-cinzel tracking-[0.12em] font-normal leading-tight">
            <span className="text-accent-400 text-4xl sm:text-6xl md:text-7xl tracking-[0.15em] mr-2 inline-block font-medium">
              {firstWord}
            </span>
            {restOfTitle && (
              <span className="text-accent-200 text-2xl sm:text-4xl md:text-5xl">
                {restOfTitle}
              </span>
            )}
          </h2>
        </div>
      </ScrollReveal>

      {/* Category + Date Metadata */}
      <ScrollReveal direction="up" duration={0.7} delay={0.1}>
        <div className="flex items-center justify-between font-manrope text-secondary-400 text-xs tracking-wider border-b border-accent-500/10 pb-4 mb-8">
          <span className="text-accent-500 uppercase tracking-widest text-[0.65rem]">
            {poem.category}
          </span>
          <span>{poem.date}</span>
        </div>
      </ScrollReveal>

      {/* Stanzas Body */}
      <div className="space-y-8">
        {poem.stanzas.map((stanza, index) => (
          <ScrollReveal
            key={index}
            direction="up"
            duration={0.8}
            delay={0.1 + index * 0.05}
            className="p-6 md:p-8 border-l border-accent-500/20 bg-primary-900/20 hover:border-accent-500/50 transition-colors duration-500"
          >
            <p className="font-cormorant text-secondary-300 text-lg sm:text-xl md:text-2xl italic font-light leading-relaxed whitespace-pre-line">
              {parseFormattedText(stanza)}
            </p>
          </ScrollReveal>
        ))}
      </div>

      {/* Author Note below poem */}
      <ScrollReveal direction="up" duration={0.7} delay={0.4}>
        <div className="pt-6 border-t border-accent-500/20 text-right">
          <p className="font-cinzel text-accent-400 text-lg md:text-xl tracking-[0.2em] font-normal">
            By {poem.author}
          </p>
        </div>
      </ScrollReveal>

      {/* Gold Divider */}
      <ScrollReveal direction="up" duration={0.8} delay={0.5}>
        <div className="divider-gold my-16" />
      </ScrollReveal>
    </div>
  );
}

export default function PoetryClientContent() {
  const [selectedPoemId, setSelectedPoemId] = useState<string>(poemList[0].id);
  const activePoem = poemList.find((p) => p.id === selectedPoemId) || poemList[0];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-16">
      {/* Selector Pills for Verses */}
      <ScrollReveal direction="up" duration={0.6}>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {poemList.map((poem) => {
            const isActive = poem.id === activePoem.id;
            return (
              <button
                key={poem.id}
                onClick={() => setSelectedPoemId(poem.id)}
                className={`font-manrope text-[0.65rem] tracking-[0.2em] uppercase px-5 py-2.5 border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "border-accent-500 text-accent-300 bg-accent-500/10 shadow-[0_0_15px_rgba(210,179,106,0.15)]"
                    : "border-accent-500/20 text-secondary-400 hover:border-accent-500/50 hover:text-accent-300"
                }`}
              >
                {poem.title}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Active Poem Render */}
      <PoemDisplay poem={activePoem} />
    </div>
  );
}
