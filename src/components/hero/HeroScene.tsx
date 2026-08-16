"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import CosmosLayer from "./CosmosLayer";
import CloudLayer from "./CloudLayer";
import DesertLayer from "./DesertLayer";
import PyramidsLayer from "./PyramidsLayer";
import CactiLayer from "./CactiLayer";
import ForegroundLayer from "./ForegroundLayer";
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
 * Manages all parallax layers in correct z-order.
 * 100vh immersive scene.
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
      {/* Layer 1: Cosmos — z-0 */}
      <div className="absolute inset-0 z-0">
        <CosmosLayer />
      </div>

      {/* Layer 2: Stars — z-[1] */}
      <div className="absolute inset-0 z-[1]" data-parallax-speed="0.2">
        <StarField />
      </div>

      {/* Layer 3: Clouds — z-[2] */}
      <div className="absolute inset-0 z-[2]">
        <CloudLayer />
      </div>

      {/* Layer 4: Sacred Geometry — z-[3] */}
      <div
        className="absolute inset-0 z-[3] flex items-center justify-center"
        data-parallax-speed="0.5"
      >
        <SacredGeometry />
      </div>

      {/* Layer 5: Desert — z-[4] */}
      <div className="absolute inset-0 z-[4]">
        <DesertLayer />
      </div>

      {/* Layer 6: Pyramids — z-[5] */}
      <div className="absolute inset-0 z-[5]">
        <PyramidsLayer />
      </div>

      {/* Layer 7: Cacti — z-[6] */}
      <div className="absolute inset-0 z-[6]">
        <CactiLayer />
      </div>

      {/* Layer 8: Foreground — z-[7] */}
      <div className="absolute inset-0 z-[7]">
        <ForegroundLayer />
      </div>

      {/* Layer 9: Content — z-20 (above all scene layers) */}
      <HeroContent />

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-primary-950 z-30" />
    </section>
  );
}
