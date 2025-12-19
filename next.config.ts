import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/jeanniardJ.github.io",
  reactStrictMode: true,
  distDir: "build",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
