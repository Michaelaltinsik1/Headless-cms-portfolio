import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql } from 'gatsby';
import ProjectCard from '../components/projectCard';

import { HeadingOne, body } from '../styles/typography';

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
  const [filter, setFilter] = useState<String>('None');
  const [projects, setProjects] = useState<ProjectType>(
    data.allContentfulProject
  );
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectType>(projects);

  useEffect(() => {
    setFilteredProjects(projects);
    console.log(filteredProjects);
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
      <main>
        <h1 className={`${HeadingOne}`}>
          {data.contentfulPortfolioOverView.title}
        </h1>
        <p className={`${body}`}>
          {data.contentfulPortfolioOverView.description.description}
        </p>
        <form>
          <label htmlFor="filter">Filter: </label>
          <select
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
        {filteredProjects?.edges.map((node) => {
          return <ProjectCard key={node.node.id} node={node.node} />;
        })}

        <Link to="/">Home</Link>
      </main>
    </div>
  );
};

export default ProjectsOverviewPage;

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
