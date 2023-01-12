import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql } from 'gatsby';
import { HeadingOne, H2, links } from '../styles/typography';

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
      <main className="px-4 py-6 desktop:px-20">
        <h1 className={`${HeadingOne} first-letter:uppercase`}>
          {data.contentfulContactPageContent.title}
        </h1>
        <img
          src={data.contentfulContactPageContent.image.url}
          alt={data.contentfulContactPageContent.image.title}
        />
        <nav className="flex flex-col">
          <h2 className={`${H2}`}>Contact information: </h2>
          <a
            className={`${links}`}
            href={`mailto: ${data.contentfulContactPageContent.epost}`}
          >
            Send email
          </a>
          <a
            className={`${links}`}
            href={`tel:${data.contentfulContactPageContent.phone}`}
          >
            Call me
          </a>
          <a
            className={`${links}`}
            target="_blank"
            href={data.contentfulContactPageContent.githubUrl}
          >
            Check out my Github
          </a>
          <a
            className={`${links}`}
            target="_blank"
            href={data.contentfulContactPageContent.linkedInUrl}
          >
            Contact me on LinkedIn
          </a>
        </nav>
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
