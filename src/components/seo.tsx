import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

interface MetaTypes {
  title?: string;
  description?: string;
  siteUrl?: string;
}

interface DataType {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
    };
  };
}

const SEO = (props: MetaTypes) => {
  const data: DataType = useStaticQuery(graphql`
    query getSiteMetaData {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);
  console.log(data.site.siteMetadata.siteUrl);
  const defaults = data?.site?.siteMetadata;

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const siteUrl = new URL(props.siteUrl || '/', defaults.siteUrl);
  console.log('url: ', siteUrl);
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={siteUrl.href} />
      <meta
        name="keywords"
        content="frontend developer porfolio,frontend developer, project, projects, porfolio, "
      />
      <meta
        property="og:site_name"
        content="Michael Altinisik Portfolio"
      ></meta>
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </>
  );
};

export default SEO;
