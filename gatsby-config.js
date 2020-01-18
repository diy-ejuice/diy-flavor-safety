module.exports = {
  siteMetadata: {
    title: 'DIY Flavor Safety',
    author: 'ayan4m1',
    description: 'A repository of vaping flavor safety information.',
    siteUrl: 'https://safety.diyejuice.org/'
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
        name: 'data'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GA_TRACKING_ID
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DIY Flavor Safety',
        /* eslint-disable camelcase */
        short_name: 'Flavor Safety',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#993014',
        /* eslint-enable camelcase */
        display: 'minimal-ui',
        icon: 'content/assets/gatsby-icon.png'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-eslint'
  ]
};
