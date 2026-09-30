import HeroScene from "@/components/hero/HeroScene";
import {
  QuoteSection,
  FeaturedSection,
  AboutTeaser,
} from "@/components/sections/HomeSections";
import LatestFeedSection from "@/components/sections/LatestFeedSection";

export default function Home() {
  return (
    <>
      {/* 100vh Cinematic Hero */}
      <HeroScene />

      {/* Section 2: Celestial quote */}
      <QuoteSection />

      {/* Section 3: Live Home Feed — Latest from Newest */}
      <LatestFeedSection />

      {/* Section 4: Selected Works */}
      <FeaturedSection />

      {/* Section 5: About teaser */}
      <AboutTeaser />
    </>
  );
}
