import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  
  // Optimizări build
  reactStrictMode: true,
  poweredByHeader: false,
  
  // SECURITATE - Nu expune source maps în producție
  productionBrowserSourceMaps: false,
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  trailingSlash: true,
  
  // Compresie și optimizare maximă
  compress: true,
  
  // Optimizare bundle - elimină cod neutilizat
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default nextConfig;