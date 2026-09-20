"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { aboutManifesto } from "@/data/aboutData";

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

export default function AboutClientContent() {
  const titleWords = aboutManifesto.title.split(" ");
  const firstWord = titleWords[0];
  const restOfTitle = titleWords.slice(1).join(" ");

  return (
    <article className="max-w-3xl mx-auto space-y-10">
      {/* Title: Underlined + First Word Enlarged */}
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
          <p className="font-cormorant text-accent-500/80 text-lg md:text-xl italic font-light tracking-wide mt-3">
            {aboutManifesto.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Manifesto Body Paragraphs */}
      <div className="space-y-6 pt-2">
        {aboutManifesto.sections.map((paragraph, index) => {
          const isCallout =
            paragraph.includes("**We keep asking.**") ||
            paragraph.includes("**Come as you are.") ||
            paragraph.startsWith("I am **ELM GWandaru**");

          return (
            <ScrollReveal
              key={index}
              direction="up"
              duration={0.8}
              delay={0.05 + index * 0.03}
            >
              <p
                className={`font-sans font-light leading-relaxed whitespace-pre-line ${
                  isCallout
                    ? "text-accent-200 text-lg md:text-xl font-normal p-6 border-l-2 border-accent-500/40 bg-primary-900/30 my-4"
                    : "text-secondary-300 text-base md:text-lg"
                }`}
              >
                {parseFormattedText(paragraph)}
              </p>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Author Sign-Off */}
      <ScrollReveal direction="up" duration={0.8} delay={0.4}>
        <div className="pt-10 border-t border-accent-500/20 text-right">
          <p className="font-cinzel text-accent-400 text-xl md:text-2xl tracking-[0.2em] font-normal">
            — {aboutManifesto.author}
          </p>
        </div>
      </ScrollReveal>

      {/* Closing Gold Divider */}
      <ScrollReveal direction="up" duration={0.8} delay={0.5}>
        <div className="divider-gold my-16" />
      </ScrollReveal>
    </article>
  );
}
