const path = require('path')
const nextTranslate = require('next-translate')
const withTM = require('next-transpile-modules')(['@tano/common'])

module.exports = withTM(
  nextTranslate({
    future: {
      webpack5: true,
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'assets'), path.join(__dirname, 'style')],
    },
  }),
  { resolveSymlinks: false }
)
