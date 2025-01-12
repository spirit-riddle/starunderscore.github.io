import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { navigate } from "@gatsbyjs/reach-router";
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
      allSitePage(filter: { path: { regex: "/blog|training/courses/" } }) {
        nodes {
          path
        }
      }
    }
  `);

  const stripJsxTags = (jsxContent) => {
    return jsxContent.replace(/<[^>]+>/g, ""); // Remove all tags
  };

  // Parse the "q" parameter from the URL
  const isBrowser = typeof window !== "undefined";
  const initialQuery = isBrowser
    ? new URLSearchParams(window.location.search).get("q") || ""
    : "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useEffect(() => {
    // Update the URL whenever the search query changes
    const params = new URLSearchParams(window.location.search);
    if (searchQuery) {
      params.set("q", searchQuery);
    } else {
      params.delete("q");
    }
    // navigate(`/sitemap/?${params.toString()}`, { replace: true });
  }, [searchQuery]);

  const markdownFiles = data.allMarkdownRemark.nodes.map((node) => {
    const title = node.fields.slug || "Untitled";
    const slug = `/training/appendice/website/${node.fields.slug}`;
    const rawText = node.rawMarkdownBody;

    const snippets = rawText
      .split("\n")
      .filter((line) => line.trim() !== "");

    return {
      title,
      path: slug,
      snippets,
    };
  });

  const blogPages = data.allSitePage.nodes
    .filter((node) => node.path.startsWith("/blog"))
    .map((node) => {
      const title = node.path.replace("/blog/", "").replace(/\/$/, "") || "Untitled Blog";
      const path = node.path;

      const rawJsxContent = `
        <div>
          <h1>${title}</h1>
          <p>This blog discusses various aspects of ${title.replace(/-/g, " ")}.</p>
          <p>Explore the unique methodologies and insights presented.</p>
        </div>
      `;
      const rawContent = stripJsxTags(rawJsxContent);
      const snippets = rawContent.split(". ").filter((line) => line.trim() !== "");

      return {
        title,
        path,
        rawContent,
        snippets,
      };
    });

  const trainingPages = data.allSitePage.nodes
    .filter((node) => node.path.startsWith("/training/courses"))
    .map((node) => {
      const title = node.path.replace("/training/courses/", "").replace(/\/$/, "") || "Untitled Training";
      const path = node.path;

      const rawJsxContent = `
        <section>
          <h2>${title}</h2>
          <p>This training page delves into foundational concepts of ${title.replace(/-/g, " ")}.</p>
          <p>Discover the advanced techniques and applications covered.</p>
        </section>
      `;
      const rawContent = stripJsxTags(rawJsxContent);
      const snippets = rawContent.split(". ").filter((line) => line.trim() !== "");

      return {
        title,
        path,
        rawContent,
        snippets,
      };
    });

  const highlightQuery = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  };

  const filteredData = {
    blog: blogPages
      .filter((page) =>
        searchQuery
          ? page.snippets.some((line) =>
            line.toLowerCase().includes(searchQuery.toLowerCase())
          )
          : true
      )
      .map((page) => ({
        ...page,
        snippets: searchQuery
          ? page.snippets.filter((line) =>
            line.toLowerCase().includes(searchQuery.toLowerCase())
          )
          : [],
      })),
    pdfs: markdownFiles
      .filter((file) =>
        searchQuery
          ? file.snippets.some((snippet) =>
            snippet.toLowerCase().includes(searchQuery.toLowerCase())
          )
          : true
      )
      .map((file) => ({
        ...file,
        snippets: searchQuery
          ? file.snippets.filter((snippet) =>
            snippet.toLowerCase().includes(searchQuery.toLowerCase())
          )
          : [],
      })),
    training: trainingPages
      .filter((page) =>
        searchQuery
          ? page.snippets.some((line) =>
            line.toLowerCase().includes(searchQuery.toLowerCase())
          )
          : true
      )
      .map((page) => ({
        ...page,
        snippets: searchQuery
          ? page.snippets.filter((line) =>
            line.toLowerCase().includes(searchQuery.toLowerCase())
          )
          : [],
      })),
  };

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
        <section>
          <h2>Blog</h2>
          {filteredData.blog.length > 0 ? (
            <ul>
              {filteredData.blog.map((page, idx) => (
                <li key={idx}>
                  <a href={page.path}>{page.title}</a>
                  {searchQuery && page.snippets.length > 0 && (
                    <ul>
                      {page.snippets.map((snippet, snippetIdx) => (
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
        <section>
          <h2>PDFs</h2>
          {filteredData.pdfs.length > 0 ? (
            <ul>
              {filteredData.pdfs.map((file, idx) => (
                <li key={idx}>
                  <a href={file.path}>{file.title}</a>
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
          ) : (
            <p>No results found.</p>
          )}
        </section>
        <section>
          <h2>Training Pages</h2>
          {filteredData.training.length > 0 ? (
            <ul>
              {filteredData.training.map((page, idx) => (
                <li key={idx}>
                  <a href={page.path}>{page.title}</a>
                  {searchQuery && page.snippets.length > 0 && (
                    <ul>
                      {page.snippets.map((snippet, snippetIdx) => (
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
      </main>
    </EmptyLayout>
  );
};

export default Sitemap;
