/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { Section } from '@ntadej/style'
import { testingVersion, testingBuild } from 'common/constants'
import Layout from 'components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Download: NextPage = () => {
  const { t, lang } = useTranslation('common')

  return (
    <Layout title={t('download')}>
      <Section
        title={t('download') + ' Vremenar v' + testingVersion}
        subtitle={t('download:platform')}
      >
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <h2>macOS</h2>
            <p className="narrow">
              <a
                href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}.dmg`}
              >
                <img
                  alt="Get it on GitHub"
                  src="/assets/misc/get-it-on-github.png"
                  className="badge google first"
                />
              </a>
            </p>
          </div>
          <div className="column is-one-third has-text-centered">
            <h2>Linux</h2>
            <p className="narrow">
              <a href="https://flathub.org/apps/details/si.tano.Vremenar">
                <img
                  alt="Download on Flathub"
                  src="https://flathub.org/assets/badges/flathub-badge-en.png"
                  className="badge"
                />
              </a>
            </p>
            <p className="narrow">
              <a
                href={`https://github.com/ntadej/Vremenar/releases/v${testingVersion}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="Get it on GitHub"
                  src="/assets/misc/get-it-on-github.png"
                  className="badge google"
                />
              </a>
            </p>
          </div>
          <div className="column is-one-third has-text-centered">
            <h2>Windows</h2>
            <p>{t('download:soon')}</p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <h2>Android &amp; Android TV</h2>
            <p className="narrow">
              <a
                href={`https://play.google.com/store/apps/details?id=si.tano.Vremenar&hl=${lang}&utm_source=Website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
              >
                <img
                  alt="Get it on Google Play"
                  src={`https://play.google.com/intl/en_us/badges/static/images/badges/${lang}_badge_web_generic.png`}
                  className="badge google first"
                />
              </a>
            </p>
            <p className="narrow">
              <a href="https://www.amazon.com/gp/product/B093Z72DBC/ref=mas_pm_vremenar_weather">
                <img
                  alt="Available at Amazon Appstore"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/mobile-apps/devportal2/res/images/amazon-appstore-badge-english-black.png"
                  className="badge"
                />
              </a>
            </p>
            <p className="narrow">
              <a
                href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}_${testingBuild}.apk`}
              >
                <img
                  alt="Get it on GitHub"
                  src="/assets/misc/get-it-on-github.png"
                  className="badge google"
                />
              </a>
            </p>
          </div>
          <div className="column is-one-third has-text-centered">
            <h2>iOS</h2>
            <p className="narrow">
              <a
                href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}.ipa`}
              >
                <img
                  alt="Get it on GitHub"
                  src="/assets/misc/get-it-on-github.png"
                  className="badge google first"
                />
              </a>
            </p>
            <p>
              {t('download:ios-sideload')} {t('download:ios-sideload-is-recommended')}{' '}
              <a href="https://altstore.io/" target="_blank" rel="noreferrer">
                AltStore
              </a>
              .
            </p>
          </div>
          <div className="column is-one-third has-text-centered">
            <h2>{t('download:all')}</h2>
            <a href={`https://github.com/ntadej/Vremenar/releases/v${testingVersion}`}>
              <img
                alt="Get it on GitHub"
                src="/assets/misc/get-it-on-github.png"
                className="badge google first"
              />
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Download
