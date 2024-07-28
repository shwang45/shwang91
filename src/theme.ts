"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // theme.breakpoints.up('xs')
      sm: 640, // theme.breakpoints.up('sm')
      md: 1024, // theme.breakpoints.up('md')
      lg: 1280, // theme.breakpoints.up('lg')
      xl: 1600, // theme.breakpoints.up('xl')
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
