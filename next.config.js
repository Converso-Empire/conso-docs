/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['conso-interpreter', 'conso-parser'],
};

module.exports = nextConfig;
