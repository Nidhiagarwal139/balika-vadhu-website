/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/balika-vadhu-website",
  assetPrefix: "/balika-vadhu-website/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,   // 🔥 VERY IMPORTANT for GitHub Pages
};

export default nextConfig;


