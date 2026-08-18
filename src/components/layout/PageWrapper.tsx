"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface PageWrapperProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageWrapper({
  title,
  subtitle,
  children,
}: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-primary-950 pt-32 pb-20 px-6 md:px-12 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <ScrollReveal direction="up" duration={0.8}>
          <h1 className="font-cinzel text-accent-500 text-3xl md:text-5xl tracking-[0.2em] font-normal mb-4">
            {title}
          </h1>
        </ScrollReveal>

        {subtitle && (
          <ScrollReveal direction="up" duration={0.8} delay={0.15}>
            <p className="font-cormorant text-secondary-400 text-lg md:text-xl italic font-light tracking-wide mb-8">
              {subtitle}
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal direction="up" duration={0.8} delay={0.3}>
          <div className="divider-gold my-6" />
        </ScrollReveal>

        <div className="mt-12 w-full text-left">
          {children || (
            <ScrollReveal direction="up" duration={0.8} delay={0.4} className="text-center">
              <p className="font-sans text-secondary-500 text-sm font-light max-w-md mx-auto leading-relaxed">
                This chamber of the sanctuary is preparing to unfold. Explore the cosmic dust or return to the main hall.
              </p>
            </ScrollReveal>
          )}
        </div>
      </div>
    </div>
  );
}
