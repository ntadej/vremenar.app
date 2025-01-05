import { getMetadata } from '@/i18n/helpers'
import { Content, Section } from '@ntadej/style'
import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<{ title: string }> {
  return getMetadata(params, 'terms')
}

export default async function Terms({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('terms')

  return (
    <Section title={t('terms')} subtitle="">
      <Content fullWidth={true}>
        <p>{t('general')}</p>
        <p>{t('unpredictable')}</p>
        <p>{t('liability')}</p>
        <p>{t('availability')}</p>
      </Content>
    </Section>
  )
}
