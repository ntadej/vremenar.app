import { FunctionComponent, createRef } from 'react'
import Link from 'next/link'
import i18n from 'i18n'
import NavItems from 'components/NavItems'

const Navigation: FunctionComponent = () => {
  let burger = createRef<HTMLDivElement>()
  let nav = createRef<HTMLDivElement>()

  function burgerClicked() {
    if (burger.current) {
      burger.current.classList.toggle('is-active')
    }
    if (nav.current) {
      nav.current.classList.toggle('is-active')
    }
  }

  function toggleLocale() {
    i18n.i18n.changeLanguage(i18n.i18n.language === 'en' ? 'sl' : 'en')
  }

  return (
    <nav className="navbar navbar-primary is-primary" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <i18n.Link href="/">
            <a className="navbar-item is-brand"><span className="logo"></span>Vremenar</a>
          </i18n.Link>

          <div ref={burger} className="burger navbar-burger" onClick={burgerClicked}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div ref={nav} className="navbar-menu">
          <NavItems />
        </div>

        <div className="navbar-end">
          <a className="navbar-item" onClick={toggleLocale}>
            Toggle locale
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navigation
