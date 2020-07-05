const NextI18Next = require('next-i18next').default;

const nextI18Next = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['sl'],
  browserLanguageDetection: true,

  localeSubpaths: {
    'en': 'en',
    'sl': 'sl'
  }
})

const initHMR = async () => {
  const { applyClientHMR } = require('i18next-hmr');
  await nextI18Next.initPromise;
  applyClientHMR(nextI18Next.i18n)
}

if (process.env.NODE_ENV !== 'production') {
  initHMR()
}

module.exports = nextI18Next;
