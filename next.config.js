/** @type {import('next').NextConfig} */

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ['rickandmortyapi.com'],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      loader: '@svgr/webpack',
    })

    return config
  },
}

module.exports = nextConfig
