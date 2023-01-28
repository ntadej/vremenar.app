import { Footer as FooterBase } from '@ntadej/style'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Footer: FunctionComponent = () => {
  const { t } = useTranslation('common')

  return (
    <FooterBase extra={t('legal')} onlyCurrentYear>
      <Link href="/download">{t('download')}</Link>
      {/* <Link href="/about">
      <a>{t('about')}</a>
    </Link> */}
      <Link href="/terms">{t('terms')}</Link>
      <Link href="/privacy">{t('privacy')}</Link>
    </FooterBase>
  )
}

export default Footer
