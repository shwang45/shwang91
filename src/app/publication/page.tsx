import { Typography } from "@mui/material";

export default function () {
  return (
    <div style={{ color: "black" }}>
      <Typography variant="h4" component={"h4"}>
        Publications
      </Typography>
      <p style={{ fontSize: "14px", fontStyle: "italic" }}>
        *Authors marked with an asterisk contributed equally.
      </p>

      {/* Journal Papers */}
      <p>
        <b>Journal Papers</b>
      </p>
      <ol>
        <p style={{ fontStyle: "italic", fontSize: "20px" }}>
          We are excited to contribute many more from AIM Lab in the near future — stay tuned!
        </p>
      </ol>
      <br />

      {/* Conference Papers */}
      <p>
        <b>Conference Papers</b>
      </p>
      <ol reversed>
        <li>
          [C1] Donggyu Lee*, <b>Seunghoon Hwang*</b>, SeungMin Choi, Yoon Seo Kim, Wansoo Kim.{" "}
          <b><i>Proactive Ergonomic Human Motion Generation for Human-Humanoid Collaboration</i></b>.{" "}
          <b>IEEE Humanoids</b>, 2025. <br />
        </li>
      </ol>
      <br />

      {/* Previous Publications */}
      <p>
        <b>Previous Publications</b>
      </p>
      <p style={{ fontStyle: "italic", fontSize: "20px" }}>
        These publications were completed prior to the establishment of AIM Lab. You can view the full list on&nbsp;
        <a
          href="https://scholar.google.com/citations?user=TU6C-S8AAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar
        </a>.
      </p>
    </div>
  );
}

