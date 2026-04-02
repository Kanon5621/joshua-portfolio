/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  images: { unoptimized: true }, 
  devIndicators: {
    appIsrStatus: false, 
  },
};

module.exports = nextConfig;