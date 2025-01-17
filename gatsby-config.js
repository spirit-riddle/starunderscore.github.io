require("dotenv").config({
  path: `.env`, // Load environment file based on the environment
});

module.exports = {
  siteMetadata: {
    title: `Star Underscore`,
    description: `Great Prompting.`,
    author: `@Star_Underscore`,
    siteUrl: `https://starunderscore.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-NKZN8BZHQV"],
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
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({ site }) => site.siteMetadata.siteUrl,
        resolvePages: ({ allSitePage: { nodes } }) => {
          return nodes.map((node) => ({ ...node }));
        },
        serialize: ({ path }) => {
          return {
            url: path,
          };
        },
        excludes: [`/study-desk/**`, `/study-desk/`], // Ensure study-desk is excluded
        output: `/`, // Root sitemap location
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.starunderscore.com`,
        sitemap: `https://www.starunderscore.com/sitemap-0.xml`,
        policy: [
          { userAgent: '*', allow: '/' },
          { userAgent: '*', disallow: ['/study-desk/'] }, // Explicitly disallow study-desk
        ],
      },
    },
  ],
};
