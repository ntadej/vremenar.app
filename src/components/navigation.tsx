'use client'

import { availableLocales } from '@/i18n/common'
import { Link, usePathname, useRouter } from '@/i18n/routing'
import {
  NavigationControls as NavigationControlsCore,
  Navigation as NavigationCore,
} from '@ntadej/style'
import type { LocaleSetup } from '@ntadej/style/types'
import { useLocale, useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

export function Navigation({ controlsOnly }: { controlsOnly?: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const locale = useLocale() as string
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

  const localeSetup: LocaleSetup = {
    current: locale,
    available: availableLocales,
    callback: onLocaleChange,
  }

  if (controlsOnly) {
    return <NavigationControlsCore localeSetup={localeSetup} />
  }

  const navigation = [
    { name: t('features'), href: '/' },
    { name: t('download'), href: '/download' },
  ]

  return (
    <NavigationCore
      title={t('vremenar')}
      items={navigation}
      linkType={Link}
      localeSetup={localeSetup}
    />
  )
}
