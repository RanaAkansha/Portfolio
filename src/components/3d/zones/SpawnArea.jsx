import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { personalInfo, zonePositions } from "../../../data/portfolio";

function GlassEntrance() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group position={[0, 3, -5]}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={meshRef} castShadow>
          <torusKnotGeometry args={[2, 0.6, 128, 32]} />
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
      </Float>
    </group>
  );
}

export default function SpawnArea() {
  const pos = zonePositions.spawn;
  const firstName = personalInfo.name.split(' ')[0]?.toUpperCase() || "";
  const lastName = personalInfo.name.split(' ')[1]?.toUpperCase() || "";

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Pristine dark floor */}
      <mesh position={[0, 0.05, 0]} receiveShadow rotation={[-Math.PI/2, 0, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial
          color="#050505"
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Massive elegant typography */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
        <Text
          position={[0, 4, 0]}
          fontSize={2.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.05}
        >
          FULL-STACK
        </Text>
        <Text
          position={[0, 1.5, 0]}
          fontSize={2.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.05}
        >
          DEVELOPER
        </Text>
      </Float>

      <Text
        position={[0, 0.5, 2]}
        fontSize={0.25}
        color="#a3a3a3"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.2}
      >
        AI-FOCUSED | PRACTICAL SOLUTIONS
      </Text>

      <Text
        position={[0, 0.1, 3]}
        fontSize={0.15}
        color="#404040"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        USE W A S D TO EXPLORE
      </Text>

      <GlassEntrance />

      {/* Cinematic Lighting */}
      <pointLight position={[0, 6, 5]} intensity={1.5} color="#ffffff" distance={25} />
      <pointLight position={[0, 2, -6]} intensity={1} color="#d4d4d4" distance={20} />
    </group>
  );
}
