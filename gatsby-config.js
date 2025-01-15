module.exports = {
  siteMetadata: {
    title: `Star Underscore`,
    description: `Great Prompting.`,
    author: `@Star_Underscore`,
    siteUrl: `https://starunderscore.com`, // Add this back
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
        // Optionally, customize query or resolveSiteUrl if you have unique needs
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
          return nodes.map(node => {
            return { ...node };
          });
        },
        serialize: ({ path }) => {
          return {
            url: path,
          };
        },
      },
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
