import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://tailus.io/**"),
      new URL("https://images.unsplash.com/**"),
      // new URL("https://avatars.githubusercontent.com/**"),
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
