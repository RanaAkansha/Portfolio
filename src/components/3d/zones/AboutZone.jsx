import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, personalInfo } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function GlassPanel({ position, rotation, title, content }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation || [0, 0, 0]}>
      {/* Frosted Glass Screen */}
      <mesh>
        <planeGeometry args={[4, 3]} />
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

      {/* Frame */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[4.1, 3.1]} />
        <meshStandardMaterial
          color="#111111"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 1, 0.05]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        {title}
      </Text>

      {/* Content */}
      <Text
        position={[0, -0.2, 0.05]}
        fontSize={0.12}
        color="#d4d4d4"
        anchorX="center"
        anchorY="middle"
        maxWidth={3.5}
        textAlign="center"
        lineHeight={1.6}
      >
        {content}
      </Text>
    </group>
  );
}

export default function AboutZone() {
  const pos = zonePositions.about;
  const { setActivePanel } = useGameStore();

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

      {/* Minimalist structural pillars */}
      {[-7, 7].map(x => (
        [-7, 7].map(z => (
          <mesh key={`${x}-${z}`} position={[x, 3, z]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 6, 16]} />
            <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
          </mesh>
        ))
      ))}

      {/* Zone label */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
        <Text
          position={[0, 6, 0]}
          fontSize={1.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.05}
        >
          ABOUT
        </Text>
      </Float>

      {/* Glass Panels */}
      <GlassPanel
        position={[-3.5, 2.5, -2]}
        rotation={[0, Math.PI / 8, 0]}
        title="WHO I AM"
        content={personalInfo.bio.split('.')[0] + "."}
      />

      <GlassPanel
        position={[3.5, 2.5, -2]}
        rotation={[0, -Math.PI / 8, 0]}
        title="MY VISION"
        content={personalInfo.bio.split('.').slice(1).join('.').trim()}
      />

      {/* Interactive Terminal core */}
      <group position={[0, 1, 3]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.9}
            opacity={1}
            metalness={0.1}
            roughness={0.05}
            ior={1.5}
            thickness={0.5}
          />
        </mesh>
        
        <mesh position={[0, 1.2, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setActivePanel("about");
          }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#111111" emissive="#ffffff" emissiveIntensity={0.5} />
        </mesh>

        <Text
          position={[0, 1.8, 0]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          CLICK TO READ MORE
        </Text>
      </group>

      <pointLight position={[0, 4, 0]} intensity={1} color="#ffffff" distance={15} />
    </group>
  );
}
