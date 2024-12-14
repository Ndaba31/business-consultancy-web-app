"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#A4204F", // Maroon
    },
    secondary: {
      main: "#747CB3", // Faded Blue
    },
    error: {
      main: "#d32f2f", // Red
    },
    background: {
      default: "#E3C9D7", // Light grey background
      paper: "#ffffff", // White card backgrounds
    },
    text: {
      primary: "#212121", // Dark grey text
      secondary: "#757575", // Medium grey text
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "2rem", fontWeight: 700 },
    h3: { fontSize: "1.75rem", fontWeight: 700 },
    h4: { fontSize: "1.5rem", fontWeight: 600 },
    h5: { fontSize: "1.25rem", fontWeight: 600 },
    h6: { fontSize: "1rem", fontWeight: 600 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners
        },
        containedPrimary: {
          color: "#fff", // Ensure text is white on primary buttons
        },
      },
    },
  },
});

export default theme;
