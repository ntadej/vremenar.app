const path = require('path')
const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['@ntadej/style'])

/** @type {import('next').NextConfig} */
module.exports = withTM(
  nextTranslate({
    sassOptions: {
      includePaths: [path.join(__dirname, 'assets'), path.join(__dirname, 'style')],
    },
  }),
  {
    reactStrictMode: true,
    resolveSymlinks: false,
  }
)
