import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/nashtag-dev',
  assetPrefix: '/nashtag-dev/',
};

export default nextConfig;
