import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';
const AboutPage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <h1>Little about myself</h1>
        <p>
          Hello! I am an <em>frontend developer</em> student about start my last
          semester at IT Högskolan.{' '}
        </p>
        <section>
          <h2>Educations</h2>
          <article>
            <h3>Data engineer</h3>
            <p>Kungliga Tekniska högskolan</p>
            <p>period: 4/8/2018-6/6/2020</p>
          </article>
        </section>
        <section>
          <h2>Employements</h2>
          <article>
            <h3>Presser/printer (Newspappers)</h3>
            <p>V-tab (Summer job and part time)</p>
            <p>period: 6/6/2017-6/8/2021</p>
          </article>
        </section>

        <Link to="/">Home</Link>
      </main>
    </>
  );
};

export default AboutPage;
