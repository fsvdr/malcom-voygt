/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/blog.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                  releaseDate(formatString: "MMMM Do, YYYY")
                  category
                  punchLine
                  cover {
                    file {
                      url
                    }
                  }
                  post {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create blog post pages.
        result.data.allContentfulBlogPost.edges.forEach(edge => {
          const {
            title,
            slug,
            releaseDate,
            punchLine,
            category,
            cover,
            post,
          } = edge.node
          console.log(post)
          createPage({
            path: `${slug}`, // required
            component: blogPostTemplate,
            context: {
              title,
              slug,
              releaseDate,
              category,
              punchLine,
              cover,
              post,
            },
          })
        })

        return
      })
    )
  })
}
