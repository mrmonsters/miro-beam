/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  // output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/miro-beam' : '',
};

module.exports = nextConfig;
