import { NextPage } from 'next';
import Layout from 'components/Layout'
import { Section } from '@tano/common'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'

interface Props extends WithTranslation { }

const Terms: NextPage<Props> = ({ t }) => (
  <Layout title={t('terms')}>
    <Section title={t('terms')} subtitle="">
      <p>{t('terms:general')}</p>
      <p>{t('terms:unpredictable')}</p>
      <p>{t('terms:liability')}</p>
      <p>{t('terms:availability')}</p>
    </Section>
  </Layout>
)

Terms.getInitialProps = async (): Promise<any> => ({
  namespacesRequired: ['common', 'terms']
})

export default i18n.withTranslation('common')(Terms)
