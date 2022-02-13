import { FunctionComponent } from 'react'
import { HeadSetup } from '@ntadej/style'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import useTranslation from 'next-translate/useTranslation'

type Props = {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => {
  const { t } = useTranslation('common')

  return (
    <div>
      <HeadSetup title={title} siteTitle={t('vremenar')} siteColor="#FFDB4F" />
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
