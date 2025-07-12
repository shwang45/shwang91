"use client";

import { Box, Typography, Grid } from "@mui/material";

export default function AboutPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography variant="h4" component="h1" align="center">
        Welcome to the <br />
        Assistive Intelligence and Motion Lab (AIM Lab)
      </Typography>

      <img
        src="https://github.com/shwang45/shblog/blob/main/img/aim_logo.png?raw=true"
        alt="AIM Lab Logo"
        style={{ maxWidth: "100%", height: "auto", marginTop: 8, marginBottom: 8 }}
      />

      <Typography variant="body1" component="p" sx={{ lineHeight: 1.6, textAlign: "justify" }}>
        <strong>AIM (Assistive & Intelligent Motion)</strong> Lab focuses on designing wearable robotic systems and developing assistive technologies that intelligently support and enhance human movement across both <strong>rehabilitation</strong> and <strong>industrial</strong> domains.
        Our mission is to develop personalized assistive technologies that adapt to each individual's physical condition and task demands by integrating <strong>robotics, human biomechanics, control theory, and machine learning.</strong>
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <img
            src="https://github.com/shwang45/shblog/blob/main/img/1st_step.gif?raw=true"
            alt="R1"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src="https://github.com/shwang45/shblog/blob/main/img/r3_w_safety.gif?raw=true"
            alt="R2"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <img
            src="https://github.com/shwang45/shblog/blob/main/img/B_system.gif?raw=true"
            alt="R3"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

