"use client";

import Image from "next/image";

/**
 * Layer 2 — Atmospheric Clouds
 * Soft volumetric clouds drifting through the sky.
 * Very low opacity, warm moonlit edges, slow movement.
 */
export default function CloudLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      data-parallax-speed="0.3"
    >
      {/* Cloud layer 1 — drifting left */}
      <div className="absolute inset-0 opacity-[0.15] animate-drift">
        <div className="relative w-[200%] h-full">
          <Image
            src="/hero/clouds.png"
            alt=""
            fill
            className="object-cover"
            sizes="200vw"
            quality={60}
          />
        </div>
      </div>

      {/* Cloud layer 2 — drifting right (reversed, offset) */}
      <div className="absolute inset-0 opacity-[0.08] animate-drift-reverse">
        <div className="relative w-[200%] h-full -translate-x-1/4">
          <Image
            src="/hero/clouds.png"
            alt=""
            fill
            className="object-cover scale-x-[-1]"
            sizes="200vw"
            quality={60}
          />
        </div>
      </div>
    </div>
  );
}
