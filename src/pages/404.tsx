import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';
const NotFoundPage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <h1>Ops, page does not exist</h1>
        <Link to="/">Go back home</Link>.
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
