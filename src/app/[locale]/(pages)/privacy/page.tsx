import { Content, Section } from '@ntadej/style'
import { Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'

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
