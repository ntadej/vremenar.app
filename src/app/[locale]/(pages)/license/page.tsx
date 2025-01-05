import { Link } from '@/i18n/routing'
import { Content, Section } from '@ntadej/style'

export default function License() {
  return (
    <Section title="License" subtitle="Copyright &copy; 2025 Tadej Novak">
      <Content fullWidth={true}>
        <p>
          Vremenar is free (libre) software. This means that the application source code
          is available to public, anyone is welcome to research how the application
          works, participate in its development, freely distribute the application and
          spread the word!
        </p>

        <p>The project is bi - licensed.</p>

        <h2>GNU General Public License Version 3.0</h2>

        <p>
          This program is free software: you can redistribute it and / or modify it
          under the terms of the GNU General Public License as published by the Free
          Software Foundation, either version 3 of the License, or (at your option) any
          later version.
        </p>

        <p>
          This program is distributed in the hope that it will be useful, but WITHOUT
          ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
          FOR A PARTICULAR PURPOSE. See the{' '}
          <Link href="/license/gpl">GNU General Public License</Link> for more details.
        </p>

        <h2>Mozilla Public License Version 2.0</h2>

        <p>
          This Source Code Form is subject to the terms of the Mozilla Public License,
          v. 2.0, available <Link href="/license/mpl">here</Link>.
        </p>

        <h2>Note on the Copyright Notices</h2>

        <p>
          Individual files contain the following tag instead of the full license text.
        </p>

        <pre>SPDX - License - Identifier: (GPL - 3.0 - or - later AND MPL - 2.0)</pre>

        <p>
          This enables machine processing of license information based on the SPDX
          License Identifiers that are available here:{' '}
          <a href="http://spdx.org/licenses" target="_blank" rel="noreferrer">
            http://spdx.org/licenses
          </a>
        </p>
      </Content>
    </Section>
  )
}
