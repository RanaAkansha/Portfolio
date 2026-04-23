import React, { useState, useEffect } from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo } from "../../data/portfolio";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";

function ScrambleText({ text, duration = 800, onComplete }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let frame = 0;
    const totalFrames = (duration / 1000) * 60; // ~60fps
    const textLen = text.length;
    
    let animationId;
    let lastTime = 0;

    const animate = (time) => {
      if (time - lastTime < 30) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;
      frame += 2;
      const progress = frame / totalFrames;
      
      if (progress >= 1) {
        setDisplay(text);
        if (onComplete) onComplete();
        return;
      }
      
      let newStr = "";
      for (let i = 0; i < textLen; i++) {
        if (text[i] === " ") {
          newStr += " ";
          continue;
        }
        const charProgress = i / textLen;
        if (progress > charProgress + 0.1) {
          newStr += text[i];
        } else {
          newStr += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      setDisplay(newStr);
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [text, duration, onComplete]);

  return <span>{display || text.replace(/./g, () => CHARS[Math.floor(Math.random() * CHARS.length)])}</span>;
}

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
          backgroundColor: 'var(--color-primary-light)',
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
          <ScrambleText text={personalInfo.name.toUpperCase()} duration={600} />
        </h1>
        <div
          className="font-display"
          style={{
            fontSize: 14,
            letterSpacing: 2,
            color: "var(--color-primary-light)",
            minHeight: "20px",
          }}
        >
          <TypewriterText text={personalInfo.tagline} startDelay={900} speed={30} cursorBlinkDuration={1500} />
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
