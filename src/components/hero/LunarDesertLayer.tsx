"use client";

import Image from "next/image";

/**
 * LunarDesertLayer
 * Unified, luminous cinematic landscape:
 * - Wind-rippled golden desert sand dunes meeting cratered lunar surface
 * - Ancient archaeological skeleton and bones resting in the foreground sand
 * - Stone pyramids rising from the desert under the Milky Way
 * - Saguaro cacti silhouettes seen far away along the distant dune horizon
 * - Warm antique gold starlight highlights bringing the sand texture alive
 */
export default function LunarDesertLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      data-parallax-speed="0.85"
    >
      <Image
        src="/hero/lunar-desert-landscape.jpg"
        alt="Ancient pyramids and golden lunar desert dunes with distant cacti and foreground archaeological skeletons under starry sky"
        fill
        priority
        unoptimized
        className="object-cover object-bottom"
        sizes="100vw"
      />

      {/* Very subtle top cosmic atmosphere blend - keeps sky dark while leaving ground fully illuminated */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-primary-950/60 via-primary-950/20 to-transparent" />
    </div>
  );
}
