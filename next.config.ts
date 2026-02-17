import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use webpack bundler for better Netlify compatibility
  webpack: (config) => {
    return config;
  },
  
  // Ensure heavy Node-only libs are treated as external in server routes
  serverExternalPackages: [
    "pdfkit",
    "fontkit",
    "restructure",
    "unicode-properties",
    "brotli",
    "linebreak",
    "png-js",
    "deep-equal",
    "@swc/helpers",
  ],
};

export default nextConfig;
