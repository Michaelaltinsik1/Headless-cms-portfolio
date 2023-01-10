import * as React from 'react';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';

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
    <div className="min-h-screen">
      <HeaderComponent />
      <main>
        <h1>{data.contentfulLandingPageContent.title}</h1>
        <p>{data.contentfulLandingPageContent.presentation?.presentation}</p>
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
