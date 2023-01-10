exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query getSlugs {
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
  data.allContentfulProject.edges.forEach((edge) => {
    console.log('Slug: ', edge.node.slug);
    actions.createPage({
      path: '/projects/' + edge.node.slug,
      component: require.resolve(`./src/templates/single-project.tsx`),
      context: { slug: edge.node.slug },
    });
  });
};
