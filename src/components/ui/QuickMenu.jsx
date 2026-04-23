import React, { useState } from "react";
import useGameStore from "../../store/gameStore";
import { personalInfo } from "../../data/portfolio";

export default function QuickMenu() {
  const { teleportTo, setActivePanel, activePanel } = useGameStore();
  const [expanded, setExpanded] = useState(true);

  const menuItems = [
    {
      label: "About",
      action: () => teleportTo("about"),
      icon: "👤",
      color: "#00cec9",
    },
    {
      label: "Projects",
      action: () => teleportTo("projects"),
      icon: "🚀",
      color: "#fd79a8",
    },
    {
      label: "Skills",
      action: () => teleportTo("skills"),
      icon: "⚡",
      color: "#0984e3",
    },
    {
      label: "Contact",
      action: () => setActivePanel("contact"),
      icon: "📡",
      color: "#6c5ce7",
    },
  ];

  const quickActions = [
    {
      label: "Skip to Projects",
      action: () => {
        teleportTo("projects");
        setTimeout(() => setActivePanel("projects"), 800);
      },
      highlight: true,
    },
    {
      label: "Download Resume",
      action: () => window.open(personalInfo.resumeUrl, "_blank"),
      highlight: false,
    },
  ];

  return (
    <div className="quick-menu">
      {/* Toggle button */}
      <button
        className="quick-menu-btn"
        onClick={() => setExpanded(!expanded)}
        style={{
          borderColor: "var(--color-accent)",
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
              className="quick-menu-btn"
              onClick={item.action}
              style={{
                borderColor: `${item.color}33`,
              }}
            >
              {item.icon} {item.label}
            </button>
          ))}

          {/* Separator */}
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
              margin: "4px 0",
            }}
          />

          {/* Quick actions */}
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="quick-menu-btn"
              onClick={action.action}
              style={{
                background: action.highlight
                  ? "linear-gradient(135deg, rgba(108,92,231,0.3), rgba(0,206,201,0.2))"
                  : undefined,
                borderColor: action.highlight
                  ? "var(--color-accent)"
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
