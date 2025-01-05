import { Locale } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function getMetadata(
  params: Promise<{ locale: Locale }>,
  key: string,
  custom?: boolean,
) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'common' })

  return {
    // @ts-expect-error upstream bug?
    title: custom ? `${key} - ${t('vremenar')}` : `${t(key)} - ${t('vremenar')}`,
  }
}
