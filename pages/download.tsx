import { NextPage } from 'next'
import Layout from 'components/Layout'
import { Section } from '@tano/common'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'
import { testingVersion } from '../constants'

type Props = WithTranslation

const Download: NextPage<Props> = ({ t }) => (
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
            All downloads
          </a>
        </div>
      </div>
      <p className="has-text-centered">
        <i>{t('download-experimental')}</i>
      </p>
    </Section>
  </Layout>
)

Download.getInitialProps = async (): Promise<any> => ({
  namespacesRequired: ['common'],
})

export default i18n.withTranslation('common')(Download)
