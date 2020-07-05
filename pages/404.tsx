import { NextPage } from 'next';
import { ErrorLayout } from '@tano/common'

const ErrorPage: NextPage = () => (
  <ErrorLayout title="404" text="It appears the page you were looking for doesn't exist. Sorry about that."
    siteTitle="Vremenar" siteColor="#FFDB4F" />
);

export default ErrorPage;
