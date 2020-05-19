module.exports = {
  siteMetadata: {
    title: `Not A Trash Panda`,
<<<<<<< HEAD
    test: `This is Master and pushed to production`,
=======
    test: `Blog on front page moron`,
>>>>>>> stage
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
