/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: process.env.REPLIT_DOMAINS
    ? [process.env.REPLIT_DOMAINS.split(",")[0]]
    : [],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.builder.io",
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
