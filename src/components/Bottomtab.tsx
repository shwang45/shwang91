"use client";
import React from "react";
import { Box, Link as MuiLink } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";

const TAB_ITEMS = ["about", "Members", "research", "publication", "News", "Pictures", "Contact"];

export default function BottomTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const currentTab = pathname.replace("/", "");

  const handleClick = (tab: string) => {
    router.push(`/${tab}`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        bgcolor: "#f5f5f5",
        borderBottom: "1px solid #ccc",
        display: {
                xs: "flex",   // ✅ 모바일에서 보임
                sm: "none",   // ✅ 태블릿 이상에서는 숨김
                },
        justifyContent: "center",
        gap: 2,
        py: 1,
        zIndex: 1000,
        flexWrap: "wrap",
      }}
    >
      {TAB_ITEMS.map((item) => (
        <MuiLink
          key={item}
          onClick={() => handleClick(item)}
          underline="none"
          sx={{
            cursor: "pointer",
            color: currentTab === item ? "primary.main" : "text.primary",
            fontWeight: currentTab === item ? "bold" : "normal",
            fontSize: "14px",
          }}
        >
          {item}
        </MuiLink>
      ))}
    </Box>
  );
}

