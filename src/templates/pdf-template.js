import React from "react";
import { graphql } from "gatsby";
import Header from "../components/FrontSite/Header";
import Footer from "../components/FrontSite/Footer";
import "../pages/styles.css";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";
import { Helmet } from "react-helmet";

const MarkdownTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark;

  const { title, siteTitle } = pageContext

  return (
    <EmptyLayout>
      <Helmet>
        <title>{`${title} | ${siteTitle}`}</title>
      </Helmet>
      <main
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      >
        {post?.frontmatter?.title && (
          <Header
            showPDFTitle={true}
            title={""}
          />
        )}
        <article
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Footer />
      </main>
    </EmptyLayout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default MarkdownTemplate;
