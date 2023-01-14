import * as React from 'react';
import HeaderComponent from '../components/header';
import { graphql } from 'gatsby';
import { body, HeadingOne, imageStyles } from '../styles/typography';
import SEO from '../components/seo';

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
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main className="px-4 py-6 desktop:px-20">
        <h1 className={`${HeadingOne} first-letter:uppercase`}>
          {data.contentfulLandingPageContent.title}
        </h1>
        <p className={`${body}`}>
          {data.contentfulLandingPageContent.presentation?.presentation}
        </p>
        <img
          className={`${imageStyles} mb-0`}
          src={data.contentfulLandingPageContent.image.url}
          alt={data.contentfulLandingPageContent.image.title}
        />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = ({ data }: dataType) => (
  <SEO
    description={data.contentfulLandingPageContent?.presentation?.presentation}
    title={data.contentfulLandingPageContent.title}
  />
);

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
