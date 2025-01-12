import React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <main style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "'Courier New', Courier, monospace",
    textAlign: "center",
    padding: "1rem",
  }}>
    <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404: Page Not Found</h1>
    <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
      Sorry, the page you're looking for doesn't exist or was moved.
    </p>
    <Link to="/" style={{
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1.1rem",
      border: "2px solid #007acc",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
    }}>
      Go Back Home
    </Link>
  </main>
);

export default NotFoundPage;
