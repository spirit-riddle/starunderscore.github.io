import React from "react";
import { graphql } from "gatsby";
import Header from "../components/FrontSite/Header";
import Footer from "../components/FrontSite/Footer";
import "../pages/styles.css";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";
import Box from "@mui/material/Box";

const MarkdownTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <EmptyLayout>
      <main
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          maxWidth: "900px",
          margin: "0 auto",
          borderRadius: "8px",
        }}
      >
        <Header
          showTrainingTitle={true}
        />

        <Box
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
