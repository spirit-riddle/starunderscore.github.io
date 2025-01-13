const path = require(`path`);

// Log errors gracefully
const logError = (message, error) => {
  console.error(`\n[Error] ${message}\n`, error);
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  try {
    // Query all Markdown files
    const result = await graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `);

    // Handle query errors
    if (result.errors) {
      logError("GraphQL query failed while fetching Markdown files.", result.errors);
      return;
    }

    // Iterate through Markdown nodes and create pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.fields;

      // Handle paths for the website section
      if (slug.startsWith("website/appendices/website")) {
        createPage({
          path: `/appendices/website/${slug.split("/").pop()}`,
          component: path.resolve(`./src/templates/pdf-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /appendices/website/${slug.split("/").pop()}`);
      } else if (slug.startsWith("website/blog")) {
        createPage({
          path: `/blog/${slug.split("/").pop()}`,
          component: path.resolve(`./src/templates/blog-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /blog/${slug.split("/").pop()}`);
      } else if (slug.startsWith("website/training/main")) {
        createPage({
          path: `/training/main/${slug.split("/").pop()}`,
          component: path.resolve(`./src/templates/training-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /training/main/${slug.split("/").pop()}`);
      } else if (slug.startsWith("website/training/professional")) {
        createPage({
          path: `/training/professional/${slug.split("/").pop()}`,
          component: path.resolve(`./src/templates/training-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /training/professional/${slug.split("/").pop()}`);
      } else if (slug.startsWith("website/products")) {
        createPage({
          path: `/products/${slug.split("/").pop()}`,
          component: path.resolve(`./src/templates/product-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /products/${slug.split("/").pop()}`);
      }
      // Handle paths for the study-desk section
      else if (slug.startsWith("study-desk/languages")) {
        const parts = slug.split("/");
        const language = parts[2]; // Extract language (e.g., "english" or "japanese")
        const fileName = parts.slice(3).join("/"); // File name within the language folder

        createPage({
          path: `/study-desk/languages/${language}/${fileName}`,
          component: path.resolve(`./src/templates/studydesk-template.js`),
          context: { slug, language },
        });
        console.log(`[Page Created]: /study-desk/languages/${language}/${fileName}`);
      } else if (slug.startsWith("study-desk/technical-skills")) {
        const skillFileName = slug.split("/").slice(2).join("/");

        createPage({
          path: `/study-desk/technical-skills/${skillFileName}`,
          component: path.resolve(`./src/templates/studydesk-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /study-desk/technical-skills/${skillFileName}`);
      } else if (slug.startsWith("temp-holder")) {
        const fileName = slug.split("/").pop(); // Extract the file name

        createPage({
          path: `/study-desk/temp-holder/${fileName}`,
          component: path.resolve(`./src/templates/studydesk-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /study-desk/temp-holder/${fileName}`);
      } else if (slug.startsWith("study-desk/temp-holder")) {
        const fileName = slug.split("/").pop(); // Extract the file name

        createPage({
          path: `/study-desk/temp-holder/${fileName}`,
          component: path.resolve(`./src/templates/studydesk-template.js`),
          context: { slug },
        });
        console.log(`[Page Created]: /study-desk/temp-holder/${fileName}`);
      } else {
        console.warn(`[Unhandled Slug]: ${slug}`);
      }
    });
  } catch (error) {
    logError("An unexpected error occurred while creating pages.", error);
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Process only MarkdownRemark nodes
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const relativePath = fileNode.relativePath || "";

    // Create slug by removing the file extension
    const slug = relativePath.replace(/\.md$/, "");

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    console.log(`[Slug Created]: ${slug}`); // Log successful slug creation
  }
};


















// const path = require(`path`);

// // Log errors gracefully
// const logError = (message, error) => {
//   console.error(`\n[Error] ${message}\n`, error);
// };

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   try {
//     // Query all Markdown files
//     const result = await graphql(`
//       {
//         allMarkdownRemark {
//           edges {
//             node {
//               frontmatter {
//                 title
//               }
//               fields {
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `);

//     // Handle query errors
//     if (result.errors) {
//       logError("GraphQL query failed while fetching Markdown files.", result.errors);
//       return;
//     }

//     // Iterate through Markdown nodes and create pages
//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       const { slug } = node.fields;

//       // Log the slug for debugging
//       // console.log("Slug:", slug);

//       // Handle specific paths based on the slug
//       if (slug.startsWith("website/appendices/website")) {
//         // Append the last segment of the slug to the desired base path
//         createPage({
//           path: `/appendices/website/${slug.split("/").pop()}`,
//           component: path.resolve(`./src/templates/pdf-template.js`),
//           context: {
//             slug,
//           },
//         });
//         console.log(`[Page Created]: /appendices/website/${slug.split("/").pop()}`);
//       } else if (slug.startsWith("website/blog")) {
//         createPage({
//           path: `/blog/${slug.split("/").pop()}`,
//           component: path.resolve(`./src/templates/blog-template.js`),
//           context: {
//             slug,
//           },
//         });
//         console.log(`[Page Created]: /blog/${slug.split("/").pop()}`);
//       } else if (slug.startsWith("website/training/main")) {
//         createPage({
//           path: `/training/main/${slug.split("/").pop()}`,
//           component: path.resolve(`./src/templates/training-template.js`),
//           context: {
//             slug,
//           },
//         });
//         console.log(`[Page Created]: /training/main/${slug.split("/").pop()}`);
//       } else if (slug.startsWith("website/training/professional")) {
//         createPage({
//           path: `/training/professional/${slug.split("/").pop()}`,
//           component: path.resolve(`./src/templates/training-template.js`),
//           context: {
//             slug,
//           },
//         });
//         console.log(`[Page Created]: /training/professional/${slug.split("/").pop()}`);
//       } else if (slug.startsWith("website/products")) {
//         createPage({
//           path: `/products/${slug.split("/").pop()}`,
//           component: path.resolve(`./src/templates/product-template.js`),
//           context: {
//             slug,
//           },
//         });
//         console.log(`[Page Created]: /products/${slug.split("/").pop()}`);
//       } else {
//         console.warn(`[Unhandled Slug]: ${slug}`);
//       }
//     });
//   } catch (error) {
//     logError("An unexpected error occurred while creating pages.", error);
//   }
// };

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;

//   // Process only MarkdownRemark nodes
//   if (node.internal.type === `MarkdownRemark`) {
//     const fileNode = getNode(node.parent);
//     const relativePath = fileNode.relativePath || "";

//     // Create slug by removing the file extension
//     const slug = relativePath.replace(/\.md$/, "");

//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     });

//     console.log(`[Slug Created]: ${slug}`); // Log successful slug creation
//   }
// };
