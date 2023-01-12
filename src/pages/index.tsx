import * as React from 'react';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';
import { body, HeadingOne } from '../styles/typography';

interface dataType {
  data: {
    contentfulLandingPageContent: {
      title: string;
      presentation?: {
        presentation: string;
      };
      image: {
        title: string;
        url: string;
      };
    };
  };
}

const IndexPage = ({ data }: dataType) => {
  console.log(data);
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main>
        <h1 className={`${HeadingOne}`}>
          {data.contentfulLandingPageContent.title}
        </h1>
        <p className={`${body}`}>
          {data.contentfulLandingPageContent.presentation?.presentation}
        </p>
        <img
          className="rounded-md"
          src={data.contentfulLandingPageContent.image.url}
          alt={data.contentfulLandingPageContent.image.title}
        />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const data = graphql`
  query pageQuery($id: String) {
    contentfulLandingPageContent(id: { eq: $id }) {
      title
      presentation {
        presentation
      }
      image {
        title
        url
      }
    }
  }
`;
