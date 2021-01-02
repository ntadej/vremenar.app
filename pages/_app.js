import App from 'next/app'
import { appWithTranslation } from 'i18n'
import 'style/main.sass'

const MainApp = ({ Component, pageProps }) => <Component {...pageProps} />

MainApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MainApp)
