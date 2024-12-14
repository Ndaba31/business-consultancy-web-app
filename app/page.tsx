"use client";

import { Typography, useTheme } from "@mui/material";
import theme from "./theme/theme";
// import Image from "next/image";

export default function Home() {
  const theme = useTheme()
  return (
    <Typography variant="h1" color={theme.palette.text.primary}>Hello World</Typography>
  );
}
