"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SearchOverlay from "./SearchOverlay";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/poetry", label: "Poetry" },
  { href: "/art", label: "Art" },
  { href: "/comics", label: "Comics" },
  { href: "/support", label: "Support" },
  { href: "/engage", label: "Engage" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Monitor scroll height to apply backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out border-b border-transparent px-6 py-6 md:px-12",
          isScrolled
            ? "bg-primary-950/60 backdrop-blur-[12px] border-accent-500/10 py-4 shadow-[0_4px_30px_rgba(7,19,33,0.5)]"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-cinzel text-accent-500 text-lg md:text-xl tracking-[0.25em] font-normal hover:text-accent-300 transition-colors focus-visible:outline-2 focus-visible:outline-accent-500"
          >
            ELM GWANDARU
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-manrope text-[0.7rem] uppercase tracking-[0.2em] text-secondary-400 hover:text-accent-300 transition-colors py-2 focus-visible:outline-2 focus-visible:outline-accent-500"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Actions: Search Button & Hamburger */}
          <div className="flex items-center space-x-6">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-secondary-400 hover:text-accent-500 transition-colors cursor-pointer p-2 focus-visible:outline-2 focus-visible:outline-accent-500"
              aria-label="Open search overlay"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z"
                />
              </svg>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1.5 cursor-pointer text-secondary-400 hover:text-accent-500 transition-colors z-50 p-1 focus-visible:outline-2 focus-visible:outline-accent-500"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={cn(
                  "w-5 h-[1.5px] bg-current transition-all duration-300 ease-out origin-center",
                  isMobileMenuOpen && "transform rotate-45 translate-y-[4.5px]"
                )}
              />
              <span
                className={cn(
                  "w-5 h-[1.5px] bg-current transition-all duration-300 ease-out",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "w-5 h-[1.5px] bg-current transition-all duration-300 ease-out origin-center",
                  isMobileMenuOpen && "transform -rotate-45 -translate-y-[4.5px]"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-primary-950/98 backdrop-blur-lg flex flex-col justify-center px-8 md:px-16 xl:hidden"
          >
            <div className="flex flex-col space-y-6 max-w-md mx-auto w-full text-center">
              <h3 className="font-cinzel text-accent-500/40 text-[0.65rem] tracking-[0.3em] uppercase mb-4">
                Navigation
              </h3>
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "font-manrope text-lg uppercase tracking-[0.25em] transition-colors relative block py-2",
                        isActive ? "text-accent-500" : "text-secondary-400 hover:text-accent-300"
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
