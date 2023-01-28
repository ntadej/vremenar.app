import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const NavItems: FunctionComponent = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className="navbar-start">
      <Link href="/" className="navbar-item">
        {t('features')}
      </Link>
      <Link href="/download" className="navbar-item">
        {t('download')}
      </Link>
      <Link href="/language" className="navbar-item is-hidden-desktop">
        {t('language')}({router.locale == 'en' ? 'English' : 'Slovenščina'})
      </Link>
    </div>
  )
}

export default NavItems
