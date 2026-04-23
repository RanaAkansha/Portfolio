import React, { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import useGameStore from "../../store/gameStore";
import { zonePositions } from "../../data/portfolio";

const SPEED = 8;
const ROTATION_SPEED = 3;
const PLAYER_HEIGHT = 1.0;

// Simple low-poly character
function CharacterModel({ isMoving }) {
  const bodyRef = useRef();
  const headRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef();

  useFrame((state) => {
    if (!bodyRef.current) return;
    const t = state.clock.elapsedTime;

    // Idle bob
    bodyRef.current.position.y = Math.sin(t * 2) * 0.05;

    // Walking animation
    if (isMoving) {
      if (leftLegRef.current && rightLegRef.current) {
        leftLegRef.current.rotation.x = Math.sin(t * 8) * 0.5;
        rightLegRef.current.rotation.x = Math.sin(t * 8 + Math.PI) * 0.5;
      }
    } else {
      if (leftLegRef.current) leftLegRef.current.rotation.x = 0;
      if (rightLegRef.current) rightLegRef.current.rotation.x = 0;
    }
  });

  return (
    <group ref={bodyRef}>
      {/* Body */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <boxGeometry args={[0.5, 0.6, 0.3]} />
        <meshStandardMaterial
          color="#ececec"
          metalness={0.2}
          roughness={0.7}
        />
      </mesh>

      {/* Head */}
      <mesh ref={headRef} position={[0, 1.15, 0]} castShadow>
        <boxGeometry args={[0.35, 0.35, 0.35]} />
        <meshStandardMaterial
          color="#ececec"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>

      {/* Visor */}
      <mesh position={[0, 1.15, 0.16]}>
        <boxGeometry args={[0.28, 0.1, 0.05]} />
        <meshStandardMaterial
          color="#00cec9"
          emissive="#00fff7"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Left Leg */}
      <group ref={leftLegRef} position={[-0.12, 0.25, 0]}>
        <mesh position={[0, -0.15, 0]} castShadow>
          <boxGeometry args={[0.15, 0.3, 0.2]} />
          <meshStandardMaterial color="#333333" roughness={0.8} />
        </mesh>
      </group>

      {/* Right Leg */}
      <group ref={rightLegRef} position={[0.12, 0.25, 0]}>
        <mesh position={[0, -0.15, 0]} castShadow>
          <boxGeometry args={[0.15, 0.3, 0.2]} />
          <meshStandardMaterial color="#333333" roughness={0.8} />
        </mesh>
      </group>

      {/* Glow underneath */}
      <pointLight
        position={[0, 0.1, 0]}
        intensity={0.5}
        color="#00cec9"
        distance={3}
      />
    </group>
  );
}

export default function Player() {
  const { camera } = useThree();
  const playerRef = useRef();
  const velocityRef = useRef(new THREE.Vector3());
  const keysRef = useRef({});
  const mouseRef = useRef({ x: 0, y: 0, isDown: false });
  const cameraAngleRef = useRef({ horizontal: 0, vertical: 0.4 });
  const isMovingRef = useRef(false);
  const [isMoving, setIsMoving] = React.useState(false);

  const {
    teleporting,
    currentZone,
    setPlayerPosition,
    setCurrentZone,
    activePanel,
    moveTarget,
    setMoveTarget,
    setIsMoving: storeSetMoving,
  } = useGameStore();

  // Keyboard listeners
  useEffect(() => {
    const onKeyDown = (e) => {
      keysRef.current[e.key.toLowerCase()] = true;
    };
    const onKeyUp = (e) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };

    const onMouseDown = (e) => {
      if (e.button === 2) {
        mouseRef.current.isDown = true;
      }
    };
    const onMouseUp = (e) => {
      if (e.button === 2) {
        mouseRef.current.isDown = false;
      }
    };
    const onMouseMove = (e) => {
      if (mouseRef.current.isDown || document.pointerLockElement) {
        cameraAngleRef.current.horizontal -= e.movementX * 0.003;
        cameraAngleRef.current.vertical = THREE.MathUtils.clamp(
          cameraAngleRef.current.vertical - e.movementY * 0.003,
          0.1,
          1.2
        );
      }
    };

    const onContextMenu = (e) => e.preventDefault();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("contextmenu", onContextMenu);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  // Handle teleport
  useEffect(() => {
    if (teleporting && playerRef.current) {
      const pos = zonePositions[currentZone];
      if (pos) {
        playerRef.current.position.set(pos.x, PLAYER_HEIGHT, pos.z);
      }
    }
  }, [teleporting, currentZone]);

  // Main game loop
  useFrame((state, delta) => {
    if (!playerRef.current || activePanel) return;

    const keys = keysRef.current;
    const player = playerRef.current;
    const camAngle = cameraAngleRef.current;

    // Direction from camera angle
    const forward = new THREE.Vector3(
      -Math.sin(camAngle.horizontal),
      0,
      -Math.cos(camAngle.horizontal)
    );
    const right = new THREE.Vector3(
      Math.cos(camAngle.horizontal),
      0,
      -Math.sin(camAngle.horizontal)
    );

    // Movement input
    const moveDir = new THREE.Vector3();
    if (keys["w"] || keys["arrowup"]) moveDir.add(forward);
    if (keys["s"] || keys["arrowdown"]) moveDir.sub(forward);
    if (keys["a"] || keys["arrowleft"]) moveDir.sub(right);
    if (keys["d"] || keys["arrowright"]) moveDir.add(right);

    // Click-to-move
    const { moveTarget: target } = useGameStore.getState();
    if (target && moveDir.length() === 0) {
      const targetVec = new THREE.Vector3(target[0], 0, target[2]);
      const playerVec = new THREE.Vector3(player.position.x, 0, player.position.z);
      const diff = targetVec.sub(playerVec);
      if (diff.length() > 0.5) {
        moveDir.copy(diff.normalize());
      } else {
        setMoveTarget(null);
      }
    }

    const moving = moveDir.length() > 0;
    if (moving !== isMovingRef.current) {
      isMovingRef.current = moving;
      setIsMoving(moving);
      storeSetMoving(moving);
    }

    if (moving) {
      moveDir.normalize();
      const vel = velocityRef.current;
      vel.lerp(moveDir.multiplyScalar(SPEED), delta * 5);

      player.position.x += vel.x * delta;
      player.position.z += vel.z * delta;

      // Clamp to world bounds
      player.position.x = THREE.MathUtils.clamp(player.position.x, -50, 50);
      player.position.z = THREE.MathUtils.clamp(player.position.z, -50, 50);

      // Rotate character to face movement direction
      const angle = Math.atan2(vel.x, vel.z);
      player.rotation.y = THREE.MathUtils.lerp(
        player.rotation.y,
        angle,
        delta * ROTATION_SPEED
      );
    } else {
      velocityRef.current.multiplyScalar(0.9);
    }

    player.position.y = PLAYER_HEIGHT;

    // Update store
    setPlayerPosition([
      player.position.x,
      player.position.y,
      player.position.z,
    ]);

    // Camera follow
    const { gameStarted } = useGameStore.getState();

    const cameraDistance = 10;
    const cameraHeight = 4 + camAngle.vertical * 6;
    const camX =
      player.position.x +
      Math.sin(camAngle.horizontal) * cameraDistance;
    const camZ =
      player.position.z +
      Math.cos(camAngle.horizontal) * cameraDistance;

    if (!gameStarted) {
      // Cinematic top-down hover before game fully starts
      camera.position.lerp(new THREE.Vector3(0, 30, 20), delta * 2);
      camera.lookAt(player.position.x, player.position.y, player.position.z);
    } else {
      // Smooth swoop down to player
      camera.position.lerp(
        new THREE.Vector3(camX, player.position.y + cameraHeight, camZ),
        delta * 2.5 // Smooth cinematic drop speed
      );
      camera.lookAt(
        player.position.x,
        player.position.y + 1,
        player.position.z
      );
    }

    // Zone detection
    const px = player.position.x;
    const pz = player.position.z;
    const zones = Object.entries(zonePositions);
    let closestZone = "spawn";
    let closestDist = Infinity;

    for (const [name, pos] of zones) {
      const dist = Math.sqrt((px - pos.x) ** 2 + (pz - pos.z) ** 2);
      if (dist < closestDist) {
        closestDist = dist;
        closestZone = name;
      }
    }

    if (closestDist < 12) {
      const { currentZone: cz } = useGameStore.getState();
      if (cz !== closestZone) {
        setCurrentZone(closestZone);
      }
    }
  });

  return (
    <group ref={playerRef} position={[0, PLAYER_HEIGHT, 0]}>
      <CharacterModel isMoving={isMoving} />
    </group>
  );
}
