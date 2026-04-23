import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, personalInfo } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

export default function ContactZone() {
  const pos = zonePositions.contact;
  const { setActivePanel } = useGameStore();
  const obeliskRef = useRef();

  useFrame((state, delta) => {
    if (obeliskRef.current) {
      obeliskRef.current.rotation.y += delta * 0.1;
    }
  });

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
          CONTACT
        </Text>
      </Float>

      {/* Interactive Obelisk */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, 2.5, 0]}
          onClick={(e) => {
            e.stopPropagation();
            setActivePanel("contact");
          }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          <mesh ref={obeliskRef} castShadow>
            <boxGeometry args={[1.5, 3, 0.2]} />
            <meshPhysicalMaterial 
              color="#ffffff"
              transmission={0.9}
              opacity={1}
              metalness={0.1}
              roughness={0.05}
              ior={1.5}
              thickness={1.5}
              transparent
            />
          </mesh>

          {/* Core light */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.2, 2.7, 0.05]} />
            <meshStandardMaterial color="#000000" emissive="#ffffff" emissiveIntensity={0.1} />
          </mesh>

          <Text
            position={[0, 0, 0.15]}
            fontSize={0.2}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.1}
          >
            LET'S TALK
          </Text>
        </group>
      </Float>

      {/* Details */}
      <Text
        position={[0, 0.5, 2]}
        fontSize={0.15}
        color="#737373"
        anchorX="center"
        anchorY="middle"
      >
        {personalInfo.email}
      </Text>

      <pointLight position={[0, 4, 2]} intensity={1} color="#ffffff" distance={15} />
    </group>
  );
}
