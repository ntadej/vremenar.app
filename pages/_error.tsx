import { ErrorLayout } from '@ntadej/style'
import { NextPage } from 'next'

type Props = {
  statusCode: string
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => (
  <ErrorLayout
    title={statusCode}
    text={
      statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'
    }
  />
)

export default ErrorPage
