import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
  Stars,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";
import useGameStore from "../../store/gameStore";
import { zonePositions } from "../../data/portfolio";
import Player from "./Player";
import SpawnArea from "./zones/SpawnArea";
import AboutZone from "./zones/AboutZone";
import ProjectsZone from "./zones/ProjectsZone";
import SkillsZone from "./zones/SkillsZone";
import ContactZone from "./zones/ContactZone";
import ExperienceZone from "./zones/ExperienceZone";
import Ground from "./environment/Ground";
import Pathways from "./environment/Pathways";
import FloatingParticles from "./environment/FloatingParticles";

export default function World() {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.8} color="#ffffff" />
      <directionalLight
        position={[30, 50, 20]}
        intensity={1.0}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={100}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />

      {/* Neon accent lights */}
      <pointLight position={[0, 8, 0]} intensity={2} color="#6c5ce7" distance={30} />
      <pointLight position={[-25, 6, -20]} intensity={1.5} color="#00cec9" distance={25} />
      <pointLight position={[25, 6, -15]} intensity={1.5} color="#fd79a8" distance={25} />
      <pointLight position={[-20, 6, 25]} intensity={1.5} color="#0984e3" distance={25} />
      <pointLight position={[20, 6, 28]} intensity={1.5} color="#6c5ce7" distance={25} />

      {/* Environment */}
      <Stars
        radius={150}
        depth={80}
        count={3000}
        factor={4}
        saturation={0.3}
        fade
        speed={0.5}
      />
      <fog attach="fog" args={["#0a0a1a", 40, 120]} />

      {/* Ground & Paths */}
      <Ground />
      <Pathways />

      {/* Contact Shadows */}
      <ContactShadows
        position={[0, 0.01, 0]}
        opacity={0.4}
        scale={80}
        blur={2}
        far={20}
        color="#1a1a3a"
      />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Zones */}
      <SpawnArea />
      <AboutZone />
      <ExperienceZone />
      <ProjectsZone />
      <SkillsZone />
      <ContactZone />

      {/* Player */}
      <Player />
    </group>
  );
}
