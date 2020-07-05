import { NextPage } from 'next';
import { ErrorLayout } from '@tano/common'

type Props = {
  statusCode: string
}

const ErrorPage: NextPage<Props> = ({ statusCode }) => (
  <ErrorLayout title={statusCode} text={statusCode
    ? `An error ${statusCode} occurred on server`
    : 'An error occurred on client'}
    siteTitle="Vremenar" siteColor="#FFDB4F" />
);

export default ErrorPage;
