"use client";

import Image from "next/image";

/**
 * Layer 5 — Desert Horizon
 * Ancient Egyptian desert occupying the lower ~35% of the hero.
 * Atmospheric haze blends into the sky above.
 */
export default function DesertLayer() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
      data-parallax-speed="0.8"
    >
      {/* Haze gradient — blends desert into sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/40 to-transparent z-10 h-[30%]" />

      <Image
        src="/hero/desert-landscape.png"
        alt=""
        fill
        className="object-cover object-top"
        sizes="100vw"
        quality={80}
      />

      {/* Atmospheric haze overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-950/80" />
    </div>
  );
}
