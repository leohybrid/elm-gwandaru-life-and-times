"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Poetry", href: "/poetry" },
  { label: "Art", href: "/art" },
  { label: "Comics", href: "/comics" },
  { label: "Support", href: "/support" },
  { label: "Engage", href: "/engage" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 border-t border-accent-500/10 pt-20 pb-10 px-6 md:px-12">
      {/* Top row */}
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" duration={0.8} className="text-center mb-12">
          {/* Sacred geometry small divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent-500/40" />
            {/* Minimal SVG symbol */}
            <svg width="20" height="20" viewBox="-12 -12 24 24" className="text-accent-500/50" stroke="currentColor" fill="none" strokeWidth="0.6">
              <circle cx="0" cy="0" r="10" />
              <circle cx="5" cy="0" r="5" />
              <circle cx="-5" cy="0" r="5" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent-500/40" />
          </div>

          <Link
            href="/"
            className="font-cinzel text-accent-500 text-2xl md:text-3xl tracking-[0.3em] hover:text-accent-300 transition-colors"
          >
            ELM GWANDARU
          </Link>
          <p className="font-cormorant text-secondary-500 text-sm italic font-light mt-2 tracking-wide">
            Life and Times
          </p>
        </ScrollReveal>

        {/* Nav links */}
        <ScrollReveal direction="up" duration={0.7} delay={0.1}>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-16">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-manrope text-[0.65rem] tracking-[0.2em] uppercase text-secondary-500 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollReveal>

        {/* Quote */}
        <ScrollReveal direction="up" duration={0.7} delay={0.2} className="text-center mb-16">
          <p className="font-cormorant text-secondary-600 text-base italic font-light max-w-md mx-auto leading-relaxed">
            &ldquo;We are all just stardust, trying to remember where we came from.&rdquo;
          </p>
        </ScrollReveal>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-manrope text-secondary-600 text-[0.6rem] tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} ELM GWandaru. All rights reserved.
          </p>
          <p className="font-manrope text-secondary-600 text-[0.6rem] tracking-[0.15em]">
            A Cinematic Digital Sanctuary
          </p>
        </div>
      </div>
    </footer>
  );
}
