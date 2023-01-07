import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';
const ContactPage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <h1>
          If you found my <em>Frontend developer portfolio</em> interesting,
          gladly contact me with the information below
        </h1>
        <img src="#" alt="#" />
        <a href="mailto: Michael.altinisik@iths.se">Send Email</a>
        <a href="tel:+46726444720">0726444720</a>
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <Link to="/">Home</Link>
      </main>
    </>
  );
};

export default ContactPage;
