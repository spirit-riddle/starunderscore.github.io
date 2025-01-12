import React from "react";

const Footer = () => (
  <footer
    style={{
      marginTop: "3rem",
      textAlign: "center",
      fontSize: "0.9rem",
    }}
  >
    <p>© {new Date().getFullYear()} Star Underscore. All rights reserved.</p>
    <p style={{ fontSize: "0.8rem" }}>
      Explore more about Star Underscore on our{" "}
      <a
        href="/"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Homepage
      </a>.
    </p>
  </footer>
);

export default Footer;
