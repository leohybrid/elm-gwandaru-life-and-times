"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface StarStreak {
  id: number;
  startX: number; // in vw
  startY: number; // in vh
  angle: number;  // degrees
  speed: number;  // duration in seconds
  length: number; // tail length in px
}

/**
 * ShootingStar Component
 * Launches a luminous shooting star from left to right across the cosmic sky
 * every 5 seconds.
 */
export default function ShootingStar() {
  const [streak, setStreak] = useState<StarStreak | null>(null);

  useEffect(() => {
    // Function to trigger a new shooting star
    const triggerStar = () => {
      const newStar: StarStreak = {
        id: Date.now(),
        startX: Math.random() * 20 - 5, // -5vw to 15vw (starts on upper left)
        startY: Math.random() * 25 + 5,  // 5vh to 30vh (upper third of sky)
        angle: 18 + Math.random() * 8,   // ~20-25 degree downward slope
        speed: 1.0 + Math.random() * 0.3,// 1.0s - 1.3s streak
        length: 160 + Math.random() * 80,// 160px - 240px tail
      };
      setStreak(newStar);

      // Auto-clear streak after animation completes
      setTimeout(() => {
        setStreak(null);
      }, (newStar.speed + 0.2) * 1000);
    };

    // First star after 1.5s
    const initialTimeout = setTimeout(triggerStar, 1500);

    // Repeats every 5 seconds
    const interval = setInterval(triggerStar, 5000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
      <AnimatePresence>
        {streak && (
          <motion.div
            key={streak.id}
            initial={{
              left: `${streak.startX}vw`,
              top: `${streak.startY}vh`,
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              left: `${streak.startX + 90}vw`,
              top: `${streak.startY + 32}vh`,
              opacity: [0, 1, 1, 0.6, 0],
              scale: [0.6, 1.2, 1, 0.8, 0.2],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: streak.speed,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              transform: `rotate(${streak.angle}deg)`,
              transformOrigin: "right center",
            }}
            className="flex items-center"
          >
            {/* Blazing Glowing Tail */}
            <div
              style={{
                width: `${streak.length}px`,
                height: "2px",
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(210, 179, 106, 0.2) 30%, rgba(244, 229, 193, 0.8) 75%, #ffffff 100%)",
                filter: "drop-shadow(0 0 6px rgba(244, 229, 193, 0.8)) drop-shadow(0 0 12px rgba(210, 179, 106, 0.6))",
              }}
            />

            {/* Glowing Star Head */}
            <div
              className="w-2.5 h-2.5 rounded-full bg-white relative -ml-1"
              style={{
                boxShadow:
                  "0 0 8px #ffffff, 0 0 16px #f4e5c1, 0 0 28px #d2b36a, 0 0 45px rgba(210, 179, 106, 0.7)",
              }}
            >
              {/* Secondary spark flare */}
              <div className="absolute inset-0 -m-1 rounded-full bg-accent-300/60 blur-[1px]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
