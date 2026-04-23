import React, { useState, useEffect } from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo } from "../../data/portfolio";

function LoadingSpinner({ progress }) {
  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: 60, height: 60, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="60" height="60" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
        {/* Track */}
        <circle 
          cx="30" cy="30" r={radius} 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="2" 
        />
        {/* Progress */}
        <circle 
          cx="30" cy="30" r={radius} 
          fill="none" 
          stroke="#ffffff" 
          strokeWidth="2" 
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
        />
      </svg>
      <span className="font-mono" style={{ fontSize: 10, color: '#ffffff', letterSpacing: 1, position: 'relative', top: 1, left: 1 }}>
        {progress}
      </span>
    </div>
  );
}

export default function LoadingScreen({ onComplete }) {
  const { loadingProgress, isLoaded } = useGameStore();
  const [fadeOut, setFadeOut] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Elegant staggered entrance
    setTimeout(() => setShowName(true), 100);
    setTimeout(() => setShowTagline(true), 300);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setFadeOut(true), 300); // Quick pause at 100%
      setTimeout(() => onComplete(), 1100); // 800ms fadeout duration
    }
  }, [isLoaded, onComplete]);

  return (
    <div
      className="loading-screen"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease-in-out",
        pointerEvents: fadeOut ? "none" : "auto",
        backgroundColor: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Sleek Progress Circle */}
      <div style={{ marginBottom: 40 }}>
        <LoadingSpinner progress={loadingProgress} />
      </div>

      {/* Logo / Title */}
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <h1
          className="font-display"
          style={{
            fontSize: "clamp(24px, 5vw, 48px)",
            color: "#ffffff",
            letterSpacing: 4,
            marginBottom: 16,
            fontWeight: 500,
            opacity: showName ? 1 : 0,
            transform: showName ? 'translateY(0)' : 'translateY(15px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {personalInfo.name.toUpperCase()}
        </h1>
        <div
          className="font-display"
          style={{
            fontSize: 14,
            letterSpacing: 2,
            color: "#a3a3a3",
            minHeight: "20px",
            fontWeight: 300,
            opacity: showTagline ? 1 : 0,
            transform: showTagline ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {personalInfo.tagline}
        </div>
      </div>
    </div>
  );
}
