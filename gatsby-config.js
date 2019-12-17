
module.exports = {
  siteMetadata: {
    title: "Advanced CSS",
    author: "Hideaki Aomori",
    description: "Udemy class project",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass"
  ],
}
