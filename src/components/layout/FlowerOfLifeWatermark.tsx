"use client";

/**
 * FlowerOfLifeWatermark Component
 * Mathematically seamless SVG vector rosette tile pattern.
 *
 * Fixes the seam line issue shown in raster images by rendering an exact,
 * crisp, 100% seamless vector SVG grid of repeating rosette circles.
 *
 * Characteristics:
 * - Zero seam lines, pixel-perfect on all screen sizes & Retina displays
 * - Fixed background layer behind all page content (z-[1])
 * - Subtle gold/slate stroke with low opacity (0.075) and mix-blend-screen
 * - Zero impact on content layout or typography
 */
export default function FlowerOfLifeWatermark() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none select-none z-[1] opacity-[0.075] mix-blend-screen overflow-hidden"
    >
      <svg className="w-full h-full" width="100%" height="100%">
        <defs>
          <pattern
            id="seamless-rosette-pattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <g
              stroke="#D2B36A"
              strokeWidth="0.6"
              fill="none"
              strokeOpacity="0.85"
            >
              {/* Main outer tile circle */}
              <circle cx="40" cy="40" r="40" />

              {/* 4 cardinal intersecting circles forming the exact 4-petal rosette */}
              <circle cx="40" cy="0" r="40" />
              <circle cx="80" cy="40" r="40" />
              <circle cx="40" cy="80" r="40" />
              <circle cx="0" cy="40" r="40" />

              {/* 4 corner boundary circles for seamless adjacent tile joins */}
              <circle cx="0" cy="0" r="40" />
              <circle cx="80" cy="0" r="40" />
              <circle cx="0" cy="80" r="40" />
              <circle cx="80" cy="80" r="40" />
            </g>
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#seamless-rosette-pattern)"
        />
      </svg>
    </div>
  );
}
