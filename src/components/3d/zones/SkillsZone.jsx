import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, skills } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function SkillOrb({ position, name, level }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.05}
            ior={1.5}
            thickness={0.2}
            transparent
          />
        </mesh>
      </Float>

      <Text
        position={[0, -0.8, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        {name.toUpperCase()}
      </Text>
      
      <Text
        position={[0, -1.0, 0]}
        fontSize={0.1}
        color="#737373"
        anchorX="center"
        anchorY="middle"
      >
        {level}%
      </Text>
    </group>
  );
}

export default function SkillsZone() {
  const pos = zonePositions.skills;
  const { setActivePanel } = useGameStore();

  const allSkills = useMemo(() => {
    return [
      ...skills.frontend.slice(0, 3),
      ...skills.backend.slice(0, 3)
    ];
  }, []);

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Floor */}
      <mesh position={[0, 0.05, 0]} receiveShadow rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#050505"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Zone Title */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
        <Text
          position={[0, 6, -3]}
          fontSize={1.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.05}
        >
          SKILLS
        </Text>
      </Float>

      {/* Center Interactive Hub */}
      <group position={[0, 2, 0]}>
        <mesh 
          onClick={(e) => {
            e.stopPropagation();
            setActivePanel("skills");
          }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          <icosahedronGeometry args={[1, 0]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.05}
            ior={1.5}
            thickness={1}
            transparent
          />
        </mesh>
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          CLICK TO VIEW ALL
        </Text>
      </group>

      {/* Orbiting Orbs */}
      <group position={[0, 2, 0]}>
        {allSkills.map((skill, index) => {
          const angle = (index / allSkills.length) * Math.PI * 2;
          const radius = 3.5;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          return (
            <SkillOrb
              key={skill.name}
              position={[x, 0, z]}
              name={skill.name}
              level={skill.level}
            />
          );
        })}
      </group>

      <pointLight position={[0, 5, 0]} intensity={1.5} color="#ffffff" distance={20} />
    </group>
  );
}
