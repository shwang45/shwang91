import { Typography } from "@mui/material";

export default function () {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography variant="h6" component={"h6"}>
        Intro.
      </Typography>
      <Typography variant="body1" component={"p"} sx={{ lineHeight: 1.6 }}>
        Hi, my name is Seunghoon Hwang. I am a roboticist specializing in exoskeleton robots designed to rehabilitate motor abilities in individuals with neurological impairments. My work lies at the intersection of biomechanics and robotic control theory, where I develop control frameworks that incorporate human motor control information.
        Currently, my research focuses on characterizing the mechanical impedance of human joints, a fundamental property of the human neuromuscular system that allows smooth, dynamic interactions with the physical environment. I also develop safety-critical control systems to ensure user safety. By integrating these areas, I aim to create biomimetic controllers for exoskeleton robots that can effectively promote neuroplasticity in neurologically impaired individuals.
        I graduated from the Department of Mechatronics Engineering at Hanyang University in 2020 (PI: Dr.Changsoo Han).
        I am currently working at the
        <a href="https://sites.google.com/view/asuneurorobotics/">
          Neurorobotics Lab
        </a>
        at Arizona State University with Dr. Hyunglae Lee (Arizona State University) and Dr. Sze Zheng Yong (Northeastern).
      </Typography>
      <Typography variant="h6" component={"h6"}>
        Research Interests
      </Typography>
      <Typography variant="body1" component={"p"}>
        Rehabilitation Robotics, Human-Robot Interaction, Safety-Critical Control, Exoskeleton Robot
      </Typography>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 16, marginBottom: 16 }}>
        <img src="https://github.com/shwang45/shblog/blob/main/img/profile_2.png?raw=true" alt="Seunghoon Hwang" style={{ maxWidth: "90%", height: "auto" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/1st_step.gif?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/r3_w_safety.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/B_system.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      <Typography variant="body2" component={"p"} sx={{ textAlign: 'center' }}>
        <a href="shwang45@asu.edu">Email</a>/
        <a href="https://drive.google.com/file/d/1mSk_W9zWS9jLHnDnXcWxWDhZENIcgSIx/view?usp=share_link">CV</a>/
        <a href="https://scholar.google.com/citations?user=TU6C-S8AAAAJ&amp;hl=en">
          Google Scholar
        </a>
      </Typography>
    </div>
  );
}
