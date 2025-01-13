import React from "react";
import { useTheme } from "../../FrontSite/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
        color: theme === "dark" ? "#fff" : "#000",
      }}
      className="footer"
    >
      <p>© {new Date().getFullYear()} Star Underscore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
