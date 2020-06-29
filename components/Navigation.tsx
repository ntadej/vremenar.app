import { FunctionComponent } from 'react'
import { Link } from '@tano/common'
import NavItems from 'components/NavItems'

const Navigation: FunctionComponent = () => (
  <nav className="navbar navbar-primary is-primary" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item is-brand"></a>
        </Link>

        <div className="burger navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu">
        <NavItems />
      </div>

    </div>
  </nav>
)

export default Navigation
