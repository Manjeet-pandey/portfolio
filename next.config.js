/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/portfolio", // <-- replace with your repo name.
};

module.exports = nextConfig;
