import { React } from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import Header from "./header"

const Layout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
        allFile(
          filter: {
            ext: { eq: ".js" }
            relativeDirectory: { eq: "pages" }
            name: { ne: "index" }
          }
        ) {
          edges {
            node {
              name
            }
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 100%;
      `}
    >
      <Header></Header>
      <div
        css={css`
          float: right;
        `}
      >
        {data.allFile.edges.map(({ node }, index) => (
          <Link
            css={css`
              margin-right: 1rem;
              &:last-of-type {
                margin-right: 0;
              }
            `}
            key={index}
            to={`/${node.name}`}
          >
            {node.name}
          </Link>
        ))}
      </div>

      {props.children}
    </div>
  )
}

export default Layout
