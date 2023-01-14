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
  data.allContentfulProject.edges.forEach((edge) => {
    actions.createPage({
      path: '/projects/' + edge.node.slug,
      component: require.resolve(`./src/templates/single-project.tsx`),
      context: { slug: edge.node.slug },
    });
  });
};
