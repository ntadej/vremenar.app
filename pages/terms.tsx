import { NextPage } from 'next'
import { Section } from '@tano/common'
import Layout from 'components/Layout'
import useTranslation from 'next-translate/useTranslation'

const Terms: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('terms')}>
      <Section title={t('terms')} subtitle="">
        <p>{t('terms:general')}</p>
        <p>{t('terms:unpredictable')}</p>
        <p>{t('terms:liability')}</p>
        <p>{t('terms:availability')}</p>
      </Section>
    </Layout>
  )
}

export default Terms
