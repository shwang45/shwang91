"use client";
import HumanMotorControl from "../HumanMotorControl/page";
import SafetyControl from "../SafetyControl/page";
import DrawerButton from "@/components/DrawerButton";
import Exoskeleton from "@/app/Exoskeleton/page";
import Others from "@/app/Others/page";

export default function () {
  return (
    <div style={{ color: "black" }}>
      <div style={{ fontSize: "36px" }}>Research Interests</div>
      <div
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
        <div style={{ fontSize: "24px" }}>
          Wearable Robots
        </div>
        <div style={{ fontSize: "16px",textAlign: "justify" }}>
          <strong>Wearable robots</strong> are designed to support human limbs by <strong>providing physical assistance</strong> during both <strong>rehabilitation</strong>
          training for individuals with neuromuscular impairments—such as stroke or spinal cord injury—and physically demanding tasks in <strong>industrial</strong> environments.
          These technologies offer a promising approach to not only restore motor function in impaired individuals, but also to reduce fatigue and injury risk for healthy workers engaged in repetitive or strenuous tasks.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<Exoskeleton />} />
        </div>

        <div style={{ fontSize: "24px" }}>Human Biomechanics</div>
        <div style={{ fontSize: "16px", textAlign: "justify" }}>
          This research aims to investigate <strong>human biomechanics by quantitatively characterizing the mechanical impedance of human joints</strong> using wearable robots. 
          Mechanical impedance, a key property of the neuromuscular system, governs how the body interacts with the physical environment. 
          By leveraging this approach, we can precisely assess joint biomechanics under various conditions—such as during movement or 
          across different postures—and quantify how neurological disorders alter them. These insights enable the development of personalized rehabilitation and assistive robotic technologies.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<HumanMotorControl />} />
        </div>

        <div style={{ fontSize: "24px" }}>Safety-Critical Control</div>
        <div style={{ fontSize: "16px",textAlign: "justify" }}>
          <strong>Safety</strong> is a fundamental requirement in robotics and autonomous systems—especially when these systems interact with the real world.
          In this research, we develop <strong>safety-critical control frameworks</strong> that can make system safety even under uncertainty. 
          By combining predictive models with control theory, we aim to proactively avoid unsafe situations while reducing unnecessary conservativeness in the controller.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<SafetyControl />} />
        </div>


        <div style={{ fontSize: "24px" }}>Other Robotics Research</div>
        <div style={{ fontSize: "16px" }}>
          We also have the experience of other categories robotics research
          projects.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<Others />} />
        </div>
      </div>
    </div>
  );
}

