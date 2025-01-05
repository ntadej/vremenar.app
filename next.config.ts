import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import * as path from 'path'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  transpilePackages: ['@ntadej/style'],
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
  },
  outputFileTracingRoot:
    process.env.NODE_ENV == 'development' ? path.join(__dirname, '../') : undefined,
}

export default withNextIntl(nextConfig)
