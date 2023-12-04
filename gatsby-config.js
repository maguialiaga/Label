/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: ``,
    description: `Rummel Bookings`,
    author: `Magdalena Aliaga`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat:300,400,500,700`,
          `Inter:wght@200,300,400,500,`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/rummel-icon.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,

    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `videos`,
    //     path: `${__dirname}/src/assets/videos`,
    //   },
    // },
  ],
};
