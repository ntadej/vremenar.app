import { FunctionComponent } from 'react'
import { locale } from 'common/locale'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const NavItems: FunctionComponent = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className="navbar-start">
      <Link href="/">
        <a className="navbar-item">{t('features')}</a>
      </Link>
      <Link href="/download">
        <a className="navbar-item">{t('download')}</a>
      </Link>
      <Link href="/language">
        <a className="navbar-item is-hidden-desktop">
          {t('language')} ({locale[router.locale || 'en']})
        </a>
      </Link>
    </div>
  )
}

export default NavItems
