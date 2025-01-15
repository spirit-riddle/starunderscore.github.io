module.exports = {
  siteMetadata: {
    title: `Star Underscore`,
    description: `Great Prompting.`,
    author: `@Star_Underscore`,
    siteUrl: "https://starunderscore.com",
    // siteUrl: "http://localhost:9000"
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/study-desk/**`], // Exclude all pages under /study-desk/
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.starunderscore.com`, // Replace with your actual domain
        sitemap: `https://www.starunderscore.com/sitemap.xml`, // Path to your sitemap
        policy: [{ userAgent: '*', allow: '/' }], // Allow all robots
        disallow: [`/study-desk/`], // Disallow robots from accessing /study-desk/
      },
    },
  ],
};
