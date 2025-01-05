import { getMetadata } from '@/i18n/helpers'
import { Content, Section } from '@ntadej/style'
import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<{ title: string }> {
  return getMetadata(params, 'privacy')
}

export default async function Privacy({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  // Enable static rendering
  setRequestLocale(locale)

  const t = await getTranslations('privacy')

  return (
    <Section title={t('privacy')} subtitle="">
      <Content fullWidth={true}>
        <p>{t('analytics')}</p>
        <p>{t('location')}</p>
      </Content>
    </Section>
  )
}
