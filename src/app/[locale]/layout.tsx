import { routing } from '@/i18n/routing'
import { RootLayout, rootMetadata } from '@ntadej/style'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'

import '@/style/main.css'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <RootLayout locale={locale}>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </RootLayout>
  )
}

export const metadata: Metadata = rootMetadata
