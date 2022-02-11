import { NextPage } from 'next'
import { Section } from '@ntadej/style'
import Layout from 'components/Layout'
import useTranslation from 'next-translate/useTranslation'

const About: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <Layout title={t('about')}>
      <Section title={t('about')} subtitle=""></Section>
    </Layout>
  )
}

export default About
