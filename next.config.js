const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: { instrumentationHook: true, },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = withVanillaExtract(nextConfig);
