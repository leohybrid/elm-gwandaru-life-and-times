import Button from "@/components/ui/Button";

/**
 * Temporary homepage to verify Phase 1 foundation:
 * - Fonts (Cinzel, Cormorant, Inter, Manrope)
 * - Colors (primary, secondary, accent)
 * - Button component
 * - Smooth scroll
 * - Dark theme
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-primary-950 flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <h1
        className="font-cinzel text-accent-500 text-4xl md:text-6xl tracking-[0.2em] font-normal mb-4"
      >
        ELM GWANDARU
      </h1>

      {/* Subtitle */}
      <p className="font-cormorant text-secondary-400 text-xl md:text-2xl italic font-light tracking-wide mb-2">
        Life and Times
      </p>

      {/* Divider */}
      <div className="divider-gold my-8" />

      {/* Body text */}
      <p className="font-sans text-secondary-500 text-sm font-light max-w-md text-center leading-relaxed mb-12">
        A cinematic digital sanctuary at the intersection of philosophy,
        astronomy, ancient civilizations, poetry, and sacred geometry.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Button variant="primary" size="lg">
          Enter
        </Button>
        <Button variant="secondary" size="lg">
          Explore
        </Button>
      </div>

      {/* Font verification */}
      <div className="mt-20 space-y-4 text-center opacity-40">
        <p className="nav-text text-secondary-400">Navigation · Manrope</p>
        <p className="font-cinzel text-accent-300 text-lg tracking-widest">Heading · Cinzel</p>
        <p className="font-cormorant text-accent-200 text-xl italic">Editorial · Cormorant Garamond</p>
        <p className="font-sans text-secondary-500 text-sm">Body · Inter</p>
      </div>
    </div>
  );
}
