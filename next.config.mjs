/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  basePath: "/blog",
  // assetPrefix: "/assets",
};

export default nextConfig;
