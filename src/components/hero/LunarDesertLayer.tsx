"use client";

import Image from "next/image";

/**
 * LunarDesertLayer
 * Cinematic vertical landscape environment:
 * - Upper sky: Vast cosmic sky and glowing Milky Way
 * - Midground: Ancient stone pyramids and 2 distant cacti silhouettes on right horizon
 * - Foreground sand: Weathered wooden treasure chest bound with dark iron, closed and deep-buried in the sand
 * - Lower periphery: Two ancient weathered skulls half-buried in sand ripples
 */
export default function LunarDesertLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      data-parallax-speed="0.85"
    >
      <Image
        src="/hero/lunar-desert-landscape.jpg"
        alt="Ancient pyramids, closed deep-buried treasure chest in sand dunes, two skulls at periphery under cosmic sky"
        fill
        priority
        unoptimized
        className="object-cover object-center md:object-bottom"
        sizes="100vw"
      />

      {/* Subtle top cosmic atmosphere blend */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-primary-950/60 via-primary-950/20 to-transparent" />
    </div>
  );
}
