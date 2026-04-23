import React, { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, skills } from "../../../data/portfolio";

function SkillOrb({ skill, position, color, categoryIndex }) {
  const orbRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orbRef.current) {
      orbRef.current.position.y =
        position[1] + Math.sin(t * 0.6 + position[0] + position[2]) * 0.2;
      orbRef.current.rotation.y = t * 0.3;
    }
  });

  const radius = 0.25 + (skill.level / 100) * 0.2;

  return (
    <group
      ref={orbRef}
      position={position}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Core orb */}
      <mesh castShadow>
        <sphereGeometry args={[radius, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.4}
          metalness={0.7}
          roughness={0.2}
          transparent
          opacity={hovered ? 0.95 : 0.75}
        />
      </mesh>

      {/* Outer glow shell */}
      <mesh>
        <sphereGeometry args={[radius + 0.1, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.15 : 0.05}
        />
      </mesh>

      {/* Skill name */}
      <Text
        position={[0, -radius - 0.3, 0]}
        fontSize={0.13}
        color={hovered ? "#ffffff" : color}

        anchorX="center"
        anchorY="middle"
      >
        {skill.name}
      </Text>

      {/* Level on hover */}
      {hovered && (
        <>
          <Text
            position={[0, radius + 0.3, 0]}
            fontSize={0.15}
            color="#ffffff"
    
            anchorX="center"
            anchorY="middle"
          >
            {skill.level}%
          </Text>
          <pointLight
            position={[0, 0, 0]}
            intensity={2}
            color={color}
            distance={4}
          />
        </>
      )}
    </group>
  );
}

function CategoryLabel({ text, position, color }) {
  return (
    <group position={position}>
      {/* Background plate */}
      <mesh>
        <planeGeometry args={[2.5, 0.5]} />
        <meshStandardMaterial
          color="#080820"
          emissive={color}
          emissiveIntensity={0.1}
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>
      <Text
        position={[0, 0, 0.05]}
        fontSize={0.18}
        color={color}

        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

export default function SkillsZone() {
  const pos = zonePositions.skills;
  const categoryColors = ["#6c5ce7", "#00cec9", "#0984e3"];
  const categoryNames = ["FRONTEND", "BACKEND", "TOOLS"];

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Platform */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[12, 12, 0.1, 6]} />
        <meshStandardMaterial
          color="#0c0c28"
          emissive="#0984e3"
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
          color="#0984e3"
  
          anchorX="center"
          anchorY="middle"
        >
          SKILLS LAB
        </Text>
      </Float>

      <Text
        position={[0, 6, 0]}
        fontSize={0.2}
        color="#8888aa"
        anchorX="center"
        anchorY="middle"
      >
        Hover to see proficiency
      </Text>

      {/* Skills arranged by category in arcs */}
      {Object.entries(skills).map(([category, items], catIdx) => {
        const sectionAngle = (catIdx / 3) * Math.PI * 2 - Math.PI / 2;
        const color = categoryColors[catIdx];

        return (
          <group key={category}>
            {/* Category label */}
            <CategoryLabel
              text={categoryNames[catIdx]}
              position={[
                Math.cos(sectionAngle) * 4,
                5,
                Math.sin(sectionAngle) * 4,
              ]}
              color={color}
            />

            {/* Skill orbs */}
            {items.map((skill, skillIdx) => {
              const spreadAngle =
                sectionAngle +
                ((skillIdx - (items.length - 1) / 2) * 0.4);
              const radius = 6 + (skillIdx % 2) * 2;
              const x = Math.cos(spreadAngle) * radius;
              const z = Math.sin(spreadAngle) * radius;
              const y = 2 + skillIdx * 0.3;

              return (
                <SkillOrb
                  key={skill.name}
                  skill={skill}
                  position={[x, y, z]}
                  color={color}
                  categoryIndex={catIdx}
                />
              );
            })}

            {/* Connecting beam from center to category */}
            <mesh
              position={[
                Math.cos(sectionAngle) * 2,
                0.1,
                Math.sin(sectionAngle) * 2,
              ]}
              rotation={[
                -Math.PI / 2,
                0,
                sectionAngle + Math.PI / 2,
              ]}
            >
              <planeGeometry args={[0.05, 4]} />
              <meshBasicMaterial
                color={color}
                transparent
                opacity={0.15}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}

      {/* Central node */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[0, 3, 0]} castShadow>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial
            color="#0984e3"
            emissive="#0984e3"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      {/* Ring decoration */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
        <ringGeometry args={[11.5, 11.8, 64]} />
        <meshBasicMaterial color="#0984e3" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}
