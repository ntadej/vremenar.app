import { HeadSetup, GitHubCorner } from '@tano/common'
import { NextPage } from 'next'
import { testingVersion } from 'common/constants'
import Footer from 'components/Footer'
import Link from 'next/link'
import LocaleDropdown from 'components/LocaleDropdown'
import useTranslation from 'next-translate/useTranslation'

const Home: NextPage = () => {
  const { t } = useTranslation('common')

  return (
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
                <p className="is-size-4">{t('tagline')}</p>
                <Link href="/download">
                  <a className="button is-large is-primary is-inverted">
                    {t('download')} v{testingVersion}
                  </a>
                </Link>

                <p></p>

                <div className="tabs has-text-centered-mobile">
                  <ul>
                    {/* <li>
                    {t('no-stable')}
                  </li> */}
                    <li>
                      <a href="https://github.com/ntadej/Vremenar">{t('github')}</a>
                    </li>
                    <li>
                      <Link href="/license">
                        <a>{t('license')}</a>
                      </Link>
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
}

export default Home
