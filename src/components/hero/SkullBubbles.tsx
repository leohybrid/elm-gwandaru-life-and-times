"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  size: number;          // diameter in px
  startX: number;        // offset from skull origin
  driftX: number;        // horizontal drift during float
  duration: number;      // ascend duration in seconds
  hueShift: number;      // color tilt (0, 60, 120, 180, etc.)
  wobbleSpeed: number;   // horizontal sway frequency
  delay: number;
}

/**
 * SkullBubbles Component
 * Spawns a stream of luminous, iridescent soap bubbles
 * that appear as if they are gently blown out of the ancient skulls in the sand.
 */
export default function SkullBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    let nextId = 0;

    const spawnBubble = () => {
      const newBubble: Bubble = {
        id: nextId++,
        size: 16 + Math.random() * 32,          // 16px to 48px
        startX: (Math.random() - 0.5) * 40,     // clustered around skull
        driftX: 40 + (Math.random() - 0.3) * 120,// drifts gently rightward into desert air
        duration: 4.5 + Math.random() * 3.5,    // 4.5s to 8s slow gentle float
        hueShift: Math.floor(Math.random() * 360),
        wobbleSpeed: 2 + Math.random() * 2,
        delay: 0,
      };

      setBubbles((prev) => {
        // Keep active bubble pool manageable (max 12 bubbles)
        const updated = [...prev.slice(-11), newBubble];
        return updated;
      });
    };

    // Initial batch
    const t1 = setTimeout(spawnBubble, 600);
    const t2 = setTimeout(spawnBubble, 1400);
    const t3 = setTimeout(spawnBubble, 2200);

    // Continuous blowing cadence (every 900ms to 1800ms)
    const interval = setInterval(() => {
      spawnBubble();
    }, 1200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="absolute pointer-events-none z-[8] select-none"
      style={{
        // Positioned directly at the weathered skulls in the lower-left sand
        left: "17%",
        bottom: "16%",
      }}
    >
      <AnimatePresence>
        {bubbles.map((b) => (
          <motion.div
            key={b.id}
            initial={{
              x: b.startX,
              y: 0,
              scale: 0.15,
              opacity: 0,
            }}
            animate={{
              x: [
                b.startX,
                b.startX + b.driftX * 0.3 + 15,
                b.startX + b.driftX * 0.6 - 10,
                b.startX + b.driftX,
              ],
              y: [0, -70, -180, -320 - Math.random() * 80],
              scale: [0.15, 1, 1.05, 1.15, 1.25],
              opacity: [0, 0.95, 0.9, 0.8, 0],
            }}
            transition={{
              duration: b.duration,
              ease: "easeOut",
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
            style={{
              position: "absolute",
              width: `${b.size}px`,
              height: `${b.size}px`,
            }}
          >
            {/* Iridescent Soap Bubble Body */}
            <div
              className="w-full h-full rounded-full relative"
              style={{
                background: `radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.7) 0%, rgba(240, 249, 255, 0.25) 30%, rgba(216, 180, 254, 0.2) 60%, rgba(244, 114, 182, 0.3) 85%, rgba(56, 189, 248, 0.4) 100%)`,
                boxShadow: `
                  inset 0 0 ${b.size * 0.25}px rgba(255, 255, 255, 0.8),
                  inset ${b.size * 0.15}px 0 ${b.size * 0.35}px rgba(236, 72, 153, 0.45),
                  inset -${b.size * 0.15}px 0 ${b.size * 0.35}px rgba(56, 189, 248, 0.5),
                  inset 0 ${b.size * 0.2}px ${b.size * 0.4}px rgba(250, 204, 21, 0.35),
                  0 0 ${b.size * 0.3}px rgba(244, 114, 182, 0.35),
                  0 0 ${b.size * 0.5}px rgba(56, 189, 248, 0.25)
                `,
                border: "1px solid rgba(255, 255, 255, 0.65)",
                filter: `hue-rotate(${b.hueShift}deg)`,
                backdropFilter: "blur(0.5px)",
              }}
            >
              {/* Crescent Specular Glint (Top Left) */}
              <div
                className="absolute rounded-full bg-white/90"
                style={{
                  top: "16%",
                  left: "20%",
                  width: `${b.size * 0.28}px`,
                  height: `${b.size * 0.18}px`,
                  transform: "rotate(-35deg)",
                  filter: "blur(0.5px)",
                }}
              />

              {/* Tiny Secondary Glint (Bottom Right) */}
              <div
                className="absolute rounded-full bg-white/70"
                style={{
                  bottom: "18%",
                  right: "22%",
                  width: `${b.size * 0.12}px`,
                  height: `${b.size * 0.12}px`,
                  filter: "blur(0.4px)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
