"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

/** Homepage section 2: Celestial quote */
export function QuoteSection() {
  return (
    <section className="relative bg-primary-950 py-28 md:py-40 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <div className="divider-gold mb-14" />
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.9} delay={0.1}>
          <blockquote className="font-cormorant text-accent-200 text-2xl md:text-4xl italic font-light leading-relaxed mb-8">
            &ldquo;We are stardust brought to life, then empowered by the universe to figure itself out — and we have only just begun.&rdquo;
          </blockquote>
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.7} delay={0.25}>
          <p className="font-manrope text-secondary-500 text-[0.65rem] tracking-[0.25em] uppercase">
            — Neil deGrasse Tyson
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" duration={0.7} delay={0.35}>
          <div className="divider-gold mt-14" />
        </ScrollReveal>
      </div>
    </section>
  );
}

/** Homepage section 3: Featured works */
const featured = [
  {
    label: "Poetry",
    title: "Verses from the Void",
    excerpt: "Stardust and silence. Words wrung from the cosmos at 3am.",
    href: "/poetry",
  },
  {
    label: "Visual Art",
    title: "Sacred Geometries",
    excerpt: "Illustrations at the intersection of ancient pattern and digital precision.",
    href: "/art",
  },
  {
    label: "Essays",
    title: "The Night Sky as Sacred Text",
    excerpt: "On reading constellations as scripture and the Milky Way as theology.",
    href: "/blog/the-night-sky-as-sacred-text",
  },
];

export function FeaturedSection() {
  return (
    <section className="relative bg-primary-900/20 py-24 md:py-36 px-6 section-fade">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" duration={0.8} className="text-center mb-16">
          <p className="font-manrope text-accent-500/60 text-[0.65rem] tracking-[0.3em] uppercase mb-4">
            Selected Works
          </p>
          <h2 className="font-cinzel text-accent-300 text-3xl md:text-5xl tracking-[0.15em] font-normal">
            From the Sanctuary
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-accent-500/10">
          {featured.map((item, i) => (
            <ScrollReveal key={item.href} direction="up" duration={0.7} delay={i * 0.1}>
              <a
                href={item.href}
                className="group block bg-primary-950 p-10 hover:bg-primary-900/40 transition-colors duration-500 h-full"
              >
                <span className="font-manrope text-accent-500 text-[0.6rem] tracking-[0.25em] uppercase">
                  {item.label}
                </span>
                <div className="w-6 h-px bg-accent-500/30 my-4 group-hover:w-10 transition-all duration-500" />
                <h3 className="font-cinzel text-accent-200 text-lg md:text-xl tracking-[0.1em] font-normal mb-4 leading-snug group-hover:text-accent-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-secondary-500 text-sm font-light leading-relaxed">
                  {item.excerpt}
                </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Homepage section 4: About teaser */
export function AboutTeaser() {
  return (
    <section className="relative bg-primary-950 py-28 md:py-40 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: text */}
        <div>
          <ScrollReveal direction="left" duration={0.8}>
            <p className="font-manrope text-accent-500/60 text-[0.65rem] tracking-[0.3em] uppercase mb-6">
              The Sanctuary
            </p>
            <h2 className="font-cinzel text-accent-300 text-2xl md:text-4xl tracking-[0.12em] font-normal leading-snug mb-6">
              At the Intersection of Ancient Wisdom & Cosmic Wonder
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="left" duration={0.8} delay={0.15}>
            <p className="font-sans text-secondary-400 text-sm font-light leading-relaxed mb-6">
              ELM GWandaru is not a conventional blog or portfolio. It is a living, breathing digital sanctuary — a space where philosophy, astronomy, ancient civilizations, poetry, and sacred geometry converge into a single, immersive experience.
            </p>
            <p className="font-sans text-secondary-500 text-sm font-light leading-relaxed mb-10">
              Every element has a purpose. Every visual, a meaning. Every word, a weight.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" duration={0.7} delay={0.3}>
            <Button href="/about" variant="secondary" size="md">
              Enter the Sanctuary
            </Button>
          </ScrollReveal>
        </div>

        {/* Right: sacred geometry symbol */}
        <ScrollReveal direction="right" duration={0.9} delay={0.2} className="flex justify-center">
          <div className="w-56 h-56 md:w-72 md:h-72 opacity-40 animate-[breathing_35s_ease-in-out_infinite]">
            <svg viewBox="-120 -120 240 240" className="w-full h-full text-accent-500" stroke="currentColor" fill="none" strokeWidth="0.7">
              {/* Flower of Life simplified */}
              {[0, 1, 2, 3, 4, 5].map((i) => {
                const angle = (i * Math.PI) / 3;
                const cx = 40 * Math.cos(angle);
                const cy = 40 * Math.sin(angle);
                return <circle key={i} cx={cx.toFixed(1)} cy={cy.toFixed(1)} r="40" />;
              })}
              <circle cx="0" cy="0" r="40" />
              <circle cx="0" cy="0" r="80" />
              <circle cx="0" cy="0" r="82" />
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/** Homepage section 5: Latest from journal */
const latestPosts = [
  {
    title: "The Night Sky as Sacred Text",
    category: "Astronomy",
    date: "August 2026",
    href: "/blog/the-night-sky-as-sacred-text",
  },
  {
    title: "Sacred Geometry & the Architecture of Consciousness",
    category: "Philosophy",
    date: "July 2026",
    href: "/blog/sacred-geometry-and-consciousness",
  },
  {
    title: "Desert, Dust, and Deep Time",
    category: "Reflections",
    date: "June 2026",
    href: "/blog/desert-dust-and-deep-time",
  },
];

export function JournalPreview() {
  return (
    <section className="relative bg-primary-900/20 py-24 md:py-36 px-6 section-fade">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal direction="up" duration={0.8} className="text-center mb-14">
          <p className="font-manrope text-accent-500/60 text-[0.65rem] tracking-[0.3em] uppercase mb-4">
            Latest Writing
          </p>
          <h2 className="font-cinzel text-accent-300 text-3xl md:text-4xl tracking-[0.15em] font-normal">
            The Journal
          </h2>
        </ScrollReveal>

        <div className="space-y-px">
          {latestPosts.map((post, i) => (
            <ScrollReveal key={post.href} direction="up" duration={0.7} delay={i * 0.1}>
              <a
                href={post.href}
                className="group flex items-center justify-between bg-primary-950 hover:bg-primary-900/40 px-8 py-6 transition-colors duration-300 border-b border-accent-500/10 last:border-0"
              >
                <div>
                  <span className="font-manrope text-accent-500/60 text-[0.6rem] tracking-[0.2em] uppercase block mb-2">
                    {post.category} · {post.date}
                  </span>
                  <h3 className="font-cinzel text-accent-200 text-lg md:text-xl tracking-[0.08em] font-normal group-hover:text-accent-300 transition-colors duration-300">
                    {post.title}
                  </h3>
                </div>
                <span className="w-6 h-px bg-accent-500/30 group-hover:w-10 group-hover:bg-accent-500 transition-all duration-400 flex-shrink-0 ml-8" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" duration={0.6} delay={0.3} className="text-center mt-12">
          <Button href="/blog" variant="secondary" size="md">
            All Essays
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
