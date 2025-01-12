import React, { useState, useEffect } from "react";
import "./StudyDeskLayout.css";
import { ThemeProvider } from "../FrontSite/ThemeContext";
import TopAppBar from "../FrontSite/TopAppBar";

const StudyDeskLayout = ({
  navigation,
  tabs,
  children,
  activeSelection, // Default to "Home"
  activeSubItem = null, // Default to no sub-item
  activeTabIndex = 0, // Default to first tab
}) => {

  if (!navigation) {
    navigation = [
      {
        title: "Languages",
        items: [
          { title: "English Grammar", href: "/study-desk/languages/english-grammar/lesson-1/" },
          // { title: "Japanese", href: "/languages/japanese" },
          { title: "Arabic", href: "/study-desk/languages/arabic/resources/" },
        ],
      },
      {
        title: "Technical Skills",
        items: [
          // { title: "English Grammar", href: "/languages/english-grammar" },
          // { title: "Japanese", href: "/languages/japanese" },
          { title: "C++ Development", href: "/study-desk/technical-skills/cpp-guide/" },
        ],
      },
      {
        title: "Projects",
        items: [
          // { title: "English Grammar", href: "/languages/english-grammar" },
          // { title: "Japanese", href: "/languages/japanese" },
          { title: "MkDocs Software Printer", href: "/study-desk/projects/mkdocs-software-printer/" },
        ],
      },
    ]
  }


  // Run out of study, more study to be had:
  // const navigation = {
  //   Languages: ["English Grammar", "Japanese", "Arabic"],
  //   "Technical Skills": [
  //     "Data Structures and Algorithms (DSA)",
  //     "Systems Design",
  //     "Cryptography and Security",
  //     "Linux and System Administration",
  //     "C++ Development",
  //   ],
  //   "Critical Thinking": [
  //     "Formal Logic and Critical Thinking",
  //     "Advanced Prompt Engineering",
  //     "Game Theory",
  //   ],
  //   "Soft Skills": [
  //     "Public Speaking and Persuasion",
  //     "Psychology and Cognitive Science",
  //     "Time Management and Productivity",
  //   ],
  //   "Design and User Experience": ["Design Thinking and UX/UI"],
  //   "Finance and Strategy": ["Financial Literacy and Investments"],
  //   Projects: ["MkDocs Software Printer"],
  // };


  const [currentSection, setCurrentSection] = useState(activeSelection);
  const [currentSubItem, setCurrentSubItem] = useState(activeSubItem);
  const [currentTabIndex, setCurrentTabIndex] = useState(activeTabIndex);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Ensure props are used to set initial state
  useEffect(() => {
    setCurrentSection(activeSelection);
    setCurrentSubItem(activeSubItem);
    setCurrentTabIndex(activeTabIndex);
  }, [activeSelection, activeSubItem, activeTabIndex]);

  return (
    <ThemeProvider>
      <div className="study-desk-layout">
        {/* Header */}
        <header className="study-desk-header">
          <button className="hamburger-menu" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="logo">*_</div>
          <h1 className="title">Study Desk</h1>
        </header>

        {/* Layout Body */}
        <div className="study-desk-body">
          {/* Sidebar */}
          <nav className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
            <button className="close-sidebar" onClick={toggleSidebar}>
              ✕
            </button>
            <ul>
              {/* Hardcoded "Home" Link */}
              <li
                className={currentSection === "Home" ? "active" : ""}
                onClick={() => {
                  setCurrentSection("Home");
                  setCurrentSubItem(null);
                  setIsSidebarOpen(false);
                }}
              >
                <a href="/study-desk/">Home</a>
              </li>

              {/* Dynamically Rendered Navigation */}
              {navigation.map((section) => (
                <li key={section.title}>
                  <small
                    style={{
                      color: "rgb(140, 140, 140)",
                      margin: "5px 0",
                    }}
                  >
                    <em>{section.title}</em>
                  </small>
                  {section.items && (
                    <ul>
                      {section.items.map((item) => (
                        <li
                          key={item.title}
                          className={item.title === currentSubItem ? "active-subitem" : ""}
                          onClick={() => {
                            setCurrentSection(section.title);
                            setCurrentSubItem(item.title);
                            setIsSidebarOpen(false);
                          }}
                        >
                          <a href={item.href}>{item.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Content */}
          <div className="main-content">
            {/* Tabs */}
            {tabs && tabs.length > 0 && (
              <div className="tabs">
                {tabs.map((tab, index) => (
                  <a
                    key={index}
                    href={tab.href}
                    className={index === currentTabIndex ? "active-tab" : ""}
                  >
                    {tab.title}
                  </a>
                ))}
              </div>
            )}

            {/* Content Area */}
            <div className="content">
              {children}
              {/* Footer */}
              <footer className="footer">
                <p>© {new Date().getFullYear()} Spirit Riddle. All rights reserved.</p>
              </footer>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default StudyDeskLayout;
