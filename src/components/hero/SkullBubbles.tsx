"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  size: number;     // diameter in px
  startX: number;   // initial X offset on the left side (px)
  driftX: number;   // horizontal sway range (px)
  duration: number; // ascend duration in seconds
}

/**
 * SkullBubbles Component
 * Spawns a mesmerizing stream of translucent, colorless glass bubbles along the left side
 * of the screen, floating continuously from the skulls and buried treasure chest at the bottom
 * all the way up to the very top of the sky.
 */
export default function SkullBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    let nextId = 0;

    const spawnBubble = () => {
      const newBubble: Bubble = {
        id: nextId++,
        size: 14 + Math.random() * 32,            // 14px to 46px
        startX: (Math.random() - 0.5) * 40,        // clustered along left margin
        driftX: 25 + (Math.random() - 0.5) * 60,   // gentle horizontal sway
        duration: 7.5 + Math.random() * 4.5,      // 7.5s to 12s float to top
      };

      setBubbles((prev) => {
        // Keep active bubble pool at up to 22 bubbles along left side
        const updated = [...prev.slice(-21), newBubble];
        return updated;
      });
    };

    // Initial batch for immediate immersion
    const t1 = setTimeout(spawnBubble, 150);
    const t2 = setTimeout(spawnBubble, 500);
    const t3 = setTimeout(spawnBubble, 900);

    // Continuous cadence (every 550ms)
    const interval = setInterval(() => {
      spawnBubble();
    }, 550);

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
        // Positioned along the left margin of the screen, anchored near bottom sand
        left: "7%",
        bottom: "10%",
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
                b.startX + b.driftX * 0.4 + 12,
                b.startX + b.driftX * 0.8 - 10,
                b.startX + b.driftX,
              ],
              // Ascends all the way to top of viewport (-95vh)
              y: [0, "-30vh", "-65vh", "-95vh"],
              scale: [0.15, 1, 1.08, 1.15, 1.25],
              opacity: [0, 0.9, 0.85, 0.75, 0],
            }}
            transition={{
              duration: b.duration,
              ease: "linear",
              times: [0, 0.15, 0.5, 0.85, 1],
            }}
            style={{
              position: "absolute",
              width: `${b.size}px`,
              height: `${b.size}px`,
            }}
          >
            {/* Colorless Translucent Glass/Soap Bubble */}
            <div
              className="w-full h-full rounded-full relative"
              style={{
                background: `radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.14) 40%, rgba(255, 255, 255, 0.04) 75%, rgba(255, 255, 255, 0.3) 100%)`,
                boxShadow: `
                  inset 0 0 ${b.size * 0.25}px rgba(255, 255, 255, 0.75),
                  inset 1px 1px 3px rgba(255, 255, 255, 0.95),
                  0 0 ${b.size * 0.25}px rgba(255, 255, 255, 0.3)
                `,
                border: "1px solid rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(0.5px)",
              }}
            >
              {/* Crescent Specular Glint (Top Left) */}
              <div
                className="absolute rounded-full bg-white/95"
                style={{
                  top: "16%",
                  left: "20%",
                  width: `${b.size * 0.3}px`,
                  height: `${b.size * 0.18}px`,
                  transform: "rotate(-35deg)",
                  filter: "blur(0.3px)",
                }}
              />

              {/* Secondary Glint (Bottom Right) */}
              <div
                className="absolute rounded-full bg-white/70"
                style={{
                  bottom: "18%",
                  right: "22%",
                  width: `${b.size * 0.12}px`,
                  height: `${b.size * 0.12}px`,
                  filter: "blur(0.3px)",
                }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
