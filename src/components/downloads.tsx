import { testingVersion } from '@/constants'
import { Link } from '@ntadej/style'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

export function DownloadBlock({
  children,
  title,
  href,
  alsoOnGithub,
}: {
  children: ReactNode
  title: string
  href?: string
  alsoOnGithub?: boolean
}) {
  const t = useTranslations('download')

  return (
    <div className="mb-4">
      <h2 className="mb-2 mt-2 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
        {title}
      </h2>
      {href ? (
        <p className="mb-2">
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        </p>
      ) : (
        children
      )}
      {alsoOnGithub && (
        <p>
          {t.rich('also-on', {
            github: (chunks: string) => (
              <Link
                href={`https://github.com/ntadej/Vremenar/releases/v${testingVersion}`}
                target="_blank"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      )}
    </div>
  )
}
