import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Inter, Manrope } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import AnimationProvider from "@/providers/AnimationProvider";

/* ============================================
   Google Fonts — self-hosted via next/font
   Zero external requests, no layout shift
   ============================================ */

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

/* ============================================
   Metadata — SEO
   ============================================ */

export const metadata: Metadata = {
  title: {
    default: "ELM GWANDARU — Life and Times",
    template: "%s | ELM GWANDARU",
  },
  description:
    "A cinematic digital sanctuary at the intersection of philosophy, astronomy, ancient civilizations, poetry, and sacred geometry. Art, poetry, and thought — woven into a living experience.",
  keywords: [
    "art",
    "poetry",
    "philosophy",
    "sacred geometry",
    "astronomy",
    "ancient civilizations",
    "digital art",
    "blog",
    "comics",
  ],
  authors: [{ name: "ELM Gwandaru" }],
  openGraph: {
    title: "ELM GWANDARU — Life and Times",
    description:
      "A cinematic digital sanctuary — art, poetry, and thought woven into a living experience.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELM GWANDARU — Life and Times",
    description:
      "A cinematic digital sanctuary — art, poetry, and thought woven into a living experience.",
  },
};

/* ============================================
   Root Layout
   ============================================ */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${manrope.variable}`}
    >
      <body>
        <AnimationProvider>
          <SmoothScrollProvider>
            <main id="main-content">{children}</main>
          </SmoothScrollProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
