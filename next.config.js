const path = require('path')
const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
module.exports = nextTranslate({
  transpilePackages: ['@ntadej/style'],
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 174, 224, 256, 348, 384, 448, 512],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets'), path.join(__dirname, 'style')],
  },
})
