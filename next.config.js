const path = require('path')
const withTM = require('next-transpile-modules')(['@tano/common']);
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
  'en': 'en',
  'sl': 'sl'
}

module.exports = withTM({
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },

  sassOptions: {
    includePaths: [
      path.join(__dirname, 'assets'),
      path.join(__dirname, 'style')
    ]
  },

  webpack(config, options) {
    if (!options.isServer && config.mode === 'development') {
      const { I18NextHMRPlugin } = require('i18next-hmr/plugin');
      config.plugins.push(
        new I18NextHMRPlugin({
          localesDir: path.resolve(__dirname, 'public/static/locales')
        })
      );
    }

    return config;
  }
});
