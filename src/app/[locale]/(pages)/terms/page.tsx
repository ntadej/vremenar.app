import { Content, Section } from '@ntadej/style'
import { useTranslations } from 'next-intl'

export default function Terms() {
  const t = useTranslations('terms')

  return (
    <Section title={t('terms')} subtitle="">
      <Content fullWidth={true}>
        <p>{t('general')}</p>
        <p>{t('unpredictable')}</p>
        <p>{t('liability')}</p>
        <p>{t('availability')}</p>
      </Content>
    </Section>
  )
}
