/** @type {import('next').NextConfig} */
const nextConfig = {
  exportTrailingSlash: true,
  basePath: '/my-projects',
  assetPrefix: '/my-projects/',
  images: {
    unoptimized: true,
  },
  output: 'export',
  images: {
    domains: ["storage.rxresu.me"],
  },
};

export default nextConfig;
