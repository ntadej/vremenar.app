import { FunctionComponent } from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

const NavItems: FunctionComponent = () => {
  const { t } = useTranslation('common')

  return (
    <div className="navbar-start">
      {/* <Link href="/about">
      <a className="navbar-item">
        {t('about')}
      </a>
    </Link> */}
      <Link href="/download">
        <a className="navbar-item">{t('download')}</a>
      </Link>
    </div>
  )
}

export default NavItems
