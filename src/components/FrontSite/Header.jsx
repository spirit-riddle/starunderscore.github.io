import React from "react";

const Header = ({
  title,
  subheader,
  date,
  showBlogTitle = false,
  showPDFTitle = false,
  showProductTitle = false,
  showTrainingTitle = false,
}) => (
  <header style={{ marginBottom: "2rem" }}>
    {/* <div style={{ marginBottom: "1rem" }}>
      <a
        href="/"
        style={{
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
          fontFamily: "'Courier New', Courier, monospace",
        }}
      >
        *_
      </a>
    </div> */}
    {showBlogTitle && (
      <em>Blog</em>
    )}

    {showPDFTitle && (
      <em>PDF</em>
    )}

    {showProductTitle && (
      <em>Product</em>
    )}

    {showTrainingTitle && (
      <em>Training</em>
    )}

    <h1 style={{ fontSize: "2.5rem", margin: "0", fontWeight: "normal" }}>
      {title}
    </h1>
    <p
      style={{
        fontSize: "1.1rem",
        lineHeight: "1.6",
        fontStyle: "italic",
      }}
    >
      {subheader}
    </p>
    {date && (
      <p
        style={{
          fontSize: "0.9rem",
          marginTop: "0.5rem",
          fontStyle: "italic",
        }}
      >
        Published on: {date}
      </p>
    )}
  </header>
);

export default Header;
