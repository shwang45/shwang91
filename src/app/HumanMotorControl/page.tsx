import { Typography } from "@mui/material";

export default function () {
  return (
    <div>
      <div
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Typography variant="h4" component={"h4"}>
          Characterization of Shoulder Joint Impedance
        </Typography>
        <div style={{ fontSize: '24px' }}>Objective</div>
        <div style={{ fontSize: '13px' }}><b>Mechanical Impedance</b> is a fundamental property of the human neuromuscular system that facilitates seamless, dynamic interactions with the physical environment. 
        Specifically, it plays a crucial role when humans interact with unpredictable and/or destabilizing environments, complementing the slower actions that can be achieved through neural feedback.
        However, previous studies focused on shoulder joint impedance on 2D horizontal plane, difficult to reperesent the shoulder joint impedance in real-world. To this end, this study <b>characterized the shoulder joint stiffness in 3D space</b>. 
        Furthermore, I have investigate <b>the difference of shoulder joint stiffness between female and male</b>.</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/Figure%201_final.jpg?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/r1_exp_img2.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <div style={{ fontSize: '24px' }}>Approach</div>
        <div style={{ fontSize: '13px' }}>Using our <b>parallel mechanism shoulder exoskeleton robot</b> (the figures above), we applied random Gaussian noise position pertrabtion to shoulder joint, and measured the response output torque.
        Then we estimate the impulse response function (IRF), representing dynamic relationship between input position perturbation and output torque, using <b>the non-parametric system identification method</b> and compute the shoulder joint stiffness by using this IRF.</div>
        
        <div style={{ fontSize: '24px' }}>Results</div>
        <div style={{ fontSize: '13px' }}>We found <b>shoulder joint stiffness was significantly affected by arm postures in 3D space</b> (figure A-C),
        and <b>males showed higher stiffness at all arom postures compared to females (figure D-F).</b></div> These results can explain how intrinsic mechanical properties of human shoulder joint can be affected to joint stability in 3D space, 
        and also provide the explaination why females have more incidence of shoulder joint injury than males.
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/Results.jpg?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
        <li style={{ fontSize: "13px" }}>
          <a href="https://drive.google.com/file/d/1y6sw_0DVzftQo2nOQkfAIATXZjSjKWVC/view?usp=share_link">
          Hwang, Seunghoon, et al. "Characterization of Human Shoulder Joint Stiffness across 3D Arm Postures and its Sex Differences." IEEE Transactions on Biomedical Engineering (2024).
          </a>
        </li>
        <li style={{ fontSize: "13px" }}>
          <a href="https://drive.google.com/file/d/1yzsv_eGGGYabFcbmiv777iLPryVbN9fl/view?usp=share_link">
          Seunghoon Hwang, Edward Chan, and Hyunglae Lee. "Quantification of Shoulder Joint Impedance during Dynamic Motion: A Pilot Study Using a Parallel-Actuated Shoulder Exoskeleton Robot" IEEE Ubiquitous obot (2024).
          </a>
        </li>
      </div>
      <li style={{ fontSize: "13px" }}>
        In this study, using our developed shoulder exoskeleton robot (figure.A), I characterized the shoulder joint impedance, especially the stiffness representing the joint stability, across 3D arm postures and investigate the its sex differences.
        We found <b>shoulder joint stiffness was significantly affected by arm postures in 3D space</b> (figure.B), and <b>males showed higher stiffness at all arom postures compared to females</b> (figure.C-E).<br />
      </li>
    </div>
  );
}
