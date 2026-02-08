/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // 🔥 THIS IS THE KEY LINE
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/balika-vadhu-website",
  assetPrefix: "/balika-vadhu-website/",
};

export default nextConfig;

