import * as React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import HeaderComponent from '../components/header';
const ContactPage = ({ data }: any) => {
  console.log('Data:', data);
  return (
    <>
      <HeaderComponent />
      <main>
        <article>
          <h1>{data.contentfulProject.title}</h1>
          {data.images &&
            data.images.map((image: any) => {
              if (image && image.url && image.title) {
                return <img src={image.url} alt={image.title} />;
              }
            })}

          {data.description && <p>{data.description.description}</p>}
          {data.url && <a href={data.url}>Deployed Project</a>}
        </article>
        <Link to="/">Home</Link>
      </main>
    </>
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
