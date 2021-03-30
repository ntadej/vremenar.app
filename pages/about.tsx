import { NextPage } from 'next'
import Layout from 'components/Layout'
import { Section } from '@tano/common'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'

type Props = WithTranslation

const About: NextPage<Props> = ({ t }) => (
  <Layout title={t('about')}>
    <Section title={t('about')} subtitle=""></Section>
  </Layout>
)

About.getInitialProps = async (): Promise<any> => ({
  namespacesRequired: ['common'],
})

export default i18n.withTranslation('common')(About)
