import { NextPage } from 'next'
import { Section } from '@ntadej/style'
import Layout from 'components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Privacy: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('privacy')}>
      <Section title={t('privacy')} subtitle="">
        <p>{t('privacy:analytics')}</p>
        <p>{t('privacy:location')}</p>
      </Section>
    </Layout>
  )
}

export default Privacy
