import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { useEffect, useMemo } from "react";
import { useTheme as useCustomTheme } from "./ThemeContext";

const MaterialThemeProvider = ({ children }) => {
  const { theme } = useCustomTheme();

  // Create a Material-UI theme based on `data-theme`
  const muiTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme === "dark" ? "dark" : "light",
          background: {
            default: theme === "dark" ? "#121212" : "#ffffff",
          },
          text: {
            primary: theme === "dark" ? "#ffffff" : "#000000",
          },
        },
      }),
    [theme]
  );

  return <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;
};

export default MaterialThemeProvider;
