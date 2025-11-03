import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["page.tsx", "page.ts", "route.ts", "route.tsx"],
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
