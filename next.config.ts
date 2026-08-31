import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 80, 85],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
