import React from "react";
import { Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "../../FrontSite/ThemeContext";

const Header = ({ toggleSidebar }) => {
  const { theme } = useTheme();

  return (
    <header className={`study-desk-header ${theme}`}>
      <IconButton onClick={toggleSidebar} aria-label="open sidebar">
        <MenuIcon sx={{ color: theme === "dark" ? "#fff" : "#000" }} />
      </IconButton>
      <div
        className="logo"
        style={{
          color: theme === "dark" ? "#aaa" : "#666",
        }}
      >
        *_
      </div>
      <Typography variant="h6" className="title" sx={{ color: theme === "dark" ? "#fff" : "#000" }}>
        Study Desk
      </Typography>
    </header>
  );
};

export default Header;
