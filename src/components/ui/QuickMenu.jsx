import React, { useState } from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo } from "../../data/portfolio";
import useSoundEffects from "../../hooks/useSoundEffects";

export default function QuickMenu() {
  const { teleportTo, setActivePanel } = useGameStore();
  const [expanded, setExpanded] = useState(true);
  const { playHover, playClick, playWarp } = useSoundEffects();

  const handleTeleport = (zone) => {
    playWarp();
    teleportTo(zone);
  };

  const handlePanel = (panel) => {
    playClick();
    setActivePanel(panel);
  };

  const menuItems = [
    {
      label: "About",
      action: () => handleTeleport("about"),
      icon: "👤",
      color: "#ffffff",
    },
    {
      label: "Experience",
      action: () => handleTeleport("experience"),
      icon: "★",
      color: "#ffffff",
    },
    {
      label: "Projects",
      action: () => handleTeleport("projects"),
      icon: "🚀",
      color: "#ffffff",
    },
    {
      label: "Skills",
      action: () => handleTeleport("skills"),
      icon: "⚡",
      color: "#ffffff",
    },
    {
      label: "Contact",
      action: () => handlePanel("contact"),
      icon: "📡",
      color: "#ffffff",
    },
  ];

  const quickActions = [
    {
      label: "Skip to Projects",
      action: () => {
        handleTeleport("projects");
        setTimeout(() => setActivePanel("projects"), 800);
      },
      highlight: true,
    },
    {
      label: "Download Resume",
      action: () => {
        playClick();
        window.open(personalInfo.resumeUrl, "_blank");
      },
      highlight: false,
    },
  ];

  return (
    <div className="quick-menu">
      {/* Toggle button */}
      <button
        className="menu-btn"
        onClick={() => { playClick(); setExpanded(!expanded); }}
        onMouseEnter={playHover}
        style={{
          borderColor: "rgba(255,255,255,0.2)",
          fontSize: 14,
          padding: "8px 16px",
        }}
      >
        {expanded ? "✕" : "☰"} MENU
      </button>

      {expanded && (
        <>
          {/* Navigation */}
          {menuItems.map((item) => (
            <button
              key={item.label}
              className="menu-btn"
              onClick={item.action}
              onMouseEnter={playHover}
              style={{
                borderColor: `rgba(255,255,255,0.1)`,
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}

          {/* Quick actions */}
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="menu-btn"
              onClick={action.action}
              onMouseEnter={playHover}
              style={{
                background: action.highlight
                  ? "rgba(255, 255, 255, 0.1)"
                  : undefined,
                borderColor: action.highlight
                  ? "#ffffff"
                  : undefined,
              }}
            >
              {action.label}
            </button>
          ))}
        </>
      )}
    </div>
  );
}
