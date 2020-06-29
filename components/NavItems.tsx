import { FunctionComponent } from 'react'
import { Link } from '@tano/common'

const NavItems: FunctionComponent = () => (
  <div className="navbar-start">
    <Link href="/">
      <a className="navbar-item">
        About
    </a>
    </Link>
    <Link href="/download">
      <a className="navbar-item">
        Download
      </a>
    </Link>
  </div>
)

export default NavItems
