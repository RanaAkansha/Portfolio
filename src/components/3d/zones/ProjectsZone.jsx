import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, projects } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function ProjectDisplay({ position, project, onClick }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Interactive Core */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={groupRef}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={() => document.body.style.cursor = 'pointer'}
          onPointerOut={() => document.body.style.cursor = 'default'}
        >
          {/* Glass Octagon */}
          <mesh castShadow>
            <cylinderGeometry args={[1, 1, 0.2, 8]} />
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
          {/* Inner metallic core */}
          <mesh rotation={[Math.PI/2, 0, 0]}>
            <cylinderGeometry args={[0.5, 0.5, 0.22, 8]} />
            <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.1} />
          </mesh>
        </group>
      </Float>

      {/* Project Info */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.25}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.1}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        position={[0, 1.1, 0]}
        fontSize={0.1}
        color="#a3a3a3"
        anchorX="center"
        anchorY="middle"
      >
        CLICK TO VIEW
      </Text>
    </group>
  );
}

export default function ProjectsZone() {
  const pos = zonePositions.projects;
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

      {/* Zone Title */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.2}>
        <Text
          position={[0, 6, -5]}
          fontSize={1.5}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          letterSpacing={-0.05}
        >
          PROJECTS
        </Text>
      </Float>

      {/* Projects layout in a triangle/circle */}
      {projects.map((project, index) => {
        const angle = (index / projects.length) * Math.PI * 2;
        const radius = 4;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <ProjectDisplay
            key={project.id}
            position={[x, 1.5, z]}
            project={project}
            onClick={() => setActivePanel("projects")}
          />
        );
      })}

      <pointLight position={[0, 5, 0]} intensity={1.5} color="#ffffff" distance={20} />
    </group>
  );
}
