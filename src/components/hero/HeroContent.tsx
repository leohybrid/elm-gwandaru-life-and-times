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

  const elmDanceLetter = {
    hidden: { opacity: 0, y: 15 },
    visible: (i: number) => ({
      opacity: 1,
      y: [0, -12, 6, -8, 3, 0],
      rotate: [0, -8, 7, -5, 3, 0],
      scale: [1, 1.12, 0.96, 1.04, 1],
      transition: {
        duration: 2.8,
        delay: 0.6 + i * 0.15,
        ease: "easeInOut" as const,
        times: [0, 0.25, 0.5, 0.7, 0.85, 1],
      },
    }),
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none pt-12 md:pt-16"
      data-parallax-speed="0.6"
    >
      <motion.div
        className="text-center px-6 max-w-2xl pointer-events-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-manrope text-accent-400/80 text-xs md:text-sm tracking-widest mb-4"
        >
          A Cinematic Digital Sanctuary
        </motion.p>

        {/* Main Heading — ELM with Dancing Letters & distinct GWANDARU */}
        <motion.div
          variants={item}
          className="mb-3 flex flex-col items-center justify-center gap-1 sm:gap-2"
        >
          {/* ELM with dancing animation */}
          <div className="inline-flex items-center gap-2 text-accent-300 text-3xl sm:text-4xl md:text-5xl font-medium tracking-[0.16em]">
            {"ELM".split("").map((ch, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={elmDanceLetter}
                className="inline-block transform-gpu"
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* GWandaru in distinct friendly proportions */}
          <div className="text-accent-400 text-2xl sm:text-3xl md:text-4xl tracking-[0.12em] font-normal">
            GWandaru
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={item}
          className="font-cormorant text-accent-200/70 text-base sm:text-lg md:text-xl italic font-light tracking-wide mb-2"
        >
          Life and Times
        </motion.p>

        {/* Gold Divider */}
        <motion.div variants={item} className="flex justify-center my-6">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
        </motion.div>

        {/* Description — brighter so it reads over the hero image */}
        <motion.p
          variants={item}
          className="font-sans text-accent-200/75 text-base md:text-lg font-normal max-w-lg mx-auto leading-relaxed mb-10"
          style={{ wordSpacing: "0.15em" }}
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
