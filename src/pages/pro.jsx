import React, { useEffect, useState } from "react";
import "./styles.css";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import WaitingListForm from "../components/_server/WaitingListForm";

const ProPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <EmptyLayout>
      <Helmet>
        <title>Pro | {siteTitle}</title>
      </Helmet>
      <main
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <header style={{ marginBottom: "2rem", textAlign: "center" }}>
          <a
            href="/"
            style={{
              textDecoration: "none",
              fontSize: "2.5rem",
              fontWeight: "bold",
              transition: "color 0.3s ease",
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
              transition: "color 0.3s ease",
            }}
          >
            Pro Edition
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.8",
              marginBottom: "2rem",
              transition: "color 0.3s ease",
            }}
          >
            The Pro Edition unlocks exclusive features, advanced tools, and insider
            knowledge to help you excel in your journey. Join the waiting list and
            be the first to know when it’s available.
          </p>
          <WaitingListForm />
        </section>

        <footer
          style={{
            marginTop: "2rem",
            fontSize: "0.9rem",
            textAlign: "center",
            transition: "color 0.3s ease",
          }}
        >
          <p>
            Your information is safe with us. We value your privacy and will never
            share your details with third parties.
          </p>
          <p>
            <a
              href="/privacy-policy"
              style={{
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              Privacy Policy
            </a>
          </p>
        </footer>
      </main>
    </EmptyLayout>
  );
};

export default ProPage;
