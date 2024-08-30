import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layout"
import SEO from "../components/seo"

const ArchivePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const archivedPosts = data.allMarkdownRemark.nodes

  if (archivedPosts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Archived Posts" />
        <p>No archived posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Archived Posts" />
      <h1>Archived Posts</h1>
      <ol style={{ listStyle: `none` }}>
        {archivedPosts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ArchivePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/archive/" } } # Only include posts from the "archive" folder
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
