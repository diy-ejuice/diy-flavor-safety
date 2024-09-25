require('dotenv/config');

const manifestOptions = {
  name: 'DIY Flavor Safety',
  /* eslint-disable camelcase */
  short_name: 'Flavor Safety',
  start_url: '/',
  background_color: '#ffffff',
  theme_color: '#993014',
  /* eslint-enable camelcase */
  display: 'minimal-ui',
  icon: 'content/assets/gatsby-icon.png'
};

const remarkOptions = {
  plugins: [
    {
      resolve: 'gatsby-remark-images',
      options: {
        maxWidth: 590
      }
    }
  ]
};

const gtagOptions = {
  trackingId: process.env.GA_TRACKING_ID,
  head: true,
  anonymize: true
};

module.exports = {
  siteMetadata: {
    title: 'DIY Flavor Safety',
    author: 'ayan4m1',
    description: 'A repository of vaping flavor safety information.',
    siteUrl: 'https://safety.ejoose.org/'
  },
  plugins: [
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
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: remarkOptions
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-gtag',
      options: gtagOptions
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        configType: 'flat',
        eslintPath: 'eslint/use-at-your-own-risk'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    '@ayan4m1/gatsby-plugin-root-import'
  ]
};
