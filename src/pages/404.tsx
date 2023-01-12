import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { HeadingOne } from '../styles/typography';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main>
        <h1 className={`${HeadingOne}`}>Ops, page does not exist</h1>
        <Link to="/">Go back home</Link>.
      </main>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
