import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";
import { zonePositions, personalInfo } from "../../../data/portfolio";
import useGameStore from "../../../store/gameStore";

function TerminalScreen() {
  const screenRef = useRef();
  const cursorRef = useRef();
  const { setActivePanel } = useGameStore();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Cursor blink
    if (cursorRef.current) {
      cursorRef.current.visible = Math.sin(t * 5) > 0;
    }
  });

  return (
    <group
      ref={screenRef}
      position={[0, 2.5, -3]}
      onClick={() => setActivePanel("contact")}
      onPointerEnter={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Screen body */}
      <mesh>
        <boxGeometry args={[5, 3.5, 0.15]} />
        <meshStandardMaterial
          color="#060616"
          emissive="#6c5ce7"
          emissiveIntensity={hovered ? 0.1 : 0.03}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Screen face */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[4.6, 3.1]} />
        <meshStandardMaterial
          color="#0a0a20"
          emissive="#00cec9"
          emissiveIntensity={0.02}
        />
      </mesh>

      {/* Terminal text */}
      <Text
        position={[-2, 1.1, 0.1]}
        fontSize={0.12}
        color="#00cec9"

        anchorX="left"
        anchorY="middle"
      >
        {`> system.connect("portfolio")`}
      </Text>

      <Text
        position={[-2, 0.8, 0.1]}
        fontSize={0.12}
        color="#a29bfe"

        anchorX="left"
        anchorY="middle"
      >
        Connected. Ready for transmission.
      </Text>

      <Text
        position={[-2, 0.4, 0.1]}
        fontSize={0.12}
        color="#00cec9"

        anchorX="left"
        anchorY="middle"
      >
        {`> contact.email`}
      </Text>

      <Text
        position={[-2, 0.1, 0.1]}
        fontSize={0.12}
        color="#ffffff"

        anchorX="left"
        anchorY="middle"
      >
        {personalInfo.email}
      </Text>

      <Text
        position={[-2, -0.2, 0.1]}
        fontSize={0.12}
        color="#00cec9"

        anchorX="left"
        anchorY="middle"
      >
        {`> contact.links`}
      </Text>

      <Text
        position={[-2, -0.5, 0.1]}
        fontSize={0.11}
        color="#74b9ff"

        anchorX="left"
        anchorY="middle"
      >
        {`GitHub  · LinkedIn`}
      </Text>

      <Text
        position={[-2, -0.9, 0.1]}
        fontSize={0.12}
        color="#00cec9"

        anchorX="left"
        anchorY="middle"
      >
        {`> _`}
      </Text>

      {/* Blinking cursor */}
      <mesh ref={cursorRef} position={[-1.6, -0.9, 0.1]}>
        <planeGeometry args={[0.08, 0.15]} />
        <meshBasicMaterial color="#00cec9" />
      </mesh>

      {/* Click prompt */}
      {hovered && (
        <Text
          position={[0, -1.7, 0.1]}
          fontSize={0.14}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Click to open contact form
        </Text>
      )}

      {/* Screen glow */}
      <pointLight
        position={[0, 0, 1]}
        intensity={0.5}
        color="#00cec9"
        distance={5}
      />
    </group>
  );
}

export default function ContactZone() {
  const pos = zonePositions.contact;

  return (
    <group position={[pos.x, 0, pos.z]}>
      {/* Platform */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial
          color="#0c0c28"
          emissive="#6c5ce7"
          emissiveIntensity={0.03}
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>

      {/* Zone label */}
      <Float speed={1} rotationIntensity={0} floatIntensity={0.3}>
        <Text
          position={[0, 7, -3]}
          fontSize={0.7}
          color="#6c5ce7"
  
          anchorX="center"
          anchorY="middle"
        >
          CONTACT
        </Text>
      </Float>

      {/* Terminal */}
      <TerminalScreen />

      {/* Desk */}
      <mesh position={[0, 0.8, -3]} castShadow>
        <boxGeometry args={[5.5, 0.1, 2]} />
        <meshStandardMaterial
          color="#1a1a3e"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Desk legs */}
      {[
        [-2.5, -3.8],
        [2.5, -3.8],
        [-2.5, -2.2],
        [2.5, -2.2],
      ].map(([x, z], i) => (
        <mesh key={i} position={[x, 0.4, z]} castShadow>
          <boxGeometry args={[0.1, 0.8, 0.1]} />
          <meshStandardMaterial color="#1a1a3e" metalness={0.5} roughness={0.5} />
        </mesh>
      ))}

      {/* Chair */}
      <mesh position={[0, 0.6, -1]} castShadow>
        <boxGeometry args={[1.2, 0.1, 1]} />
        <meshStandardMaterial
          color="#2a1a4e"
          emissive="#6c5ce7"
          emissiveIntensity={0.1}
        />
      </mesh>
      <mesh position={[0, 1.2, -0.5]} castShadow>
        <boxGeometry args={[1.2, 1.2, 0.1]} />
        <meshStandardMaterial
          color="#2a1a4e"
          emissive="#6c5ce7"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Ambient decorations */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[3.5, 2, -2]}>
          <tetrahedronGeometry args={[0.3]} />
          <meshStandardMaterial
            color="#6c5ce7"
            emissive="#6c5ce7"
            emissiveIntensity={0.5}
            transparent
            opacity={0.6}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
        <mesh position={[-3.5, 3, -1]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial
            color="#00cec9"
            emissive="#00cec9"
            emissiveIntensity={0.4}
            transparent
            opacity={0.5}
          />
        </mesh>
      </Float>

      {/* Accent lights */}
      <pointLight position={[0, 4, -3]} intensity={1} color="#6c5ce7" distance={10} />
      <pointLight position={[-4, 2, 0]} intensity={0.5} color="#00cec9" distance={6} />
      <pointLight position={[4, 2, 0]} intensity={0.5} color="#a29bfe" distance={6} />

      {/* Ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.06, 0]}>
        <ringGeometry args={[9, 9.2, 64]} />
        <meshBasicMaterial color="#6c5ce7" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}
