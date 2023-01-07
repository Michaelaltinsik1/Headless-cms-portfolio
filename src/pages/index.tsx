import * as React from 'react';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';

const IndexPage = () => {
  return (
    <>
      <HeaderComponent />
      <main>
        <h1>
          Greetings, my name is Michael Altinisik and this is my{' '}
          <em>Frontend developer portfolio</em>
        </h1>
        <img src="#" alt="image" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo maxime
          beatae vero vel laborum numquam veritatis distinctio, eius neque
          eligendi. Tempora sit quaerat, error ipsam voluptatibus repudiandae
          vel odit dicta esse. Necessitatibus ex hic doloribus.
        </p>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
