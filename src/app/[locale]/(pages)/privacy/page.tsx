import { Content, Section } from '@ntadej/style'
import { useTranslations } from 'next-intl'

export default function Privacy() {
  const t = useTranslations('privacy')

  return (
    <Section title={t('privacy')} subtitle="">
      <Content fullWidth={true}>
        <p>{t('analytics')}</p>
        <p>{t('location')}</p>
      </Content>
    </Section>
  )
}
