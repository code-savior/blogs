// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '/blogs',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
