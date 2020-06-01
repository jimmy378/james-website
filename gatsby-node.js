const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allProjectsYaml {
        edges {
          node {
            slug
            title
            type
            video
            images
            feature
            body
          }
        }
      }
    }
  `)

  const projects = result.data.allProjectsYaml.edges

  projects.forEach(({ node }, index) => {
    createPage({
      path: node.slug,
      component: path.resolve('./src/templates/project.tsx'),
      context: {
        slug: node.slug,
        type: node.type,
        prev: index === 0 ? null : projects[index - 1].node.slug,
        next:
          index === projects.length - 1 ? null : projects[index + 1].node.slug,
      },
    })
  })
}
