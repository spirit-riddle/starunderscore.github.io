import React, { useState } from "react";
import { IconButton, Modal, Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";

const TrainingInformationButtonWithModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 400,
    bgcolor: "background.paper",
    borderRadius: "8px",
    boxShadow: 24,
    p: 3,
  };

  return (
    <>
      {/* Circular Info Button */}
      <Box
        onClick={handleOpen}
        aria-label="Information about Training Section"
        sx={{
          display: "inline-block",
          cursor: "pointer",
          backgroundColor: "#ffffff",
          color: "#1976d2", // Blue icon color
          width: "24px", // Slightly reduced size to create border effect
          height: "24px", // Match width and height for circular shape
          borderRadius: "50%", // Ensure circle shape
          lineHeight: "10px",
          marginLeft: "10px",
          "&:hover": {
            backgroundColor: "#e3f2fd", // Light blue on hover
          },
        }}
      >
        <InfoIcon />
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {/* Close Button */}
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Content */}
          <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
            Training Categories
          </Typography>
          <Typography
            id="modal-description"
            variant="body2"
            sx={{ mb: 2, color: "text.primary" }}
          >
            <span style={{ color: "#1976d2", fontWeight: "bold" }}>Main</span>: Foundational skills and core concepts.<br />
            <span style={{ color: "#1976d2", fontWeight: "bold" }}>Professional</span>: Specialized skills and advanced techniques.
          </Typography>
          <a
            href="/blog/2025-01-11-a-new-standard-for-training-main-and-professional"
            style={{
              textDecoration: "none",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Learn More
          </a>
        </Box>
      </Modal>
    </>
  );
};

export default TrainingInformationButtonWithModal;
