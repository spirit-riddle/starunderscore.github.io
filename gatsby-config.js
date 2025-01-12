module.exports = {
  siteMetadata: {
    title: `Spirit Riddle`,
    description: `Great Prompting.`,
    author: `@spirit_riddle`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-NKZN8BZHQV"], // Replace with your GA Measurement ID
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content/`, // Path to all markdown files
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`, // Allows more flexible rendering
            },
          },
        ],
      },
    },
  ],
};
