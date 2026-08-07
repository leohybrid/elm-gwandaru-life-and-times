import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reusable GSAP animation presets for the ELM GWandaru design system.
 */

// Fade up from below
export function fadeUp(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    y?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  }
) {
  return gsap.from(element, {
    opacity: 0,
    y: options?.y ?? 40,
    duration: options?.duration ?? 0.8,
    delay: options?.delay ?? 0,
    ease: "power2.out",
    scrollTrigger: options?.scrollTrigger
      ? {
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
          ...options.scrollTrigger,
        }
      : undefined,
  });
}

// Fade in (no movement)
export function fadeIn(
  element: string | Element | Element[],
  options?: {
    delay?: number;
    duration?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  }
) {
  return gsap.from(element, {
    opacity: 0,
    duration: options?.duration ?? 1,
    delay: options?.delay ?? 0,
    ease: "power1.out",
    scrollTrigger: options?.scrollTrigger
      ? {
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...options.scrollTrigger,
        }
      : undefined,
  });
}

// Stagger reveal for groups of elements
export function staggerReveal(
  elements: string | Element | Element[],
  options?: {
    stagger?: number;
    y?: number;
    duration?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  }
) {
  return gsap.from(elements, {
    opacity: 0,
    y: options?.y ?? 30,
    duration: options?.duration ?? 0.6,
    stagger: options?.stagger ?? 0.15,
    ease: "power2.out",
    scrollTrigger: options?.scrollTrigger
      ? {
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...options.scrollTrigger,
        }
      : undefined,
  });
}

// Parallax layer setup
export function createParallax(
  element: string | Element,
  speed: number,
  trigger?: string | Element
) {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: trigger || element,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

// Gold line draw animation
export function drawLine(
  element: string | Element,
  options?: {
    duration?: number;
    scrollTrigger?: ScrollTrigger.Vars;
  }
) {
  return gsap.from(element, {
    scaleX: 0,
    transformOrigin: "center center",
    duration: options?.duration ?? 1.2,
    ease: "power2.inOut",
    scrollTrigger: options?.scrollTrigger
      ? {
          start: "top 85%",
          toggleActions: "play none none reverse",
          ...options.scrollTrigger,
        }
      : undefined,
  });
}
