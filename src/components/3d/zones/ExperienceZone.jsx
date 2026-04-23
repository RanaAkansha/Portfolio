import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import { experience, zonePositions } from "../../../data/portfolio";

export default function ExperienceZone() {
  const pos = zonePositions.experience;

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Zone Floor */}
      <mesh position={[0, 0.05, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[25, 25]} />
        <meshStandardMaterial color="#050505" roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Elegant Archway/Structure */}
      <group position={[0, 0, -5]}>
        <mesh position={[0, 4, 0]} castShadow>
          <torusGeometry args={[5, 0.05, 16, 64, Math.PI]} />
          <meshPhysicalMaterial 
            color="#a29bfe"
            metalness={0.8}
            roughness={0.2}
            emissive="#a29bfe"
            emissiveIntensity={0.5}
          />
        </mesh>
      </group>

      {/* Title */}
      <Text
        position={[0, 5, -5]}
        fontSize={1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        EXPERIENCE
      </Text>

      {/* Experience Cards */}
      <group position={[0, 2, 0]}>
        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
          {experience.map((exp, index) => (
            <group key={exp.id} position={[0, -index * 2.5, 0]}>
              {/* Glass Card Background */}
              <mesh position={[0, 0, -0.5]}>
                <boxGeometry args={[12, 2.5, 0.1]} />
                <meshPhysicalMaterial 
                  color="#ffffff"
                  transmission={0.9}
                  opacity={1}
                  metalness={0.1}
                  roughness={0.05}
                  ior={1.5}
                  thickness={0.5}
                  transparent
                />
              </mesh>
              
              {/* Role & Company */}
              <Text
                position={[0, 0.6, 0]}
                fontSize={0.5}
                color="#a29bfe"
                anchorX="center"
              >
                {exp.role} @ {exp.company}
              </Text>
              
              {/* Duration & Type */}
              <Text
                position={[0, 0.1, 0]}
                fontSize={0.25}
                color="#a3a3a3"
                anchorX="center"
              >
                {exp.duration} • {exp.type}
              </Text>
              
              {/* Description */}
              <Text
                position={[0, -0.4, 0]}
                fontSize={0.2}
                color="#ffffff"
                anchorX="center"
                maxWidth={10}
                textAlign="center"
                lineHeight={1.5}
              >
                {exp.description}
              </Text>
            </group>
          ))}
        </Float>
      </group>
    </group>
  );
}
