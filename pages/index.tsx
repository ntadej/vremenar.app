import { NextPage } from 'next'
import { HeadSetup, GitHubCorner } from '@tano/common'
import Footer from 'components/Footer'
import LocaleDropdown from 'components/LocaleDropdown'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'
import { testingVersion } from '../constants'

type Props = WithTranslation

const Home: NextPage<Props> = ({ t }) => (
  <div>
    <HeadSetup title="" siteTitle="Vremenar" siteColor="#FFDB4F" />
    <section className="hero is-home is-primary is-fullheight has-gradient">
      <GitHubCorner href="https://github.com/ntadej/Vremenar" />

      <div className="hero-head has-text-right">
        <LocaleDropdown />
      </div>

      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5">
              <div className="logo-huge"></div>
            </div>
            <div className="column has-text-centered-mobile">
              <h1>Vremenar</h1>
              <i18n.Link href="/download">
                <a className="button is-large is-primary is-inverted">
                  {t('download')} v{testingVersion}
                </a>
              </i18n.Link>

              <p></p>

              <div className="tabs has-text-centered-mobile">
                <ul>
                  {/* <li>
                    {t('no-stable')}
                  </li> */}
                  <li>
                    <a href="https://github.com/ntadej/Vremenar">
                      {t('github')}
                    </a>
                  </li>
                  <li>
                    <i18n.Link href="/license">
                      <a>{t('license')}</a>
                    </i18n.Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-foot">
        <nav className="tabs">
          <div className="hero-foot-container">
            <ul>
              {/* <li><a href="#features" className="smooth-scroll"><i className="fa fa-angle-down"></i>&nbsp;{t('scroll-for-more')}&nbsp;<i className="fa fa-angle-down"></i></a></li> */}
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <Footer />
  </div>
)

Home.getInitialProps = async (): Promise<any> => ({
  namespacesRequired: ['common'],
})

export default i18n.withTranslation('common')(Home)
