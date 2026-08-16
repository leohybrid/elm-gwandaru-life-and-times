import HeroScene from "@/components/hero/HeroScene";

/**
 * Homepage — ELM GWANDARU
 * Cinematic progression: Hero → Quote → Featured → Journal → Poetry → Gallery → Essays → Footer
 */
export default function Home() {
  return (
    <>
      {/* 100vh Hero Scene */}
      <HeroScene />

      {/* Placeholder sections below hero — will be built in Phase 4 */}
      <section className="relative bg-primary-950 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="divider-gold mb-12" />
          <blockquote className="font-cormorant text-accent-200 text-2xl md:text-3xl italic font-light leading-relaxed">
            &ldquo;We are stardust brought to life, then empowered by the
            universe to figure itself out — and we have only just begun.&rdquo;
          </blockquote>
          <p className="font-manrope text-secondary-600 text-xs tracking-[0.2em] uppercase mt-8">
            — Neil deGrasse Tyson
          </p>
          <div className="divider-gold mt-12" />
        </div>
      </section>

      {/* Spacer section to test parallax scroll */}
      <section className="relative bg-primary-950 py-40 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-secondary-500 text-sm font-light leading-relaxed">
            More sections coming in Phase 4...
          </p>
        </div>
      </section>
    </>
  );
}
