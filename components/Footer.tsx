import { Footer as FooterBase } from '@tano/common'
import { FunctionComponent } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const Footer: FunctionComponent = () => {
  const { t } = useTranslation('common')

  return (
    <FooterBase>
      <Link href="/download">
        <a>{t('download')}</a>
      </Link>
      {/* <Link href="/about">
      <a>{t('about')}</a>
    </Link> */}
      <Link href="/terms">
        <a>{t('terms')}</a>
      </Link>
      <Link href="/privacy">
        <a>{t('privacy')}</a>
      </Link>
    </FooterBase>
  )
}

export default Footer
