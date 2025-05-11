import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  publicRuntimeConfig: {
    PRIVATE_API_URL: process.env.PRIVATE_API_URL,
    PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  /* config options here */
};

export default nextConfig;
