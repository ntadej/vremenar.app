import { DownloadBlock } from '@/components/downloads'
import { testingVersion } from '@/constants'
import { Section } from '@ntadej/style'
import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

import amazonAppStoreBadge_de from '@/resources/badges/amazon-appstore_de.png'
import amazonAppStoreBadge_en from '@/resources/badges/amazon-appstore_en.png'

import appStoreBadge_de from '@/resources/badges/apple-app-store_de.svg'
import appStoreBadge_en from '@/resources/badges/apple-app-store_en.svg'
import appStoreBadge_sl from '@/resources/badges/apple-app-store_sl.svg'

import flathubBadge_en from '@/resources/badges/flathub_en.svg'

import githubBadge_de from '@/resources/badges/github_de.svg'
import githubBadge_en from '@/resources/badges/github_en.svg'
import githubBadge_sl from '@/resources/badges/github_sl.svg'

import googlePlayBadge_de from '@/resources/badges/google-play_de.png'
import googlePlayBadge_en from '@/resources/badges/google-play_en.png'
import googlePlayBadge_sl from '@/resources/badges/google-play_sl.png'

import macAppStoreBadge_de from '@/resources/badges/apple-mac-app-store_de.svg'
import macAppStoreBadge_en from '@/resources/badges/apple-mac-app-store_en.svg'
import macAppStoreBadge_sl from '@/resources/badges/apple-mac-app-store_sl.svg'

export default async function Terms({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('download')

  const macAppStoreBadge = {
    en: macAppStoreBadge_en,
    de: macAppStoreBadge_de,
    sl: macAppStoreBadge_sl,
  }

  const flathubBadge = {
    en: flathubBadge_en,
    de: flathubBadge_en,
    sl: flathubBadge_en,
  }

  const appStoreBadge = {
    en: appStoreBadge_en,
    de: appStoreBadge_de,
    sl: appStoreBadge_sl,
  }

  const googlePlayBadge = {
    en: googlePlayBadge_en,
    de: googlePlayBadge_de,
    sl: googlePlayBadge_sl,
  }

  const amazonAppStoreBadge = {
    en: amazonAppStoreBadge_en,
    de: amazonAppStoreBadge_de,
    sl: amazonAppStoreBadge_en,
  }

  const githubBadge = {
    en: githubBadge_en,
    de: githubBadge_de,
    sl: githubBadge_sl,
  }

  return (
    <Section
      title={t('download', { version: testingVersion })}
      subtitle={t('platform')}
    >
      <div className="grid gap-4 text-center md:grid-cols-3">
        <DownloadBlock
          title="macOS"
          href="https://apps.apple.com/us/app/vremenar-weather/id1605380775#?platform=mac"
          alsoOnGithub={true}
        >
          <Image
            alt={t('badge-mac-app-store')}
            src={macAppStoreBadge[locale]}
            // original 156x40
            width="224"
            height="58"
            className="mx-auto"
          />
        </DownloadBlock>
        <DownloadBlock
          title="Linux"
          href="https://flathub.org/apps/details/si.tano.Vremenar"
          alsoOnGithub={true}
        >
          <Image
            alt={t('badge-flathub')}
            src={flathubBadge[locale]}
            // original 600x200
            width="224"
            height="75"
            className="mx-auto"
          />
        </DownloadBlock>
        <DownloadBlock
          title="Windows"
          href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}_win64.exe`}
        >
          <Image
            alt={t('badge-github')}
            src={githubBadge[locale]}
            // original 564x168
            width="224"
            height="67"
            className="mx-auto"
          />
        </DownloadBlock>

        <DownloadBlock
          title="iOS"
          href="https://apps.apple.com/us/app/vremenar-weather/id1605380775#?platform=iphone"
        >
          <Image
            alt={t('badge-app-store')}
            src={appStoreBadge[locale]}
            // original 120x40
            width="174"
            height="58"
            className="mx-auto"
          />
        </DownloadBlock>
        <DownloadBlock title="Android &amp; Android TV" alsoOnGithub={true}>
          <p className="download-google mb-2">
            <a
              href={`https://play.google.com/store/apps/details?id=si.tano.Vremenar&hl=${locale}&utm_source=Website&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt={t('badge-google-play')}
                src={googlePlayBadge[locale]}
                // original 646x250
                width="256"
                height="100"
                className="mx-auto"
              />
            </a>
          </p>
          <p className="download-google mb-2">
            <a
              href="https://www.amazon.com/gp/product/B093Z72DBC/ref=mas_pm_vremenar_weather"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                alt={t('badge-amazon-app-store')}
                src={amazonAppStoreBadge[locale]}
                // original 572x168
                width="224"
                height="66"
                className="mx-auto"
              />
            </a>
          </p>
        </DownloadBlock>
        <DownloadBlock
          title={t('all')}
          href={`https://github.com/ntadej/Vremenar/releases/v${testingVersion}`}
        >
          <Image
            alt={t('badge-github')}
            src={githubBadge[locale]}
            // original 564x168
            width="224"
            height="67"
            className="mx-auto"
          />
        </DownloadBlock>
      </div>
    </Section>
  )
}
