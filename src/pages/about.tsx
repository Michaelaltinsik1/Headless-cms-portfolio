import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import ExperienceCard from '../components/experiencesCard';
import { graphql } from 'gatsby';
import { useLocation } from '@reach/router';
import { HeadingOne, H2, body } from '../styles/typography';
import SEO from '../components/seo';

interface EducationType {
  title: string;
  school: string;
  to: string;
  from: string;
}
interface EmploymentType {
  role: string;
  company: string;
  to: string;
  from: string;
}
interface DataType {
  data: {
    contentfulAboutPageContent: {
      title: string;
      presentation: {
        presentation: string;
      };
      educations: Array<EducationType>;
      employements: Array<EmploymentType>;
    };
  };
}

const AboutPage = ({ data }: DataType) => {
  console.log('Data: ', data);
  const location = useLocation();
  console.log('Location: ', location.pathname);
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main className="px-4 py-6 tablet:px-10 tablet:py-12 desktop:px-20 desktop:py-16">
        <h1 className={`${HeadingOne} first-letter:uppercase`}>
          {data.contentfulAboutPageContent.title}
        </h1>
        <p className={`${body}`}>
          {data.contentfulAboutPageContent.presentation.presentation}
        </p>
        <section className="mb-6">
          <h2 className={`${H2}`}>Educations</h2>
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4 tablet:gap-6 desktop:gap-10">
            {/* Renders all educations as ExperienceCards */}
            {data.contentfulAboutPageContent.educations.map((education) => {
              return (
                <ExperienceCard
                  key={education.title}
                  contentfulAboutPageContent={education}
                />
              );
            })}
          </div>
        </section>
        <section className="mb-6">
          <h2 className={`${H2}`}>Employements</h2>
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4 tablet:gap-6 desktop:gap-10">
            {/* Renders all exployments as ExperienceCards */}
            {data.contentfulAboutPageContent.employements.map((employment) => {
              return (
                <ExperienceCard
                  key={employment.role}
                  contentfulAboutPageContent={employment}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

export const Head = ({ data }: DataType) => (
  <SEO
    description={data.contentfulAboutPageContent?.presentation?.presentation}
    title={data.contentfulAboutPageContent?.title}
    siteUrl={location.pathname}
  />
);

export const data = graphql`
  query pageQuery($id: String) {
    contentfulAboutPageContent(id: { eq: $id }) {
      title
      presentation {
        presentation
      }
      educations {
        school
        title
        to
        from
      }
      employements {
        role
        company
        from
        to
      }
    }
  }
`;
