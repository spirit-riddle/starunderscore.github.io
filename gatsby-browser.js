import React from "react";
import { ThemeProvider } from "./src/components/FrontSite/ThemeContext";
import MaterialThemeProvider from "./src/components/FrontSite/MaterialThemeProvider";
import { TabsProvider } from "./src/components/StudyDeskLayout/TabsContext";
import { Helmet } from "react-helmet";

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet>
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Android Chrome Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

      <meta name="theme-color" content="#ffffff" />
      <title>Star Underscore</title>
    </Helmet>
    <ThemeProvider>
      <MaterialThemeProvider>
        <TabsProvider>
          {element}
        </TabsProvider>
      </MaterialThemeProvider>
    </ThemeProvider>
  </>
);

export const onClientEntry = () => {
  // Apply theme on client load
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");

  // Set the theme as a data attribute on the <html> element
  document.documentElement.setAttribute("data-theme", theme);

  // Listen for OS-level theme changes and adjust dynamically
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleOSThemeChange = (e) => {
    if (!savedTheme) {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  };

  // Add event listener for OS theme changes
  mediaQuery.addEventListener("change", handleOSThemeChange);
};
