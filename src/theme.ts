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
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1280,
      xl: 1600,
    },
  },
  palette: {
    mode: "light", // ✅ 항상 라이트 모드
    background: {
      default: "#ffffff", // ✅ 전체 배경 흰색
      paper: "#ffffff",   // ✅ 카드나 AppBar 배경도 흰색
    },
    text: {
      primary: "#000000",   // ✅ 주 텍스트 색상: 검정
      secondary: "#333333", // ✅ 보조 텍스트 색상도 진한 회색
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    allVariants: {
      color: "#000000", // ✅ 모든 텍스트에 기본으로 검정색 지정
    },
  },
});

export default theme;

