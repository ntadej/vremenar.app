'use client'
// TODO: Implement the language switcher as a component
import { availableLocales } from '@/i18n/common'
import { usePathname, useRouter } from '@/i18n/routing'
import { ActionButton, Section } from '@ntadej/style'
import { useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export default function Language() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = useLocale() as string
  const t = useTranslations('common')

  function onLocaleChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale },
    )
  }

  return (
    <Section title={t('language')} subtitle="">
      <div className="text-center">
        {availableLocales.map((locale) => (
          <p key={locale.id} className="mb-2">
            <ActionButton
              onClick={() => onLocaleChange(locale.id)}
              disabled={locale.id === currentLocale}
            >
              {locale.name}
            </ActionButton>
          </p>
        ))}
      </div>
    </Section>
  )
}
