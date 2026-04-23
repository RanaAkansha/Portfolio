import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, personalInfo, skills } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function InfoScreen({ position, rotation, title, content, color = "#6c5ce7" }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={position} rotation={rotation || [0, 0, 0]}>
      {/* Screen backdrop */}
      <mesh>
        <planeGeometry args={[3.5, 2.5]} />
        <meshStandardMaterial
          color="#080820"
          emissive={color}
          emissiveIntensity={0.05}
          metalness={0.3}
          roughness={0.7}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Border glow */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[3.6, 2.6]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Title */}
      <Text
        position={[0, 0.8, 0.05]}
        fontSize={0.2}
        color={color}

        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>

      {/* Content */}
      <Text
        position={[0, -0.1, 0.05]}
        fontSize={0.12}
        color="#ccccdd"
        anchorX="center"
        anchorY="middle"
        maxWidth={3}
        textAlign="center"
        lineHeight={1.5}
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
      {/* Building floor */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[14, 0.1, 14]} />
        <meshStandardMaterial
          color="#0c0c28"
          emissive="#00cec9"
          emissiveIntensity={0.03}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      {/* Walls (open front) */}
      {/* Back wall */}
      <mesh position={[0, 3, -7]} castShadow>
        <boxGeometry args={[14, 6, 0.2]} />
        <meshStandardMaterial
          color="#0a0a2a"
          emissive="#6c5ce7"
          emissiveIntensity={0.02}
          metalness={0.4}
          roughness={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Left wall */}
      <mesh position={[-7, 3, 0]} castShadow>
        <boxGeometry args={[0.2, 6, 14]} />
        <meshStandardMaterial
          color="#0a0a2a"
          emissive="#00cec9"
          emissiveIntensity={0.02}
          metalness={0.4}
          roughness={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Right wall */}
      <mesh position={[7, 3, 0]} castShadow>
        <boxGeometry args={[0.2, 6, 14]} />
        <meshStandardMaterial
          color="#0a0a2a"
          emissive="#00cec9"
          emissiveIntensity={0.02}
          metalness={0.4}
          roughness={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Roof (semi-transparent) */}
      <mesh position={[0, 6, 0]}>
        <boxGeometry args={[14, 0.15, 14]} />
        <meshStandardMaterial
          color="#0a0a2a"
          transparent
          opacity={0.3}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Zone label */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text
          position={[0, 7, 0]}
          fontSize={0.8}
          color="#00cec9"
  
          anchorX="center"
          anchorY="middle"
        >
          ABOUT
        </Text>
      </Float>

      {/* Info screens inside */}
      <InfoScreen
        position={[-3, 3, -6.5]}
        title="WHO I AM"
        content={personalInfo.bio}
        color="#00cec9"
      />

      <InfoScreen
        position={[3, 3, -6.5]}
        title="WHAT I DO"
        content={`${personalInfo.title}\n\nBuilding the future of web\nwith modern technologies\nand creative solutions.`}
        color="#a29bfe"
      />

      {/* Floating skill summary cubes */}
      {Object.entries(skills).map(([category, items], catIdx) => (
        <Float
          key={category}
          speed={1.2}
          rotationIntensity={0.2}
          floatIntensity={0.4}
        >
          <group position={[-4 + catIdx * 4, 2, 2]}>
            <mesh castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color={["#6c5ce7", "#00cec9", "#0984e3"][catIdx]}
                emissive={["#6c5ce7", "#00cec9", "#0984e3"][catIdx]}
                emissiveIntensity={0.3}
                metalness={0.6}
                roughness={0.3}
                transparent
                opacity={0.8}
              />
            </mesh>
            <Text
              position={[0, -0.9, 0]}
              fontSize={0.15}
              color={["#a29bfe", "#00fff7", "#74b9ff"][catIdx]}
      
              anchorX="center"
              anchorY="middle"
            >
              {category.toUpperCase()}
            </Text>
            <Text
              position={[0, -1.15, 0]}
              fontSize={0.1}
              color="#8888aa"
              anchorX="center"
              anchorY="middle"
            >
              {items.length} skills
            </Text>
          </group>
        </Float>
      ))}

      {/* Interactive prompt */}
      <Text
        position={[0, 0.8, 7]}
        fontSize={0.18}
        color="#8888aa"
        anchorX="center"
        anchorY="middle"
      >
        Walk inside to explore
      </Text>

      {/* Corner accent lights */}
      <pointLight position={[-6, 1, -6]} intensity={1} color="#00cec9" distance={8} />
      <pointLight position={[6, 1, -6]} intensity={1} color="#a29bfe" distance={8} />
      <pointLight position={[0, 5, 0]} intensity={0.8} color="#6c5ce7" distance={10} />
    </group>
  );
}
