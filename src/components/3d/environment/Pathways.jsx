import React, { useMemo } from "react";
import * as THREE from "three";
import { zonePositions } from "../../../data/portfolio";

// Create a path between two points using low-poly strip
function PathSegment({ from, to, color = "#1a1a4e" }) {
  const points = useMemo(() => {
    const start = new THREE.Vector3(from.x, 0.04, from.z);
    const end = new THREE.Vector3(to.x, 0.04, to.z);
    const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
    mid.x += (Math.random() - 0.5) * 3;
    mid.z += (Math.random() - 0.5) * 3;

    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(20);
  }, [from, to]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  return (
    <group>
      <line geometry={geometry}>
        <lineBasicMaterial color={color} transparent opacity={0.3} />
      </line>

      {/* Glowing dots along path */}
      {points
        .filter((_, i) => i % 4 === 0)
        .map((point, i) => (
          <mesh key={i} position={[point.x, 0.05, point.z]}>
            <sphereGeometry args={[0.08, 8, 8]} />
            <meshBasicMaterial color="#6c5ce7" transparent opacity={0.4} />
          </mesh>
        ))}
    </group>
  );
}

export default function Pathways() {
  const { spawn, about, projects, skills, contact } = zonePositions;

  return (
    <group>
      <PathSegment from={spawn} to={about} color="#6c5ce7" />
      <PathSegment from={spawn} to={projects} color="#fd79a8" />
      <PathSegment from={spawn} to={skills} color="#0984e3" />
      <PathSegment from={spawn} to={contact} color="#00cec9" />
    </group>
  );
}
