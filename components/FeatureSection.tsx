import { FunctionComponent } from 'react'

type Props = {
  title: string
  subtitle?: string
  hasText?: boolean
}

const Layout: FunctionComponent<Props> = ({ children, title, subtitle, hasText }) => (
  <div className="tile is-ancestor features">
    <div className="tile is-parent is-6">
      <section className="tile hero is-primary has-gradient">
        <div className="hero-body">
          <p className="title">{title}</p>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
      </section>
    </div>
    <div className="tile is-parent is-6">
      <section
        className={
          'tile section is-vertical is-vertical-centered' + (hasText ? ' has-text' : '')
        }
      >
        {children}
      </section>
    </div>
  </div>
)

export default Layout
