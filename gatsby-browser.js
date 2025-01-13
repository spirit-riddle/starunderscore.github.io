import React from "react";
import { ThemeProvider } from "./src/components/FrontSite/ThemeContext";
import MaterialThemeProvider from "./src/components/FrontSite/MaterialThemeProvider";
import { TabsProvider } from "./src/components/StudyDeskLayout/TabsContext";


export const wrapRootElement = ({ element }) => (
  <ThemeProvider>
    <MaterialThemeProvider>
      <TabsProvider>
        {element}
      </TabsProvider>
    </MaterialThemeProvider>
  </ThemeProvider>
);
