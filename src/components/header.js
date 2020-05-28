import { React } from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "headerBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div
      css={css`
        width: 100%;
        background-color: teal;
        text-align: center;
        color: white;
        position: relative;
        z-index: -1;
        margin-bottom: 1rem;
      `}
    >
      <Link
        to={`/`}
        css={css`
          color: white;
          text-decoration: none;
          position: absolute;
          top: 15%;
          width: 100%;
          display: block;
          text-shadow: 0 0 5px black;
          z-index: 200;
        `}
      >
        <h1
          css={css`
            color: white;
          `}
        >
          {data.site.siteMetadata.title}
        </h1>
      </Link>
      <Img fluid={data.file.childImageSharp.fluid} />
    </div>
  )
}

export default Header
