"use client";

import Image from "next/image";

/**
 * Layer 7 — Cacti
 * Tall cacti framing both sides of the hero.
 * Perspective depth: large foreground → medium → small distant.
 * Never blocking text content.
 */
export default function CactiLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none"
      data-parallax-speed="0.9"
    >
      {/* Left cacti */}
      <div className="absolute bottom-0 left-0 w-[25%] max-w-[300px] h-[55%] md:h-[65%]">
        <Image
          src="/hero/cacti.png"
          alt=""
          fill
          className="object-contain object-bottom object-left mix-blend-screen"
          sizes="(max-width: 768px) 20vw, 250px"
          quality={75}
        />
      </div>

      {/* Right cacti (mirrored) */}
      <div className="absolute bottom-0 right-0 w-[22%] max-w-[260px] h-[50%] md:h-[60%]">
        <Image
          src="/hero/cacti.png"
          alt=""
          fill
          className="object-contain object-bottom object-right scale-x-[-1] mix-blend-screen"
          sizes="(max-width: 768px) 18vw, 220px"
          quality={75}
        />
      </div>
    </div>
  );
}
