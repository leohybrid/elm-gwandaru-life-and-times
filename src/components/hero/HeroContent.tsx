"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

/**
 * Layer 9 — Hero Content
 * Typography, tagline, main heading, subheading, CTA buttons.
 * Centered on the vertical axis with staggered fade-up entrance.
 */
export default function HeroContent() {
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.5,
      },
    },
  };

  const item = {
    hidden: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      data-parallax-speed="0.6"
    >
      <motion.div
        className="text-center px-6 max-w-3xl pointer-events-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-manrope text-accent-500/70 text-[0.65rem] md:text-xs tracking-[0.3em] uppercase mb-6"
        >
          A Cinematic Digital Sanctuary
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          variants={item}
          className="font-cinzel text-accent-300 text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.15em] font-normal leading-[1.1] mb-4"
        >
          ELM GWANDARU
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="font-cormorant text-secondary-400 text-lg sm:text-xl md:text-2xl italic font-light tracking-wide mb-3"
        >
          Life and Times
        </motion.p>

        {/* Gold Divider */}
        <motion.div variants={item} className="flex justify-center my-8">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="font-sans text-secondary-500 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed mb-10"
        >
          Art, poetry, and thought — woven into a living experience
          at the intersection of ancient wisdom and cosmic wonder.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex gap-4 sm:gap-6 justify-center">
          <Button variant="primary" size="lg">
            Explore
          </Button>
          <Button variant="secondary" size="lg">
            Read Journal
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="mt-16 md:mt-20"
        >
          <motion.div
            className="w-px h-12 bg-gradient-to-b from-accent-500/40 to-transparent mx-auto"
            animate={
              prefersReducedMotion
                ? {}
                : {
                    scaleY: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                  }
            }
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <p className="font-manrope text-secondary-600 text-[0.6rem] tracking-[0.25em] uppercase mt-3">
            Scroll
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
