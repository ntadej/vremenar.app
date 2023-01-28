import { NextPage } from 'next'
import { Section } from '@ntadej/style'
import type { StaticImageData } from 'next/image'
import { testingVersion, testingBuild } from 'common/constants'
import Image from 'next/legacy/image'
import Layout from 'components/Layout'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'

import amazonAppStoreBadge_en from '../resources/badges/amazon-appstore_en.png'
import amazonAppStoreBadge_de from '../resources/badges/amazon-appstore_de.png'

import appStoreBadge_en from '../resources/badges/apple-app-store_en.svg'
import appStoreBadge_de from '../resources/badges/apple-app-store_de.svg'
import appStoreBadge_sl from '../resources/badges/apple-app-store_sl.svg'

import flathubBadge_en from '../resources/badges/flathub_en.svg'

import githubBadge_en from '../resources/badges/github_en.svg'
import githubBadge_de from '../resources/badges/github_de.svg'
import githubBadge_sl from '../resources/badges/github_sl.svg'

import googlePlayBadge_en from '../resources/badges/google-play_en.png'
import googlePlayBadge_de from '../resources/badges/google-play_de.png'
import googlePlayBadge_sl from '../resources/badges/google-play_sl.png'

import macAppStoreBadge_en from '../resources/badges/apple-mac-app-store_en.svg'
import macAppStoreBadge_de from '../resources/badges/apple-mac-app-store_de.svg'
import macAppStoreBadge_sl from '../resources/badges/apple-mac-app-store_sl.svg'

const Download: NextPage = () => {
  const { t, lang } = useTranslation('common')

  const macAppStoreBadge: { [id: string]: any } = {
    en: macAppStoreBadge_en,
    de: macAppStoreBadge_de,
    sl: macAppStoreBadge_sl,
  }

  const flathubBadge: { [id: string]: any } = {
    en: flathubBadge_en,
    de: flathubBadge_en,
    sl: flathubBadge_en,
  }

  const appStoreBadge: { [id: string]: any } = {
    en: appStoreBadge_en,
    de: appStoreBadge_de,
    sl: appStoreBadge_sl,
  }

  const googlePlayBadge: { [id: string]: StaticImageData } = {
    en: googlePlayBadge_en,
    de: googlePlayBadge_de,
    sl: googlePlayBadge_sl,
  }

  const amazonAppStoreBadge: { [id: string]: StaticImageData } = {
    en: amazonAppStoreBadge_en,
    de: amazonAppStoreBadge_de,
    sl: amazonAppStoreBadge_en,
  }

  const githubBadge: { [id: string]: any } = {
    en: githubBadge_en,
    de: githubBadge_de,
    sl: githubBadge_sl,
  }

  const AvailableAlsoOnGithub = (
    <p className="narrow">
      <Trans
        i18nKey="download:also-on"
        components={{
          a: (
            <a
              href={`https://github.com/ntadej/Vremenar/releases/v${testingVersion}`}
            />
          ),
        }}
        values={{
          site: t('download:also-on-github'),
        }}
      />
    </p>
  )

  return (
    <Layout title={t('download')}>
      <Section
        title={t('download:download', { version: testingVersion })}
        subtitle={t('download:platform')}
      >
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <h3>macOS</h3>
            <p className="narrow badge">
              <a href="https://apps.apple.com/us/app/vremenar-weather/id1605380775#?platform=mac">
                <Image
                  alt={t('download:badge-mac-app-store')}
                  src={macAppStoreBadge[lang]}
                  // original 156x40
                  width="224"
                  height="58"
                />
              </a>
            </p>
            {AvailableAlsoOnGithub}
          </div>
          <div className="column is-one-third has-text-centered">
            <h3>Linux</h3>
            <p className="narrow badge">
              <a href="https://flathub.org/apps/details/si.tano.Vremenar">
                <Image
                  alt={t('download:badge-flathub')}
                  src={flathubBadge[lang]}
                  // original 600x200
                  width="224"
                  height="75"
                />
              </a>
            </p>
            {AvailableAlsoOnGithub}
          </div>
          <div className="column is-one-third has-text-centered">
            <h3>Windows</h3>
            <p className="narrow badge">
              <a
                href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}_win64.exe`}
              >
                <Image
                  alt={t('download:badge-github')}
                  src={githubBadge[lang]}
                  // original 564x168
                  width="224"
                  height="67"
                />
              </a>
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third has-text-centered">
            <h3>iOS</h3>
            <p className="narrow badge">
              <a href="https://apps.apple.com/us/app/vremenar-weather/id1605380775#?platform=iphone">
                <Image
                  alt={t('download:badge-app-store')}
                  src={appStoreBadge[lang]}
                  // original 120x40
                  width="174"
                  height="58"
                />
              </a>
            </p>
          </div>
          <div className="column is-one-third has-text-centered">
            <h3>Android &amp; Android TV</h3>
            <p className="narrow badge google">
              <a
                href={`https://play.google.com/store/apps/details?id=si.tano.Vremenar&hl=${lang}&utm_source=Website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
              >
                <Image
                  alt={t('download:badge-google-play')}
                  src={googlePlayBadge[lang]}
                  // original 646x250
                  width="256"
                  height="100"
                />
              </a>
            </p>
            <p className="narrow badge google">
              <a href="https://www.amazon.com/gp/product/B093Z72DBC/ref=mas_pm_vremenar_weather">
                <Image
                  alt={t('download:badge-amazon-app-store')}
                  src={amazonAppStoreBadge[lang]}
                  // original 572x168
                  width="224"
                  height="66"
                />
              </a>
            </p>
            {AvailableAlsoOnGithub}
          </div>
          <div className="column is-one-third has-text-centered">
            <h3>{t('download:all')}</h3>
            <p className="narrow badge">
              <a
                href={`https://github.com/ntadej/Vremenar/releases/v${testingVersion}`}
              >
                <Image
                  alt={t('download:badge-github')}
                  src={githubBadge[lang]}
                  // original 564x168
                  width="224"
                  height="67"
                />
              </a>
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default Download
