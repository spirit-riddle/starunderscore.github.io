import React from "react";

const Footer = () => (
  <footer
    style={{
      marginTop: "3rem",
      textAlign: "center",
      fontSize: "0.9rem",
    }}
  >
    <p>© {new Date().getFullYear()} Spirit Riddle. All rights reserved.</p>
    <p style={{ fontSize: "0.8rem" }}>
      Explore more about Spirit Riddle on our{" "}
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
