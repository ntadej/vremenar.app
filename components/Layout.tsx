import { FunctionComponent } from 'react'
import { HeadSetup } from '@tano/common'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'

type Props = {
  title: string
}

const Layout: FunctionComponent<Props> = ({ children, title }) => (
  <div>
    <HeadSetup title={title} siteTitle="Vremenar" siteColor="#FFDB4F" />
    <Navigation />
    {children}
    <Footer />
  </div>
)

export default Layout
