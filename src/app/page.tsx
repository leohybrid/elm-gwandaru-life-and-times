import HeroScene from "@/components/hero/HeroScene";
import {
  QuoteSection,
  FeaturedSection,
  AboutTeaser,
  JournalPreview,
} from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      {/* 100vh Cinematic Hero */}
      <HeroScene />

      {/* Section 2: Celestial quote */}
      <QuoteSection />

      {/* Section 3: Featured works */}
      <FeaturedSection />

      {/* Section 4: About teaser */}
      <AboutTeaser />

      {/* Section 5: Latest from journal */}
      <JournalPreview />
    </>
  );
}
