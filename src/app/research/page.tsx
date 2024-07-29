"use client";
import HumanMotorControl from "../HumanMotorControl/page";
import SafetyControl from "../SafetyControl/page";
import DrawerButton from "@/components/DrawerButton";
import Exoskeleton from "@/app/Exoskeleton/page";
import Others from "@/app/Others/page";

export default function () {
  return (
    <div>
      <div style={{ fontSize: "36px" }}>Research Experiences</div>
      <div
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
        <div style={{ fontSize: "24px" }}>Human Biomechanics</div>
        <div style={{ fontSize: "16px" }}>
          This research aims to investigate human bimomechanics,
          focusing on the mechanical impedance of human joints.{" "}
          <b>Mechanical impedance</b> is a key property of the neuromuscular
          system that enables smooth, dynamic interactions with the physical
          environment. It is especially important for managing interactions with
          unpredictable or destabilizing environments, supporting the slower
          neural feedback actions.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<HumanMotorControl />} />
        </div>

        <div style={{ fontSize: "24px" }}>Safety-Critical Control</div>
        <div style={{ fontSize: "16px" }}>
          <b>Safety</b> is the most important factor when developing a robotic
          system. Especially, exoskeleton robots involve continuous physical
          interactions with their human users. Hence, ensuring the user safety
          and stable human-robot interaction should awlays be a priority when
          designing and controlling the exoskeleton.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<SafetyControl />} />
        </div>

        <div style={{ fontSize: "24px" }}>
          Exoskeleton System for Storke and SCI patients
        </div>
        <div style={{ fontSize: "16px" }}>
          <b>Exoskeleton</b> aim to provide assistance to impaired limb for
          rehabilitation trainging of neuromuscular impairments, such as stroke,
          spinal cord injury, etc. To recover their motor ability, this
          technologies is one of the promissing method.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<Exoskeleton />} />
        </div>

        <div style={{ fontSize: "24px" }}>Other Robotics Research</div>
        <div style={{ fontSize: "16px" }}>
          I also have the experience of other categories robotics research
          proejcts.
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <DrawerButton children={<Others />} />
        </div>
      </div>
    </div>
  );
}
