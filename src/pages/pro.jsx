import React from "react";
import "./styles.css";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";

const ProPage = () => (
  <EmptyLayout>
    <main
      style={{
        fontFamily: "'Courier New', Courier, monospace",
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      <header style={{ marginBottom: "2rem", textAlign: "center" }}>
        <a
          href="/"
          style={{
            textDecoration: "none",
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          *_
        </a>
      </header>
      <section style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Pro Edition
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.8",
          }}
        >
          Waiting list coming soon.
        </p>
      </section>
    </main>
  </EmptyLayout>
);

export default ProPage;
