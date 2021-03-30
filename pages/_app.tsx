import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import { appWithTranslation } from 'i18n'
import 'style/main.sass'

const MainApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
)

MainApp.getInitialProps = async (appContext: AppContext) => ({
  ...(await App.getInitialProps(appContext)),
})

export default appWithTranslation(MainApp)
