import React, { useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Text, Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, projects } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function ProjectTerminal({ project, index, total }) {
  const meshRef = useRef();
  const glowRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { setActivePanel, setSelectedProject } = useGameStore();

  const angle = (index / total) * Math.PI * 2;
  const radius = 6;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2 + index;
      meshRef.current.position.y =
        2.5 + Math.sin(t * 0.5 + index * 1.5) * 0.3;
    }
    if (glowRef.current) {
      glowRef.current.intensity = hovered ? 3 : 1;
    }
  });

  const handleClick = () => {
    setSelectedProject(project);
    setActivePanel("projects");
  };

  return (
    <group position={[x, 0, z]}>
      {/* Pedestal */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.8, 0.8, 6]} />
        <meshStandardMaterial
          color="#0c0c28"
          emissive={project.color}
          emissiveIntensity={0.1}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Floating hologram cube */}
      <group ref={meshRef} position={[0, 2.5, 0]}>
        <mesh
          castShadow
          onClick={handleClick}
          onPointerEnter={() => {
            setHovered(true);
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            setHovered(false);
            document.body.style.cursor = "default";
          }}
        >
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          <meshStandardMaterial
            color={project.color}
            emissive={project.color}
            emissiveIntensity={hovered ? 0.8 : 0.4}
            metalness={0.7}
            roughness={0.2}
            transparent
            opacity={hovered ? 0.9 : 0.7}
          />
        </mesh>

        {/* Inner wireframe */}
        <mesh>
          <boxGeometry args={[1.3, 1.3, 1.3]} />
          <meshBasicMaterial
            color={project.color}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>

      {/* Project name */}
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.22}
        color={project.color}

        anchorX="center"
        anchorY="middle"
      >
        {project.title}
      </Text>

      {/* Featured badge */}
      {project.featured && (
        <Text
          position={[0, 0.95, 0]}
          fontSize={0.1}
          color="#ffd700"
          anchorX="center"
          anchorY="middle"
        >
          ★ FEATURED
        </Text>
      )}

      {/* Click hint on hover */}
      {hovered && (
        <Text
          position={[0, 3.8, 0]}
          fontSize={0.14}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Click to view details
        </Text>
      )}

      {/* Glow light */}
      <pointLight
        ref={glowRef}
        position={[0, 2.5, 0]}
        intensity={1}
        color={project.color}
        distance={6}
      />

      {/* Ground glow ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
        <ringGeometry args={[0.8, 1, 32]} />
        <meshBasicMaterial
          color={project.color}
          transparent
          opacity={hovered ? 0.3 : 0.1}
        />
      </mesh>
    </group>
  );
}

export default function ProjectsZone() {
  const pos = zonePositions.projects;

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Gallery platform */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[10, 10, 0.1, 8]} />
        <meshStandardMaterial
          color="#0c0c28"
          emissive="#fd79a8"
          emissiveIntensity={0.03}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      {/* Zone label */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text
          position={[0, 7, 0]}
          fontSize={0.8}
          color="#fd79a8"
  
          anchorX="center"
          anchorY="middle"
        >
          PROJECTS
        </Text>
      </Float>

      <Text
        position={[0, 6, 0]}
        fontSize={0.2}
        color="#8888aa"
        anchorX="center"
        anchorY="middle"
      >
        Click a hologram to explore
      </Text>

      {/* Project terminals */}
      {projects.map((project, i) => (
        <ProjectTerminal
          key={project.id}
          project={project}
          index={i}
          total={projects.length}
        />
      ))}

      {/* Central display stand */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry args={[1.5, 2, 1, 8]} />
        <meshStandardMaterial
          color="#0a0a24"
          emissive="#fd79a8"
          emissiveIntensity={0.08}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Holographic display in center */}
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh position={[0, 2.5, 0]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#fd79a8"
            emissive="#fd79a8"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      {/* Ring lights */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
        <ringGeometry args={[9.5, 9.8, 64]} />
        <meshBasicMaterial color="#fd79a8" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}
