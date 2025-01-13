import React, { createContext, useContext, useState, useEffect } from "react";
import languagesTabs from "./tabs/languagesTabs.json";
import technicalSkillsTabs from "./tabs/technicalSkillsTabs.json";
import sidebarStructure from "./sidebarStructure.json";

const TabsContext = createContext();

export const TabsProvider = ({ children }) => {
  const initializeState = () => {
    if (typeof window === "undefined") return { initialSection: "", initialSubItem: "", initialTabs: [] };

    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    let initialSection = "";
    let initialSubItem = "";
    let initialTabs = [];

    if (pathSegments.length >= 3) {
      const sectionKey = pathSegments[2];
      const subItemKey = pathSegments[3];

      const matchingSection = sidebarStructure.navigation.find((nav) =>
        nav.items.some((item) => item.href.includes(sectionKey))
      );

      if (matchingSection) {
        initialSection = matchingSection.title;

        const matchingSubItem = matchingSection.items.find((item) => item.href.includes(subItemKey));
        if (matchingSubItem) {
          initialSubItem = matchingSubItem.title;

          if (sectionKey === "languages") {
            initialTabs = languagesTabs[matchingSubItem.title] || [];
          } else if (sectionKey === "technical-skills") {
            initialTabs = technicalSkillsTabs[matchingSubItem.title] || [];
          }
        }
      }
    }

    return { initialSection, initialSubItem, initialTabs };
  };

  const { initialSection, initialSubItem, initialTabs } = initializeState();

  const [currentSection, setCurrentSection] = useState(initialSection);
  const [currentSubItem, setCurrentSubItem] = useState(initialSubItem);
  const [tabs, setTabs] = useState(initialTabs);

  const updateStateFromUrl = () => {
    if (!sidebarStructure || !languagesTabs || !technicalSkillsTabs) return;

    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (pathSegments.length >= 3) {
      const sectionKey = pathSegments[2];
      const subItemKey = pathSegments[3];

      const matchingSection = sidebarStructure.navigation.find((nav) =>
        nav.items.some((item) => item.href.includes(sectionKey))
      );

      if (matchingSection) {
        setCurrentSection(matchingSection.title);

        const matchingSubItem = matchingSection.items.find((item) => item.href.includes(subItemKey));
        if (matchingSubItem) {
          setCurrentSubItem(matchingSubItem.title);

          if (sectionKey === "languages") {
            setTabs(languagesTabs[matchingSubItem.title] || []);
          } else if (sectionKey === "technical-skills") {
            setTabs(technicalSkillsTabs[matchingSubItem.title] || []);
          }
        }
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateStateFromUrl();
    }
  }, [window?.location?.pathname]);

  return (
    <TabsContext.Provider
      value={{
        currentSection,
        currentSubItem,
        tabs,
        navigation: sidebarStructure.navigation, // Pass navigation
        setCurrentSection, // Pass the setter function
        setCurrentSubItem, // Pass the setter for sub-item
        updateStateFromUrl,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => useContext(TabsContext);
