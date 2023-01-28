import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'

import 'style/main.sass'

const MainApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
)

export default MainApp
