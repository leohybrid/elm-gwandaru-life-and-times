"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import LunarDesertLayer from "./LunarDesertLayer";
import ShootingStar from "./ShootingStar";
import SkullBubbles from "./SkullBubbles";
import HeroContent from "./HeroContent";

gsap.registerPlugin(ScrollTrigger);

// Dynamic imports for Three.js components (SSR-safe)
import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./StarField"), {
  ssr: false,
  loading: () => null,
});

const SacredGeometry = dynamic(() => import("./SacredGeometry"), {
  ssr: false,
  loading: () => null,
});

/**
 * HeroScene — Main hero section orchestrator.
 * Cinematic 100vh hero environment:
 * - Lunar surface craters and dust blended with sandy desert dunes
 * - Weathered archaeological skulls at periphery
 * - Pyramids under starlight in midground
 * - Distant silhouettes of 2 cacti on far dune horizon
 * - Live Three.js procedural twinkling star field
 * - Shooting star streaking left-to-right every 5 seconds across the sky
 * - Shimmering colorful soap bubbles rising as if blown from the skulls
 * - Breathing SVG Flower of Life sacred geometry
 */
export default function HeroScene() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      // Find all parallax layers and apply scroll-driven parallax
      const layers = heroRef.current.querySelectorAll("[data-parallax-speed]");

      layers.forEach((layer) => {
        const speed = parseFloat(
          (layer as HTMLElement).dataset.parallaxSpeed || "0"
        );
        const yPercent = (1 - speed) * -50; // Invert: lower speed = more movement

        gsap.to(layer, {
          yPercent,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.5,
          },
        });
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-primary-950"
      aria-label="Hero section"
    >
      {/* Layer 1: Lunar Desert Landscape — dunes, skulls at periphery, pyramids, 2 distant cacti */}
      <div className="absolute inset-0 z-0">
        <LunarDesertLayer />
      </div>

      {/* Layer 2: Live Three.js Procedural Twinkling Stars */}
      <div className="absolute inset-0 z-[1] pointer-events-none" data-parallax-speed="0.2">
        <StarField />
      </div>

      {/* Layer 3: Shooting Star — Streaks left-to-right every 5 seconds */}
      <ShootingStar />

      {/* Layer 4: Sacred Geometry — Glowing SVG Flower of Life */}
      <div
        className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none"
        data-parallax-speed="0.5"
      >
        <SacredGeometry />
      </div>

      {/* Layer 5: Skull Bubbles — Colorful iridescent soap bubbles rising from the skulls */}
      <SkullBubbles />

      {/* Layer 6: Hero Content & Typography — Above all visual scene layers */}
      <HeroContent />

      {/* Layer 7: Subtle bottom edge fade into next chamber */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-b from-transparent to-primary-950/70 z-30 pointer-events-none" />
    </section>
  );
}
