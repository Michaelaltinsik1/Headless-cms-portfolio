import * as React from 'react';
import { graphql, Link } from 'gatsby';
import HeaderComponent from '../components/header';

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
    <div className="min-h-screen">
      <HeaderComponent />
      <main>
        <article>
          <h1>{data.contentfulProject.title}</h1>
          {data.contentfulProject.images &&
            data.contentfulProject.images.map((image: imageType) => {
              if (image && image.url && image.title) {
                return (
                  <img key={image.url} src={image.url} alt={image.title} />
                );
              }
            })}

          {data.contentfulProject.description && (
            <p>{data.contentfulProject.description.description}</p>
          )}
          {data.contentfulProject.url && (
            <a target="_blank" href={data.contentfulProject.url}>
              Check out the deployed Project here
            </a>
          )}
        </article>
        <Link to="/">Home</Link>
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
