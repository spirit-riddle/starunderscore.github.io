import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";

const Sitemap = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
          rawMarkdownBody
        }
      }
    }
  `);

  const stripJsxTags = (jsxContent) => jsxContent.replace(/<[^>]+>/g, ""); // Strip HTML tags

  const initialQuery = typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("q") || ""
    : "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  const highlightQuery = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };

  const categorizedData = {
    blog: [],
    training: [],
    pdfs: [],
    product: {},
  };

  // Group product files by project
  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.fields.slug;
    const snippets = node.rawMarkdownBody.split("\n").filter((line) => line.trim() !== "");

    if (slug.startsWith("website/blog")) {
      categorizedData.blog.push({ path: `/blog/${slug.split("/").pop()}`, snippets });
    } else if (slug.startsWith("website/training")) {
      categorizedData.training.push({ path: `/training/${slug.split("/").pop()}`, snippets });
    } else if (slug.startsWith("website/appendices/website")) {
      categorizedData.pdfs.push({ path: `/appendices/website/${slug.split("/").pop()}`, snippets });
    } else if (slug.startsWith("website/products")) {
      const parts = slug.split("/");
      const productName = parts[2]; // Extract project name (e.g., "awesome-sauce")
      const fileName = parts.slice(3).join("/"); // Extract the rest of the path (e.g., "file.md")

      if (!categorizedData.product[productName]) {
        categorizedData.product[productName] = [];
      }

      categorizedData.product[productName].push({
        path: `/products/${productName}/${fileName}`,
        snippets,
      });
    }
  });

  const filteredData = {};
  Object.keys(categorizedData).forEach((key) => {
    if (key === "product") {
      // Filter for products differently
      filteredData[key] = {};
      Object.keys(categorizedData[key]).forEach((productName) => {
        const files = categorizedData[key][productName].filter((file) =>
          searchQuery
            ? file.snippets.some((line) => line.toLowerCase().includes(searchQuery.toLowerCase()))
            : true
        ).map((file) => ({
          ...file,
          snippets: searchQuery
            ? file.snippets.filter((line) => line.toLowerCase().includes(searchQuery.toLowerCase()))
            : [],
        }));

        if (files.length > 0 || !searchQuery) {
          filteredData[key][productName] = files;
        }
      });
    } else {
      filteredData[key] = categorizedData[key].filter((item) =>
        searchQuery
          ? item.snippets.some((line) => line.toLowerCase().includes(searchQuery.toLowerCase()))
          : true
      ).map((item) => ({
        ...item,
        snippets: searchQuery
          ? item.snippets.filter((line) => line.toLowerCase().includes(searchQuery.toLowerCase()))
          : [],
      }));
    }
  });

  return (
    <EmptyLayout>
      <main style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
        <h1>Sitemap</h1>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem", borderRadius: "4px" }}
        />
        {Object.entries(filteredData).map(([category, items]) => {
          if (category === "product") {
            // Render the two-dimensional product section
            return (
              <section key={category}>
                <h2>Products</h2>
                {Object.entries(items).map(([productName, files]) => (
                  <div key={productName}>
                    <h3>{productName}</h3>
                    <ul>
                      {files.map((file, idx) => (
                        <li key={idx}>
                          <a href={file.path}>{file.path.split("/").pop()}</a>
                          {searchQuery && file.snippets.length > 0 && (
                            <ul>
                              {file.snippets.map((snippet, snippetIdx) => (
                                <li
                                  key={snippetIdx}
                                  dangerouslySetInnerHTML={{
                                    __html: highlightQuery(snippet, searchQuery),
                                  }}
                                ></li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            );
          }

          return (
            <section key={category}>
              <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              {items.length > 0 ? (
                <ul>
                  {items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.path}>{item.path.split("/").pop()}</a>
                      {searchQuery && item.snippets.length > 0 && (
                        <ul>
                          {item.snippets.map((snippet, snippetIdx) => (
                            <li
                              key={snippetIdx}
                              dangerouslySetInnerHTML={{
                                __html: highlightQuery(snippet, searchQuery),
                              }}
                            ></li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No results found.</p>
              )}
            </section>
          );
        })}
      </main>
    </EmptyLayout>
  );
};

export default Sitemap;
