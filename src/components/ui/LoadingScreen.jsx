import React, { useState, useEffect } from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo } from "../../data/portfolio";

function TypewriterText({ text, startDelay = 0, speed = 30, cursorBlinkDuration = 2000 }) {
  const [display, setDisplay] = useState("");
  const [showCursor, setShowCursor] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let timeoutId;
    let typeInterval;
    
    timeoutId = setTimeout(() => {
      setShowCursor(true);
      let i = 0;
      typeInterval = setInterval(() => {
        setDisplay(text.substring(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(typeInterval);
          setDoneTyping(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(typeInterval);
    };
  }, [text, startDelay, speed]);

  useEffect(() => {
    if (doneTyping) {
      const timeout = setTimeout(() => {
        setShowCursor(false);
      }, cursorBlinkDuration);
      return () => clearTimeout(timeout);
    }
  }, [doneTyping, cursorBlinkDuration]);

  return (
    <span>
      {display}
      <span 
        style={{ 
          opacity: showCursor ? 1 : 0, 
          animation: showCursor && doneTyping ? "cursorBlink 0.5s infinite alternate" : "none",
          marginLeft: '4px',
          display: 'inline-block',
          width: '8px',
          height: '1.2em',
          backgroundColor: '#ffffff',
          verticalAlign: 'bottom'
        }} 
      />
      <style>{`
        @keyframes cursorBlink {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </span>
  );
}

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

  useEffect(() => {
    setShowName(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => setFadeOut(true), 200);
      setTimeout(() => onComplete(), 1000); // Faster fadeout
    }
  }, [isLoaded, onComplete]);

  return (
    <div
      className="loading-screen"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.8s ease",
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
            transform: showName ? 'translateY(0)' : 'translateY(10px)',
            transition: 'all 0.8s ease-out'
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
            fontWeight: 300
          }}
        >
          <TypewriterText text={personalInfo.tagline} startDelay={400} speed={25} cursorBlinkDuration={1000} />
        </div>
      </div>
    </div>
  );
}
