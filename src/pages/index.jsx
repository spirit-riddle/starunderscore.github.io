import React from "react";
import EmptyLayout from "../components/EmptyLayout/EmptyLayout";
import "./styles.css";
import TrainingInformationButtonWithModal from "../components/FrontSite/informationButtons/TrainingInformationButtonWithModal";
import BlogInformationButtonWithModal from "../components/FrontSite/informationButtons/BlogInformationButtonWithModal";

const IndexPage = () => (
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
        <h1 style={{ fontSize: "2.5rem", margin: "0", fontWeight: "normal" }}>
          Welcome to Star Underscore
        </h1>
        {/* <ThemeToggle /> */}
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            fontStyle: "italic",
          }}
        >
          <small><em>Innovation for a Better Tomorrow</em></small>
          <br />
          Star Underscore blends software development, advanced mathematics, and energy efficiency into a unified platform for growth. Join the journey from foundational learning to enterprise solutions.
        </p>
      </header>

      {/* Explore the Sitemap */}
      <section>
        <br />
        <br />
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.8",
            marginBottom: "1.5rem",
          }}
        >
          Discover everything Star Underscore has to offer in one place! Use our{" "}
          <a
            href="/sitemap"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Sitemap
          </a>{" "}
          to explore blogs, training pages, and resources.
        </p>
      </section>

      {/* Training Section */}
      <section>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Training
          <TrainingInformationButtonWithModal />
        </h2>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            fontSize: "1rem",
            lineHeight: "2",
          }}
        >
          {/* Main Training Course */}
          <li style={{ marginBottom: "1.5rem" }}>
            <a
              href="/training/main/tm01-lov-math-foundations/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              LOV Math Foundations <span style={{ color: "green", fontSize: "0.8rem", marginLeft: "0.5rem" }}>Main</span>
            </a>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Explore advanced mathematics like graph theory and linear algebra to solve modern software challenges.
            </p>
          </li>

          {/* Professional Training Course */}
          <li style={{ marginBottom: "1.5rem" }}>
            <a
              href="/training/professional/tp01-business-soft-skills/"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Corporate Soft Skills <span style={{ color: "blue", fontSize: "0.8rem", marginLeft: "0.5rem" }}>Professional</span>
            </a>
            <p style={{ margin: 0, fontSize: "0.9rem" }}>
              Master communication and workplace dynamics to excel in corporate environments.
            </p>
          </li>
        </ul>
      </section>



      {/* Projects Section */}
      {/* <section>
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Projects
      </h2>
      <h3>MkDocs Software Printer</h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: "1.8",
          marginBottom: "1.5rem",
        }}
      >
        This project is a powerful tool for developers, enabling you to
        streamline the development process by generating software projects
        directly from documentation. It transforms well-structured documentation
        into actionable, reusable code components, saving time and making modular
        system creation seamless.
      </p>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: "1rem",
          lineHeight: "2",
        }}
      >
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="https://starunderscore.github.io/mkdocs-software-printer/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            MkDocs Software Printer - User Guide
          </a>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="https://starunderscore.github.io/mkdocs-software-printer/system/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            MkDocs Software Printer - System Manual
          </a>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="https://github.com/starunderscore/mkdocs-software-printer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Source Code on GitHub
          </a>
        </li>
      </ul>
    </section> */}

      {/* Blog Section */}
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "1rem",
          fontWeight: "bold",
        }}
      >
        Blog
        <BlogInformationButtonWithModal />
      </h2>
      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
      >
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/2025-01-11-a-new-standard-for-training-main-and-professional"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Redefining Training: Main and Professional Courses
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Discover Star Underscore's new approach to structured learning with 'Main' and 'Professional' courses, tailored to modern education standards.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: January 11, 2025
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/2025-01-03-the-star-underscore-sitemap-product-and-philosophy/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            The Star Underscore Sitemap Redefines Navigation with Innovation and Purpose
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore how StarUnderscore.com transforms a simple sitemap into a dynamic, AI-driven product for organizing and evolving content relationships.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: January 03, 2024
          </p>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/2024-12-29-how-to-become-successful-in-tech-and-life/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            How to Become Successful in Tech and Life
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore actionable insights and strategies for thriving in the tech industry and beyond. Learn how to start your journey toward success, no matter where you are today.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: December 29, 2024
          </p>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/2024-12-09-crafting-star-underscore-training-methodology/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Crafting Star Underscore's Training Methodology
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore the methodology behind Star Underscore's standardized training courses, designed for consistency and clarity in learning.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: December 9, 2024
          </p>
        </li>

        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/2024-12-02-memory-algorithmic-cognitive-enhancer/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Algorithmic Cognitive Enhancer
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Explore how rolling your voice through musical notes can improve
            memory and focus.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: December 2, 2024
          </p>
        </li>
        <li style={{ marginBottom: "1rem" }}>
          <a
            href="/blog/2024-11-29-universal-service-adapter-model-lov/"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Universal Service Adapter (LOV)
          </a>
          <p style={{ margin: 0, fontSize: "0.9rem" }}>
            Discover how LOV simplifies complex integrations and empowers users.
          </p>
          <p style={{ margin: 0, fontSize: "0.8rem" }}>
            Published: November 29, 2024
          </p>
        </li>
      </ul>

      <footer
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        <p>© {new Date().getFullYear()} Star Underscore. All rights reserved.</p>
        <p
          style={{
            fontSize: "0.8rem",
          }}
        >
          Exciting updates are on the way! This site is under active construction to bring you even more tools, training, and resources—be sure to check back soon for the latest improvements.
        </p>
      </footer>
    </main>
  </EmptyLayout>
);

export default IndexPage;
