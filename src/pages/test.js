import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import Layout from "../components/layout"

const Test = ({ data }) => {
  return (
    <div>
      <Layout>
        <div
          css={css`
            border: 2px dashed teal;
            width: 100%;
            height: 100%;
            &:hover {
              border-color: red;
            }
          `}
        >
          <p>{data.site.siteMetadata.test}</p>
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        test
      }
    }
  }
`

export default Test
