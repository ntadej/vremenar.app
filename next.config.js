const path = require('path')
const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['@ntadej/style'])

/** @type {import('next').NextConfig} */
module.exports = withTM(
  nextTranslate({
    images: {
      imageSizes: [16, 32, 48, 64, 96, 128, 174, 224, 256, 348, 384, 448, 512],
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'assets'), path.join(__dirname, 'style')],
    },
  }),
  {
    reactStrictMode: true,
    resolveSymlinks: false,
  }
)
