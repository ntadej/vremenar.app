import { RootLayout, rootMetadata } from '@ntadej/style'
import { Metadata } from 'next'

import '@/style/main.css'

// TODO: localised?

export default async function BaseLayout({ children }: { children: React.ReactNode }) {
  return <RootLayout locale="en">{children}</RootLayout>
}

export const metadata: Metadata = rootMetadata
