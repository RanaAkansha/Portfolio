import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import useGameStore from "../../../store/gameStore";

export default function Ground() {
  const gridRef = useRef();

  // Ground plane
  const groundMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#080818",
        metalness: 0.1,
        roughness: 0.95,
      }),
    []
  );

  return (
    <group>
      {/* Main ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial
          color="#080818"
          metalness={0.1}
          roughness={0.95}
        />
      </mesh>

      {/* Grid overlay */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <planeGeometry args={[200, 200, 100, 100]} />
        <meshBasicMaterial
          color="#1a1a3e"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Glowing center ring at spawn */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
        <ringGeometry args={[4, 4.3, 64]} />
        <meshBasicMaterial
          color="#6c5ce7"
          transparent
          opacity={0.4}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
        <ringGeometry args={[5.5, 5.7, 64]} />
        <meshBasicMaterial
          color="#00cec9"
          transparent
          opacity={0.2}
        />
      </mesh>
    </group>
  );
}
