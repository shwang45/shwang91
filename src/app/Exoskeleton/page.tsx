import Link from 'next/link'
import { Typography } from "@mui/material";

export default function () {
  return (
    <div>
      <Typography variant="h6" component={"h6"}>
        Research Abstract
      </Typography>
      <div
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <p>
          <Typography variant="h6" component={"h6"}>
            [R1] Characterization of Shoulder Joint Impedance
          </Typography>
          <li>
            <Link href="/publication">sss</Link>
          </li>
          <li style={{ fontSize: "13px" }}>
          <b>Mechanical Impedance</b> is a fundamental property of the human neuromuscular system that facilitates seamless, dynamic interactions with the physical environment. Specifically, it plays a crucial role when humans interact with unpredictable and/or destabilizing environments, complementing the slower actions that can be achieved through neural feedback.
          In this study, using our developed shoulder exoskeleton robot (figure.A), I characterized the shoulder joint impedance, especially the stiffness representing the joint stability, across 3D arm postures and investigate the its sex differences.
          We found <b>shoulder joint stiffness was significantly affected by arm postures in 3D space</b> (figure.B), and <b>males showed higher stiffness at all arom postures compared to females</b> (figure.C-E).<br />
          </li>
          <br />
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
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/R1_Img.png?raw=true"
              alt="R1"
              style={{ maxWidth: "80%", height: "auto", display: "block" }}
            />
          </div>
        </p>
        <br />
        <p>
          <Typography variant="h6" component={"h6"}>
            [R2] Development of Safety-Critical Control System incorporating Previewable Information.
          </Typography>
          <li style={{ fontSize: "13px" }}>
            <b>Safety</b> is one of the most important factors in the development of rehabilitation robots. In this study, we developed a safety-critical control system to prevent users from encountering unsafe situations (e.g., the robot operating beyond the human range of motion, the robot providing unintended assistance to the user). 
            We utilized control barrier functions (CBFs) to compute the controlled invariant set, ensuring that the system states always remain within a defined safe set. However, conventional CBFs tend to make controllers conservative because they consider the worst-case conditions.
            In contrast to conventional CBFs, our method incorporates previewable information into the safety control framework. This approach makes the controller less conservative, ensuring system safety with a smaller range of control input bounds. Consequently, the controller intervenes less frequently while still ensuring system safety.<br />
            Simulation results showed that both conventional and preview CBFs succesisfully ensutre the system safety, but our method showed less conservative, input always intervened later, samller stopping time (in Figure).
          </li>
          <br />
          <li style={{ fontSize: "13px" }}>
            <a href="https://drive.google.com/file/d/1viL80basEBU6__KpaXX3I0iH7-EmAPmK/view?usp=share_link">
            Tarun Pati+, <b>Hwang, S.H.+</b>, Sze Zheng Yong. 2023. Preview Control Barrier Functions for Linear Continuous Time Systems with Previewable Disturbances. 2023 European Control Conference (ECC). IEEE, 2023. (First author equally contributed)
            </a>
          </li>
          <li style={{ fontSize: "13px" }}>
            <a href="https://drive.google.com/file/d/1_qONrBcZS8ShLLflTTQQhPGKz0hQQOQ8/view?usp=share_link">
            Pati, T.+, <b>Hwang, S.H.+</b> and Yong, S.Z. Control Barrier Functions for Linear Continuous Time Input Delay Systems with Limited Horizon Previewable Disturbances. 2024 American Control Conference (ACC). IEEE, 2024. (First author equally contributed)
            </a>
          </li>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://github.com/shwang45/shblog/blob/main/img/R2_img.png?raw=true"
              alt="R1"
              style={{ maxWidth: "80%", height: "auto", display: "block" }}
            />
          </div>
        </p>
        <br />
        <p>
          <Typography variant="h6" component={"h6"}>
            [R3] Safe variable impedance controller incorporating the data-driven model of human joint impedance.
          </Typography>
          <li style={{ fontSize: "13px" }}>
            Previous variable impedance controllers have improved human performance and stability when implemented in exoskeleton robots. However, these methods could not always guarantee user safety, and incorporating the human impedance model into variable impedance controllers has not been explored yet.
            In this study, we developed a <b>safe variable impedance controller that incorporates a data-driven model of human joint impedance</b>. I characterized the stiffness of the human shoulder joint and designed a data-driven model to continuously estimate the upper and lower bounds of shoulder joint stiffness (Fig B).
            Additionally, I integrated this data-driven model into a variable impedance control framework with safety-critical control to ensure user safety while enhancing human performance and stability. Simulations and experiments with 8 healthy subjects showed that our proposed method <b>guarantees user safety and reduces the incidence of user injury (Fig C-D)</b>.
          </li>
          <br />
          <li style={{ fontSize: "13px" }}>
            <a href="https://drive.google.com/file/d/1xxsfyMs1IdQtIoTresFDfEeHvNcvx08X/view?usp=share_link">
            <b>Hwang, Seunghoon</b>, Tarun Pati, Aditya Saxena, Hyunglae Lee, Sze Zheng Yong ”Safe Variable Stiffness Control for Shoulder Exoskeleton Robots.” IEEE TRANSACTIONS ON CONTROL SYSTEMS TECHNOLOGY (2024), (Under Review)
            </a>
          </li>
          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://github.com/shwang45/shblog/blob/main/img/R3_img.png?raw=true"
              alt="R1"
              style={{ maxWidth: "80%", height: "auto", display: "block" }}
            />
          </div>
        </p>
      </div>
    </div>
  );
}
