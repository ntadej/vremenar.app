import { FunctionComponent } from 'react'
import i18n from 'i18n'

const LocaleDropdown: FunctionComponent = () => {
  function toggleLocale(lang: string) {
    i18n.i18n.changeLanguage(lang)
  }

  return (
    <nav
      className="navbar navbar-primary is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      {/* <div className="container"> */}

      <div className="navbar-end">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link is-arrowless">
            {i18n.i18n.language == 'en' ? 'English' : 'Slovenščina'}
          </a>

          <div className="navbar-dropdown is-right">
            <a className="navbar-item" onClick={() => toggleLocale('en')}>
              English
            </a>
            <a className="navbar-item" onClick={() => toggleLocale('sl')}>
              Slovenščina
            </a>
          </div>
        </div>
      </div>

      {/* </div> */}
    </nav>
  )
}

export default LocaleDropdown
