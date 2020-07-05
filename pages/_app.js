import App from 'next/app'
import i18n from 'i18n'
import 'style/main.sass'

// This default export is required in a new `pages/_app.js` file.
function MainApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MainApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default i18n.appWithTranslation(MainApp)
