import { Link } from '@/i18n/routing'
import { Footer as FooterBase } from '@ntadej/style'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

function FooterLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link
      href={href}
      className={clsx(
        'mx-2 text-sm text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300',
        'transition-colors duration-300',
      )}
    >
      {children}
    </Link>
  )
}

export default function Footer() {
  const t = useTranslations('common')

  return (
    <FooterBase extra={t('legal')} onlyCurrentYear>
      <FooterLink href="/download">{t('download')}</FooterLink>
      <FooterLink href="/terms">{t('terms')}</FooterLink>
      <FooterLink href="/privacy">{t('privacy')}</FooterLink>
    </FooterBase>
  )
}
