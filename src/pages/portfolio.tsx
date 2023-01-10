import * as React from 'react';
import { Link } from 'gatsby';
import HeaderComponent from '../components/header';
import { graphql, PageProps } from 'gatsby';
import WrapperComponent from '../components/contentWrapper';
const ProjectsOverviewPage = () => {
  return (
    <div className="min-h-screen">
      <HeaderComponent />
      <main>
        <h1>
          My <em>Frontend developer Portfolio</em> Projects
        </h1>
        <article>
          <h2>Calculator</h2>
          <img src="#" alt="#" />
          <p>Description</p>
          <a href="#">Deployed Project</a>
        </article>
        <Link to="/">Home</Link>
      </main>
    </div>
  );
};

export default ProjectsOverviewPage;
