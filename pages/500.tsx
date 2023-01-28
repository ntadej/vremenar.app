import { ErrorLayout } from '@ntadej/style'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => (
  <ErrorLayout
    title="500"
    text="It appears that something is wrong with server configuration. Sorry about that."
  />
)

export default ErrorPage
