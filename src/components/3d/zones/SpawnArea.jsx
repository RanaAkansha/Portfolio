import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { personalInfo, zonePositions } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function GlowingPortal() {
  const portalRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (portalRef.current) {
      portalRef.current.rotation.y = t * 0.5;
      portalRef.current.rotation.z = Math.sin(t * 0.3) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.y = -t * 0.3;
    }
  });

  return (
    <group position={[0, 2.5, -6]}>
      {/* Outer ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[2, 0.08, 16, 64]} />
        <meshStandardMaterial
          color="#00cec9"
          emissive="#00fff7"
          emissiveIntensity={1}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Inner ring */}
      <mesh ref={portalRef}>
        <torusGeometry args={[1.5, 0.05, 16, 64]} />
        <meshStandardMaterial
          color="#6c5ce7"
          emissive="#a29bfe"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Portal glow */}
      <mesh>
        <circleGeometry args={[1.4, 32]} />
        <meshBasicMaterial
          color="#6c5ce7"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      <pointLight
        intensity={2}
        color="#00cec9"
        distance={10}
      />

      <Text
        position={[0, 3.2, 0]}
        fontSize={0.3}
        color="#00cec9"

        anchorX="center"
        anchorY="middle"
      >
        ENTER WORLD
      </Text>
    </group>
  );
}

function DirectionSign({ position, rotation, text, color }) {
  return (
    <group position={position} rotation={rotation || [0, 0, 0]}>
      {/* Post */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[0.08, 1.5, 0.08]} />
        <meshStandardMaterial color="#2a2a4a" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Sign */}
      <mesh position={[0.6, 1.4, 0]}>
        <boxGeometry args={[1.4, 0.35, 0.05]} />
        <meshStandardMaterial
          color="#0a0a2a"
          emissive={color}
          emissiveIntensity={0.15}
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      <Text
        position={[0.6, 1.4, 0.04]}
        fontSize={0.12}
        color={color}
        anchorX="center"
        anchorY="middle"

      >
        {text}
      </Text>
    </group>
  );
}

export default function SpawnArea() {
  const pos = zonePositions.spawn;

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Platform */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[7, 7, 0.1, 6]} />
        <meshStandardMaterial
          color="#0c0c24"
          emissive="#6c5ce7"
          emissiveIntensity={0.05}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      {/* Name text */}
      <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
        <Text
          position={[0, 4.5, 0]}
          fontSize={1.0}
          color="#ffffff"
  
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#6c5ce7"
        >
          {personalInfo.name.toUpperCase()}
        </Text>
      </Float>

      {/* Subtitle */}
      <Float speed={1.2} rotationIntensity={0} floatIntensity={0.3}>
        <Text
          position={[0, 3.3, 0]}
          fontSize={0.35}
          color="#a29bfe"
  
          anchorX="center"
          anchorY="middle"
        >
          {personalInfo.tagline}
        </Text>
      </Float>

      {/* Instructions */}
      <Text
        position={[0, 2.2, 0]}
        fontSize={0.2}
        color="#8888aa"
        anchorX="center"
        anchorY="middle"
        maxWidth={6}
        textAlign="center"
      >
        Use WASD to move • Right-click drag to look{"\n"}
        Or use the menu to teleport
      </Text>

      {/* Portal */}
      <GlowingPortal />

      {/* Direction signs */}
      <DirectionSign
        position={[-5, 0, -3]}
        rotation={[0, Math.PI / 4, 0]}
        text="← ABOUT"
        color="#00cec9"
      />
      <DirectionSign
        position={[5, 0, -3]}
        rotation={[0, -Math.PI / 4, 0]}
        text="PROJECTS →"
        color="#fd79a8"
      />
      <DirectionSign
        position={[-4, 0, 4]}
        rotation={[0, -Math.PI / 6, 0]}
        text="← SKILLS"
        color="#0984e3"
      />
      <DirectionSign
        position={[4, 0, 4]}
        rotation={[0, Math.PI / 6, 0]}
        text="CONTACT →"
        color="#6c5ce7"
      />

      {/* Decorative pillars */}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const angle = (i / 6) * Math.PI * 2;
        const x = Math.cos(angle) * 6.5;
        const z = Math.sin(angle) * 6.5;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh position={[0, 1, 0]} castShadow>
              <boxGeometry args={[0.3, 2, 0.3]} />
              <meshStandardMaterial
                color="#1a1a3e"
                emissive="#6c5ce7"
                emissiveIntensity={0.1}
                metalness={0.5}
                roughness={0.5}
              />
            </mesh>
            <pointLight
              position={[0, 2.2, 0]}
              intensity={0.3}
              color="#6c5ce7"
              distance={4}
            />
          </group>
        );
      })}
    </group>
  );
}
