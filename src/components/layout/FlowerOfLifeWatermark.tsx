"use client";

/**
 * FlowerOfLifeWatermark Component
 * Universal matte background watermark displaying a seamless, infinitely repeating
 * Flower of Life sacred geometry pattern across the entire sanctuary.
 *
 * Characteristics:
 * - Fixed background layer behind all content (z-[-1])
 * - Subtle matte antique gold stroke with very low opacity (0.045)
 * - Zero impact on text readability while providing a distinct ancient sacred atmosphere
 */
export default function FlowerOfLifeWatermark() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-[1] opacity-[0.045] mix-blend-screen overflow-hidden"
    >
      <svg className="w-full h-full" width="100%" height="100%">
        <defs>
          <pattern
            id="flower-of-life-pattern"
            x="0"
            y="0"
            width="120"
            height="103.923"
            patternUnits="userSpaceOnUse"
          >
            <g
              stroke="#D2B36A"
              strokeWidth="0.6"
              fill="none"
              strokeOpacity="0.9"
            >
              {/* Hexagonal overlapping grid for seamless Flower of Life pattern */}
              <circle cx="0" cy="0" r="30" />
              <circle cx="60" cy="0" r="30" />
              <circle cx="120" cy="0" r="30" />

              <circle cx="30" cy="51.961" r="30" />
              <circle cx="90" cy="51.961" r="30" />

              <circle cx="0" cy="103.923" r="30" />
              <circle cx="60" cy="103.923" r="30" />
              <circle cx="120" cy="103.923" r="30" />

              {/* Intersecting secondary rings for complete flower petals */}
              <circle cx="30" cy="-51.961" r="30" />
              <circle cx="90" cy="-51.961" r="30" />

              <circle cx="-30" cy="51.961" r="30" />
              <circle cx="150" cy="51.961" r="30" />
            </g>
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#flower-of-life-pattern)"
        />
      </svg>
    </div>
  );
}
