import React from 'react';
import { Link } from 'gatsby';
import { H2, body, links } from '../styles/typography';

interface imageType {
  title: string;
  url: string;
}
interface categoryType {
  name: string;
}

interface NodeType {
  node: {
    id: string;
    category: Array<{ name: string }>;
    images: Array<{ id: string; title: string; url: string }>;
    title: string;
    url: string;
    description: {
      description: string;
    };
  };
}

const ProjectCard = ({ node }: NodeType) => {
  /**
   * Checks if the content has an image stored. If it does store the first image in variable
   * imgtorender
   */
  let imgToRender = null;
  if (node.images.length >= 1) {
    imgToRender = { url: node.images[0].url, alt: node.images[0].title };
  }
  return (
    <Link to={`/projects/${node.title.toLocaleLowerCase()}`}>
      <article className="shadow-cardShadow bg-cardBG px-4 py-6 rounded-lg tablet:rounded-2xl bg-blue-500 tablet:max-w-[500px] tablet:px-6 tablet:py-8 min-w-full min-h-full">
        {/* Checks of imgToRender is truthy if it is display image */}
        {imgToRender && (
          <img
            className="rounded-md aspect-[6/3]"
            src={imgToRender.url}
            alt={imgToRender.alt}
          />
        )}
        <h2 className={`${H2}`}>{node.title}</h2>
        {node?.description?.description && (
          <p className={`${body}`}>{node?.description?.description}</p>
        )}
        <a target="_blank" className={`${links}`} href={node.url}>
          Deployed Project
        </a>
      </article>
    </Link>
  );
};

export default ProjectCard;
