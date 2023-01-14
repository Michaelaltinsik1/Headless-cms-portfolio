import * as React from 'react';
import { graphql, Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { HeadingOne, body, links } from '../styles/typography';
import SEO from '../components/seo';

interface imageType {
  title: string;
  url: string;
}
interface categoryType {
  name: string;
}
interface dataType {
  data: {
    contentfulProject: {
      title: string;
      description: {
        description: string;
      };
      images: Array<imageType>;
      url: string;
      category: Array<categoryType>;
    };
  };
}
const ContactPage = ({ data }: dataType) => {
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main className="px-4 py-6 desktop:px-20 desktop:py-10">
        <article className="max-w-[1920px] mx-auto mb-6">
          <h1 className={`${HeadingOne} first-letter:uppercase`}>
            {data.contentfulProject.title}
          </h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-6 desktop:gap-10 my-6 desktop:my-10">
            {data.contentfulProject.images &&
              data.contentfulProject.images.map((image: imageType) => {
                if (image && image.url && image.title) {
                  return (
                    <img
                      className="min-w-full min-h-full rounded-md"
                      key={image.url}
                      src={image.url}
                      alt={image.title}
                    />
                  );
                }
              })}
          </div>
          {data.contentfulProject.description && (
            <p className={`${body}`}>
              {data.contentfulProject.description.description}
            </p>
          )}
          {data.contentfulProject.url && (
            <a
              className={`${links}`}
              target="_blank"
              href={data.contentfulProject.url}
            >
              Check out the deployed Project here
            </a>
          )}
        </article>
      </main>
    </div>
  );
};

export default ContactPage;

export const Head = ({ data }: dataType) => (
  <SEO
    description={data.contentfulProject?.description?.description}
    title={data.contentfulProject?.title + ' developer project'}
  />
);

export const query = graphql`
  query SingleProjectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      images {
        url
        title
      }
      url
      description {
        description
      }
      category {
        name
      }
    }
  }
`;
