"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useRouter, usePathname } from "next/navigation";

export default function LabTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = React.useState(pathname.replace("/", ""));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    router.push(`/${newValue}`);
  };

  useEffect(() => {
    setValue(pathname.replace("/", ""));
  }, [pathname]);

  const TAB_ITEMS = ["about", "Members","research", "publication", "News","Pictures", "Contact"];

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: {
                  xs: "none",   // 모바일에서는 숨김
                  sm: "flex",   // 데스크탑에서는 보임
                },
        justifyContent: "center",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {TAB_ITEMS.map((item, index) => (
              <Tab
                sx={{
                  padding: {
                    xs: "0 6px",
                    sm: "0 20px",
                    lg: "0 30px",
                  },
                  fontSize: { xs: "12px", sm: "16px", lg: "20px" },
                  minWidth: {
                              xs: "10px",  // 📱 모바일에서 너비 제한
                              sm: "60px",
                            },
                  textTransform: "capitalize", // 보기 좋게 첫 글자 대문자
                  bgcolor: "#ffffff",  // 💡 다크 모드 대비용 배경
                  borderRadius: 1,
                }}
                key={index}
                label={item}
                value={item}
              />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
