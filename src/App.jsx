import React, { Suspense, useState, useEffect, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import useGameStore from "./store/gameStore";
import LoadingScreen from "./components/ui/LoadingScreen";
import QuickMenu from "./components/ui/QuickMenu";
import Minimap from "./components/ui/Minimap";
import ControlsHint from "./components/ui/ControlsHint";
import AchievementToast from "./components/ui/AchievementToast";
import InfoPanel from "./components/ui/InfoPanel";
import MobilePortfolio from "./components/mobile/MobilePortfolio";
import World from "./components/3d/World";

function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  
  useEffect(() => {
    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(230,126,34,0.06) 0%, transparent 60%)',
        transform: `translate(${pos.x - 300}px, ${pos.y - 300}px)`,
        pointerEvents: 'none',
        zIndex: 50,
        transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    />
  );
}

export default function App() {
  const { isLoaded, isMobile, activePanel, showAchievement, teleporting } = useGameStore();
  const [showLoading, setShowLoading] = useState(true);
  const [canvasReady, setCanvasReady] = useState(false);

  // Drive loading progress from App level
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 8 + 5; 
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        useGameStore.setState({ loadingProgress: 100, isLoaded: true });
      } else {
        useGameStore.setState({ loadingProgress: Math.floor(progress) });
      }
    }, 150); // Gives about 1.5 to 2 seconds of loading time
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      useGameStore.setState({ isMobile: window.innerWidth < 768 });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoaded = useCallback(() => {
    setTimeout(() => {
      setShowLoading(false);
      setCanvasReady(true);
    }, 500);
  }, []);

  // Mobile: scroll-based experience
  if (isMobile) {
    return <MobilePortfolio />;
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      {/* Loading Screen */}
      {showLoading && <LoadingScreen onComplete={handleLoaded} />}

      {/* 3D Canvas */}
      <Canvas
        shadows
        camera={{ fov: 55, near: 0.1, far: 500, position: [0, 8, 12] }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ position: "absolute", inset: 0 }}
      >
        <Suspense fallback={null}>
          <World />
        </Suspense>
      </Canvas>

      {/* UI Overlays */}
      {!showLoading && (
        <>
          {!isMobile && <CursorGlow />}
          <QuickMenu />
          <Minimap />
          <ControlsHint />
          {showAchievement && (
            <AchievementToast message={showAchievement} />
          )}
          {activePanel && <InfoPanel />}
        </>
      )}
    </div>
  );
}
