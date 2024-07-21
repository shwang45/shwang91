import Link from 'next/link'
import { Typography } from "@mui/material";

export default function () {
  return (
    <div>
      <div style={{ fontSize: '36px' }}>Research Experiences</div>
      <div
        style={{
          fontSize: 16,
          display: "flex",
          flexDirection: "column",
          gap: 25,
        }}
      >
      <div style={{ fontSize: '24px' }}>Human Motor Control</div>
      <div style={{ fontSize: '16px' }}>This research aims to investigate human motor control policies, focusing on the mechanical impedance of human joints. <b>Mechanical impedance</b> is a key property of the neuromuscular system that enables smooth, dynamic interactions with the physical environment. 
        It is especially important for managing interactions with unpredictable or destabilizing environments, supporting the slower neural feedback actions.</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/HumanMotorControl">
            <img src="./" alt="See all" />
          </Link>
        </div>

      <div style={{ fontSize: '24px' }}>Safety-Critical Control</div>
      <div style={{ fontSize: '16px' }}><b>Safety</b> is the most important factor when developing a robotic system. Especially, exoskeleton robots involve continuous physical interactions with their human users. 
      Hence, ensuring the user safety and stable human-robot interaction should awlays be a priority when designing and controlling the exoskeleton.</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/SafetyControl">
            <img src="src/app/research/button.jpg" alt="See all" />
          </Link>
        </div>

      <div style={{ fontSize: '24px' }}>Exoskeleton System for Storke and SCI patients</div>
      <div style={{ fontSize: '16px' }}><b>Exoskeleton</b> aim to provide assistance to impaired limb for rehabilitation trainging of neuromuscular impairments, such as stroke, spinal cord injury, etc.
      To recover their motor ability, this technologies is one of the promissing method.</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/Exoskeleton">
            <img src="src/app/research/button.jpg" alt="See all" />
          </Link>
        </div>
      
      <div style={{ fontSize: '24px' }}>Other Robotics Research</div>
      <div style={{ fontSize: '16px' }}>I also have the experience of other categories robotics research proejcts.</div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/Others">
            <img src="src/app/research/button.jpg" alt="See all" />
          </Link>
        </div>

       
      </div>
    </div>
  );
}
