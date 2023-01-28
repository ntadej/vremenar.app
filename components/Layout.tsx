import { FunctionComponent, ReactNode } from 'react'
import { HeadSetup } from '@ntadej/style'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  children: ReactNode
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  const { t } = useTranslation('common')

  return (
    <div>
      <HeadSetup title={title} siteName={t('vremenar')} />
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
