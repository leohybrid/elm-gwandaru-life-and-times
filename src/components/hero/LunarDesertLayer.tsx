"use client";

import Image from "next/image";

/**
 * LunarDesertLayer
 * Seamless cinematic landscape:
 * - Mixture of lunar surface craters/dust and wind-swept desert dunes
 * - Weathered archaeological skeletons, skulls, and fossils in the foreground sand
 * - Ancient pyramids rising from the desert in the midground
 * - Small silhouettes of saguaro cacti seen far away on the distant dune ridges
 * - Starry cosmic sky above, softly transitioning into deep navy space
 */
export default function LunarDesertLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      data-parallax-speed="0.85"
    >
      <Image
        src="/hero/lunar-desert-landscape.jpg"
        alt="Ancient pyramids and lunar desert dunes with distant cacti and foreground archaeological skeletons under starry sky"
        fill
        priority
        className="object-cover object-bottom"
        sizes="100vw"
        quality={85}
      />

      {/* Atmospheric depth vignette and subtle top cosmic tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-primary-950/30" />

      {/* Subtle bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-b from-transparent to-primary-950" />
    </div>
  );
}
