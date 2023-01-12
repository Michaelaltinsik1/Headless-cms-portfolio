import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import ExperienceCard from '../components/experiencesCard';
import { graphql } from 'gatsby';

import { HeadingOne, H2, body } from '../styles/typography';

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
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main>
        <h1 className={`${HeadingOne}`}>
          {data.contentfulAboutPageContent.title}
        </h1>
        <p className={`${body}`}>
          {data.contentfulAboutPageContent.presentation.presentation}
        </p>
        <section>
          <h2 className={`${H2}`}>Educations</h2>
          {/* Renders all educations as ExperienceCards */}
          {data.contentfulAboutPageContent.educations.map((education) => {
            return <ExperienceCard contentfulAboutPageContent={education} />;
          })}
        </section>
        <section>
          <h2 className={`${H2}`}>Employements</h2>
          {/* Renders all exployments as ExperienceCards */}
          {data.contentfulAboutPageContent.employements.map((employment) => {
            return <ExperienceCard contentfulAboutPageContent={employment} />;
          })}
        </section>

        <Link to="/">Home</Link>
      </main>
    </div>
  );
};

export default AboutPage;

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
