import { HeadSetup, GitHubCorner } from '@ntadej/style'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import FeatureSection from 'components/FeatureSection'
import Footer from 'components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import condition_en from '../resources/features/condition_en.png'
import condition_de from '../resources/features/condition_de.png'
import condition_sl from '../resources/features/condition_sl.png'
import precipitation_en from '../resources/features/precipitation_en.png'
import precipitation_de from '../resources/features/precipitation_de.png'
import style_en from '../resources/features/style_en.png'
import style_de from '../resources/features/style_de.png'
import style_sl from '../resources/features/style_sl.png'
import clouds_en from '../resources/features/clouds_en.png'
import clouds_sl from '../resources/features/clouds_sl.png'

const Home: NextPage = () => {
  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const feature_width = 752
  const feature_height = 592

  const condition: { [id: string]: any } = {
    en: condition_en,
    de: condition_de,
    sl: condition_sl,
  }

  const precipitation: { [id: string]: any } = {
    en: precipitation_en,
    de: precipitation_de,
    sl: precipitation_en,
  }

  const style: { [id: string]: any } = {
    en: style_en,
    de: style_de,
    sl: style_sl,
  }

  const clouds: { [id: string]: any } = {
    en: clouds_en,
    de: clouds_en,
    sl: clouds_sl,
  }

  return (
    <div>
      <HeadSetup title="" siteTitle={t('vremenar')} siteColor="#FFDB4F" />

      <div className="tile is-ancestor features">
        <div className="tile is-parent is-6">
          <section className="tile hero is-home is-primary has-gradient">
            <GitHubCorner href="https://github.com/ntadej/Vremenar" />

            <div className="hero-head"></div>

            <div className="hero-body">
              <p className="title">{t('vremenar')}</p>
              <p className="tagline">{t('tagline')}</p>

              <p>
                <Link href="/download">
                  <a className="button is-large is-primary is-inverted">
                    {t('download')}
                  </a>
                </Link>
              </p>

              <p>
                <div className="tags are-special">
                  <span className="tag is-primary">{t('available-for')}</span>
                  <span className="tag is-primary">macOS</span>
                  <span className="tag is-primary">iOS</span>
                  <span className="tag is-primary">Android</span>
                  <span className="tag is-primary">Linux</span>
                  <span className="tag is-primary">Windows</span>
                </div>
              </p>

              <p>
                <div className="tags are-special">
                  <span className="tag is-primary">
                    <a href="https://github.com/ntadej/Vremenar">{t('github')}</a>
                  </span>
                  <span className="tag is-primary">
                    <Link href="/license">
                      <a>{t('license')}</a>
                    </Link>
                  </span>
                  <span className="tag is-primary">
                    <Link href="/language">
                      <a>
                        {t('language')} (
                        {router.locale == 'en' ? 'English' : 'Slovenščina'})
                      </a>
                    </Link>
                  </span>
                </div>
              </p>
            </div>

            <div className="hero-foot"></div>
          </section>
        </div>

        <div className="tile is-parent is-6">
          <section className="tile section is-vertical-centered special-background"></section>
        </div>
      </div>

      <a id="features" />

      <FeatureSection
        title={t('features:conditions')}
        subtitle={t('features:conditions-subtitle')}
      >
        <Image
          alt={t('features:conditions-alt')}
          src={condition[lang]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureSection>

      <FeatureSection
        title={t('features:precipitation')}
        subtitle={t('features:precipitation-subtitle')}
      >
        <Image
          alt={t('features:precipitation-alt')}
          src={precipitation[lang]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureSection>

      <FeatureSection
        title={t('features:styles')}
        subtitle={t('features:styles-subtitle')}
      >
        <Image
          alt={t('features:styles-alt')}
          src={style[lang]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureSection>

      <FeatureSection
        title={t('features:other')}
        subtitle={t('features:other-subtitle')}
      >
        <Image
          alt={t('features:other-alt')}
          src={clouds[lang]}
          width={feature_width}
          height={feature_height}
        />
      </FeatureSection>

      <FeatureSection
        title={t('features:download')}
        subtitle={t('features:download-subtitle')}
        hasText={true}
      >
        <Link href="/download">
          <a className="button is-large is-primary">{t('download-allcaps')}</a>
        </Link>
      </FeatureSection>

      <Footer />
    </div>
  )
}

export default Home
