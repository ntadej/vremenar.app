import { NextPage } from 'next';
import Layout from 'components/Layout'
import { Section } from '@tano/common'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'

interface Props extends WithTranslation { }

const Privacy: NextPage<Props> = ({ t }) => (
  <Layout title={t('privacy-policy')}>
    <Section title={t('privacy-policy')} subtitle="">

    </Section>
  </Layout>
)

Privacy.getInitialProps = async (): Promise<any> => ({
  namespacesRequired: ['common', 'privacy']
})

export default i18n.withTranslation('privacy')(Privacy)
