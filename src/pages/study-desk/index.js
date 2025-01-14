import React from "react";
import StudyDeskLayout from "../../components/StudyDeskLayout/StudyDeskLayout";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";

const StudyDeskPage = () => {
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
    <StudyDeskLayout
      tabs={null}
      activeSelection={"Home"}
    >
      <Helmet>
        <title>Study Desk | {siteTitle}</title>
      </Helmet>
      <h2>Welcome to the Study Desk</h2>
      <p>
        This is my dedicated space for storing and organizing my studies. Here, I centralize resources, personal notes, and learning materials for a wide range of subjects I'm exploring. Whether it's languages, technical skills, or critical thinking, this desk helps me stay focused and track my progress. Feel free to explore the tabs and navigation to see how I structure my learning journey. This is where curiosity meets discipline, and ideas are built into knowledge.
      </p>
    </StudyDeskLayout>
  );
}

export default StudyDeskPage;
