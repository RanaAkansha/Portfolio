import React, { useState, useEffect } from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo } from "../../data/portfolio";

export default function LoadingScreen({ onComplete }) {
  const { loadingProgress, isLoaded } = useGameStore();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setFadeOut(true), 400);
      setTimeout(() => onComplete(), 1200);
    }
  }, [isLoaded, onComplete]);

  return (
    <div
      className="loading-screen"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* Scanline effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(108, 92, 231, 0.03) 2px, rgba(108, 92, 231, 0.03) 4px)",
          pointerEvents: "none",
        }}
      />

      {/* Logo / Title */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <div
          className="font-display"
          style={{
            fontSize: 14,
            letterSpacing: 8,
            color: "var(--color-text-muted)",
            marginBottom: 16,
            textTransform: "uppercase",
          }}
        >
          Initializing
        </div>
        <h1
          className="font-display glow-text"
          style={{
            fontSize: "clamp(24px, 5vw, 48px)",
            color: "var(--color-accent-glow)",
            letterSpacing: 4,
            marginBottom: 8,
          }}
        >
          {personalInfo.name.toUpperCase()}
        </h1>
        <div
          className="font-display"
          style={{
            fontSize: 12,
            letterSpacing: 4,
            color: "var(--color-primary-light)",
            textTransform: "uppercase",
          }}
        >
          {personalInfo.tagline}
        </div>
      </div>

      {/* Progress bar */}
      <div className="loading-bar-track">
        <div
          className="loading-bar-fill"
          style={{ width: `${loadingProgress}%` }}
        />
      </div>

      {/* Progress text */}
      <div
        className="font-mono"
        style={{
          marginTop: 16,
          fontSize: 12,
          color: "var(--color-text-muted)",
          letterSpacing: 2,
        }}
      >
        {loadingProgress < 100
          ? `LOADING ASSETS... ${loadingProgress}%`
          : "READY"}
      </div>

      {/* Decorative corners */}
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          width: 40,
          height: 40,
          borderTop: "2px solid var(--color-primary)",
          borderLeft: "2px solid var(--color-primary)",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 40,
          height: 40,
          borderTop: "2px solid var(--color-primary)",
          borderRight: "2px solid var(--color-primary)",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: 40,
          height: 40,
          borderBottom: "2px solid var(--color-primary)",
          borderLeft: "2px solid var(--color-primary)",
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          width: 40,
          height: 40,
          borderBottom: "2px solid var(--color-primary)",
          borderRight: "2px solid var(--color-primary)",
          opacity: 0.3,
        }}
      />
    </div>
  );
}
