import React from 'react';

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
    <article className="px-4 py-6 rounded-lg tablet:rounded-2xl bg-blue-500 tablet:max-w-[500px] tablet:px-6 tablet:py-8">
      {/* Checks of imgToRender is truthy if it is display image */}
      {imgToRender && <img src={imgToRender.url} alt={imgToRender.alt} />}
      <h2 className="mb-1">{node.title}</h2>
      {node?.description?.description && (
        <p className="mb-1">{node?.description?.description}</p>
      )}
      <a target="_blank" className="mb-1" href={node.url}>
        Deployed Project
      </a>
    </article>
  );
};

export default ProjectCard;
