import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json in the parent folder makes Turbopack infer the
  // workspace root one level up, which breaks client-manifest module keys.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
