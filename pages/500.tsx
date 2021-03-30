import { NextPage } from 'next'
import { ErrorLayout } from '@tano/common'

const ErrorPage: NextPage = () => (
  <ErrorLayout
    title="500"
    text="It appears that something is wrong with server configuration. Sorry about that."
    siteTitle="Vremenar"
    siteColor="#FFDB4F"
  />
)

export default ErrorPage
