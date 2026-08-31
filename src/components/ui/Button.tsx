"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

/**
 * Luxury museum-style button.
 * Transparent with thin gold border, backdrop blur,
 * hover glow + lift + soft gold fill.
 * When `href` is provided, renders as a Next.js Link.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = [
      "relative inline-flex items-center justify-center",
      "font-manrope uppercase tracking-[0.15em] font-light",
      "border transition-all duration-300 ease-out",
      "backdrop-blur-sm cursor-pointer",
      "focus-visible:outline-2 focus-visible:outline-accent-500 focus-visible:outline-offset-2",
      "active:scale-[0.98]",
    ].join(" ");

    const variants = {
      primary: [
        "border-accent-500/40 text-accent-300",
        "bg-accent-500/5",
        "hover:border-accent-500/80 hover:bg-accent-500/10",
        "hover:shadow-[0_0_20px_rgba(210,179,106,0.15)]",
        "hover:scale-[1.03]",
      ].join(" "),
      secondary: [
        "border-secondary-500/30 text-secondary-400",
        "bg-secondary-500/5",
        "hover:border-accent-500/50 hover:text-accent-300",
        "hover:bg-accent-500/5",
        "hover:scale-[1.03]",
      ].join(" "),
      ghost: [
        "border-transparent text-accent-300",
        "hover:border-accent-500/20 hover:bg-accent-500/5",
        "hover:scale-[1.02]",
      ].join(" "),
    };

    const sizes = {
      sm: "px-5 py-2 text-[0.65rem]",
      md: "px-8 py-3 text-[0.7rem]",
      lg: "px-10 py-4 text-[0.75rem]",
    };

    const allClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={allClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={allClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
