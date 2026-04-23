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

export default function App() {
  const { isLoaded, isMobile, activePanel, showAchievement } = useGameStore();
  const [showLoading, setShowLoading] = useState(true);
  const [canvasReady, setCanvasReady] = useState(false);

  // Drive loading progress from App level
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 12 + 4;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        useGameStore.setState({ loadingProgress: 100, isLoaded: true });
      } else {
        useGameStore.setState({ loadingProgress: Math.floor(progress) });
      }
    }, 250);
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
