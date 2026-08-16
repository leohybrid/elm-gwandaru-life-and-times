"use client";

import Image from "next/image";

/**
 * Layer 8 — Foreground
 * Archaeological fragments: skulls, fossils, bones, broken stone.
 * Occupies the lower edge of the screen for visual framing.
 * Full parallax factor (1.0) — moves with scroll.
 */
export default function ForegroundLayer() {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-[25%] md:h-[30%] pointer-events-none"
      data-parallax-speed="1.0"
    >
      <Image
        src="/hero/foreground-artifacts.png"
        alt=""
        fill
        className="object-cover object-bottom"
        sizes="100vw"
        quality={80}
      />

      {/* Top fade for seamless blending */}
      <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-primary-950/90 to-transparent" />
    </div>
  );
}
