import { Typography } from "@mui/material";

export default function () {
  return (
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
      <div style={{ fontSize: "24px" }}>Objective</div>
      <div style={{ fontSize: "13px" }}>
        <strong>Mechanical impedance</strong> is a fundamental property of the human neuromuscular system that enables stable and adaptive interactions with the physical world. 
        It plays a key role in regulating how the body responds to external forces, especially in unpredictable or dynamic environments. 
        Understanding and quantifying joint impedance is essential not only for <strong>advancing wearable robotic systems</strong> that physically interact with humans, 
        but also for <strong>designing personalized rehabilitation protocols</strong> that account for individual biomechanical characteristics. 
        By measuring impedance using wearable robots, we can gain deeper insight into human motor control and develop assistive technologies that are both safe and tailored to individual needs.
      </div>
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
      {/* <div style={{ fontSize: "24px" }}>Approach</div>
      <div style={{ fontSize: "13px" }}>
        Using our <b>parallel mechanism shoulder exoskeleton robot</b> (the
        figures above), we applied random Gaussian noise position pertrabtion to
        shoulder joint, and measured the response output torque. Then we
        estimate the impulse response function (IRF), representing dynamic
        relationship between input position perturbation and output torque,
        using <b>the non-parametric system identification method</b> and compute
        the shoulder joint stiffness by using this IRF.
      </div> */}

      {/* <div style={{ fontSize: "24px" }}>Results</div>
      <div style={{ fontSize: "13px" }}>
        We found{" "}
        <b>
          shoulder joint stiffness was significantly affected by arm postures in
          3D space
        </b>{" "}
        (figure A-C), and{" "}
        <b>
          males showed higher stiffness at all arom postures compared to females
          (figure D-F).
        </b>{" "}
        These results can explain how intrinsic mechanical properties of human
        shoulder joint can be affected to joint stability in 3D space, and also
        provide the explaination why females have more incidence of shoulder
        joint injury than males.
      </div> */}
      {/* <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <img
          src="https://github.com/shwang45/shblog/blob/main/img/Results.jpg?raw=true"
          alt="R1"
          style={{ maxWidth: "100%", height: "auto", display: "block" }}
        />
      </div> */}
      <div style={{ fontSize: "24px" }}>Publications</div>
      <a>
        [1] Hwang, Seunghoon, et al. "Characterization of Human Shoulder Joint
        Stiffness across 3D Arm Postures and its Sex Differences." IEEE
        Transactions on Biomedical Engineering (2024).
      </a>
      <a>
        [2] Seunghoon Hwang, Edward Chan, and Hyunglae Lee. "Quantification of
        Shoulder Joint Impedance during Dynamic Motion: A Pilot Study Using a
        Parallel-Actuated Shoulder Exoskeleton Robot" IEEE Ubiquitous obot
        (2024).
      </a>
    </div>
  );
}
