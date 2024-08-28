/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.tyreplex.net",
        port: "",
        pathname: "/themes/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/places/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tyreplex.net",
        port: "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tyreplex.net",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "cdn.tyreplex.net/themes",
        port: "",
        pathname: "/themes/**",
      },
    ],
  },
};

export default nextConfig;
