import { Link } from '@/i18n/routing'
import { ActionButton, LinkButton } from '@ntadej/style'
import clsx from 'clsx'
import { ComponentProps, ReactNode } from 'react'

export function ActionButtonStyled({
  children,
  disabled,
  ...rest
}: ComponentProps<typeof ActionButton>) {
  return (
    <div>
      <ActionButton
        disabled={disabled}
        colors={clsx(
          'bg-special1 dark:bg-special2 text-zinc-950',
          !disabled && 'hover:bg-special2 dark:hover:bg-special1',
        )}
        {...rest}
      >
        {children}
      </ActionButton>
    </div>
  )
}

export function LinkButtonStyled({
  children,
  href,
  text,
}: {
  children: ReactNode
  href: string
  text?: string
}) {
  return (
    <LinkButton
      href={href}
      linkType={Link}
      text={text}
      colors="bg-special1 dark:bg-special2 text-zinc-950 hover:bg-special2 dark:hover:bg-special1"
    >
      {children}
    </LinkButton>
  )
}
