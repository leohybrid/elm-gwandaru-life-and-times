"use client";

/**
 * FlowerOfLifeWatermark Component
 * Universal background watermark featuring the new geometric rosette tile pattern,
 * styled to match the dark navy & gold sanctuary aesthetic.
 *
 * Characteristics:
 * - Fixed background layer behind all page content (z-[1])
 * - Uses the uploaded gold geometric tile pattern (/patterns/sacred-tile-pattern.jpg)
 * - Seamless background repeating with low opacity (0.075) and mix-blend-screen
 * - Zero impact on content layout or typography
 */
export default function FlowerOfLifeWatermark() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-[1] opacity-[0.075] mix-blend-screen bg-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/patterns/sacred-tile-pattern.jpg')",
        backgroundSize: "360px auto",
      }}
    />
  );
}
