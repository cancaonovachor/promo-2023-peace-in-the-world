/**
 * @type {import('gatsby').GatsbyConfig}
 */

const breakPoints = {
  md: '(min-width: 520px)',
  pc: '(min-width: 960px)',
}
module.exports = {
  siteMetadata: {
    title: `Peace in the world 2023`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/nova.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: breakPoints,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-plugin-fontawesome-css',
    'gatsby-plugin-use-query-params',
  ],
};
