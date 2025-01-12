import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return savedTheme || (prefersDark ? "dark" : "light");
    }
    return "light"; // Default for SSR
  });

  const [syncWithOS, setSyncWithOS] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("syncWithOS") === "true";
    }
    return false; // Default to manual mode
  });

  const applyTheme = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    if (syncWithOS) {
      // If "Sync with OS" is enabled, disable it for manual control
      setSyncWithOS(false);
      localStorage.setItem("syncWithOS", "false");
    }
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  const toggleSyncWithOS = () => {
    const newSync = !syncWithOS;
    setSyncWithOS(newSync);
    localStorage.setItem("syncWithOS", newSync.toString());

    if (newSync) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const osTheme = prefersDark ? "dark" : "light";
      setTheme(osTheme);
      applyTheme(osTheme);
    }
  };

  useEffect(() => {
    if (!syncWithOS) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateThemeBasedOnOS = () => {
      const osTheme = mediaQuery.matches ? "dark" : "light";
      setTheme(osTheme);
      applyTheme(osTheme);
    };

    updateThemeBasedOnOS(); // Apply theme immediately

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateThemeBasedOnOS);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updateThemeBasedOnOS); // Fallback for older browsers
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateThemeBasedOnOS);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(updateThemeBasedOnOS); // Fallback cleanup
      }
    };
  }, [syncWithOS]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, syncWithOS, toggleSyncWithOS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
