module.exports = {
  siteMetadata: {
    title: 'Malcom Voygt | Freelance Copywriter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.ContentfulSpaceId,
        accessToken: process.env.ContentfulAccessToken,
      },
    },
  ],
}
