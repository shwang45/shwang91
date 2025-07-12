import { Typography } from "@mui/material";

export default function () {
  return (
    <div>
      <Typography variant="h4" component={"h4"}>
        Publications
      </Typography>
      <p>
        <b>Journal Papers</b>
      </p>
      <ol>
        <p style={{ fontStyle: "italic", fontSize: "20px" }}>
        We are excited to contribute many more from AIM Lab in the near future — stay tuned!
        </p>
      </ol>
      <br />
      <p>
        <b>Conference Papers</b>
      </p>
      <ol>
        <p style={{ fontStyle: "italic", fontSize: "20px" }}>
        We look forward to filling this section with future conference papers from AIM Lab students.
        <strong>You could be the one contributing to our next publication!</strong>
        </p>
      </ol>
      <br />
      <p><b>Previous Publications</b></p>
      <p style={{ fontStyle: "italic", fontSize: "20px" }}>
        These publications were completed prior to the establishment of AIM Lab. You can view the full list on&nbsp;
        <a href="https://scholar.google.com/citations?user=TU6C-S8AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
          Google Scholar
        </a>.
      </p>
    </div>
  );
}
