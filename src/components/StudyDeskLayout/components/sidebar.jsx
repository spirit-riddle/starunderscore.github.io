import React from "react";
import { Drawer, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../../FrontSite/ThemeContext";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  navigation = [], // Default to an empty array
  currentSection,
  currentSubItem,
  handleNavigationClick,
}) => {
  const { theme } = useTheme();

  return (
    <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
      <div
        style={{
          width: 250,
          backgroundColor: theme === "dark" ? "#333" : "#f4f4f4",
          color: theme === "dark" ? "#fff" : "#000",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={toggleSidebar} aria-label="close sidebar">
            <CloseIcon sx={{ color: theme === "dark" ? "#fff" : "#000" }} />
          </IconButton>
        </div>
        <List>
          <ListItem
            button
            selected={currentSection === "Home"}
            onClick={() => handleNavigationClick("Home", null, "/study-desk/")}
          >
            <ListItemText
              sx={{
                textDecoration: "underline",
              }}
              primary="Home"
            />
          </ListItem>

          {navigation.map((section) => (
            <React.Fragment key={section.title}>
              <ListItem>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: ".5rem",
                    color: theme === "dark" ? "#aaa" : "#666",
                  }}
                >
                  <em>{section.title}</em>
                </Typography>
              </ListItem>
              {section.items.map((item) => (
                <ListItem
                  button
                  key={item.title}
                  selected={item.href.includes(currentSubItem)}
                  onClick={() => handleNavigationClick(section.title, item.title, item.href)}
                >
                  <ListItemText
                    sx={{
                      textDecoration: "underline",
                    }}
                    primary={item.title}
                  />
                </ListItem>
              ))}
            </React.Fragment>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
