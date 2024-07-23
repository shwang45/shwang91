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
          Other Projects
        </Typography>
        <div style={{ fontSize: '24px' }}>Development of mobile pelvic support system</div>
        <div style={{ fontSize: '13px' }}>This project aims to develop a mobile pelvic support system for patients with neurological disorders. 
          This system can provide the assistance movement for pelvic in frontal plane, and assist patients weight support. Additionally, the system can operate with lower extremity exoskeleton.
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/B_system.gif?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/B-system2.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/B_system3.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        <div style={{ fontSize: '24px' }}>Publications</div>
          <a href="https://drive.google.com/file/d/1VTw-tusGBpDRTbgU72vnYWOHITh6UImA/view?usp=share_link">
          [1] <b>S Hwang</b>, L Seungchan, S Dongbin, B Inhyuk, H Seoyeon, K Wansoo. Development of a Prototype Overground
          Pelvic Obliquity Support Robot for Rehabilitation of Hemiplegia Gait. Sensors 22.7 (2022)
          </a>

        <div style={{ fontSize: '24px' }}>Development of hip assistance exoskeleton</div>
        <div style={{ fontSize: '13px' }}>This project aims to develop a hip assistance exoskeleton for elderly people. The robot estimate the gait phase and provide the assistance torque for hip joint.
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/was2.gif?raw=true"
              alt="R1"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
        </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/was3.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
        
        <div style={{ fontSize: '24px' }}>Development of tendon-driven ankle exoskeleton to prevent the foot drop</div>
        <div style={{ fontSize: '13px' }}>This project aims to develop a tendon-driven ankle exoskeleton to prevent foot drop. The stiffness of the spring prevents foot drop, and the energy generated during walking is stored in the spring and released to assist during push-off.</div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img 
              src="https://github.com/shwang45/shblog/blob/main/img/ankle.gif?raw=true"
              alt="R2"
              style={{ maxWidth: "100%", height: "auto", display: "block" }}
            />
          </div>

        

      </div>
    </div>
  );
}
