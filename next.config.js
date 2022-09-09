/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ["130.185.73.66"],
    formats: ["image/avif", "image/webp"],
  },
};
