"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import LunarDesertLayer from "./LunarDesertLayer";
import CloudLayer from "./CloudLayer";
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
 * Seamless, cinematic 100vh hero environment:
 * - Lunar surface craters and dust blended with sandy desert dunes
 * - Weathered archaeological skeletons and bones in the foreground sand
 * - Ancient pyramids under starlight in the midground
 * - Distant silhouettes of cacti seen far away on the horizon
 * - Live Three.js procedural twinkling star field
 * - Breathing SVG Flower of Life sacred geometry
 * - Zero black-box artifacts or isolated blending clipping
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
      {/* Layer 1: Lunar Desert Landscape — dunes, skeletons, pyramids, distant cacti, cosmos */}
      <div className="absolute inset-0 z-0">
        <LunarDesertLayer />
      </div>

      {/* Layer 2: Live Three.js Procedural Twinkling Stars */}
      <div className="absolute inset-0 z-[1] pointer-events-none" data-parallax-speed="0.2">
        <StarField />
      </div>

      {/* Layer 3: Atmospheric Cloud & Nebula Drift */}
      <div className="absolute inset-0 z-[2] pointer-events-none opacity-30">
        <CloudLayer />
      </div>

      {/* Layer 4: Sacred Geometry — Glowing SVG Flower of Life */}
      <div
        className="absolute inset-0 z-[3] flex items-center justify-center pointer-events-none"
        data-parallax-speed="0.5"
      >
        <SacredGeometry />
      </div>

      {/* Layer 5: Hero Content & Typography — Above all scene visual layers */}
      <HeroContent />

      {/* Layer 6: Bottom gradient fade into next chamber */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-primary-950 z-30 pointer-events-none" />
    </section>
  );
}
