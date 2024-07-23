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
          Development of Safety-Critical Control
        </Typography>
        <div style={{ fontSize: '24px' }}>Objective</div>
        <div style={{ fontSize: '13px' }}><b>Safety</b> is a fundamental property of human-robot interaction, particularly in exoskeleton robot systems, which continuously interact with users throughout their operation. 
          While previous robotic controllers have improved stability and human performance during tasks with exoskeleton robots, safety during these tasks remains an unresolved issue. 
          To address this, I have developed safety-critical control strategies to ensure user safety. These strategies include <b>preventing the robot from operating beyond the human range of motion, 
          avoiding unintended divergent assistance, and mitigating impacts on human joints.</b></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img 
                src="https://github.com/shwang45/shblog/blob/main/img/exp_setup.png?raw=true"
                alt="R1"
                style={{ maxWidth: "100%", height: "auto", display: "block" }}
              />
          </div>
        </div>
        <div style={{ fontSize: '24px' }}>Approach</div>
        <div style={{ fontSize: '13px' }}>To continuously estimate human shoulder joint stiffness during tasks, we developed a <b>data-driven model of shoulder joint impedance.</b> 
          This model captures the variability (upper and lower bounds) in shoulder joint stiffness, which depends on individual characteristics and states. 
          These boundary values are then incorporated into the <b>robust control barrier function (rCBF)</b> to determine the appropriate robot stiffness, ensuring user safety.
          Additionally, we developed a <b>preview control barrier function (prev-CBF)</b> that utilizes preview information (e.g., future information measured by sensors or predicted by models) to make the safety controller less conservative. 
          This method can ensure user safety with a smaller range of input, thereby reducing the system size.
        </div>
        
        <div style={{ fontSize: '24px' }}>Results</div>
        <div style={{ fontSize: '13px' }}>The data-driven model of shoulder joint stiffness demonstrated its ability to capture the large variability in human shoulder joint stiffness (Fig. A). 
          Additionally, experimental results with 8 healthy subjects showed that <b>our proposed method successfully ensures user safety, as the shoulder exoskeleton maintains safety limits for position and acceleration (Figs. B-D)</b>. 
          Furthermore, the proposed method was effective in <b>reducing shoulder joint impact during tasks with the shoulder exoskeleton</b> (<b><span style={{ color: 'blue' }}>left video: without safety controller, right video: with our proposed safety controller</span></b>).</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/r3_wo_Safety.gif?raw=true"
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
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <img 
                src="https://github.com/shwang45/shblog/blob/main/img/R3_results.png?raw=true"
                alt="R1"
                style={{ maxWidth: "70%", height: "auto", display: "block" }}
              />
          </div>
        </div>
        <div style={{ fontSize: '24px' }}>Publications</div>
          <a href="https://drive.google.com/file/d/1xxsfyMs1IdQtIoTresFDfEeHvNcvx08X/view?usp=share_link">
          [1] Hwang, Seunghoon, Tarun Pati, Aditya Saxena, Hyunglae Lee, Sze Zheng Yong ”Safe Variable Stiffness Control for Shoulder Exoskeleton Robots.” IEEE TRANSACTIONS ON CONTROL SYSTEMS TECHNOLOGY (2024).
          </a>
          <a href="https://drive.google.com/file/d/1_qONrBcZS8ShLLflTTQQhPGKz0hQQOQ8/view?usp=share_link">
          [2] Pati, T.+, <b>Hwang, S.+</b>, and Yong, S.Z. Control Barrier Functions for Linear Continuous Time Input Delay Systems with Limited Horizon Previewable Disturbances. 2024 American Control Conference (ACC). IEEE, 2024. (<b><span style={{ color: 'black' }}>First author equally contributed</span></b>)
          </a>
          <a href="https://drive.google.com/file/d/1viL80basEBU6__KpaXX3I0iH7-EmAPmK/view?usp=share_link">
          [3] Tarun Pati+, <b>Hwang, S.H.+</b>, Sze Zheng Yong. 2023. Preview Control Barrier Functions for Linear Continuous Time Systems with Previewable Disturbances. 2023 European Control Conference (ECC). IEEE, 2023. (<b><span style={{ color: 'black' }}>First author equally contributed</span></b>)
          </a>
      </div>
    </div>
  );
}
