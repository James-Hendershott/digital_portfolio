import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Ensure heavy Node-only libs are treated as external in server routes
    serverComponentsExternalPackages: [
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
  },
};

export default nextConfig;
