import { NextPage } from 'next'
import { Section } from '@tano/common'
import { testingVersion } from 'common/constants'
import Layout from 'components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Download: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('download')}>
      <Section
        title={t('download') + ' Vremenar v' + testingVersion}
        subtitle={t('download-platform')}
      >
        <div className="columns">
          <div className="column has-text-centered">
            <a
              href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}.dmg`}
              className="button is-large is-primary"
            >
              macOS
            </a>
          </div>
          <div className="column has-text-centered">
            <a
              href={`https://github.com/ntadej/Vremenar/releases/download/v${testingVersion}/Vremenar_${testingVersion}.apk`}
              className="button is-large is-primary"
            >
              Android & Android TV
            </a>
          </div>
          <div className="column has-text-centered">
            <a
              href={`https://github.com/ntadej/Vremenar/releases/tag/v${testingVersion}`}
              className="button is-large is-primary"
            >
              {t('download-all')}
            </a>
          </div>
        </div>
        <p className="has-text-centered">
          <i>{t('download-experimental')}</i>
        </p>
      </Section>
    </Layout>
  )
}

export default Download
