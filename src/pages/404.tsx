import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { HeadingOne, links } from '../styles/typography';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main className="px-4 py-6 desktop:px-20">
        <h1 className={`${HeadingOne} first-letter:uppercase`}>
          Ops, page does not exist
        </h1>
        <Link className={`${links}`} to="/">
          Go back home
        </Link>
        .
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
