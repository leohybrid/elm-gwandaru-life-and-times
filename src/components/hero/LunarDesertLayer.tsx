"use client";

import Image from "next/image";

/**
 * LunarDesertLayer
 * Unified, contemplative cinematic landscape:
 * - Wind-rippled desert floor with subtle lunar crater contours
 * - Two ancient weathered skulls resting quietly at the lower-left periphery
 * - Stone pyramids rising from the desert in the midground under the Milky Way
 * - Exactly two solitary saguaro cacti silhouettes seen far away on the horizon
 * - Warm antique gold starlight highlights on the dunes
 */
export default function LunarDesertLayer() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      data-parallax-speed="0.85"
    >
      <Image
        src="/hero/lunar-desert-landscape.jpg"
        alt="Ancient pyramids and desert dunes with lunar craters, two skulls at the periphery, and two distant cacti under starry sky"
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
