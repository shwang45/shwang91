import { Typography } from "@mui/material";

export default function () {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography variant="h6" component={"h6"}>
        Intro.
      </Typography>
      <Typography variant="body1" component={"p"} sx={{ lineHeight: 1.6 }}>
        Hello I'm Seunghoon Hwang. Now, I'm Postdoc Position at
        <a href="https://sites.google.com/view/asuneurorobotics/">
          Neurorobotics Lab
        </a>
        at Arizona State University(PI:Hyunglae Lee). I have 6+ years Research
        Experience of Rehabilitation Exoskeleton Robot System. I interest in how
        to make proper interaction with human and robot. I am skilled with
        valuable insights into Robotics, Exoskeleton Robot control, and
        Exoskeleton Robot hardware and software with Bio-mechanics and Gait
        Analysis.
      </Typography>

      <Typography variant="h6" component={"h6"}>
        Research Interests
      </Typography>
      <Typography variant="body1" component={"p"}>
        Human Robot Interaction, Exoskeleton Robot, Rehabilitation Robot
      </Typography>
      <Typography variant="body2" component={"p"}>
        <a href="shwang45@asu.edu">Email</a>/
        <a href="seunghoonhwang.github.io/Seunghoon_Hwang_CV (1).pdf">CV</a>/
        <a href="https://scholar.google.com/citations?user=TU6C-S8AAAAJ&amp;hl=en">
          Google Scholar
        </a>
      </Typography>
    </div>
  );
}
