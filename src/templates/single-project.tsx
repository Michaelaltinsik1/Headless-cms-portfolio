import * as React from 'react';
import { graphql, Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { HeadingOne, body, links } from '../styles/typography';

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
        <article>
          <h1 className={`${HeadingOne} first-letter:uppercase`}>
            {data.contentfulProject.title}
          </h1>
          {data.contentfulProject.images &&
            data.contentfulProject.images.map((image: imageType) => {
              if (image && image.url && image.title) {
                return (
                  <img key={image.url} src={image.url} alt={image.title} />
                );
              }
            })}

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
