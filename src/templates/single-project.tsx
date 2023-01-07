import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
const ContactPage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <article>
          <h1>Calculator</h1>
          <img src="#" alt="#" />
          <img src="#" alt="#" />
          <img src="#" alt="#" />
          <p>Description</p>
          <a href="#">Deployed Project</a>
        </article>
        <Link to="/">Home</Link>
      </main>
    </>
  );
};

export default ContactPage;
