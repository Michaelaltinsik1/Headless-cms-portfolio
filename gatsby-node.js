exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MyQuery {
      allContentfulProject {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  console.log('Data: ', data.allContentfulProject.edges);
};
