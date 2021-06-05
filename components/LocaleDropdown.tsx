import { FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LocaleDropdown: FunctionComponent = () => {
  const router = useRouter()

  return (
    <nav
      className="navbar navbar-primary is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-end is-hidden-mobile">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link is-arrowless">
            {router.locale == 'en' ? 'English' : 'Slovenščina'}
          </a>

          <div className="navbar-dropdown is-right">
            <Link href={router.asPath} locale="en">
              <a className="navbar-item">English</a>
            </Link>
            <Link href={router.asPath} locale="sl">
              <a className="navbar-item">Slovenščina</a>
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-end is-hidden-desktop">
        <Link href="/language">
          <a className="navbar-item">
            {router.locale == 'en' ? 'English' : 'Slovenščina'}
          </a>
        </Link>
      </div>
    </nav>
  )
}

export default LocaleDropdown
