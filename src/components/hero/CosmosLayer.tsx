"use client";

import Image from "next/image";

/**
 * Layer 1 — The Cosmos
 * Expansive Milky Way night sky background.
 * Parallax factor: 0.2 (controlled by parent HeroScene)
 */
export default function CosmosLayer() {
  return (
    <div className="absolute inset-0 w-full h-full" data-parallax-speed="0.2">
      <Image
        src="/hero/cosmos-milkyway.png"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      {/* Subtle dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-primary-950/30" />
    </div>
  );
}
