'use client';

import React, { useMemo } from 'react';

export default function SacredGeometry() {
  // Base radius for the circles in the Flower of Life pattern
  const R = 50;

  // Pre-calculate circle coordinates to avoid recalculating on re-renders
  const circles = useMemo(() => {
    const arr: { cx: number; cy: number }[] = [];
    
    // Center circle
    arr.push({ cx: 0, cy: 0 });

    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;

      // Ring 1 (6 circles)
      arr.push({
        cx: R * Math.cos(angle),
        cy: R * Math.sin(angle),
      });

      // Ring 2 - Outer corners (6 circles)
      arr.push({
        cx: 2 * R * Math.cos(angle),
        cy: 2 * R * Math.sin(angle),
      });

      // Ring 2 - Outer edges (6 circles)
      const angleEdge = angle + Math.PI / 6;
      const distEdge = R * Math.sqrt(3);
      arr.push({
        cx: distEdge * Math.cos(angleEdge),
        cy: distEdge * Math.sin(angleEdge),
      });
    }

    // Round to 3 decimal places to keep SVG source clean
    return arr.map(c => ({
      cx: Number(c.cx.toFixed(3)),
      cy: Number(c.cy.toFixed(3)),
    }));
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
      <style>{`
        @keyframes sacredBreathing {
          0%, 100% {
            transform: scale(0.98) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.02) rotate(3deg);
            opacity: 1;
          }
        }
        .sacred-geometry-anim {
          animation: sacredBreathing 40s ease-in-out infinite;
          transform-origin: center center;
        }
        @media (prefers-reduced-motion: reduce) {
          .sacred-geometry-anim {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="sacred-geometry-anim w-[280px] h-[280px] md:w-[600px] md:h-[600px] drop-shadow-[0_0_12px_rgba(210,179,106,0.3)]">
        <svg
          viewBox="-160 -160 320 320"
          className="w-full h-full text-[#D2B36A]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="sacred-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <g stroke="currentColor" strokeWidth="0.8" fill="none" filter="url(#sacred-glow)">
            {/* Overlapping rings */}
            {circles.map((c, idx) => (
              <circle key={`circle-${idx}`} cx={c.cx} cy={c.cy} r={R} />
            ))}

            {/* Bounding circles for the authentic sacred geometry look */}
            <circle cx="0" cy="0" r={R * 3} />
            <circle cx="0" cy="0" r={R * 3 + 4} />
          </g>
        </svg>
      </div>
    </div>
  );
}
