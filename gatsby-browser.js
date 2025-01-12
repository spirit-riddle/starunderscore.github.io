import React from "react";
import { ThemeProvider } from "./src/components/FrontSite/ThemeContext";
import MaterialThemeProvider from "./src/components/FrontSite/MaterialThemeProvider";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MaterialThemeProvider>{element}</MaterialThemeProvider>
  </ThemeProvider>
);
