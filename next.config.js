const { env } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [env.REPLIT_DOMAINS.split(",")[0]],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;