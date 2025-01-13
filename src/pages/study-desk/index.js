import React from "react";
import StudyDeskLayout from "../../components/StudyDeskLayout/StudyDeskLayout";

// {
//   title: "Technical Skills",
//   items: [
//     { title: "Data Structures and Algorithms (DSA)", href: "/skills/dsa" },
//     { title: "Systems Design", href: "/skills/systems-design" },
//     { title: "Cryptography and Security", href: "/skills/cryptography" },
//     { title: "Linux and System Administration", href: "/skills/linux" },
//     { title: "C++ Development", href: "/skills/cpp" },
//   ],
// },
// Add other sections as needed



// const tabs = [
//   {
//     title: "Overview",
//     href: "/overview", // Add href for tabs
//   },
//   {
//     title: "Resources",
//     href: "/resources", // Add href for tabs
//   },
//   {
//     title: "Personal Notes",
//     href: "/notes", // Add href for tabs
//   },
// ];


const StudyDeskPage = () => (
  <StudyDeskLayout
    tabs={null}
    activeSelection={"Home"}
  >
    <h2>Welcome to the Study Desk</h2>
    <p>
      This is my dedicated space for storing and organizing my studies. Here, I centralize resources, personal notes, and learning materials for a wide range of subjects I'm exploring. Whether it's languages, technical skills, or critical thinking, this desk helps me stay focused and track my progress. Feel free to explore the tabs and navigation to see how I structure my learning journey. This is where curiosity meets discipline, and ideas are built into knowledge.
    </p>
  </StudyDeskLayout>
);

export default StudyDeskPage;
