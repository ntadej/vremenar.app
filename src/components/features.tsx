import clsx from 'clsx'
import { ReactNode } from 'react'

export default function FeatureBlock({
  children,
  title,
  subtitle,
}: {
  children: ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <div className="grid dark:text-black md:grid-cols-2">
      <section
        className={clsx(
          'flex grow flex-col justify-center',
          'p-12 lg:p-24',
          'bg-gradient-to-r from-special2 to-special1 dark:from-special1 dark:to-special2',
          'text-right',
        )}
      >
        <p className="mb-2 text-3xl font-bold opacity-70 small-caps lg:text-4xl">
          {title}
        </p>
        {subtitle && <p className="mb-12 text-lg opacity-70 lg:text-xl">{subtitle}</p>}
      </section>
      <section className={clsx('flex flex-col justify-center', 'p-8 lg:p-12')}>
        {children}
      </section>
    </div>
  )
}
