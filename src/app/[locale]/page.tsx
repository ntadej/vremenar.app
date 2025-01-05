import { LinkButtonStyled } from '@/components/buttons'
import FeatureBlock from '@/components/features'
import Footer from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { getMetadata } from '@/i18n/helpers'
import { Link } from '@/i18n/routing'
import { GitHubCorner, LinkButton } from '@ntadej/style'
import clsx from 'clsx'
import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

import clouds_en from '@/resources/features/clouds_en.png'
import clouds_sl from '@/resources/features/clouds_sl.png'
import condition_de from '@/resources/features/condition_de.png'
import condition_en from '@/resources/features/condition_en.png'
import condition_sl from '@/resources/features/condition_sl.png'
import precipitation_de from '@/resources/features/precipitation_de.png'
import precipitation_en from '@/resources/features/precipitation_en.png'
import style_de from '@/resources/features/style_de.png'
import style_en from '@/resources/features/style_en.png'
import style_sl from '@/resources/features/style_sl.png'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<{ title: string }> {
  return getMetadata(params, 'title')
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const c = await getTranslations('common')
  const t = await getTranslations('features')
  const feature_width = 752
  const feature_height = 592

  const condition = {
    en: condition_en,
    de: condition_de,
    sl: condition_sl,
  }

  const precipitation = {
    en: precipitation_en,
    de: precipitation_de,
    sl: precipitation_en,
  }

  const style = {
    en: style_en,
    de: style_de,
    sl: style_sl,
  }

  const clouds = {
    en: clouds_en,
    de: clouds_en,
    sl: clouds_sl,
  }

  return (
    <>
      <div className="grid dark:text-black md:grid-cols-2">
        <section
          className={clsx(
            'flex grow flex-col justify-center',
            'p-12 lg:p-24',
            'bg-gradient-to-r from-special2 to-special1 dark:from-special1 dark:to-special2',
            'text-right',
          )}
        >
          <GitHubCorner href="https://github.com/ntadej/Vremenar" />
          <Navigation controlsOnly={true} />

          <p className="mb-2 mt-12 text-5xl font-bold opacity-70 small-caps lg:mt-0">
            {c('vremenar')}
          </p>
          <p className="mb-8 text-2xl font-medium opacity-70">{c('tagline')}</p>

          <p className="mb-12">
            <LinkButton
              href="/download"
              linkType={Link}
              text="text-xl"
              colors="bg-black/50 hover:bg-black/60 text-special1"
            >
              {c('download')}
            </LinkButton>
          </p>

          <div className="mb-6 flex flex-wrap justify-end gap-x-4 gap-y-1 text-base opacity-65">
            <span>{c('available-for')}</span>
            <span>macOS</span>
            <span>iOS</span>
            <span>Android</span>
            <span>Linux</span>
            <span>Windows</span>
          </div>

          <div className="mb-6 flex flex-wrap justify-end gap-x-4 gap-y-1 text-base">
            <span>
              <a
                href="https://github.com/ntadej/Vremenar"
                target="_blank"
                rel="noreferrer"
                className="opacity-60 transition-opacity duration-300 hover:opacity-80"
              >
                {c('github')}
              </a>
            </span>
            <span>
              <Link
                href="/license"
                className="opacity-60 transition-opacity duration-300 hover:opacity-80"
              >
                {c('license')}
              </Link>
            </span>
          </div>
        </section>

        <section className="special-background hidden md:block"></section>
      </div>

      <a id="features" />

      <FeatureBlock title={t('conditions')} subtitle={t('conditions-subtitle')}>
        <Image
          alt={t('conditions-alt')}
          src={condition[locale]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureBlock>

      <FeatureBlock title={t('precipitation')} subtitle={t('precipitation-subtitle')}>
        <Image
          alt={t('precipitation-alt')}
          src={precipitation[locale]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureBlock>

      <FeatureBlock title={t('styles')} subtitle={t('styles-subtitle')}>
        <Image
          alt={t('styles-alt')}
          src={style[locale]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureBlock>

      <FeatureBlock title={t('other')} subtitle={t('other-subtitle')}>
        <Image
          alt={t('other-alt')}
          src={clouds[locale]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureBlock>

      <FeatureBlock title={t('download')} subtitle={t('download-subtitle')}>
        <p className="text-center">
          <LinkButtonStyled href="/download" text="text-2xl">
            {c('download-allcaps')}
          </LinkButtonStyled>
        </p>
      </FeatureBlock>

      <Footer />
    </>
  )
}
