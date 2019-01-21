module.exports = {
  siteMetadata: {
    siteUrl: `https://blissful-davinci-b70cb2.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-typography`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "fr"
      }
    },
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
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Antoine Le Guern - Portfolio",
        short_name: "Antoine Le Guern",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#006ec2",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    }
  ]
};
