import { FunctionComponent, createRef } from 'react'
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
          <Link href="/" passHref className="navbar-item is-brand">
            <span className="logo"></span>
            {t('vremenar')}
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
            <a className="navbar-link is-arrowless">
              {router.locale == 'en' ? 'English' : 'Slovenščina'}
            </a>

            <div className="navbar-dropdown is-right">
              <Link href={router.asPath} locale="en" className="navbar-item">
                English
              </Link>
              <Link href={router.asPath} locale="sl" className="navbar-item">
                Slovenščina
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
