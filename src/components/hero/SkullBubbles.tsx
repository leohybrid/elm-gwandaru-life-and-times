"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Bubble {
  id: number;
  size: number;     // diameter in px
  startX: number;   // initial X offset near skulls (vw)
  driftX: number;   // sway range (px)
  duration: number; // ascend duration in seconds
  delay: number;
}

/**
 * SkullBubbles Component
 * Spawns a steady stream of colorless, translucent glass bubbles
 * rising continuously from the skulls in the sand all the way to the top of the screen.
 */
export default function SkullBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    let nextId = 0;

    const spawnBubble = () => {
      const newBubble: Bubble = {
        id: nextId++,
        size: 14 + Math.random() * 28,             // 14px to 42px
        startX: (Math.random() - 0.5) * 6,          // small offset near skull
        driftX: 30 + (Math.random() - 0.5) * 80,    // gentle horizontal sway
        duration: 7.0 + Math.random() * 4.0,       // 7s to 11s float to top
        delay: 0,
      };

      setBubbles((prev) => {
        // Keep active bubble pool at up to 20 bubbles
        const updated = [...prev.slice(-19), newBubble];
        return updated;
      });
    };

    // Initial batch for immediate immersion
    const t1 = setTimeout(spawnBubble, 200);
    const t2 = setTimeout(spawnBubble, 600);
    const t3 = setTimeout(spawnBubble, 1000);

    // Continuous blowing cadence (every 600ms)
    const interval = setInterval(() => {
      spawnBubble();
    }, 650);

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
              scale: 0.2,
              opacity: 0,
            }}
            animate={{
              x: [
                b.startX,
                b.startX + b.driftX * 0.4 + 15,
                b.startX + b.driftX * 0.8 - 12,
                b.startX + b.driftX,
              ],
              // Ascends all the way to top of viewport (-85vh)
              y: [0, "-25vh", "-55vh", "-85vh"],
              scale: [0.2, 1, 1.05, 1.1, 1.15],
              opacity: [0, 0.85, 0.8, 0.7, 0],
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
                background: `radial-gradient(circle at 35% 30%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.12) 40%, rgba(255, 255, 255, 0.04) 75%, rgba(255, 255, 255, 0.25) 100%)`,
                boxShadow: `
                  inset 0 0 ${b.size * 0.25}px rgba(255, 255, 255, 0.7),
                  inset 1px 1px 3px rgba(255, 255, 255, 0.9),
                  0 0 ${b.size * 0.2}px rgba(255, 255, 255, 0.25)
                `,
                border: "1px solid rgba(255, 255, 255, 0.45)",
                backdropFilter: "blur(0.5px)",
              }}
            >
              {/* Crescent Specular Glint (Top Left) */}
              <div
                className="absolute rounded-full bg-white/90"
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
                className="absolute rounded-full bg-white/60"
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
