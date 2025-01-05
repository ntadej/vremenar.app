import FeatureBlock from '@/components/features'
import Footer from '@/components/footer'
import { Link } from '@/i18n/routing'
import { GitHubCorner, LinkButton } from '@ntadej/style'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
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

export default function Home() {
  const locale = useLocale()
  const c = useTranslations('common')
  const t = useTranslations('features')
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
    <div>
      <div className="grid md:grid-cols-2">
        <section
          className={clsx(
            'flex grow flex-col justify-center',
            'p-12 lg:p-24',
            'bg-gradient-to-r from-special2 to-special1',
            'text-right',
          )}
        >
          <GitHubCorner href="https://github.com/ntadej/Vremenar" />

          <p className="mb-2 text-5xl font-bold opacity-70 small-caps">
            {c('vremenar')}
          </p>
          <p className="mb-8 text-2xl font-medium opacity-70">{c('tagline')}</p>

          <p className="mb-8">
            <LinkButton href="/download" linkType={Link}>
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
        <p className="is-plain has-text-centered">
          <LinkButton href="/download" linkType={Link}>
            {c('download-allcaps')}
          </LinkButton>
        </p>
      </FeatureBlock>

      <Footer />
    </div>
  )
}
