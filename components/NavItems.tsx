import { FunctionComponent } from 'react'
import Link from 'components/LinkI18n'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'

interface Props extends WithTranslation { }

const NavItems: FunctionComponent<Props> = ({ t }) => (
  <div className="navbar-start">
    <Link href="/about">
      <a className="navbar-item">
        {t('about')}
      </a>
    </Link>
    <Link href="/download">
      <a className="navbar-item">
        {t('download')}
      </a>
    </Link>
  </div>
)

export default i18n.withTranslation('common')(NavItems)
