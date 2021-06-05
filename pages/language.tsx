import { NextPage } from 'next'
import { Section } from '@tano/common'
import { useRouter } from 'next/router'
import Layout from 'components/Layout'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Language: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <Layout title={t('language')}>
      <Section title={t('language')} subtitle="">
        <div className="has-text-centered">
          <p>
            <Link href={router.asPath} locale="en">
              <a
                className={
                  'button is-large' + (router.locale == 'en' ? ' is-active' : '')
                }
              >
                English
              </a>
            </Link>
          </p>
          <p>
            <Link href={router.asPath} locale="sl">
              <a
                className={
                  'button is-large' + (router.locale == 'sl' ? ' is-active' : '')
                }
              >
                Slovenščina
              </a>
            </Link>
          </p>
        </div>
      </Section>
    </Layout>
  )
}

export default Language
