/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  output: 'export',
  basePath: '/miro-beam',
};

module.exports = nextConfig;
