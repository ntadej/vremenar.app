import { FunctionComponent } from 'react'
import { Footer as FooterBase } from '@tano/common'
import i18n from 'i18n'
import { WithTranslation } from 'next-i18next'

interface Props extends WithTranslation { }

const Footer: FunctionComponent<Props> = ({ t }) => (
  <FooterBase>
    <i18n.Link href="/download">
      <a>{t('download')}</a>
    </i18n.Link>
    <i18n.Link href="/about">
      <a>{t('about')}</a>
    </i18n.Link>
    <i18n.Link href="/terms">
      <a>{t('terms')}</a>
    </i18n.Link>
    <i18n.Link href="/privacy">
      <a>{t('privacy')}</a>
    </i18n.Link>
  </FooterBase>
)

export default i18n.withTranslation('common')(Footer)
