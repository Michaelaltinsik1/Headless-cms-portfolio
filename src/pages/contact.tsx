import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql } from 'gatsby';
import { HeadingOne, H2 } from '../styles/typography';

interface dataType {
  data: {
    contentfulContactPageContent: {
      title: string;
      epost: string;
      githubUrl: string;
      linkedInUrl: string;
      phone: string;
      image: {
        title: string;
        url: string;
      };
    };
  };
}

const ContactPage = ({ data }: dataType) => {
  console.log('Data: ', data);
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main>
        <h1 className={`${HeadingOne}`}>
          {data.contentfulContactPageContent.title}
        </h1>
        <img
          src={data.contentfulContactPageContent.image.url}
          alt={data.contentfulContactPageContent.image.title}
        />
        <nav className="flex flex-col">
          <h2 className={`${H2}`}>Contact information: </h2>
          <a href={`mailto: ${data.contentfulContactPageContent.epost}`}>
            Send Email here
          </a>
          <a href={`tel:${data.contentfulContactPageContent.phone}`}>
            Call me: {data.contentfulContactPageContent.phone}
          </a>
          <a target="_blank" href={data.contentfulContactPageContent.githubUrl}>
            Check out my Github here
          </a>
          <a
            target="_blank"
            href={data.contentfulContactPageContent.linkedInUrl}
          >
            Contact me on LinkedIn here
          </a>
        </nav>
        <Link to="/">Home</Link>
      </main>
    </div>
  );
};

export default ContactPage;

export const data = graphql`
  query pageQuery($id: String) {
    contentfulContactPageContent(id: { eq: $id }) {
      title
      epost
      githubUrl
      linkedInUrl
      phone
      image {
        title
        url
      }
    }
  }
`;
