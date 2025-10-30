import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
