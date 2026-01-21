import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/cybercade-website-v2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cybercade-website-v2' : '',
};

export default nextConfig;
