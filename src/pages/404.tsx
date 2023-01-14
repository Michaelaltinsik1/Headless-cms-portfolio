import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { HeadingOne, links } from '../styles/typography';
import SEO from '../components/seo';
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

export const Head = () => (
  <SEO
    description="Something went wrong and the requested page does not exist. Please navigate back to homepage to view my frontend portfolio"
    title="Page not found! Navigate back home to check out my Frontend developer Portfolio"
    siteUrl={location.pathname}
  />
);
