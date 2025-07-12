"use client";
import { Typography, Box, Card, CardMedia, CardContent } from "@mui/material";

// 각 사진 정보
const events = [
  {
    title: "AIM Lab Kickoff Meeting",
    date: "Will be held in Fall 2025",
    description: "We will hold our very first kickoff meeting to welcome new members and discuss upcoming projects.",
    image: "/img/aim_logo.jpg",
  },
];

export default function PicturesPage() {
  return (
    <Box sx={{ padding: "32px" }}>
      <Typography variant="h4" gutterBottom>
        Pictures
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
        {events.map((event, idx) => (
          <Card
            key={idx}
            sx={{
              width: 300,
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={event.image}
              alt={event.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h6">{event.title}</Typography>
              <Typography variant="caption" color="text.secondary">
                {event.date}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                {event.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
