import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const ghPagesPath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? '/joshua-portfolio' : '');

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? ghPagesPath : '',
  assetPrefix: isProd ? ghPagesPath : '',
  distDir: 'out',
};

export default nextConfig;