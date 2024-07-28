import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import "./globals.css";
import Tabs from "@/components/Tabs";
import { Typography, Box } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = true;
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Box
              className="flex flex-col"
              sx={{
                gap: {
                  xs: "10px",
                  sm: "20px",
                  lg: "30px",
                },
                minHeight: "100vh",
                height: "100%",
                padding: {
                  xs: "2vh 5vw",
                  sm: "5vh 5vw",
                  lg: "5vh 25vw",
                },
              }}
            >
              <header>
                <div>
                  <Typography
                    variant="h4"
                    component="h4"
                    style={{ fontFamily: "cursive" }}
                  >
                    Seunghoon Hwang
                  </Typography>
                </div>
                <Tabs />
              </header>
              <div style={{ display: "flex", flex: 1, padding: "20px 0" }}>
                {children}
              </div>
              <footer>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                  }}
                >
                  <Typography variant="body2">
                    Published with
                    <a href="https://pages.github.com">GitHub Pages</a>
                  </Typography>
                  <Typography variant="caption" style={{ fontStyle: "italic" }}>
                    And special thanks to my best frd, Song
                  </Typography>
                </div>
              </footer>
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
