/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, ".");
    return config;
  },
};

export default nextConfig;
