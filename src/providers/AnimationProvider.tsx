"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AnimationContextType {
  prefersReducedMotion: boolean;
  isLoaded: boolean;
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  isLoaded: false,
});

export function useAnimation() {
  return useContext(AnimationContext);
}

interface AnimationProviderProps {
  children: React.ReactNode;
}

export default function AnimationProvider({
  children,
}: AnimationProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handler);

    // Mark as loaded after first paint
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  return (
    <AnimationContext value={{ prefersReducedMotion, isLoaded }}>
      {children}
    </AnimationContext>
  );
}
