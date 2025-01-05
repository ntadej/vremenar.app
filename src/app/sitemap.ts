import { host } from '@/config'
import { getPathname, routing } from '@/i18n/routing'
import { MetadataRoute } from 'next'
import { Locale } from 'next-intl'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry('/'),
    getEntry('/download'),
    getEntry('/license'),
    getEntry('/license/gpl'),
    getEntry('/license/mpl'),
    getEntry('/privacy'),
    getEntry('/terms'),
  ]
}

type Href = Parameters<typeof getPathname>[0]['href']

function getEntry(href: Href) {
  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)]),
      ),
    },
  }
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href })
  return host + pathname
}
