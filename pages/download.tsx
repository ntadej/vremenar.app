import { NextPage } from 'next';
import Layout from 'components/Layout'
import { Section } from '@tano/common'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'

interface Props extends WithTranslation { }

const Download: NextPage<Props> = ({ t }) => (
  <Layout title={t('download')}>
    <Section title={t('download')} subtitle="">

    </Section>
  </Layout>
)

Download.getInitialProps = async (): Promise<any> => ({
  namespacesRequired: ['common']
})

export default i18n.withTranslation('common')(Download)
