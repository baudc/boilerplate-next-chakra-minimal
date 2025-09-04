import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true, // Generate type-safe routes with next/link
};

export default nextConfig;
