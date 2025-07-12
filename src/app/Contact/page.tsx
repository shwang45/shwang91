"use client";
import { Typography, Box, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";

export default function ContactPage() {
  return (
    <Box sx={{ padding: "32px", maxWidth: "700px" }}>
      {/* Join Us Section */}
      <Typography variant="h4" gutterBottom>
        Join Us
      </Typography>

      <Typography variant="h5" gutterBottom>
        Undergrad and MS Students
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2, textAlign: "justify" }}>
        AIM Lab is seeking motivated and passionate CSUN undergraduate and MS students interested in research at the intersection of wearables, robotics, and machine learning.  
        Students are expected to commit at least 10 hours per week or full-time position.  
        If you are interested in joining the lab, please contact Dr. Seunghoon Hwang via email with your brief statement of your interests.
      </Typography>

      {/* Contact Section */}
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>

      <Typography variant="body1" sx={{ marginTop: 2 }}>
        <strong>Dr. Seunghoon Hwang</strong>
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Assistant Professor, Department of Mechanical Engineering<br />
        California State University, Northridge (CSUN)
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <EmailIcon fontSize="small" />
        <Link href="mailto:shwang@example.edu" underline="hover">
          Will be updated soon
        </Link>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 1 }}>
        <LocationOnIcon fontSize="small" />
        <Typography variant="body2">
          Will be updated soon
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 1 }}>
        <LanguageIcon fontSize="small" />
        <Link href="https://scholar.google.com/citations?user=TU6C-S8AAAAJ" target="_blank">
          Google Scholar
        </Link>
      </Box>
    </Box>
  );
}
