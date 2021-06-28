module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        additionalData: `@use '_styles' as *;`,
        sassOptions: {
          includePaths: [`${__dirname}/src/styles`],
        },
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      __key: 'images',
    },
  ],
};
