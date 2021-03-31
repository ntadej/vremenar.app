import { ErrorLayout } from '@tano/common'
import { NextPage } from 'next'

const ErrorPage: NextPage = () => (
  <ErrorLayout
    title="500"
    text="It appears that something is wrong with server configuration. Sorry about that."
    siteTitle="Vremenar"
    siteColor="#FFDB4F"
  />
)

export default ErrorPage
