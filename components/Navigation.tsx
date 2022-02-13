import { FunctionComponent, createRef } from 'react'
import { locale } from 'common/locale'
import { useRouter } from 'next/router'
import Link from 'next/link'
import NavItems from 'components/NavItems'
import useTranslation from 'next-translate/useTranslation'

const Navigation: FunctionComponent = () => {
  const { t } = useTranslation('common')
  const router = useRouter()
  const burger = createRef<HTMLDivElement>()
  const nav = createRef<HTMLDivElement>()

  function burgerClicked() {
    if (burger.current) {
      burger.current.classList.toggle('is-active')
    }
    if (nav.current) {
      nav.current.classList.toggle('is-active')
    }
  }

  return (
    <nav
      className="navbar navbar-primary is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item is-brand">
              <span className="logo"></span>
              {t('vremenar')}
            </a>
          </Link>

          <div ref={burger} className="burger navbar-burger" onClick={burgerClicked}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div ref={nav} className="navbar-menu">
          <NavItems />
        </div>

        <div className="navbar-end is-hidden-touch">
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">{locale[router.locale || 'en']}</a>

            <div className="navbar-dropdown is-right">
              <Link href={router.asPath} locale="en">
                <a className="navbar-item">English</a>
              </Link>
              <Link href={router.asPath} locale="de">
                <a className="navbar-item">Deutsch</a>
              </Link>
              <Link href={router.asPath} locale="sl">
                <a className="navbar-item">Slovenščina</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
