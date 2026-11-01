import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the bottom-left Next.js badge in local screenshots / demos
  devIndicators: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "agentboxcdn.com.au" },
      { protocol: "https", hostname: "image.mux.com" },
      { protocol: "https", hostname: "stream.mux.com" },
    ],
  },
};

export default nextConfig;
