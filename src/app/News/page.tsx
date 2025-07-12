"use client";
import { Typography, Card, CardContent, Box } from "@mui/material";

type NewsItem = {
  date: string;
  title: string;
  description?: string;
};

const newsList: NewsItem[] = [
  {
    date: "2025-09-01",
    title: "AIM Lab officially launched at CSUN!",
    description: "We are excited to announce the official launch of the Assistive Intelligence and Motion (AIM) Lab at California State University, Northridge, starting in Fall 2025.",
  },
  // 필요시 더 추가 가능
];

export default function NewsPage() {
  return (
    <Box sx={{ padding: "32px" }}>
      <Typography variant="h4" gutterBottom>
        News
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {newsList.map((news, idx) => (
          <Card key={idx} variant="outlined" sx={{ padding: 2 }}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {news.date}
              </Typography>
              <Typography variant="h6" sx={{ marginTop: 1 }}>
                {news.title}
              </Typography>
              {news.description && (
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {news.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
