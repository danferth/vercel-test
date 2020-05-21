import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

const App = ({ data }) => {
  return (
    <Layout>
      <div
        css={css`
          border: 1px solid black;
          margin-bottom: 1rem;
        `}
      >
        <h1>{data.site.siteMetadata.title}</h1>
        <div>
          <img
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
      </div>
      <div
        css={css`
          border: 1px solid teal;
          padding: 1rem;
        `}
      >
        <h1>Panda Blog</h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts so far!</h4>

        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
              `}
            >
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{" "}
              <span
                css={css`
                  color: #bbb;
                  font-size: 0.75rem;
                `}
              >
                {"- "}
                {node.frontmatter.date}
                {" | "}
                {node.frontmatter.author}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            author
            date(formatString: "DD MMMM, YYYY")
            title
          }
          excerpt
        }
      }
    }
  }
`

export default App
