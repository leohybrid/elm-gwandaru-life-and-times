"use client";

import Image from "next/image";

/**
 * Layer 6 — Pyramids
 * Three pyramids sitting behind the content.
 * Soft golden rim lighting, weathered limestone.
 */
export default function PyramidsLayer() {
  return (
    <div
      className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[80%] max-w-[900px] h-[40%] pointer-events-none"
      data-parallax-speed="0.7"
    >
      <Image
        src="/hero/pyramids.png"
        alt=""
        fill
        className="object-contain object-bottom mix-blend-screen"
        sizes="(max-width: 768px) 90vw, 800px"
        quality={80}
      />

      {/* Atmospheric haze around pyramids */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 via-transparent to-transparent" />
    </div>
  );
}
