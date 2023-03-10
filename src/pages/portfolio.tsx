import React, { useEffect, useState } from 'react';
import HeaderComponent from '../components/header';
import { graphql } from 'gatsby';
import ProjectCard from '../components/projectCard';

import { HeadingOne, body } from '../styles/typography';
import SEO from '../components/seo';

interface ProjectType {
  edges: Array<{
    node: {
      id: string;
      title: string;
      url: string;
      images: Array<{ id: string; title: string; url: string }>;
      category: Array<{ id: string; name: string }>;
      description: {
        description: string;
      };
    };
  }>;
}

interface PortfolioType {
  title: string;
  description: {
    description: string;
  };
}

interface CategoryType {
  totalCount: number;
  nodes: Array<{ id: string; name: string }>;
}

interface DataType {
  data: {
    allContentfulCategory: CategoryType;
    allContentfulProject: ProjectType;
    contentfulPortfolioOverView: PortfolioType;
  };
}

const ProjectsOverviewPage = ({ data }: DataType) => {
  const [filter, setFilter] = useState<String>('None'); // stores filter state
  const [projects, setProjects] = useState<ProjectType>( // Stores all projects
    data.allContentfulProject
  );
  const [filteredProjects, setFilteredProjects] = // Stores filtered projects
    useState<ProjectType>(projects);

  /**
   * This useEffect is ran everytime the filter state changes and gets all the projects
   * that contains the category in the filter
   * */
  useEffect(() => {
    setFilteredProjects(projects);
    if (filter !== 'None') {
      const filteredItems = projects.edges.filter((project) =>
        project.node.category.some((element) => element.name === filter)
      );
      setFilteredProjects({ edges: filteredItems });
    }
  }, [filter]);
  return (
    <div className="min-h-screen bg-primaryBG">
      <HeaderComponent />
      <main className="px-4 py-6 desktop:px-20">
        <h1 className={`${HeadingOne} first-letter:uppercase`}>
          {data.contentfulPortfolioOverView.title}
        </h1>
        <p className={`${body}`}>
          {data.contentfulPortfolioOverView.description.description}
        </p>
        <section className="mb-6">
          <form>
            <label className="text-[20px]" htmlFor="filter">
              Filter:{' '}
            </label>
            <select
              className="my-4 mx-2 py-1 px-2 text-[20px] rounded-[4px] bg-navBG "
              defaultValue="None"
              defaultChecked
              onChange={(e) => setFilter(e.target.value)}
              name="filter"
              id="filter"
            >
              {data.allContentfulCategory.nodes.map((category) => {
                return (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                );
              })}
              <option value="None">None</option>
            </select>
          </form>
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4 tablet:gap-6 desktop:gap-10">
            {filteredProjects?.edges.map((node) => {
              return <ProjectCard key={node.node.id} node={node.node} />;
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsOverviewPage;

export const Head = ({ data }: DataType) => (
  <SEO
    description={data.contentfulPortfolioOverView?.description?.description}
    title={data.contentfulPortfolioOverView?.title}
  />
);

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPortfolioOverView(id: { eq: $id }) {
      title
      description {
        description
      }
    }
    allContentfulProject {
      edges {
        node {
          id
          title
          url
          description {
            description
          }
          images {
            id
            url
            title
          }
          category {
            id
            name
          }
        }
      }
    }
    allContentfulCategory {
      totalCount
      nodes {
        id
        name
      }
    }
  }
`;
