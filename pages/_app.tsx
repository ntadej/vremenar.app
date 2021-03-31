import type { AppProps } from 'next/app'
import 'style/main.sass'

const MainApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MainApp
