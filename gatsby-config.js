module.exports = {
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,

    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-transformer-remark`
  ]
};
