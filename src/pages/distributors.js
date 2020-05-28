import { React, useState, useMemo } from "react"
import JSONData from "../content/distributors.json"
import { css } from "@emotion/core"
import Layout from "../components/layout"

const vendors = JSONData

const Distributors = () => {
  let sortedVendors = [...vendors]
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null })

  const requestSort = key => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
  }

  useMemo(() => {
    if (sortConfig.key !== null) {
      sortedVendors.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }
    return sortedVendors
  }, [sortedVendors, sortConfig])

  return (
    <Layout>
      <h1>Distributors</h1>
      <div>
        <label htmlFor="filter">
          {" "}
          <input type="text" id="filter" placeholder="filter distributors" />
          <button type="submit">filter</button>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => requestSort("company")}>Company</button>
            </th>
            <th>Phone</th>
            <th>
              <button onClick={() => requestSort("email")}>email</button>
            </th>
            <th>products available</th>
          </tr>
        </thead>
        <tbody>
          {sortedVendors.map((data, index) => (
            <tr
              key={index}
              css={css`
                border-bottom: 1px solid teal;
              `}
            >
              <td dangerouslySetInnerHTML={{ __html: data.company }}></td>
              <td>{data.tel}</td>
              <td>{data.email}</td>
              <td>
                {data.products.map((prod, index) => (
                  <span
                    key={index}
                    css={css`
                      margin-left: 0.5rem;
                    `}
                  >
                    {prod}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Distributors
