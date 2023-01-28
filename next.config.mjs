import { join } from 'path'
import { fileURLToPath } from 'url'
import nextTranslate from 'next-translate'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

/** @type {import('next').NextConfig} */
export default nextTranslate({
  reactStrictMode: true,
  transpilePackages: ['@ntadej/style'],
  env: {
    SITE_NAME: process.env.SITE_NAME,
    SITE_COLOR: process.env.SITE_COLOR_PRIMARY,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 174, 224, 256, 348, 384, 448, 512],
  },
  sassOptions: {
    includePaths: [join(__dirname, 'assets'), join(__dirname, 'style')],
    additionalData: `$brand-primary: ${process.env.SITE_COLOR_PRIMARY}\n$brand-secondary: ${process.env.SITE_COLOR_SECONDARY}`,
  },
})
